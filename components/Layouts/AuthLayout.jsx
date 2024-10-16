import { redirect } from "next/navigation"
import { cookies } from "next/headers"
//components
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"

<<<<<<< HEAD
export default function AuthLayout({children}) {
    return (
      <div className="h-screen w-full flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <main className="w-full flex-grow p-4">
            {children}
          </main>
        </div>
      </div>
    )
  } 
=======
function AuthLayout({ children }) {

  const token = cookies().get('token')
  if (!token) {
    redirect('/auth/login')
  }

  return (
    <div className="h-screen w-full flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="w-full flex-grow p-4">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AuthLayout
>>>>>>> e00f6fb26ef2fdacde949e2e60427b60674521eb
