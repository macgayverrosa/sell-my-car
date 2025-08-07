import Footer from "@/components/layout/global/footer";
import { NavBar } from "@/components/layout/global/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
