import { createContext, useContext, useEffect, useState } from "react"
import { getMyDetails } from "../services/auth"

const AuthContext = createContext<any>(null)

export const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  // component eke lifecycle eka aduragnn use karanw
  useEffect(() => {
    const token = localStorage.getItem('accessToken')   // token ekk thiyed blnw
    if (token) {
      // fetch user details from API
      // setUser(userDetails)
      getMyDetails()
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => {
        setUser(null)   // token eka naththam hri expire welnm hri /me api call ek failnm hri userw null krnwa
        console.error('Failed to fetch user details', err)
      }).finally(() => {
        setLoading(false)
      })
    }else{
      setUser(null)
      setLoading(false)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
        {children}
    </AuthContext.Provider>
  )
}

// { user, setUser } mewidiytne api dunne e widiytm eliyt gnn puluwn eken
// mek custom hook ekak
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}