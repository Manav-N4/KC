import { Home, BookOpen, Trophy, Bell, User } from "lucide-react";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  userRole: "athlete" | "recruiter" | "school";
}

export function BottomNavigation({ activeTab, onTabChange, userRole }: BottomNavigationProps) {
  const allTabs = [
    { id: "home", label: "Home", icon: Home, roles: ["athlete", "recruiter", "school"] },
    { id: "modules", label: "Modules", icon: BookOpen, roles: ["athlete"] },
    { id: "leaderboard", label: "Leaderboard", icon: Trophy, roles: ["athlete", "recruiter", "school"] },
    { id: "notifications", label: "Notifications", icon: Bell, roles: ["athlete", "recruiter", "school"] },
    { id: "profile", label: "Profile", icon: User, roles: ["athlete", "recruiter", "school"] },
  ];

  const tabs = allTabs.filter(tab => tab.roles.includes(userRole));

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-1 safe-area-pb shadow-lg">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex flex-col items-center space-y-1 py-2 px-1 sm:px-2 rounded-lg transition-all duration-300 ease-in-out min-w-0 flex-1 ${
              activeTab === id
                ? userRole === "athlete"
                  ? "text-athlete-saffron bg-athlete-saffron-light shadow-md transform scale-105"
                  : userRole === "recruiter"
                  ? "text-athlete-green bg-athlete-green-light shadow-md transform scale-105"
                  : "text-athlete-navy bg-athlete-navy-light shadow-md transform scale-105"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:shadow-sm hover:transform hover:scale-105"
            }`}
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            <span className="text-xs leading-tight text-center w-full overflow-hidden text-ellipsis whitespace-nowrap">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}