import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Bookmark } from "lucide-react";
import { MaxWidthWrapper } from "@/components/shared/wrappers/max-width-wrapper";

export default function NavBarMenu() {
  return (
    <div className="fixed top-16 w-full bg-primary/50 backdrop-blur-md z-50">
      <MaxWidthWrapper>
        <div className="container mx-auto py-1 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Button>
          </Link>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button variant="ghost" size="sm">
              <Bookmark className="h-4 w-4" />
              Save
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
