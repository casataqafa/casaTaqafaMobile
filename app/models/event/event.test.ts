import { EventModel } from "./event"

test("can be created", () => {
  const instance = EventModel.create({})

  expect(instance).toBeTruthy()
})
