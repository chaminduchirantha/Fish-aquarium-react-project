import api from "./api"

export const createCustomizedAquarium = async(data: any)=>{
     const res = await api.post("/aquarium/create", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
  return res.data
}