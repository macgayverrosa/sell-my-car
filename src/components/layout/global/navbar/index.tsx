import NavBarLinks from "./components/navbar-links";
import { ArrowRight, FilePlus2 } from "lucide-react";
// import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import NavbarAuxBar from "./components/navbar-auxbar";
// import { currentUser } from "@clerk/nextjs/server";
import { IconsLogo } from "@/components/shared/icons/icons-logo";
import { Separator } from "@/components/ui/separator";
import DarkToggle from "@/components/shared/global/themes/dark-toggle";
import { LinkWrapper } from "@/components/shared/wrappers/link-wrapper";
import { MaxWidthWrapper } from "@/components/shared/wrappers/max-width-wrapper";

export const NavBar = async () => {
  // const user = await currentUser();
  const user = null;
  return (
    <>
      {/* <NavbarAuxBar /> */}
      <nav className="sticky z-[100] h-20 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all dark:bg-black/75 border-none">
        <MaxWidthWrapper>
          <div className="flex h-20 items-center justify-between">
            <IconsLogo.text />
            {/* <Logo.textLogo className="h-16" /> */}
            <div className="h-full flex items-center space-x-4">
              <NavBarLinks />
              <Separator
                orientation="vertical"
                className="data-[orientation=vertical]:h-8 mx-2"
              />
              <DarkToggle />

              {user ? (
                <>
                  {/* <SignOutButton> */}
                  <Button variant="ghost">Sign out</Button>
                  {/* </SignOutButton> */}

                  <LinkWrapper
                    href="/app/dashboard"
                    className="flex items-center gap-1"
                  >
                    Dashboard <ArrowRight className="ml-1.5 size-4" />
                  </LinkWrapper>
                </>
              ) : (
                <>
                  <LinkWrapper href="/sign-in" variant="ghost">
                    Sign in
                  </LinkWrapper>

                  <div className="h-8 w-px bg-gray-200" />

                  <LinkWrapper
                    href="/sign-up"
                    className="flex items-center gap-1.5"
                  >
                    Sign up <ArrowRight className="size-4" />
                  </LinkWrapper>
                </>
              )}
              <LinkWrapper
                href="/post/create"
                className="flex items-center gap-1.5"
              >
                Create a Post <FilePlus2 className="size-4" />
              </LinkWrapper>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};
