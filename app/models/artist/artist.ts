import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { identifierNumber } from "mobx-state-tree/dist/internal"

/**
 * Model description here for TypeScript hints.
 */
export const ArtistModel = types
  .model("Artist")
  .props({
    id: identifierNumber,
    name: types.optional(types.string, ""),
    headline: types.optional(types.string, ""),
    showDate: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    link: types.optional(types.string, ""),
    pricing: types.optional(types.number, 0),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type ArtistType = Instance<typeof ArtistModel>
export interface Artist extends ArtistType {}
type ArtistSnapshotType = SnapshotOut<typeof ArtistModel>
export interface ArtistSnapshot extends ArtistSnapshotType {}
export const createArtistDefaultModel = () => types.optional(ArtistModel, {})
