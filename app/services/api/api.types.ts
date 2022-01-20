import { GeneralApiProblem } from "./api-problem"
import { Character } from "../../models/character/character"
import { Interests } from "../../models/interests/interests"

export interface User {
  id: number
  name: string
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem

export type GetCharactersResult = { kind: "ok"; characters: Character[] } | GeneralApiProblem
export type GetCharacterResult = { kind: "ok"; character: Character } | GeneralApiProblem

export type GetInterestsResult = { kind: "ok"; interests: Interests[] } | GeneralApiProblem
export type GetInterestResult = { kind: "ok"; interest: Interests } | GeneralApiProblem
