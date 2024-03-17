import Link from "next/link"
import { getServerSession } from "next-auth"
import { options } from "../api/auth/[...nextauth]/options"
const Navbar = async () => {
  const session=await getServerSession(options)
  return (
    <div>
      <nav className="flex w-full justify-between items-center px-5 py-5 bg-black text-stone-50">
        <div className="text-xl shadow-md">My Work</div>
        
        <div>
            <Link href={"/"} className="text-lg hover:underline transition-all mx-3">Home</Link>
            <Link href={"/CreateUser"} className="text-lg hover:underline transition-all mx-3">Create User</Link>
            <Link href={"/ClientMember"} className="text-lg hover:underline transition-all mx-3">ClientMember</Link>
            <Link href={"/Member"} className="text-lg hover:underline transition-all mx-3">Member</Link>
            <Link href={"/Public"} className="text-lg hover:underline transition-all mx-3">Public</Link>
            {session?<Link href={"/api/auth/signout?callbackUrl=/"} className="text-lg hover:underline transition-all mx-3">Logout</Link>:
              <Link href={"/api/auth/signin"} className="text-lg hover:underline transition-all mx-3">Login</Link>
            }

        </div>
      </nav>
    </div>
  )
}

export default Navbar
