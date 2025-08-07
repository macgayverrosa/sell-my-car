import Link from "next/link";
import GlobalConfig from "@/config/constants/global-config";
import routes from "@/config/constants/routes";

export default function FooterBottom() {
  return (
    <div className="border-t mt-8 pt-6 flex flex-col text-muted-foreground md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <p>
        &copy; {new Date().getFullYear()} {GlobalConfig.APP_NAME}. All rights
        reserved.
      </p>
      <nav className="flex space-x-6">
        <Link href={routes.PRIVACY} className="hover:text-primary transition-colors">
          Privacy Policy
        </Link>
        <Link href={routes.TERMS} className="hover:text-primary transition-colors">
          Terms
        </Link>
      </nav>
    </div>
  );
}
