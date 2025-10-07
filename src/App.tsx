import { useState } from "react";
import { LoginScreen } from "./components/login-screen";
import { BottomNavigation } from "./components/bottom-navigation";
import { AthleteDashboard } from "./components/athlete-dashboard";
import { RecruiterDashboard } from "./components/recruiter-dashboard";
import { SchoolDashboard } from "./components/school-dashboard";
import { TrainingModules } from "./components/training-modules";
import { NotificationFeed } from "./components/notification-feed";
import { Leaderboard } from "./components/leaderboard";
import { ProfileScreen } from "./components/profile-screen";

type UserRole = "athlete" | "recruiter" | "school";

export default function App() {
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [activeTab, setActiveTab] = useState("home");

  const handleLogout = () => {
    setUserRole(null);
    setActiveTab("home");
  };

  // If user hasn't logged in yet, show login screen
  if (!userRole) {
    return <LoginScreen onRoleSelect={setUserRole} />;
  }

  // Render the appropriate screen based on active tab
  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        switch (userRole) {
          case "athlete":
            return <AthleteDashboard />;
          case "recruiter":
            return <RecruiterDashboard />;
          case "school":
            return <SchoolDashboard />;
          default:
            return <AthleteDashboard />;
        }
      case "modules":
        // Training modules are only available to athletes
        if (userRole === "athlete") {
          return <TrainingModules />;
        } else {
          // Redirect non-athletes to their respective dashboards
          switch (userRole) {
            case "recruiter":
              return <RecruiterDashboard />;
            case "school":
              return <SchoolDashboard />;
            default:
              return <AthleteDashboard />;
          }
        }
      case "leaderboard":
        return <Leaderboard userRole={userRole} />;
      case "notifications":
        return <NotificationFeed userRole={userRole} />;
      case "profile":
        return <ProfileScreen userRole={userRole} onLogout={handleLogout} />;
      default:
        return <AthleteDashboard />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative">
      {renderScreen()}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} userRole={userRole} />
    </div>
  );
}