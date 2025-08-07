import FooterLogo from "./components/footer-logo";
import FooterBottom from "./components/footer-bottom";
import FooterColumns from "./components/footer-columns";
// import FooterSubscription from "./components/footer-subscription";
import { MaxWidthWrapper } from "@/components/shared/wrappers/max-width-wrapper";

export default function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <MaxWidthWrapper>
        {/* <FooterSubscription /> */}
        <div className="grid md:grid-cols-4 gap-8">
          <FooterLogo />
          <FooterColumns />
        </div>
        <FooterBottom />
      </MaxWidthWrapper>
    </footer>
  );
}
