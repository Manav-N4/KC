import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Upload, Award, Target, BarChart3, Trophy, Calendar, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { getSportIcon } from "./sports-config";

export function AthleteDashboard() {
  return (
    <div className="pb-20 bg-athlete-gray-light min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-athlete-saffron to-athlete-saffron-dark text-white p-4 pt-12">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h2>Welcome to KhelConnect!</h2>
            <p className="text-orange-100 text-sm">
              Let's get your profile started
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Onboarding Progress Card */}
        <Card className="border-l-4 border-l-athlete-saffron shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-athlete-saffron flex-shrink-0" />
              <span>Complete Your Profile</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Profile Completion</span>
                <span className="text-athlete-saffron">0%</span>
              </div>
              <Progress value={0} className="h-2 w-full" />
            </div>
            <p className="text-sm text-gray-600">
              Complete these steps to unlock all features and start connecting with recruiters and schools.
            </p>
          </CardContent>
        </Card>

        {/* Action Steps */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-athlete-green flex-shrink-0" />
              <span>Get Started Checklist</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* Step 1 */}
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 text-sm">
                1
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm">Complete Your Profile</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Add your personal details, sports, achievements, and contact information
                </p>
                <Button 
                  className="mt-2 bg-athlete-saffron text-white btn-hover-saffron transition-all duration-300 btn-responsive-sm"
                >
                  Go to Profile
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg opacity-60">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 text-sm">
                2
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm">Upload Your First Achievement</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Share certificates, awards, or competition results
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg opacity-60">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 text-sm">
                3
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm">Start Your First Training Module</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Begin learning and earning points for your streak
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-athlete-saffron flex-shrink-0" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-athlete-green text-white btn-hover-athlete transition-all duration-300 btn-responsive">
              <Upload className="w-4 h-4 mr-2 flex-shrink-0" />
              Upload Training Video
            </Button>
            <Button className="w-full bg-athlete-saffron text-white btn-hover-saffron transition-all duration-300 btn-responsive">
              <Award className="w-4 h-4 mr-2 flex-shrink-0" />
              Upload Achievement
            </Button>
          </CardContent>
        </Card>

        {/* Empty State - Training Streak */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-athlete-green flex-shrink-0" />
              <span>Training Streak</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-6">
            <div className="w-16 h-16 mx-auto bg-athlete-green-light rounded-full flex items-center justify-center mb-3">
              <Calendar className="w-8 h-8 text-athlete-green" />
            </div>
            <h3 className="text-lg mb-2">Start Your Training Journey</h3>
            <p className="text-sm text-gray-600 mb-4">
              Complete training modules daily to build your streak and earn points!
            </p>
            <Button className="bg-athlete-green text-white btn-hover-athlete transition-all duration-300 btn-responsive">
              Browse Training Modules
            </Button>
          </CardContent>
        </Card>

        {/* Empty State - Leaderboard */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-athlete-saffron flex-shrink-0" />
              <span>Leaderboard</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-6">
            <div className="w-16 h-16 mx-auto bg-athlete-saffron-light rounded-full flex items-center justify-center mb-3">
              <Trophy className="w-8 h-8 text-athlete-saffron" />
            </div>
            <h3 className="text-lg mb-2">Compete with Athletes</h3>
            <p className="text-sm text-gray-600 mb-4">
              Complete your profile and start training to appear on the leaderboard!
            </p>
            <Button variant="outline" className="hover-athlete-primary transition-all duration-300 btn-responsive">
              View Leaderboard
            </Button>
          </CardContent>
        </Card>

        {/* Feature Highlight */}
        <Card className="shadow-sm bg-gradient-to-br from-athlete-green-light to-white border-l-4 border-l-athlete-green">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-athlete-green flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-sm mb-1">Get Discovered!</h4>
                <p className="text-xs text-gray-600">
                  Complete your profile to get noticed by recruiters and schools across India. Upload achievements, maintain training streaks, and climb the leaderboard!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}