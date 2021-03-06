import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { InterestApi } from "../../services/api/interest-api"
import { InterestsModel } from "../interests/interests"

/**
 * Model description here for TypeScript hints.
 */

export const InterestsStoreModel = types
  .model("InterestsStore")
  .props({
    interests: types.optional(types.array(InterestsModel), []),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    saveInterests(IneterestsSnapshot) {
      self.interests.replace(IneterestsSnapshot)
    },
  }))
  .actions((self) => ({
    getInterests: async () => {
      const interestsApi = new InterestApi()
      const result = await interestsApi.getInterests()

      if (result.kind === "ok") {
        self.saveInterests(result.interests)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    },
  }))
  .actions((self) => ({
    submitInterests: async (uid) => {
      const interestsApi = new InterestApi()
      const filteredInterests = self.interests.filter((interest) => interest.selected !== false)
      const interests = filteredInterests.map((interest) => interest.name)
      const result = await interestsApi.submitInterest(interests, uid)

      if (result) {
        return interests
      }
    },
  }))

type InterestsStoreType = Instance<typeof InterestsStoreModel>
export interface InterestsStore extends InterestsStoreType {}
type InterestsStoreSnapshotType = SnapshotOut<typeof InterestsStoreModel>
export interface InterestsStoreSnapshot extends InterestsStoreSnapshotType {}
export const createInterestsStoreDefaultModel = () => types.optional(InterestsStoreModel, {})
