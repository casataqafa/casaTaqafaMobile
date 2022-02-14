import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ArtistModel } from "./../artist/artist"
import { language } from "../constants/language-constants"
/**
 * Model description here for TypeScript hints.
 */
export const EventModel = types
  .model("Event")
  .props({
    id: types.optional(types.string, ""),
    name: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    date: types.optional(types.string, ""),
    time: types.optional(types.string, ""),
    timestamp: types.optional(types.Date, 0),
    imageUri: types.optional(types.string, ""),
    language: types.optional(
      types.enumeration<language>([language.en, language.fr, language.ar]),
      language.fr,
    ),
    eventDetails: types.optional(types.array(ArtistModel), []),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type EventType = Instance<typeof EventModel>
export interface Event extends EventType {}
type EventSnapshotType = SnapshotOut<typeof EventModel>
export interface EventSnapshot extends EventSnapshotType {}
export const createEventDefaultModel = () => types.optional(EventModel, {})
