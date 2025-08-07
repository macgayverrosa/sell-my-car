import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  // callbacks: {
    // async signIn({ user, account, profile }) {
    // async signIn({ user }) {
    //   if (user.email && user.email.endsWith("@juicebox.com.au")) {
    //     return true
    //   } else {
    //     return false
    //   }
    // },
  // },
})