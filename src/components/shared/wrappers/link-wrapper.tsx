import Link from "next/link"
import { ReactNode } from "react"
import { ClassValue } from "clsx"
import { buttonVariants } from "@/components/ui/button"

interface LinkProps {
  href: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: ClassValue
  children: ReactNode
}

export const LinkWrapper = ({ ...props }: LinkProps) => {
  return (
    <Link
      href={props.href}
      className={buttonVariants({
        size: props.size,
        variant: props.variant,
        className: props.className,
      })}
    >
      {props.children}
    </Link>
  )
}
