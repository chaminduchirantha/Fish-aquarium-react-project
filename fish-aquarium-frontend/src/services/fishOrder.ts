import api from "./api"

type OrderFishList = {
    email :string
    firstname : string 
    lastname : string
    address : string
    paymentmethod : string
    amount : string
    orderType :string
    orderDate : string
    fishname : string
    price : string
    qty : number
}

export const fishOrderSave = async (data: OrderFishList) => {
  const res = await api.post("/orders/createOrders", data)
  return res.data
}