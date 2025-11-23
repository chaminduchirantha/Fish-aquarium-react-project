import api from "./api"

export const createFish = async(data: any)=>{
     const res = await api.post("/fish/createfish", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
  return res.data
}