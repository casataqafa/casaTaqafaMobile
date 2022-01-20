import { InterestsStoreModel } from "./interests-store"

test("can be created", () => {
  const instance = InterestsStoreModel.create({})

  expect(instance).toBeTruthy()
})
