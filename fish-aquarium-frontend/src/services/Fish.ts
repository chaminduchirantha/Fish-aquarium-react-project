import api from "./api"

export const createFish = async(data: any)=>{
     const res = await api.post("/fish/createfish", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
  return res.data
}

export const getAllFish = async (
  page: number,
  limit: number,
  category?: string
) => {
  let url = `/fish/all?page=${page}&limit=${limit}`;
  if (category && category !== "all") {
    url += `&category=${category}`;
  }
  const res = await api.get(url);
  return res.data;
};


export const updateFish = async (id: string, data: any) => {
  const res = await api.put(`/fish/updateFish/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return res.data;
};


export const deleteFish = async (id: string) => {
  const res = await api.delete(`/fish/deleteFish/${id}`);
  return res.data;
};