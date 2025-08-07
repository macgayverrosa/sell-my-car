import { Metadata } from 'next'
import { NextRequest } from 'next/server'
import { twMerge } from "tailwind-merge"
import { clsx, type ClassValue } from "clsx"
import { GlobalConfig } from "@/config/constants/global-config"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSessionToken = (req: NextRequest): string | null => {
  try {
    // Try to get from cookie header first
    const cookieHeader = req.headers.get('cookie');
    if (cookieHeader) {
      const cookies = cookieHeader.split(';');
      const sessionCookie = cookies.find(cookie => cookie.trim().startsWith('session-token='));
        if (sessionCookie) {
        // Use array destructuring but ignore the first element
        const [, token] = sessionCookie.trim().split('=');
        if (token && token.length > 10) { // Basic validation
          return token;
        }
      }
    }
    
    // Try to get from NextRequest cookies object as fallback
    const token = req.cookies.get('session-token')?.value;
    return token || null;
  } catch (error) {
    console.error('Error extracting session token:', error);
    return null;
  }
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return formatter.format(price)
}

export function constructMetadata({
  title = GlobalConfig.APP_NAME,
  description = GlobalConfig.APP_DESCRIPTION,
  image = GlobalConfig.APP_LOGO,
  icons = GlobalConfig.APP_FAVICON,
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    icons,
    metadataBase: new URL('https://tradeswise.vercel.app/'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

export const formatName = (Name: string): string => {
  if (!Name) return "";
  const result = Name
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before uppercase letters in camelCase
    .toLowerCase();
  return result
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};