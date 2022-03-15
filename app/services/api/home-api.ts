import { getAuth } from "firebase/auth"
import { getFirestore, collection, query, where, getDocs, limit } from "firebase/firestore"
import { UserApi } from "./user-firestore-api"

export class HomeApi {
  firestore = getFirestore()

  async getLocations(language, uid): Promise<any> {
    try {
      // getting the user id
      const user = await new UserApi().checkIfUserExist(uid)

      const userInterests = user.interests

      const q = query(
        collection(this.firestore, "places"),
        where("language", "==", language),
        where("category", "in", userInterests),
        limit(5),
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

  async getEvents(language): Promise<any> {
    try {
      const today = new Date()
      const q = query(
        collection(this.firestore, "events"),
        where("language", "==", language),
        where("timestamp", ">", today),
        limit(5),
      )

      const events = []
      const querySnapshot = await getDocs(q)

      if (querySnapshot) {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          events.push(doc.data())
        })
      }

      return { kind: "ok", events }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
