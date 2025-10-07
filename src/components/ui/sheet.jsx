import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "../../lib/utils";
export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;
export const SheetPortal = DialogPrimitive.Portal;

export const SheetOverlay = React.forwardRef(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out",
        className
      )}
      {...props}
    />
  )
);
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;

export const SheetContent = React.forwardRef(
  ({ side = "right", className, children, ...props }, ref) => {
    const sideClasses = {
      top: "inset-x-0 top-0 border-b",
      bottom: "inset-x-0 bottom-0 border-t",
      left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
      right: "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
    };

    return (
      <SheetPortal>
        <SheetOverlay />
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            "fixed z-50 bg-white shadow-lg p-6 transition-transform duration-300",
            sideClasses[side],
            className
          )}
          {...props}
        >
          {children}
        </DialogPrimitive.Content>
      </SheetPortal>
    );
  }
);
SheetContent.displayName = DialogPrimitive.Content.displayName;
