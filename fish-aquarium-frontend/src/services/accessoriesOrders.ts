import api from "./api"

type OrderAccessoriesList = {
    email :string
    firstname : string 
    lastname : string
    address : string
    paymentmethod : string
    amount : string
    orderType :string
    orderDate : string
    itemname : string
    description : string
    price : string
    qty : number
}

export const accessoriesOrderSave = async (data: OrderAccessoriesList) => {
  const res = await api.post("/ordersAccess/createOrders", data)
  return res.data
}