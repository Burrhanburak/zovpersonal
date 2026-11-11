import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[rgb(28,39,6)]/25",
  {
    variants: {
      variant: {
        default:
          "bg-[rgb(28,39,6)] text-white shadow-sm hover:bg-[rgb(28,39,6)]/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-[rgb(28,39,6)]/20 bg-transparent text-[rgb(28,39,6)] shadow-xs hover:bg-[rgb(28,39,6)]/5",
        secondary:
          "bg-[#d5dec5] text-[rgb(28,39,6)] shadow-xs hover:bg-[#c8d4b4]",
        ghost:
          "hover:bg-[rgb(28,39,6)]/5 text-[rgb(28,39,6)]",
        link: "text-[rgb(28,39,6)] underline-offset-4 hover:underline rounded-none",
        light:
          "bg-white text-[rgb(28,39,6)] shadow-sm hover:bg-white/90",
        lightOutline:
          "border border-white/70 bg-transparent text-white hover:bg-white hover:text-[rgb(28,39,6)]",
      },
      size: {
        default: "h-10 px-5 py-2.5 has-[>svg]:px-4",
        sm: "h-9 rounded-lg gap-1.5 px-3.5 has-[>svg]:px-3",
        lg: "h-12 rounded-xl px-8 text-base has-[>svg]:px-6",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
