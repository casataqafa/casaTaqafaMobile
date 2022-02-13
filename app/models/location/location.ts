import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const LocationModel = types
  .model("Location")
  .props({
    id: types.identifierNumber,
    name: types.optional(types.string, ""),
    time: types.optional(types.string, ""),
    phoneNumber: types.optional(types.number, 0),
    description: types.optional(types.string, ""),
    link: types.optional(types.string, ""),
    latitude: types.optional(types.number, 0),
    longitude: types.optional(types.number, 0),
    geoHash: types.optional(types.string, ""),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type LocationType = Instance<typeof LocationModel>
export interface Location extends LocationType {}
type LocationSnapshotType = SnapshotOut<typeof LocationModel>
export interface LocationSnapshot extends LocationSnapshotType {}
export const createLocationDefaultModel = () => types.optional(LocationModel, {})
