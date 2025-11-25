import api from "./api"

type FeedbakData = {
  customername: string
  email: string
  ratings: number
  feedback: string
}

export const feedabckSave = async (data: FeedbakData) => {
  const res = await api.post("/feedback/create", data)
  return res.data
}
