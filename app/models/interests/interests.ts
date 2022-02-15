import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Interest to choose from after registration
 */
export const InterestsModel = types
  .model("Interests")
  .props({
    id: types.identifierNumber,
    name: types.string,
    selected: types.boolean,
    uri: types.string,
  })
  .actions((self) => ({
    toggleSelection: () => {
      self.selected = !self.selected
    },
  }))

type InterestsType = Instance<typeof InterestsModel>
export interface Interests extends InterestsType {}
type InterestsSnapshotType = SnapshotOut<typeof InterestsModel>
export interface InterestsSnapshot extends InterestsSnapshotType {}
export const createInterestsDefaultModel = () => types.optional(InterestsModel, {})
