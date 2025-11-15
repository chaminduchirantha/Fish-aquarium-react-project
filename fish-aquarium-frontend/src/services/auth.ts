import api from "./api"

type RegisterDataType = {
  firstname: string
  lastname: string
  email: string
  password: string
  role: string
}
export const register = async (data: RegisterDataType) => {
  const res = await api.post("/auth/register", data)
  return res.data
}


