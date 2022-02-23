import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"
import { UserApi } from "./user-firestore-api"

export class FavoriteScreenApi {
  firestore = getFirestore()

  async getFavorites(uid: string, language: string): Promise<any> {
    try {
      const userapi = new UserApi()
      const user = await userapi.checkIfUserExist(uid)

      const q = query(
        collection(this.firestore, "places"),
        where("language", "==", language),
        where("id", "in", user.favorites),
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

  async deleteFavorites(id: string, uid): Promise<any> {
    try {
      const userapi = new UserApi()
      const user = await userapi.updateFavorites(id, uid)

      return { kind: "ok", user }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
