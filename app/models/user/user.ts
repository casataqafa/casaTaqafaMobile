import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const UserModel = types
  .model("User")
  .props({
    uid: types.optional(types.string, ""),
    name: types.optional(types.string, ""),
    email: types.optional(types.string, ""),
    profilePicture: types.optional(types.string, ""),
    hasInterests: types.optional(types.boolean, false),
    isFirstTime: types.optional(types.boolean, true),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    toogleInterests: () => {
      self.hasInterests = !self.hasInterests
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type UserType = Instance<typeof UserModel>
export interface User extends UserType {}
type UserSnapshotType = SnapshotOut<typeof UserModel>
export interface UserSnapshot extends UserSnapshotType {}
export const createUserDefaultModel = () => types.optional(UserModel, {})
