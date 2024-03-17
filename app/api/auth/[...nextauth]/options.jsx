import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "@/app/(models)/User"
import bcrypt from "bcrypt"
export const options={
    providers:[
        GithubProvider({
            profile(profile){
                console.log("Profile",profile)
                let userRole="Github User"
                if(profile?.email==="purupurushotamjeswani2004@gmail.com"){
                    userRole="Admin"
                }
                return {
                    ...profile,
                    role:userRole,
                    imageUrl:profile?.avatar_url
                };
            },
            clientId:process.env.GITHUB_CLIENTID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET
        }),
        GoogleProvider({
            profile(profile){
                console.log("Google profile ",profile)
                let userRole="Google User"
                return {
                    ...profile,
                    id:profile.sub,
                    role:userRole,
                    imageUrl:profile?.picture
                }
            },
            clientId:process.env.GOOGLE_CLIENTID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email:{
                    label:"Email",
                    type:"text",
                    placeholder:"Your email"
                },
                password:{
                    label:"Password",
                    type:"password",
                    placeholder:"You password"
                }
            },
            async authorize(credentials){
                try {
                    const foundUser= await User.findOne({email:credentials.email}).lean().exec()
                    if(foundUser){
                        console.log("User exists")
                        const match=await bcrypt.compare(credentials.password,foundUser.password)
                        if(match){
                            console.log("password matched")
                            delete foundUser.password
                            foundUser["role"]="Unverified Email"
                            return foundUser
                        }
                    }
                } catch (error) {
                    console.log("error",error.message)

                }
                return null;
            }
        })
    ],
    callbacks:{
        async jwt({token,user}){
            if(user) token.role=user.role
            return token 
        },
        async session({session,token}){
            if(session?.user) session.user.role=token.role
            return session
        }
    }
}