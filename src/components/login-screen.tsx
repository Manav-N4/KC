import { Button } from "./ui/button";
import { User, Search, School } from "lucide-react";
import khelConnectLogo from 'figma:asset/99b1a20ef22c89c2f4abb1b7a124e267db9d2c4f.png';

interface LoginScreenProps {
  onRoleSelect: (role: "athlete" | "recruiter" | "school") => void;
}

export function LoginScreen({ onRoleSelect }: LoginScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-athlete-saffron-light via-athlete-white to-athlete-green-light flex flex-col justify-center p-4">
      <div className="w-full max-w-md mx-auto space-y-8">
        {/* Logo and Title */}
        <div className="text-center space-y-4">
          <div className="mx-auto mb-6 flex justify-center">
            <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-white">
              <img 
                src={khelConnectLogo} 
                alt="Khel Connect Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3 className="text-sm text-athlete-gray max-w-xs mx-auto text-[20px] font-bold">
            Sapne se Stadium tak
          </h3>
        </div>

        {/* Role Selection */}
        <div className="space-y-6">
          <h2 className="text-center text-gray-700">Select Your Profile Type</h2>
          
          <div className="space-y-4">
            <Button
              onClick={() => onRoleSelect("athlete")}
              className="w-full h-16 bg-athlete-saffron hover:bg-athlete-saffron-dark text-white rounded-xl shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center justify-between w-full px-4">
                <div className="flex items-center space-x-4">
                  <User className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-medium">Athlete</div>
                    <div className="text-sm text-orange-100">Showcase your skills & progress</div>
                  </div>
                </div>
              </div>
            </Button>

            <Button
              onClick={() => onRoleSelect("recruiter")}
              className="w-full h-16 bg-athlete-green hover:bg-athlete-green-dark text-white rounded-xl shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center justify-between w-full px-4">
                <div className="flex items-center space-x-4">
                  <Search className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-medium">Recruiter</div>
                    <div className="text-sm text-green-100">Discover and scout talent</div>
                  </div>
                </div>
              </div>
            </Button>

            <Button
              onClick={() => onRoleSelect("school")}
              className="w-full h-16 bg-athlete-navy hover:bg-blue-800 text-white rounded-xl shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center justify-between w-full px-4">
                <div className="flex items-center space-x-4">
                  <School className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-medium">School</div>
                    <div className="text-sm text-blue-100">Manage your student athletes</div>
                  </div>
                </div>
              </div>
            </Button>
          </div>
        </div>

        <div className="text-center pt-4">
          <p className="text-xs text-athlete-gray">
            Prototype Mode • No registration required
          </p>
        </div>
      </div>
    </div>
  );
}