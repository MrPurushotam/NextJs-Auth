import Link from "next/link"

const Navbar = () => {
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
        </div>
      </nav>
    </div>
  )
}

export default Navbar
