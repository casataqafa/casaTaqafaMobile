import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const EventModel = types
  .model("Event")
  .props({
    id: types.identifierNumber,
    name: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    date: types.optional(types.string, ""),
    time: types.optional(types.string, ""),
    latitude: types.optional(types.number, 0),
    longitude: types.optional(types.number, 0),
    geoHash: types.optional(types.string, ""),
    imageUri: types.optional(types.string, ""),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type EventType = Instance<typeof EventModel>
export interface Event extends EventType {}
type EventSnapshotType = SnapshotOut<typeof EventModel>
export interface EventSnapshot extends EventSnapshotType {}
export const createEventDefaultModel = () => types.optional(EventModel, {})
