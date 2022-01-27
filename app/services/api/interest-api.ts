const baseInterests = [
  { name: "Bibliothèque", id: 1, selected: false },
  { name: "Bon dessiné", id: 2, selected: false },
  { name: "Centre culturel", id: 3, selected: false },
  { name: "Cinéma", id: 4, selected: false },
  { name: "Cirque", id: 5, selected: false },
  { name: "Comédie club", id: 6, selected: false },
  { name: "Concert", id: 7, selected: false },
  { name: "Conference", id: 8, selected: false },
  { name: "Conservatoire", id: 9, selected: false },
  { name: "Ecole d’art", id: 10, selected: false },
  { name: "Exposition", id: 11, selected: false },
  { name: "Festival", id: 12, selected: false },
  { name: "Livre", id: 13, selected: false },
  { name: "Maison de jeune", id: 14, selected: false },
  { name: "Musée", id: 15, selected: false },
  { name: "Opéra", id: 16, selected: false },
  { name: "Patrimoine", id: 17, selected: false },
  { name: "Salon", id: 18, selected: false },
  { name: "Street art", id: 19, selected: false },
  { name: "Théâtre", id: 20, selected: false },
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
