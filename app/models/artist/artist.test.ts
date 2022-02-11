import { ArtistModel } from "./artist"

test("can be created", () => {
  const instance = ArtistModel.create({})

  expect(instance).toBeTruthy()
})
