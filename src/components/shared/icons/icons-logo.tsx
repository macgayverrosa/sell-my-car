import Link from "next/link";
import Image from "next/image";
import routes from "@/config/constants/routes";
import GlobalConfig from "@/config/constants/global-config";

type IconProps = React.HTMLAttributes<SVGElement>;

export const IconsLogo = {
  img: (props: IconProps) => (
    <Link
      href={routes.LANDING}
      className={`flex z-40 items-center ${props.className || ""}`}
    >
      <Image
        src="/logo.png"
        alt="TradesWise Logo"
        fill
        sizes="(max-width: 1200px) 100vw, 1200px"
        className={`object-contain relative h-full aspect-auto block dark:hidden ${
          props.className || ""
        }`}
        priority
      />

      <Image
        src="/logo-dark.jpg"
        alt="TradesWise Logo"
        fill
        sizes="(max-width: 1200px) 100vw, 1200px"
        className={`object-contain relative h-full aspect-auto hidden dark:block ${
          props.className || ""
        }`}
        priority
      />

      {/* <div className={`relative h-full w-auto aspect-auto hidden dark:block ${props.className || ""}`}>
        <Image src="/logo-dark.jpg" alt="logo" className="object-contain" />
      </div> */}

      {/* <Image
        src="/logo-dark.jpg"
        alt="logo"
        fill
        sizes="(max-width: 1200px) 100vw, 1200px"
        className={`object-contain relative h-full w-auto aspect-auto hidden dark:block ${
          props.className || ""
        }`}
        priority
        // width={props.className ? undefined : 1200}
      /> */}
    </Link>
  ),
  text: () => (
    <Link
      href={routes.LANDING}
      className="flex z-40 font-semibold text-2xl items-center dark:text-white h-full"
    >
      {/* <Image
        src="/placeholder.svg"
        alt="TradesWise Logo"
        width={1200}
        height={1200}
        className={`w-auto block dark:hidden ${props.className || ""}`}
      />
      <Image
        src="/placeholder.svg"
        alt="TradesWise Logo"
        width={1200}
        height={1200}
        className={`w-auto hidden dark:block ${props.className || ""}`}
      /> */}
      {GlobalConfig.APP_NAME_FIRST}
      <span className="text-primary font-light">{GlobalConfig.APP_NAME_LAST}</span>
    </Link>
  ),
  // textLogo: (props: IconProps) => (
  //   <Link
  //     href={routes.LANDING}
  //     className="flex z-40 font-semibold text-xl items-center dark:text-white h-full"
  //   >
  //     <Image
  //       src="/placeholder.svg"
  //       alt="TradesWise Logo"
  //       width={1200}
  //       height={1200}
  //       className={`w-auto block dark:hidden ${props.className || ""}`}
  //     />
  //     <Image
  //       src="/placeholder.svg"
  //       alt="TradesWise Logo"
  //       width={1200}
  //       height={1200}
  //       className={`w-auto hidden dark:block ${props.className || ""}`}
  //     />
  //   </Link>
  // ),

};
