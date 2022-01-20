import { InterestsModel } from "./interests"

test("can be created", () => {
  const instance = InterestsModel.create({})

  expect(instance).toBeTruthy()
})
