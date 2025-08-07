import { Separator } from "@/components/ui/separator";
// import SiteFlags from "@/components/shared/icons/icons-flags";
import SocialIcons from "@/components/shared/icons/icons-socials";
import { MaxWidthWrapper } from "@/components/shared/wrappers/max-width-wrapper";
import IconsFlag2 from "@/components/shared/icons/icons-flags2";

export default function NavbarAuxBar() {
  return (
    <div className="w-full bg-primary">
      <MaxWidthWrapper>
        <div className="flex md:grid md:grid-cols-12 h-10 items-center justify-between border-none">
          <div className="hidden md:flex md:col-span-6 text-white">
            <SocialIcons hover="text-foreground" />
            {/* <div className="flex gap-2">

              <Link href="#" className="hover:">
                <Icons.facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-foreground">
                <Icons.instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-foreground">
                <Icons.linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-foreground">
                <Icons.twitter className="h-5 w-5" />
              </Link>
            </div> */}
          </div>
          <div className="flex items-center gap-x-2 ms-auto md:col-span-6 text-white text-sm">
            Placeholder 1

              <Separator
                orientation="vertical"
                className="data-[orientation=vertical]:h-6 mx-2"
              />


            {/* <SiteFlags /> */}
            <IconsFlag2 />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
