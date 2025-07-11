import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const typographyVariants = cva("font-custom", {
  variants: {
    variant: {
      h1: "scroll-m-20 font-extrabold tracking-tight",
      h2: "scroll-m-20 border-b pb-2 font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 font-semibold tracking-tight",
      h4: "scroll-m-20 font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      lead: "text-muted-foreground",
      large: "font-semibold",
      small: "font-medium leading-none",
      muted: "text-muted-foreground",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold",
      list: "my-6 ml-6 list-disc [&>li]:mt-2",
    },
    size: {
      default: "",
      sm: "",
      lg: "",
    },
  },
  compoundVariants: [
    // h1 sizes
    { variant: "h1", size: "default", class: "text-4xl lg:text-5xl" },
    { variant: "h1", size: "sm", class: "text-3xl lg:text-4xl" },
    { variant: "h1", size: "lg", class: "text-5xl lg:text-6xl" },
    // h2 sizes
    { variant: "h2", size: "default", class: "text-3xl" },
    { variant: "h2", size: "sm", class: "text-2xl" },
    { variant: "h2", size: "lg", class: "text-4xl" },
    // h3 sizes
    { variant: "h3", size: "default", class: "text-2xl" },
    { variant: "h3", size: "sm", class: "text-xl" },
    { variant: "h3", size: "lg", class: "text-3xl" },
    // h4 sizes
    { variant: "h4", size: "default", class: "text-xl" },
    { variant: "h4", size: "sm", class: "text-lg" },
    { variant: "h4", size: "lg", class: "text-2xl" },
    // p sizes
    { variant: "p", size: "default", class: "text-base" },
    { variant: "p", size: "sm", class: "text-sm" },
    { variant: "p", size: "lg", class: "text-lg" },
    // lead sizes
    { variant: "lead", size: "default", class: "text-xl" },
    { variant: "lead", size: "sm", class: "text-lg" },
    { variant: "lead", size: "lg", class: "text-2xl" },
    // large sizes
    { variant: "large", size: "default", class: "text-lg" },
    { variant: "large", size: "sm", class: "text-base" },
    { variant: "large", size: "lg", class: "text-xl" },
    // small sizes
    { variant: "small", size: "default", class: "text-sm" },
    { variant: "small", size: "sm", class: "text-xs" },
    { variant: "small", size: "lg", class: "text-sm" },
    // muted sizes
    { variant: "muted", size: "default", class: "text-sm" },
    { variant: "muted", size: "sm", class: "text-xs" },
    { variant: "muted", size: "lg", class: "text-base" },
    // code sizes
    { variant: "code", size: "default", class: "text-sm" },
    { variant: "code", size: "sm", class: "text-xs" },
    { variant: "code", size: "lg", class: "text-base" },
  ],
  defaultVariants: {
    variant: "p",
    size: "default",
  },
})

// Element mapping for semantic HTML
const getDefaultElement = (variant: string | null | undefined) => {
  if (!variant) return "p"
  
  const elementMap = {
    h1: "h1",
    h2: "h2", 
    h3: "h3",
    h4: "h4",
    p: "p",
    lead: "p",
    large: "div",
    small: "small",
    muted: "p",
    blockquote: "blockquote",
    code: "code",
    list: "ul",
  } as const
  
  return elementMap[variant as keyof typeof elementMap] || "p"
}

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean
  as?: React.ElementType
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, size, asChild = false, as, ...props }, ref) => {
    const Comp = asChild ? Slot : (as || getDefaultElement(variant))

    return (
      <Comp
        className={cn(typographyVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Typography.displayName = "Typography"

export { Typography, typographyVariants } 