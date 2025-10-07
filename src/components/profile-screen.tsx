import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Settings,
  Edit,
  Trophy,
  Award,
  MapPin,
  Phone,
  Mail,
  Users,
  Star,
  Upload,
  CheckCircle,
  User,
  School,
  Briefcase,
  Target,
  LogOut,
} from "lucide-react";

interface ProfileScreenProps {
  userRole: "athlete" | "recruiter" | "school";
  onLogout: () => void;
}

export function ProfileScreen({
  userRole,
  onLogout,
}: ProfileScreenProps) {
  const [isEditing, setIsEditing] = useState(false);

  // Render different empty states based on role
  const renderAthleteProfile = () => (
    <div className="pb-20 bg-athlete-gray-light min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-athlete-saffron to-athlete-saffron-dark text-white p-4 pt-12">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h2>Your Profile</h2>
            <p className="text-orange-100 text-sm">
              Complete your profile to get started
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Profile Completion Card */}
        <Card className="border-l-4 border-l-athlete-saffron shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between flex-wrap gap-2">
              <span>Profile Completion</span>
              <span className="text-sm text-athlete-saffron">
                0% Complete
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-athlete-green transition-all duration-300"
                style={{ width: "0%" }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">
              A complete profile increases your visibility to
              recruiters and schools by 10x!
            </p>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-athlete-saffron flex-shrink-0" />
                <span>Personal Information</span>
              </div>
              <Button
                size="sm"
                className="bg-athlete-saffron text-white btn-hover-saffron"
              >
                <Edit className="w-4 h-4 mr-1" />
                Add Info
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Full Name *
              </label>
              <Input placeholder="Enter your full name" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">
                  Age *
                </label>
                <Input type="number" placeholder="Age" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-600">
                  Gender *
                </label>
                <Input placeholder="Gender" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Bio
              </label>
              <Textarea
                placeholder="Tell us about yourself..."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Sports Information */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-athlete-green flex-shrink-0" />
                <span>Sports Information</span>
              </div>
              <Button
                size="sm"
                className="bg-athlete-green text-white btn-hover-athlete"
              >
                <Edit className="w-4 h-4 mr-1" />
                Add Sport
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-8">
            <div className="w-16 h-16 mx-auto bg-athlete-green-light rounded-full flex items-center justify-center mb-3">
              <Trophy className="w-8 h-8 text-athlete-green" />
            </div>
            <h3 className="text-lg mb-2">Add Your Sports</h3>
            <p className="text-sm text-gray-600 mb-4">
              Select your primary and secondary sports to help
              recruiters find you
            </p>
          </CardContent>
        </Card>

        {/* School Information */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <School className="w-5 h-5 text-athlete-navy flex-shrink-0" />
                <span>School Information</span>
              </div>
              <Button
                size="sm"
                className="bg-athlete-navy text-white btn-hover-navy"
              >
                <Edit className="w-4 h-4 mr-1" />
                Add Info
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                School Name *
              </label>
              <Input placeholder="Enter your school name" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">
                  City *
                </label>
                <Input placeholder="City" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-600">
                  State *
                </label>
                <Input placeholder="State" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-athlete-blue flex-shrink-0" />
              <span>Contact Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Email
              </label>
              <Input
                type="email"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Phone Number
              </label>
              <Input type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-athlete-saffron flex-shrink-0" />
              <span>Achievements & Certificates</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-8">
            <div className="w-16 h-16 mx-auto bg-athlete-saffron-light rounded-full flex items-center justify-center mb-3">
              <Award className="w-8 h-8 text-athlete-saffron" />
            </div>
            <h3 className="text-lg mb-2">
              No Achievements Yet
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Upload certificates, awards, and competition
              results to showcase your accomplishments
            </p>
            <Button className="bg-athlete-saffron text-white btn-hover-saffron transition-all duration-300 btn-responsive">
              <Upload className="w-4 h-4 mr-2" />
              Upload Achievement
            </Button>
          </CardContent>
        </Card>

        {/* Save Button */}
        <Button className="w-full bg-athlete-green text-white btn-hover-athlete transition-all duration-300 btn-responsive">
          <CheckCircle className="w-4 h-4 mr-2" />
          Save Profile
        </Button>

        {/* Logout Button */}
        <Button
          onClick={onLogout}
          variant="outline"
          className="w-full border-red-500 text-red-500 hover:bg-red-50 transition-all duration-300 btn-responsive"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );

  const renderRecruiterProfile = () => (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-athlete-saffron to-athlete-saffron-dark text-white p-4 pt-12">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h2>Recruiter Profile</h2>
            <p className="text-orange-100 text-sm">
              Set up your recruiter profile
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Professional Information */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5 text-athlete-saffron flex-shrink-0" />
              <span>Professional Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Full Name *
              </label>
              <Input placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Company/Organization *
              </label>
              <Input placeholder="Company name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Job Title *
              </label>
              <Input placeholder="e.g., Talent Scout, Sports Recruiter" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Years of Experience
              </label>
              <Input type="number" placeholder="Years" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Bio
              </label>
              <Textarea
                placeholder="Tell us about your recruiting experience..."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Specialization */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-athlete-green flex-shrink-0" />
              <span>Sports Specialization</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-8">
            <div className="w-16 h-16 mx-auto bg-athlete-green-light rounded-full flex items-center justify-center mb-3">
              <Trophy className="w-8 h-8 text-athlete-green" />
            </div>
            <h3 className="text-lg mb-2">Select Your Sports</h3>
            <p className="text-sm text-gray-600 mb-4">
              Choose the sports you specialize in recruiting for
            </p>
            <Button className="bg-athlete-green text-white btn-hover-athlete">
              <Edit className="w-4 h-4 mr-2" />
              Add Specializations
            </Button>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-athlete-blue flex-shrink-0" />
              <span>Contact Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Business Email *
              </label>
              <Input
                type="email"
                placeholder="your.email@company.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Phone Number *
              </label>
              <Input type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Location
              </label>
              <Input placeholder="City, State" />
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <Button className="w-full bg-athlete-saffron text-white btn-hover-saffron transition-all duration-300 btn-responsive">
          <CheckCircle className="w-4 h-4 mr-2" />
          Save Profile
        </Button>

        {/* Logout Button */}
        <Button
          onClick={onLogout}
          variant="outline"
          className="w-full border-red-500 text-red-500 hover:bg-red-50 transition-all duration-300 btn-responsive"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );

  const renderSchoolProfile = () => (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-athlete-navy to-athlete-blue text-white p-4 pt-12">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <School className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h2>School Profile</h2>
            <p className="text-blue-100 text-sm">
              Set up your school information
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* School Information */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <School className="w-5 h-5 text-athlete-navy flex-shrink-0" />
              <span>School Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                School Name *
              </label>
              <Input placeholder="Enter school name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                School Type
              </label>
              <Input placeholder="e.g., CBSE, ICSE, State Board" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">
                  Established Year
                </label>
                <Input type="number" placeholder="Year" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-600">
                  Total Students
                </label>
                <Input type="number" placeholder="Number" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">
                  City *
                </label>
                <Input placeholder="City" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-600">
                  State *
                </label>
                <Input placeholder="State" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5 text-athlete-blue flex-shrink-0" />
              <span>Administrative Contact</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Principal/Administrator Name *
              </label>
              <Input placeholder="Full name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                School Email *
              </label>
              <Input
                type="email"
                placeholder="school@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Phone Number *
              </label>
              <Input type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>
          </CardContent>
        </Card>

        {/* Sports Facilities */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-athlete-green flex-shrink-0" />
              <span>Sports Facilities</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-8">
            <div className="w-16 h-16 mx-auto bg-athlete-green-light rounded-full flex items-center justify-center mb-3">
              <Trophy className="w-8 h-8 text-athlete-green" />
            </div>
            <h3 className="text-lg mb-2">
              Add Your Facilities
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              List the sports facilities and infrastructure
              available at your school
            </p>
            <Button className="bg-athlete-green text-white btn-hover-athlete">
              <Edit className="w-4 h-4 mr-2" />
              Add Facilities
            </Button>
          </CardContent>
        </Card>

        {/* Save Button */}
        <Button className="w-full bg-athlete-navy text-white btn-hover-navy transition-all duration-300 btn-responsive">
          <CheckCircle className="w-4 h-4 mr-2" />
          Save Profile
        </Button>

        {/* Logout Button */}
        <Button
          onClick={onLogout}
          variant="outline"
          className="w-full border-red-500 text-red-500 hover:bg-red-50 transition-all duration-300 btn-responsive"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );

  // Render based on user role
  if (userRole === "athlete") return renderAthleteProfile();
  if (userRole === "recruiter") return renderRecruiterProfile();
  if (userRole === "school") return renderSchoolProfile();

  return null;
}