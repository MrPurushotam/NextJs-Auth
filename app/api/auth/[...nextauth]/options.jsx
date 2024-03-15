import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"


export const options={
    provider:[
        GithubProvider:({
            profile(profile){
                console.log("Profile",profile)
                let userRole="Github User"
                if(profile?.email==="purupurushotamjeswani2004@gmail.com"){
                    userRole="Admin"
                }
                return {
                    ...profile,
                    role:userRole
                };
            }
        })
    ]
}