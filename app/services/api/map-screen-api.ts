import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"
import geohash from "ngeohash"

interface rangeType {
  lower
  upper
}

export class MapScreenApi {
  firestore = getFirestore()

  // Calculate the upper and lower boundary geohashes for
  // a given latitude, longitude, and distance in miles
  async getGeohashRange(
    latitude: number,
    longitude: number,
    distance: number, // miles
  ): Promise<rangeType> {
    const lat = 0.0144927536231884 // degrees latitude per mile
    const lon = 0.0181818181818182 // degrees longitude per mile

    const lowerLat = latitude - lat * distance
    const lowerLon = longitude - lon * distance

    const upperLat = latitude + lat * distance
    const upperLon = longitude + lon * distance

    const lower = geohash.encode(lowerLat, lowerLon)
    const upper = geohash.encode(upperLat, upperLon)

    return {
      lower,
      upper,
    }
  }

  async getLocations(position, language, category): Promise<any> {
    if (position === null) {
      return false
    }

    try {
      const { latitude, longitude } = position

      const range: rangeType = await this.getGeohashRange(latitude, longitude, 31)
      let q = null
      if (category === "All") {
        q = query(
          collection(this.firestore, "places"),
          where("language", "==", language),
          where("geoHash", ">=", range.lower),
          where("geoHash", "<=", range.upper),
        )
      } else {
        q = query(
          collection(this.firestore, "places"),
          where("language", "==", language),
          where("geoHash", ">=", range.lower),
          where("geoHash", "<=", range.upper),
          where("category", "==", category),
        )
      }

      const places = []
      const querySnapshot = await getDocs(q)

      if (querySnapshot) {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          places.push(doc.data())
        })
      }

      return { kind: "ok", places }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async searchLocations(searchValue, language): Promise<any> {
    try {
      const q = query(
        collection(this.firestore, "places"),
        where("language", "==", language),
        where("name", "==", searchValue),
      )

      const places = []
      const querySnapshot = await getDocs(q)
      if (querySnapshot) {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          places.push(doc.data())
        })
      }

      return { kind: "ok", places }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
