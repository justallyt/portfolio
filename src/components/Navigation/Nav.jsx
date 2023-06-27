import { useState } from "react"
import { sidebarContext } from "./context"
import Header from "./Header"
import Sidebar from "./Sidebar"
const Nav = () => {
    const [status, setStatus] = useState(false)
  return (
        <sidebarContext.Provider value={[status, setStatus]}>
                   <Header />
                   <Sidebar />
        </sidebarContext.Provider>
  )
}

export default Nav