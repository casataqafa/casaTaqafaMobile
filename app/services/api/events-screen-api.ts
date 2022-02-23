import { getFirestore, collection, query, where, getDocs, orderBy } from "firebase/firestore"

export class EventsScreenApi {
  firestore = getFirestore()

  async getEvents(type, language): Promise<any> {
    try {
      let q = null

      if (type === "All") {
        q = query(
          collection(this.firestore, "events"),
          orderBy("name"),
          where("language", "==", language),
        )
      } else if (type === "Paid") {
        q = query(
          collection(this.firestore, "events"),
          orderBy("price"),
          where("language", "==", language),
          where("price", "!=", 0),
        )
      } else {
        q = query(
          collection(this.firestore, "events"),
          orderBy("name"),
          where("language", "==", language),
          where("price", "==", 0),
        )
      }

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
