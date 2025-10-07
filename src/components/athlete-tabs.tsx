import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { cn } from "./ui/utils";

type UserRole = "athlete" | "recruiter" | "school";

interface AthleteTabsProps {
  userRole?: UserRole;
  children: React.ReactNode;
  className?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

interface AthleteTabsListProps {
  userRole?: UserRole;
  children: React.ReactNode;
  className?: string;
  tabCount?: number;
}

interface AthleteTabsTriggerProps {
  userRole?: UserRole;
  children: React.ReactNode;
  className?: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function AthleteTabs({ 
  userRole = "athlete", 
  children, 
  className,
  ...props 
}: AthleteTabsProps) {
  return (
    <Tabs className={cn("w-full", className)} {...props}>
      {children}
    </Tabs>
  );
}

export function AthleteTabsList({ 
  userRole = "athlete", 
  children, 
  className,
  tabCount = 3 
}: AthleteTabsListProps) {
  return (
    <TabsList 
      className={cn(
        "h-auto min-h-[3rem] p-1 bg-white border border-gray-200 shadow-sm",
        "sm:h-12", // Fixed height only on larger screens
        className
      )}
      style={{ "--tabs-count": tabCount } as React.CSSProperties}
    >
      {children}
    </TabsList>
  );
}

export function AthleteTabsTrigger({ 
  userRole = "athlete", 
  children, 
  className,
  value,
  icon: Icon,
  ...props 
}: AthleteTabsTriggerProps) {
  const roleClasses = {
    athlete: {
      active: "data-[state=active]:bg-athlete-saffron data-[state=active]:text-white data-[state=active]:border-athlete-saffron",
      hover: "hover:bg-athlete-saffron-light hover:text-athlete-saffron-dark"
    },
    recruiter: {
      active: "data-[state=active]:bg-athlete-green data-[state=active]:text-white data-[state=active]:border-athlete-green",
      hover: "hover:bg-athlete-green-light hover:text-athlete-green-dark"
    },
    school: {
      active: "data-[state=active]:bg-athlete-navy data-[state=active]:text-white data-[state=active]:border-athlete-navy",
      hover: "hover:bg-athlete-navy-light hover:text-athlete-navy"
    }
  };

  const roleClass = roleClasses[userRole];

  return (
    <TabsTrigger
      value={value}
      className={cn(
        // Reset default active styles
        "data-[state=active]:bg-transparent data-[state=active]:text-inherit data-[state=active]:border-transparent",
        // Apply role-specific styles
        roleClass.active,
        roleClass.hover,
        // Enhanced responsive design - NO TRUNCATION, proper mobile handling
        "h-auto min-h-[2.5rem] px-3 py-2 font-medium rounded-md transition-all duration-300",
        "flex items-center justify-center gap-1.5",
        "border border-transparent hover:border-gray-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        userRole === "athlete" && "focus-visible:ring-athlete-saffron/50",
        userRole === "recruiter" && "focus-visible:ring-athlete-green/50", 
        userRole === "school" && "focus-visible:ring-athlete-navy/50",
        // Mobile: fit content with scrolling, Desktop: full width
        "flex-shrink-0 whitespace-nowrap sm:flex-1",
        "text-center leading-tight",
        "text-xs sm:text-sm",
        "min-w-fit sm:min-w-0",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-1.5">
        {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
        <span className="text-center leading-tight text-[11px]">
          {children}
        </span>
      </div>
    </TabsTrigger>
  );
}

export { TabsContent as AthleteTabsContent };