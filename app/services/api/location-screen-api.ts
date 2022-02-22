import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"

export class LocationScreenApi {
  firestore = getFirestore()

  async getEvents(id): Promise<any> {
    try {
      const q = query(collection(this.firestore, "events"), where("placeId", "==", id))

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
