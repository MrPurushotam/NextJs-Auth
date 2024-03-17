"use client";
import {useSession} from "next-auth/react"
import Image from "next/image";
import { redirect } from "next/navigation";


const Member = () => {
  const {data:session}= useSession({
    required:true,
    onUnauthenticated(){
      redirect("/api/auth/signin?callbackUrl=/ClientMember");
    },
  })
  // console.log(session)
  const pfp=session?.user?.imageUrl ||"https://w0.peakpx.com/wallpaper/761/301/HD-wallpaper-jiraya-eye-orange-naruto-sad.jpg"
    return (
      <div>
          <h1 >Client Member Page</h1>
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
  