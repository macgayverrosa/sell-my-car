import { cn } from "@/lib/utils"

interface LoadingBarsProps {
  count?: number
  className?: string
  barClassName?: string
  size?: "sm" | "md" | "lg"
  color?: "default" | "primary" | "secondary"
}

export function LoadingBars({ count = 5, className, barClassName, size = "md", color = "primary" }: LoadingBarsProps) {
  // Generate an array of the specified count
  const bars = Array.from({ length: count }, (_, i) => i)

  // Size variants
  const sizeClasses = {
    sm: "h-4 gap-1",
    md: "h-8 gap-1.5",
    lg: "h-16 gap-2",
  }

  // Bar width and height based on size
  const barSizeClasses = {
    sm: "w-1",
    md: "w-1.5",
    lg: "w-2",
  }

  // Color variants
  const colorClasses = {
    default: "bg-foreground",
    primary: "bg-primary",
    secondary: "bg-secondary",
  }

  return (
    <div
      className={cn("flex items-end justify-center", sizeClasses[size], className)}
      role="status"
      aria-label="Loading"
    >
      {bars.map((i) => (
        <div
          key={i}
          className={cn(
            "animate-loading-bar rounded-full",
            barSizeClasses[size],
            colorClasses[color],
            barClassName,
            // Apply different animation delays to create a wave effect
            `animation-delay-${(i * 100) % 1000}ms`,
          )}
          style={{
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
      <span className="sr-only">Loading</span>
    </div>
  )
}
