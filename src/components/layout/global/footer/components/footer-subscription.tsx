import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, Leaf, Star } from "lucide-react";

export default function FooterSubscription() {
  return (
    <div className="border-b border-teal-200">
      <div className="container px-4 py-8 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="flex justify-center space-x-2 mb-4">
            <Heart className="h-6 w-6 text-primary" />
            <Leaf className="h-6 w-6 text-teal-600" />
            <Star className="h-6 w-6 text-teal-600" />
          </div>
          <h3 className="text-2xl font-bold text-teal-800">
            Join Our Wellness Community
          </h3>
          <p className="text-teal-600 text-sm max-w-md mx-auto">
            Get weekly wellness tips, self-care advice, and exclusive offers
            delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white border-teal-200 focus:border-teal-400"
            />
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-teal-500">
            No spam, unsubscribe anytime. Read our{" "}
            <Link href="#" className="underline hover:text-teal-700">
              privacy policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
