import { getFirestore, setDoc, doc, getDoc, updateDoc } from "firebase/firestore"
import { User } from "../../models/user/user"

export class UserApi {
  firestore = getFirestore()
  async createUser(user: User): Promise<any> {
    try {
      await setDoc(doc(this.firestore, "user", user.uid), {
        uid: user.uid,
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture,
        interests: [],
        favorites: [],
      })
      return true
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async checkIfUserExist(uid): Promise<any> {
    try {
      const docRef = doc(this.firestore, "user", uid)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return docSnap.data()
      } else {
        return false
      }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async submitFavorites(newFavorite: string, uid: string): Promise<any> {
    try {
      const user = await this.checkIfUserExist(uid)

      const doesIncludeFav = user.favorites.includes(newFavorite)
      if (!doesIncludeFav) {
        const newFavorites = [...user.favorites, newFavorite]
        const userRef = await doc(this.firestore, "user", uid)

        updateDoc(userRef, {
          favorites: newFavorites,
        })
      }
      return true
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return false
    }
  }

  async updateFavorites(id: string, uid: string): Promise<any> {
    try {
      const user = await this.checkIfUserExist(uid)

      const userRef = await doc(this.firestore, "user", uid)

      updateDoc(userRef, {
        favorites: user.favorites.filter((fav) => {
          return fav !== id
        }),
      })

      return true
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return false
    }
  }
}
