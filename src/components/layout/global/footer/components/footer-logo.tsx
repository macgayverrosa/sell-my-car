import { Sparkles } from "lucide-react";
import GlobalConfig from "@/config/constants/global-config";
import SocialIcons from "@/components/shared/icons/icons-socials";

export default function FooterLogo() {
  return (
    <div className="md:col-span-1">
      <div className="flex items-center space-x-2 mb-4">
        <Sparkles className="h-8 w-8 text-primary" />
        <span className="text-2xl font-bold">{GlobalConfig.APP_NAME}</span>
      </div>
      <p className="text-muted-foreground mb-4">
        Your sanctuary for wellness and relaxation in the heart of the city.
      </p>
      <div className="flex gap-2 mt-10 text-muted-foreground">
        <SocialIcons hover="text-primary" />
      </div>
    </div>
  );
}
