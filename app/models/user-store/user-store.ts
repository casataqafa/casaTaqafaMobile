import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { UserApi } from "../../services/api/user-firestore-api"
import { UserModel } from "../user/user"

/**
 * Model description here for TypeScript hints.
 */
export const UserStoreModel = types
  .model("UserStore")
  .props({
    user: types.optional(UserModel, {}),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setUser(user) {
      self.user.email = user.email
      self.user.uid = user.uid
      self.user.name = user.name
      self.user.profilePicture = user.profilePicture
      self.user.hasInterests = user.hasInterests
      self.user.isFirstTime = user.isFirstTime
    },
  }))
  .actions((self) => ({
    logout() {
      self.user.email = ""
      self.user.uid = ""
      self.user.name = ""
      self.user.profilePicture = ""
      self.user.hasInterests = true
      self.user.isFirstTime = false
    },
  }))
  .actions(() => ({
    async setUserFireStore(user) {
      const userApi = new UserApi()
      await userApi.createUser(user)
    },
  }))
  .actions((self) => ({
    async doesUserExists(user) {
      const userApi = new UserApi()
      const userExists = await userApi.checkIfUserExist(user.uid)
      if (userExists === false) {
        self.setUserFireStore(user)
        return false
      } else {
        const userData = userExists
        return userData
      }
    },
  }))
  .actions(() => ({
    async getUser(uid: string) {
      const userApi = new UserApi()
      const userData = await userApi.checkIfUserExist(uid)
      return userData
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type UserStoreType = Instance<typeof UserStoreModel>
export interface UserStore extends UserStoreType {}
type UserStoreSnapshotType = SnapshotOut<typeof UserStoreModel>
export interface UserStoreSnapshot extends UserStoreSnapshotType {}
export const createUserStoreDefaultModel = () => types.optional(UserStoreModel, {})
