import { Card, CardContent } from "./ui/card";
import { Bell, Sparkles, TrendingUp } from "lucide-react";

type UserRole = "athlete" | "recruiter" | "school";

interface NotificationFeedProps {
  userRole: UserRole;
}

export function NotificationFeed({ userRole }: NotificationFeedProps) {
  return (
    <div className="pb-20 bg-athlete-gray-light min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-athlete-blue to-athlete-navy text-white p-4 pt-12">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Bell className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h2>Notifications</h2>
            <p className="text-blue-100 text-sm">
              Stay updated with latest activities
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Empty State */}
        <Card className="shadow-sm">
          <CardContent className="text-center py-16">
            <div className="w-20 h-20 mx-auto bg-athlete-blue-light rounded-full flex items-center justify-center mb-4">
              <Bell className="w-10 h-10 text-athlete-blue" />
            </div>
            <h3 className="text-lg mb-2">No Notifications Yet</h3>
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              {userRole === "athlete" && 
                "You'll receive notifications about training updates, leaderboard changes, recruiter interests, and upcoming events."
              }
              {userRole === "recruiter" && 
                "You'll receive notifications when new athletes match your criteria, when athletes respond to your messages, and about platform updates."
              }
              {userRole === "school" && 
                "You'll receive notifications about your athletes' activities, achievements, performance updates, and platform announcements."
              }
            </p>
          </CardContent>
        </Card>

        {/* What to Expect Card */}
        <Card className="shadow-sm bg-gradient-to-br from-athlete-blue-light to-white border-l-4 border-l-athlete-blue">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-athlete-blue flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-sm mb-2">What You'll Get Notified About</h4>
                <div className="space-y-1 text-xs text-gray-600">
                  {userRole === "athlete" && (
                    <>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-athlete-blue"></div>
                        <span>New training modules and challenges</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-athlete-blue"></div>
                        <span>Leaderboard rank changes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-athlete-blue"></div>
                        <span>Recruiter profile views and messages</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-athlete-blue"></div>
                        <span>Tournament and trial opportunities</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-athlete-blue"></div>
                        <span>Streak milestones and achievements</span>
                      </div>
                    </>
                  )}
                  {userRole === "recruiter" && (
                    <>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-athlete-blue"></div>
                        <span>New athletes matching your criteria</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-athlete-blue"></div>
                        <span>Athlete profile updates</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-athlete-blue"></div>
                        <span>Messages from athletes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-athlete-blue"></div>
                        <span>Athlete achievement updates</span>
                      </div>
                    </>
                  )}
                  {userRole === "school" && (
                    <>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-athlete-blue"></div>
                        <span>New athlete registrations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-athlete-blue"></div>
                        <span>Athlete achievements and milestones</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-athlete-blue"></div>
                        <span>School ranking changes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-athlete-blue"></div>
                        <span>Recruiter interest in your athletes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-athlete-blue"></div>
                        <span>Platform updates and announcements</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips Card */}
        {userRole === "athlete" && (
          <Card className="shadow-sm border-l-4 border-l-athlete-green">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-5 h-5 text-athlete-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm mb-1">Tip: Stay Active!</h4>
                  <p className="text-xs text-gray-600">
                    Complete your profile and start training to receive personalized notifications about opportunities that match your sports and location.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}