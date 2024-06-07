import { VariantProps, cva } from "class-variance-authority";
import React from "react";

import { cn } from "utils";

const buttonVariants = cva("py-4 px-92px rounded-lg", {
  variants: {
    variant: {
      default:
        "text-midnight-grey-light bg-white text-midnight-grey border border-purple-gray hover:bg-pink-light hover:bg-opacity-10 focus:bg-pink-light focus:bg-opacity-25",
      dark: "text-white bg-midnight-purple hover:bg-midnight-grey-hover hover:bg-midnight-grey-hover focus:bg-midnight-grey-focus flex-grow xs:flex-grow-0",
    },
    hideMobile: {
      true: "hidden xs:block",
    },
  },
  defaultVariants: {
    variant: "default",
    hideMobile: false,
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", hideMobile, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className, hideMobile }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
