import { auth } from "@/auth";
import Footer from "@/components/layout/global/footer";
import { NavBar } from "@/components/layout/global/navbar";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/sign-in");
  }
  return (
    <>
      <NavBar />
      <main className="flex-1 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
