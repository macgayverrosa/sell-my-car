import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { SignIn } from "@/components/shared/auth/auth-components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BadgeCheck,
  Bell,
  ChevronDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import DarkToggle from "@/components/shared/global/themes/dark-toggle";

export default async function NavbarUser() {
  const session = await auth();
  if (!session?.user) return <SignIn />;

  return (
    <div className="hidden md:flex justify-center items-center col-span-6 gap-x-0">
      <div className="flex bg-black/80 p-2 rounded-full shadow-lg text-white">
        <DarkToggle />
        <Separator
          orientation="vertical"
          className="data-[orientation=vertical]:h-6 my-1.5"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} className="gap-1 rounded-full">
              {/* <div className="grid flex-1 text-right leading-tight text-muted-foreground text-xs">
                <span className="truncate text-sm">{session.user.name}</span>
                <span className="truncate">{session.user.email}</span>
              </div> */}
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage
                  src={session.user.image || ""}
                  alt={session.user.name || ""}
                />
                <AvatarFallback className="rounded-lg">JB</AvatarFallback>
              </Avatar>
              <ChevronDown className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={"bottom"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-full">
                  <AvatarImage
                    src={session.user.image || ""}
                    alt={session.user.name || ""}
                  />
                  <AvatarFallback className="rounded-lg">JB</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {session.user.name}
                  </span>
                  <span className="truncate text-xs">{session.user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <DropdownMenuItem asChild>
                <button
                  type="submit"
                  className="flex w-full cursor-pointer items-center"
                >
                  <LogOut />
                  <span>Sign Out</span>
                </button>
              </DropdownMenuItem>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
