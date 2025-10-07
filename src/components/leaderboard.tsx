import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Trophy, Filter, TrendingUp, Users, Sparkles } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { AthleteTabs, AthleteTabsList, AthleteTabsTrigger, AthleteTabsContent } from "./athlete-tabs";
import { SPORTS_LIST, getSportIcon } from "./sports-config";

interface LeaderboardProps {
  userRole: "athlete" | "recruiter" | "school";
}

export function Leaderboard({ userRole }: LeaderboardProps) {
  const [selectedSport, setSelectedSport] = useState("Overall");
  const [selectedRegion, setSelectedRegion] = useState("All India");
  const [selectedAge, setSelectedAge] = useState("All Ages");
  const [viewType, setViewType] = useState<"athlete" | "school">("athlete");

  return (
    <div className="pb-20 bg-athlete-gray-light min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-athlete-green to-athlete-green-dark text-white p-4 pt-12">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h2>Leaderboard</h2>
            <p className="text-green-100 text-sm">
              Top performers across India
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* View Type Toggle */}
        <AthleteTabs value={viewType} onValueChange={(value) => setViewType(value as "athlete" | "school")}>
          <AthleteTabsList className="grid w-full grid-cols-2">
            <AthleteTabsTrigger value="athlete" className="tabs-athlete-hover">
              <Users className="w-4 h-4 mr-2" />
              Athletes
            </AthleteTabsTrigger>
            <AthleteTabsTrigger value="school" className="tabs-school-hover">
              <Users className="w-4 h-4 mr-2" />
              Schools
            </AthleteTabsTrigger>
          </AthleteTabsList>

          <AthleteTabsContent value="athlete">
            {/* Filters */}
            <Card className="shadow-sm mb-4">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-athlete-green flex-shrink-0" />
                  <span>Filter Rankings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Select value={selectedSport} onValueChange={setSelectedSport}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Sport" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Overall">Overall (All Sports)</SelectItem>
                    {SPORTS_LIST.filter(s => s.id !== 'other').map((sport) => (
                      <SelectItem key={sport.id} value={sport.name}>
                        {sport.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All India">All India</SelectItem>
                    <SelectItem value="North">North India</SelectItem>
                    <SelectItem value="South">South India</SelectItem>
                    <SelectItem value="East">East India</SelectItem>
                    <SelectItem value="West">West India</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedAge} onValueChange={setSelectedAge}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Age Group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Ages">All Ages</SelectItem>
                    <SelectItem value="Under 14">Under 14</SelectItem>
                    <SelectItem value="14-16">14-16 years</SelectItem>
                    <SelectItem value="17-18">17-18 years</SelectItem>
                    <SelectItem value="19+">19+ years</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Empty State */}
            <Card className="shadow-sm">
              <CardContent className="text-center py-12">
                <div className="w-20 h-20 mx-auto bg-athlete-green-light rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-10 h-10 text-athlete-green" />
                </div>
                <h3 className="text-lg mb-2">No Rankings Yet</h3>
                <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
                  {userRole === "athlete" 
                    ? "Start training and earning points to appear on the leaderboard! Complete your profile and training modules to begin your journey."
                    : "Athletes will appear here once they complete their profiles and start their training journey. Check back soon to discover talented athletes!"
                  }
                </p>
                {userRole === "athlete" && (
                  <Button className="bg-athlete-green text-white btn-hover-athlete transition-all duration-300 btn-responsive">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Start Training
                  </Button>
                )}
              </CardContent>
            </Card>
          </AthleteTabsContent>

          <AthleteTabsContent value="school">
            {/* School Leaderboard Filters */}
            <Card className="shadow-sm mb-4">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-athlete-navy flex-shrink-0" />
                  <span>Filter School Rankings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All India">All India</SelectItem>
                    <SelectItem value="North">North India</SelectItem>
                    <SelectItem value="South">South India</SelectItem>
                    <SelectItem value="East">East India</SelectItem>
                    <SelectItem value="West">West India</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedSport} onValueChange={setSelectedSport}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Sport" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Overall">Overall Performance</SelectItem>
                    {SPORTS_LIST.filter(s => s.id !== 'other').map((sport) => (
                      <SelectItem key={sport.id} value={sport.name}>
                        {sport.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Empty State */}
            <Card className="shadow-sm">
              <CardContent className="text-center py-12">
                <div className="w-20 h-20 mx-auto bg-athlete-navy-light rounded-full flex items-center justify-center mb-4">
                  <Users className="w-10 h-10 text-athlete-navy" />
                </div>
                <h3 className="text-lg mb-2">No School Rankings Yet</h3>
                <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
                  School rankings are based on the combined performance of their athletes. Schools will appear here once their athletes start training and earning points.
                </p>
              </CardContent>
            </Card>
          </AthleteTabsContent>
        </AthleteTabs>

        {/* Info Card */}
        <Card className="shadow-sm bg-gradient-to-br from-athlete-green-light to-white border-l-4 border-l-athlete-green">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-athlete-green flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-sm mb-1">How Rankings Work</h4>
                <p className="text-xs text-gray-600">
                  Rankings are based on training streaks, points earned from completed modules, achievements, and overall activity on the platform. Stay consistent to climb the leaderboard!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}