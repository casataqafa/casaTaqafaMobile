import { doc, getFirestore, updateDoc } from "firebase/firestore"

const baseInterests = [
  {
    name: "Bibliothèque",
    id: 1,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3390&q=80",
  },
  {
    name: "Bande dessiné",
    id: 2,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1535340582796-799448c62e08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  },
  {
    name: "Centre culturel",
    id: 3,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1594470490309-64a03ff626c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
  },
  {
    name: "Cinéma",
    id: 4,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1596445836561-991bcd39a86d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    name: "Cirque",
    id: 5,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1572252698222-3ce9dcc32888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    name: "Comédie club",
    id: 6,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1557619402-8b75ab9a429c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80",
  },
  {
    name: "Concert",
    id: 7,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80",
  },
  {
    name: "Conférence",
    id: 8,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2746&q=80",
  },
  {
    name: "Conservatoire",
    id: 9,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    name: "Ecole d’art",
    id: 10,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1528396518501-b53b655eb9b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    name: "Exposition",
    id: 11,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1566131929856-21b5077cd4fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    name: "Festival",
    id: 12,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1454908027598-28c44b1716c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
  {
    name: "Livre",
    id: 13,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
  },
  {
    name: "Maison de jeune",
    id: 14,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3010&q=80",
  },
  {
    name: "Musée",
    id: 15,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1565060169194-19fabf63012c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    name: "Opéra",
    id: 16,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1607998803461-4e9aef3be418?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    name: "Patrimoine",
    id: 17,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1549140600-78c9b8275e9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    name: "Salon",
    id: 18,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
  },
  {
    name: "Street art",
    id: 19,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2445&q=80",
  },
  {
    name: "Théâtre",
    id: 20,
    selected: false,
    uri:
      "https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80",
  },
]

export class InterestApi {
  firestore = getFirestore()

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

  async submitInterest(interests: Array<string>, uid: string): Promise<any> {
    try {
      const userRef = await doc(this.firestore, "user", uid)

      updateDoc(userRef, {
        interests: interests,
      })
      return true
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return false
    }
  }
}
