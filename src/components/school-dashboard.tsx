import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { School, Users, TrendingUp, Award, Upload, UserPlus, BarChart3, Target, Sparkles, Mail, Bell, Trophy } from "lucide-react";

export function SchoolDashboard() {
  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-athlete-navy to-athlete-blue text-white p-4 pt-12">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <School className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h2>School Dashboard</h2>
            <p className="text-blue-100 text-sm">
              Manage your athletes and sports programs
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Setup Progress Card */}
        <Card className="border-l-4 border-l-athlete-navy shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-athlete-navy flex-shrink-0" />
              <span>Setup Your Dashboard</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">School Setup</span>
                <span className="text-athlete-navy">0%</span>
              </div>
              <Progress value={0} className="h-2 w-full" />
            </div>
            <p className="text-sm text-gray-600">
              Complete these steps to start managing your school's athletic programs and tracking athlete performance.
            </p>
          </CardContent>
        </Card>

        {/* Quick Stats - Empty State */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Card className="shadow-sm">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 mx-auto text-athlete-navy mb-2" />
              <div className="text-2xl">0</div>
              <div className="text-xs text-gray-600">Total Athletes</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 mx-auto text-athlete-green mb-2" />
              <div className="text-2xl">0</div>
              <div className="text-xs text-gray-600">Active</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-4 text-center">
              <Trophy className="w-8 h-8 mx-auto text-athlete-saffron mb-2" />
              <div className="text-2xl">0</div>
              <div className="text-xs text-gray-600">Achievements</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-4 text-center">
              <BarChart3 className="w-8 h-8 mx-auto text-athlete-blue mb-2" />
              <div className="text-2xl">0</div>
              <div className="text-xs text-gray-600">Avg Points</div>
            </CardContent>
          </Card>
        </div>

        {/* Getting Started Steps */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-athlete-navy flex-shrink-0" />
              <span>Getting Started</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* Step 1 */}
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <div className="w-8 h-8 rounded-full bg-athlete-navy text-white flex items-center justify-center flex-shrink-0 text-sm">
                1
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm">Complete School Profile</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Add school details, sports facilities, and contact information
                </p>
                <Button 
                  className="mt-2 bg-athlete-navy text-white btn-hover-navy transition-all duration-300 btn-responsive-sm"
                >
                  Complete Profile
                </Button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg opacity-60">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 text-sm">
                2
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm">Invite Athletes to Join</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Send invitations to your school athletes to join KhelConnect
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg opacity-60">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 text-sm">
                3
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm">Start Tracking Performance</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Monitor athlete progress, achievements, and training
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Empty State - Athletes */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-athlete-navy flex-shrink-0" />
              <span>School Athletes</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-8">
            <div className="w-16 h-16 mx-auto bg-athlete-navy-light rounded-full flex items-center justify-center mb-3">
              <Users className="w-8 h-8 text-athlete-navy" />
            </div>
            <h3 className="text-lg mb-2">No Athletes Yet</h3>
            <p className="text-sm text-gray-600 mb-4 max-w-md mx-auto">
              Start building your school's athletic roster by inviting your athletes to join KhelConnect
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-athlete-navy text-white btn-hover-navy transition-all duration-300 btn-responsive">
                <UserPlus className="w-4 h-4 mr-2" />
                Invite Athletes
              </Button>
              <Button variant="outline" className="hover-athlete-navy transition-all duration-300 btn-responsive">
                <Mail className="w-4 h-4 mr-2" />
                Send Bulk Invites
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-athlete-navy flex-shrink-0" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-athlete-navy text-white btn-hover-navy transition-all duration-300 btn-responsive">
              <UserPlus className="w-4 h-4 mr-2 flex-shrink-0" />
              Add New Athlete
            </Button>
            <Button className="w-full bg-athlete-green text-white btn-hover-athlete transition-all duration-300 btn-responsive">
              <Upload className="w-4 h-4 mr-2 flex-shrink-0" />
              Upload Team Achievement
            </Button>
            <Button className="w-full bg-athlete-saffron text-white btn-hover-saffron transition-all duration-300 btn-responsive">
              <Award className="w-4 h-4 mr-2 flex-shrink-0" />
              Endorse Athlete
            </Button>
          </CardContent>
        </Card>

        {/* Feature Highlights */}
        <Card className="shadow-sm bg-gradient-to-br from-athlete-navy-light to-white border-l-4 border-l-athlete-navy">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-athlete-navy flex-shrink-0" />
              <span>Platform Features</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-start space-x-2">
              <div className="w-5 h-5 rounded-full bg-athlete-navy text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                ✓
              </div>
              <p className="text-gray-700">Track athlete progress and training streaks in real-time</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-5 h-5 rounded-full bg-athlete-navy text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                ✓
              </div>
              <p className="text-gray-700">Endorse athletes and verify their achievements</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-5 h-5 rounded-full bg-athlete-navy text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                ✓
              </div>
              <p className="text-gray-700">Connect with recruiters looking for talented athletes</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-5 h-5 rounded-full bg-athlete-navy text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                ✓
              </div>
              <p className="text-gray-700">Generate performance reports and analytics</p>
            </div>
          </CardContent>
        </Card>

        {/* Tips Card */}
        <Card className="shadow-sm border-l-4 border-l-athlete-green">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Bell className="w-5 h-5 text-athlete-green flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-sm mb-1">Stay Updated</h4>
                <p className="text-xs text-gray-600">
                  Enable notifications to get instant updates when your athletes achieve new milestones, complete training modules, or receive recognition from recruiters.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}