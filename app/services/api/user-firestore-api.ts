import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore"
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
}
