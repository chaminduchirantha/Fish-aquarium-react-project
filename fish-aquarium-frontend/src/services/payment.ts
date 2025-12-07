import api from "./api"

type paymentData = {
    email : string
    phonenumber : string
    cardHolderName : string
    cardNumber : string
    expireDate : string
    cvv : string
    paymentDate : string
}

export const paymentSave = async (data: paymentData) => {
  const res = await api.post("/payment/create", data)
  return res.data
}
