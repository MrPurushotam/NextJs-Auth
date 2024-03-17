import { getServerSession } from "next-auth"
import { options } from "../api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"
import Image from "next/image"

const Member = async () => {
  const session =await getServerSession(options)
  const pfp=session?.user?.imageUrl ||"https://w0.peakpx.com/wallpaper/761/301/HD-wallpaper-jiraya-eye-orange-naruto-sad.jpg"
  if(!session){
    redirect("/api/auth/signin?callbackUrl=/Member")
  }
  // console.log(session)
  return (
    <div>
        <h1 >Member Page</h1>    
        <div className="flex justify-center items-center flex-col">
          <h2>{session?.user?.email}</h2>  
          <h2>{session?.user?.name}</h2>
          <h2 className="font-bold underline">{session?.user?.role}</h2>
          {pfp &&<Image src={pfp} alt="profile" width={500} height={500} className="aspect-[3/2] bg-contain border-purple-600 border-2 shadow-md" />}
        </div>  
    </div>
  )
}

export default Member
