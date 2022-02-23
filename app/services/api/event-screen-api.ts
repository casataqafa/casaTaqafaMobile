import { getFirestore, getDoc, doc } from "firebase/firestore"

export class EventScreenApi {
  firestore = getFirestore()

  async getLocation(id): Promise<any> {
    try {
      const docRef = doc(this.firestore, "places", id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const place = docSnap.data()
        return { kind: "ok", place }
      } else {
        return false
      }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
