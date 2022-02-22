import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { EventModel } from "../event/event"
import { LocationModel } from "../location/location"

/**
 * Model description here for TypeScript hints.
 */
export const NavigationStoreModel = types
  .model("NavigationStore")
  .props({
    eventScreen: types.optional(EventModel, {}),
    locationScreen: types.optional(LocationModel, {}),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    async setEventScreen(eventScreen) {
      self.eventScreen.id = eventScreen.id
      self.eventScreen.name = eventScreen.name
      self.eventScreen.description = eventScreen.description
      self.eventScreen.date = eventScreen.date
      self.eventScreen.time = eventScreen.time
      self.eventScreen.photoUri = eventScreen.photoUri
      self.eventScreen.price = parseInt(eventScreen.price)
      self.eventScreen.link = eventScreen.link
      self.eventScreen.placeId = eventScreen.placeId
      self.eventScreen.language = eventScreen.language
      // self.eventScreen.eventDetails = eventScreen.eventDetails
      return true
    },
  }))
  .actions((self) => ({
    async setLocationScreen(locationScreen) {
      self.locationScreen.id = locationScreen.id
      self.locationScreen.name = locationScreen.name
      self.locationScreen.description = locationScreen.description
      self.locationScreen.phoneNumber = locationScreen.phoneNumber
      self.locationScreen.openingHours = locationScreen.openingHours
      self.locationScreen.photoUri = locationScreen.photoUri
      self.locationScreen.latitude = parseInt(locationScreen.latitude)
      self.locationScreen.longitude = parseInt(locationScreen.longitude)
      self.locationScreen.link = locationScreen.link
      self.locationScreen.category = locationScreen.category
      self.locationScreen.geoHash = locationScreen.geoHash
      self.locationScreen.language = locationScreen.language
      return true
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type NavigationStoreType = Instance<typeof NavigationStoreModel>
export interface NavigationStore extends NavigationStoreType {}
type NavigationStoreSnapshotType = SnapshotOut<typeof NavigationStoreModel>
export interface NavigationStoreSnapshot extends NavigationStoreSnapshotType {}
export const createNavigationStoreDefaultModel = () => types.optional(NavigationStoreModel, {})
