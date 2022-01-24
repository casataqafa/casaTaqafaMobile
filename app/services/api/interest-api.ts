const baseInterests = [
  { name: "Cinéma", id: 1, selected: false },
  { name: "Music", id: 2, selected: false },
  { name: "Opéra", id: 3, selected: false },
  { name: "Exposition", id: 4, selected: false },
]

export class InterestApi {
  //   private api: Api

  //   constructor(api: Api) {
  //     this.api = api
  //   }

  async getInterests(): Promise<any> {
    try {
      // make the api call
      //   const response: ApiResponse<any> = await this.api.apisauce.get(
      //     "https://raw.githubusercontent.com/infinitered/ignite/master/data/rick-and-morty.json",
      //   )

      const response = baseInterests

      // the typical ways to die when calling an api
      //   if (!response.ok) {
      //     const problem = getGeneralApiProblem(response)
      //     if (problem) return problem
      //   }

      // const characters = response.data.results

      const interests = response

      return { kind: "ok", interests }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
