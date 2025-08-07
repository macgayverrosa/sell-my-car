import Link from "next/link";
import { Icons } from "@/components/shared/icons/icons";
import GlobalConfig from "@/config/constants/global-config";

function SocialLink({
  href,
  icon,
  hover,
}: {
  href: string;
  icon: React.ReactNode;
  hover: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-colors hover:${hover}`}
    >
      {icon}
    </Link>
  );
}

export default function IconsSocials({ hover }: { hover: string }) {
  return (
    <div className="flex gap-2">
      {GlobalConfig.SOCIAL_Facebook && (
        <SocialLink
          href={GlobalConfig.SOCIAL_Facebook}
          icon={<Icons.facebook className="h-5 w-5" />}
          hover={hover}
        />
      )}
      {GlobalConfig.SOCIAL_Instagram && (
        <SocialLink
          href={GlobalConfig.SOCIAL_Instagram}
          icon={<Icons.instagram className="h-5 w-5" />}
          hover={hover}
        />
      )}
      {GlobalConfig.SOCIAL_Linkedin && (
        <SocialLink
          href={GlobalConfig.SOCIAL_Linkedin}
          icon={<Icons.linkedin className="h-5 w-5" />}
          hover={hover}
        />
      )}
      {GlobalConfig.SOCIAL_Twitter && (
        <SocialLink
          href={GlobalConfig.SOCIAL_Twitter}
          icon={<Icons.twitter className="h-5 w-5" />}
          hover={hover}
        />
      )}
    </div>
  );
}
