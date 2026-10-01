import { Slot } from "@radix-ui/react-slot"
import React from "react"

import { cn } from "@/lib/utils"

function Panel({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="panel"
      className={cn("relative z-1 bg-card", className)}
      {...props}
    >
      {props.children}
    </section>
  )
}

function PanelHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="panel-header"
      className={cn(
        "border-b border-line px-4 py-2 text-center has-data-[slot=panel-description]:*:data-[slot=panel-title]:border-b has-data-[slot=panel-description]:*:data-[slot=panel-title]:border-line sm:py-2.5",
        className
      )}
      {...props}
    />
  )
}

function PanelTitle({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"h2"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h2"

  return (
    <Comp
      data-slot="panel-title"
      className={cn(
        "text-center font-handwritten text-xl font-bold tracking-[0.15em] text-foreground uppercase sm:text-2xl md:text-[1.65rem]",
        className
      )}
      {...props}
    />
  )
}

function PanelTitleSup({ className, ...props }: React.ComponentProps<"sup">) {
  return (
    <sup
      className={cn(
        "top-[-0.6em] ml-1.5 font-sans text-xs font-semibold tracking-normal text-muted-foreground sm:text-sm",
        className
      )}
      {...props}
    />
  )
}

function PanelDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-description"
      className={cn(
        "py-4 text-base text-balance text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function PanelContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="panel-body" className={cn("p-4", className)} {...props} />
  )
}

export {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
}
