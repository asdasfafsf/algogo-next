import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "",
        outline: "border shadow-xs bg-background",
        secondary: "shadow-xs",
        ghost: "",
        link: "underline-offset-4 hover:underline",
      },
      color: {
        // Default semantic colors
        default: "",
        destructive: "",
        // Material Design Colors
        red: "",
        pink: "",
        purple: "",
        "deep-purple": "",
        indigo: "",
        blue: "",
        "light-blue": "",
        cyan: "",
        teal: "",
        green: "",
        "light-green": "",
        lime: "",
        yellow: "",
        amber: "",
        orange: "",
        "deep-orange": "",
        brown: "",
        "blue-gray": "",
        gray: "",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    compoundVariants: [
      // Default color variants
      {
        variant: "default",
        color: "default",
        className: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90"
      },
      {
        variant: "outline",
        color: "default",
        className: "hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
      },
      {
        variant: "secondary",
        color: "default",
        className: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      },
      {
        variant: "ghost",
        color: "default",
        className: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
      },
      
      // Destructive color variants
      {
        variant: "default",
        color: "destructive",
        className: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60"
      },
      {
        variant: "outline",
        color: "destructive",
        className: "border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-950/30 dark:hover:text-red-300"
      },
      {
        variant: "secondary",
        color: "destructive",
        className: "bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-950/30 dark:text-red-300 dark:hover:bg-red-950/50"
      },
      {
        variant: "ghost",
        color: "destructive",
        className: "text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-950/30 dark:hover:text-red-300"
      },

      // Red color variants
      {
        variant: "default",
        color: "red",
        className: "bg-red-500 text-white shadow-xs hover:bg-red-600 focus-visible:ring-red-300"
      },
      {
        variant: "outline",
        color: "red",
        className: "border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-950/30 dark:hover:text-red-300"
      },
      {
        variant: "secondary",
        color: "red",
        className: "bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-950/30 dark:text-red-300 dark:hover:bg-red-950/50"
      },
      {
        variant: "ghost",
        color: "red",
        className: "text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-950/30 dark:hover:text-red-300"
      },

      // Pink color variants
      {
        variant: "default",
        color: "pink",
        className: "bg-pink-500 text-white shadow-xs hover:bg-pink-600 focus-visible:ring-pink-300"
      },
      {
        variant: "outline",
        color: "pink",
        className: "border-pink-300 text-pink-600 hover:bg-pink-50 hover:text-pink-700 dark:border-pink-700 dark:text-pink-400 dark:hover:bg-pink-950/30 dark:hover:text-pink-300"
      },
      {
        variant: "secondary",
        color: "pink",
        className: "bg-pink-100 text-pink-700 hover:bg-pink-200 dark:bg-pink-950/30 dark:text-pink-300 dark:hover:bg-pink-950/50"
      },
      {
        variant: "ghost",
        color: "pink",
        className: "text-pink-600 hover:bg-pink-50 hover:text-pink-700 dark:text-pink-400 dark:hover:bg-pink-950/30 dark:hover:text-pink-300"
      },

      // Purple color variants
      {
        variant: "default",
        color: "purple",
        className: "bg-purple-500 text-white shadow-xs hover:bg-purple-600 focus-visible:ring-purple-300"
      },
      {
        variant: "outline",
        color: "purple",
        className: "border-purple-300 text-purple-600 hover:bg-purple-50 hover:text-purple-700 dark:border-purple-700 dark:text-purple-400 dark:hover:bg-purple-950/30 dark:hover:text-purple-300"
      },
      {
        variant: "secondary",
        color: "purple",
        className: "bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-950/30 dark:text-purple-300 dark:hover:bg-purple-950/50"
      },
      {
        variant: "ghost",
        color: "purple",
        className: "text-purple-600 hover:bg-purple-50 hover:text-purple-700 dark:text-purple-400 dark:hover:bg-purple-950/30 dark:hover:text-purple-300"
      },

      // Blue color variants
      {
        variant: "default",
        color: "blue",
        className: "bg-blue-500 text-white shadow-xs hover:bg-blue-600 focus-visible:ring-blue-300"
      },
      {
        variant: "outline",
        color: "blue",
        className: "border-blue-300 text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-950/30 dark:hover:text-blue-300"
      },
      {
        variant: "secondary",
        color: "blue",
        className: "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:hover:bg-blue-950/50"
      },
      {
        variant: "ghost",
        color: "blue",
        className: "text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-950/30 dark:hover:text-blue-300"
      },

      // Green color variants
      {
        variant: "default",
        color: "green",
        className: "bg-green-500 text-white shadow-xs hover:bg-green-600 focus-visible:ring-green-300"
      },
      {
        variant: "outline",
        color: "green",
        className: "border-green-300 text-green-600 hover:bg-green-50 hover:text-green-700 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-950/30 dark:hover:text-green-300"
      },
      {
        variant: "secondary",
        color: "green",
        className: "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-950/30 dark:text-green-300 dark:hover:bg-green-950/50"
      },
      {
        variant: "ghost",
        color: "green",
        className: "text-green-600 hover:bg-green-50 hover:text-green-700 dark:text-green-400 dark:hover:bg-green-950/30 dark:hover:text-green-300"
      },

      // Yellow color variants
      {
        variant: "default",
        color: "yellow",
        className: "bg-yellow-500 text-black shadow-xs hover:bg-yellow-600 focus-visible:ring-yellow-300"
      },
      {
        variant: "outline",
        color: "yellow",
        className: "border-yellow-300 text-yellow-700 hover:bg-yellow-50 hover:text-yellow-800 dark:border-yellow-700 dark:text-yellow-400 dark:hover:bg-yellow-950/30 dark:hover:text-yellow-300"
      },
      {
        variant: "secondary",
        color: "yellow",
        className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-950/30 dark:text-yellow-300 dark:hover:bg-yellow-950/50"
      },
      {
        variant: "ghost",
        color: "yellow",
        className: "text-yellow-700 hover:bg-yellow-50 hover:text-yellow-800 dark:text-yellow-400 dark:hover:bg-yellow-950/30 dark:hover:text-yellow-300"
      },

      // Orange color variants
      {
        variant: "default",
        color: "orange",
        className: "bg-orange-500 text-white shadow-xs hover:bg-orange-600 focus-visible:ring-orange-300"
      },
      {
        variant: "outline",
        color: "orange",
        className: "border-orange-300 text-orange-600 hover:bg-orange-50 hover:text-orange-700 dark:border-orange-700 dark:text-orange-400 dark:hover:bg-orange-950/30 dark:hover:text-orange-300"
      },
      {
        variant: "secondary",
        color: "orange",
        className: "bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-950/30 dark:text-orange-300 dark:hover:bg-orange-950/50"
      },
      {
        variant: "ghost",
        color: "orange",
        className: "text-orange-600 hover:bg-orange-50 hover:text-orange-700 dark:text-orange-400 dark:hover:bg-orange-950/30 dark:hover:text-orange-300"
      },

      // Indigo color variants
      {
        variant: "default",
        color: "indigo",
        className: "bg-indigo-500 text-white shadow-xs hover:bg-indigo-600 focus-visible:ring-indigo-300"
      },
      {
        variant: "outline",
        color: "indigo",
        className: "border-indigo-300 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 dark:border-indigo-700 dark:text-indigo-400 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-300"
      },
      {
        variant: "secondary",
        color: "indigo",
        className: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-950/30 dark:text-indigo-300 dark:hover:bg-indigo-950/50"
      },
      {
        variant: "ghost",
        color: "indigo",
        className: "text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 dark:text-indigo-400 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-300"
      },

      // Teal color variants
      {
        variant: "default",
        color: "teal",
        className: "bg-teal-500 text-white shadow-xs hover:bg-teal-600 focus-visible:ring-teal-300"
      },
      {
        variant: "outline",
        color: "teal",
        className: "border-teal-300 text-teal-600 hover:bg-teal-50 hover:text-teal-700 dark:border-teal-700 dark:text-teal-400 dark:hover:bg-teal-950/30 dark:hover:text-teal-300"
      },
      {
        variant: "secondary",
        color: "teal",
        className: "bg-teal-100 text-teal-700 hover:bg-teal-200 dark:bg-teal-950/30 dark:text-teal-300 dark:hover:bg-teal-950/50"
      },
      {
        variant: "ghost",
        color: "teal",
        className: "text-teal-600 hover:bg-teal-50 hover:text-teal-700 dark:text-teal-400 dark:hover:bg-teal-950/30 dark:hover:text-teal-300"
      },

      // Gray color variants
      {
        variant: "default",
        color: "gray",
        className: "bg-gray-500 text-white shadow-xs hover:bg-gray-600 focus-visible:ring-gray-300"
      },
      {
        variant: "outline",
        color: "gray",
        className: "border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-950/30 dark:hover:text-gray-300"
      },
      {
        variant: "secondary",
        color: "gray",
        className: "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-950/30 dark:text-gray-300 dark:hover:bg-gray-950/50"
      },
      {
        variant: "ghost",
        color: "gray",
        className: "text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-950/30 dark:hover:text-gray-300"
      },

      // Pink color variants
      {
        variant: "default",
        color: "pink",
        className: "bg-pink-500 text-white shadow-xs hover:bg-pink-600 focus-visible:ring-pink-300"
      },
      {
        variant: "outline",
        color: "pink",
        className: "border-pink-300 text-pink-600 hover:bg-pink-50 hover:text-pink-700 dark:border-pink-700 dark:text-pink-400 dark:hover:bg-pink-950/30 dark:hover:text-pink-300"
      },
      {
        variant: "secondary",
        color: "pink",
        className: "bg-pink-100 text-pink-700 hover:bg-pink-200 dark:bg-pink-950/30 dark:text-pink-300 dark:hover:bg-pink-950/50"
      },
      {
        variant: "ghost",
        color: "pink",
        className: "text-pink-600 hover:bg-pink-50 hover:text-pink-700 dark:text-pink-400 dark:hover:bg-pink-950/30 dark:hover:text-pink-300"
      },

      // Deep Purple color variants
      {
        variant: "default",
        color: "deep-purple",
        className: "bg-purple-700 text-white shadow-xs hover:bg-purple-800 focus-visible:ring-purple-300"
      },
      {
        variant: "outline",
        color: "deep-purple",
        className: "border-purple-600 text-purple-700 hover:bg-purple-50 hover:text-purple-800 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-950/30 dark:hover:text-purple-300"
      },
      {
        variant: "secondary",
        color: "deep-purple",
        className: "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-950/30 dark:text-purple-300 dark:hover:bg-purple-950/50"
      },
      {
        variant: "ghost",
        color: "deep-purple",
        className: "text-purple-700 hover:bg-purple-50 hover:text-purple-800 dark:text-purple-400 dark:hover:bg-purple-950/30 dark:hover:text-purple-300"
      },

      // Light Blue color variants
      {
        variant: "default",
        color: "light-blue",
        className: "bg-sky-500 text-white shadow-xs hover:bg-sky-600 focus-visible:ring-sky-300"
      },
      {
        variant: "outline",
        color: "light-blue",
        className: "border-sky-300 text-sky-600 hover:bg-sky-50 hover:text-sky-700 dark:border-sky-700 dark:text-sky-400 dark:hover:bg-sky-950/30 dark:hover:text-sky-300"
      },
      {
        variant: "secondary",
        color: "light-blue",
        className: "bg-sky-100 text-sky-700 hover:bg-sky-200 dark:bg-sky-950/30 dark:text-sky-300 dark:hover:bg-sky-950/50"
      },
      {
        variant: "ghost",
        color: "light-blue",
        className: "text-sky-600 hover:bg-sky-50 hover:text-sky-700 dark:text-sky-400 dark:hover:bg-sky-950/30 dark:hover:text-sky-300"
      },

      // Cyan color variants
      {
        variant: "default",
        color: "cyan",
        className: "bg-cyan-500 text-white shadow-xs hover:bg-cyan-600 focus-visible:ring-cyan-300"
      },
      {
        variant: "outline",
        color: "cyan",
        className: "border-cyan-300 text-cyan-600 hover:bg-cyan-50 hover:text-cyan-700 dark:border-cyan-700 dark:text-cyan-400 dark:hover:bg-cyan-950/30 dark:hover:text-cyan-300"
      },
      {
        variant: "secondary",
        color: "cyan",
        className: "bg-cyan-100 text-cyan-700 hover:bg-cyan-200 dark:bg-cyan-950/30 dark:text-cyan-300 dark:hover:bg-cyan-950/50"
      },
      {
        variant: "ghost",
        color: "cyan",
        className: "text-cyan-600 hover:bg-cyan-50 hover:text-cyan-700 dark:text-cyan-400 dark:hover:bg-cyan-950/30 dark:hover:text-cyan-300"
      },

      // Light Green color variants
      {
        variant: "default",
        color: "light-green",
        className: "bg-emerald-500 text-white shadow-xs hover:bg-emerald-600 focus-visible:ring-emerald-300"
      },
      {
        variant: "outline",
        color: "light-green",
        className: "border-emerald-300 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 dark:border-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-300"
      },
      {
        variant: "secondary",
        color: "light-green",
        className: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:hover:bg-emerald-950/50"
      },
      {
        variant: "ghost",
        color: "light-green",
        className: "text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-300"
      },

      // Lime color variants
      {
        variant: "default",
        color: "lime",
        className: "bg-lime-500 text-black shadow-xs hover:bg-lime-600 focus-visible:ring-lime-300"
      },
      {
        variant: "outline",
        color: "lime",
        className: "border-lime-300 text-lime-600 hover:bg-lime-50 hover:text-lime-700 dark:border-lime-700 dark:text-lime-400 dark:hover:bg-lime-950/30 dark:hover:text-lime-300"
      },
      {
        variant: "secondary",
        color: "lime",
        className: "bg-lime-100 text-lime-700 hover:bg-lime-200 dark:bg-lime-950/30 dark:text-lime-300 dark:hover:bg-lime-950/50"
      },
      {
        variant: "ghost",
        color: "lime",
        className: "text-lime-600 hover:bg-lime-50 hover:text-lime-700 dark:text-lime-400 dark:hover:bg-lime-950/30 dark:hover:text-lime-300"
      },

      // Amber color variants
      {
        variant: "default",
        color: "amber",
        className: "bg-amber-500 text-black shadow-xs hover:bg-amber-600 focus-visible:ring-amber-300"
      },
      {
        variant: "outline",
        color: "amber",
        className: "border-amber-300 text-amber-600 hover:bg-amber-50 hover:text-amber-700 dark:border-amber-700 dark:text-amber-400 dark:hover:bg-amber-950/30 dark:hover:text-amber-300"
      },
      {
        variant: "secondary",
        color: "amber",
        className: "bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:hover:bg-amber-950/50"
      },
      {
        variant: "ghost",
        color: "amber",
        className: "text-amber-600 hover:bg-amber-50 hover:text-amber-700 dark:text-amber-400 dark:hover:bg-amber-950/30 dark:hover:text-amber-300"
      },

      // Deep Orange color variants
      {
        variant: "default",
        color: "deep-orange",
        className: "bg-orange-700 text-white shadow-xs hover:bg-orange-800 focus-visible:ring-orange-300"
      },
      {
        variant: "outline",
        color: "deep-orange",
        className: "border-orange-600 text-orange-700 hover:bg-orange-50 hover:text-orange-800 dark:border-orange-600 dark:text-orange-400 dark:hover:bg-orange-950/30 dark:hover:text-orange-300"
      },
      {
        variant: "secondary",
        color: "deep-orange",
        className: "bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-950/30 dark:text-orange-300 dark:hover:bg-orange-950/50"
      },
      {
        variant: "ghost",
        color: "deep-orange",
        className: "text-orange-700 hover:bg-orange-50 hover:text-orange-800 dark:text-orange-400 dark:hover:bg-orange-950/30 dark:hover:text-orange-300"
      },

      // Brown color variants
      {
        variant: "default",
        color: "brown",
        className: "bg-amber-800 text-white shadow-xs hover:bg-amber-900 focus-visible:ring-amber-300"
      },
      {
        variant: "outline",
        color: "brown",
        className: "border-amber-700 text-amber-800 hover:bg-amber-50 hover:text-amber-900 dark:border-amber-600 dark:text-amber-400 dark:hover:bg-amber-950/30 dark:hover:text-amber-300"
      },
      {
        variant: "secondary",
        color: "brown",
        className: "bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:hover:bg-amber-950/50"
      },
      {
        variant: "ghost",
        color: "brown",
        className: "text-amber-800 hover:bg-amber-50 hover:text-amber-900 dark:text-amber-400 dark:hover:bg-amber-950/30 dark:hover:text-amber-300"
      },

      // Blue Gray color variants
      {
        variant: "default",
        color: "blue-gray",
        className: "bg-slate-500 text-white shadow-xs hover:bg-slate-600 focus-visible:ring-slate-300"
      },
      {
        variant: "outline",
        color: "blue-gray",
        className: "border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-slate-700 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-950/30 dark:hover:text-slate-300"
      },
      {
        variant: "secondary",
        color: "blue-gray",
        className: "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-950/30 dark:text-slate-300 dark:hover:bg-slate-950/50"
      },
      {
        variant: "ghost",
        color: "blue-gray",
        className: "text-slate-600 hover:bg-slate-50 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-950/30 dark:hover:text-slate-300"
      },



      // Link variant (color-independent)
      {
        variant: "link",
        className: "text-primary underline-offset-4 hover:underline"
      },
    ],
    defaultVariants: {
      variant: "default",
      color: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  color,
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
      className={cn(buttonVariants({ variant, color, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
