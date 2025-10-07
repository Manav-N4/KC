"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs@1.1.3";

import { cn } from "./utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-white border border-gray-200 text-muted-foreground w-full items-center justify-center rounded-lg p-1 shadow-sm",
        // Responsive layout: scroll on mobile, grid on larger screens
        "flex sm:grid overflow-x-auto scrollbar-hide",
        "sm:grid-cols-[repeat(var(--tabs-count,3),minmax(0,1fr))]", // Grid only on larger screens
        "gap-1", // Small gap between tabs for better visual separation
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // Base styles
        "inline-flex items-center justify-center gap-1.5 rounded-md border border-transparent",
        "font-medium transition-all duration-300 ease-in-out",
        "min-h-[2.5rem] px-3 py-2", // Increased padding for better spacing
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-athlete-green/50",
        "disabled:pointer-events-none disabled:opacity-50",
        
        // Icon styles
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:w-4 [&_svg]:h-4",
        
        // Default state with improved hover
        "text-gray-600 bg-transparent",
        "hover:text-gray-800 hover:bg-gray-50/80",
        
        // Active state with premium AthleteConnect theming
        "data-[state=active]:bg-athlete-green data-[state=active]:text-white data-[state=active]:shadow-md",
        "data-[state=active]:border-athlete-green data-[state=active]:transform data-[state=active]:scale-[1.02]",
        
        // Responsive layout: mobile gets flexible width, desktop gets flex-1
        "flex-shrink-0 whitespace-nowrap sm:flex-1",
        "text-center leading-tight",
        "text-xs sm:text-sm", // Responsive text sizing
        
        // Mobile: fit content, Desktop: full width
        "min-w-fit sm:min-w-0",
        
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
