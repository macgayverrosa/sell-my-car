import { auth } from "@/auth";
import { ArrowRight } from "lucide-react";
import NavbarUser from "./components/navbar-user";
import NavBarLinks from "./components/navbar-links";
import NavbarAuxBar from "./components/navbar-auxbar";
import { Separator } from "@/components/ui/separator";
import { IconsLogo } from "@/components/shared/icons/icons-logo";
import DarkToggle from "@/components/shared/global/themes/dark-toggle";
import { LinkWrapper } from "@/components/shared/wrappers/link-wrapper";
import { MaxWidthWrapper } from "@/components/shared/wrappers/max-width-wrapper";

export const NavBar = async () => {
  const session = await auth();

  return (
    <>
      <NavbarAuxBar />
      <nav className="sticky z-[100] h-20 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all dark:bg-black/75 border-none">
        <MaxWidthWrapper>
          <div className="flex h-20 items-center justify-between">
            <IconsLogo.text />
            <div className="h-full flex items-center space-x-4">
              <NavBarLinks />
              <Separator
                orientation="vertical"
                className="data-[orientation=vertical]:h-8 mx-2"
              />
              <DarkToggle />

              {session ? (
                <>
                  <LinkWrapper
                    href="/app/dashboard"
                    className="flex items-center gap-1"
                  >
                    Dashboard <ArrowRight className="ml-1.5 size-4" />
                  </LinkWrapper>

                  <NavbarUser />
                </>
              ) : (
                <LinkWrapper href="/app/sign-in" variant="ghost">
                  Sign in
                </LinkWrapper>
              )}
              <LinkWrapper
                href="/app/post/create"
                className="flex items-center gap-1.5"
              >
                Sell now
              </LinkWrapper>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};
