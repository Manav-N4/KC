import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Play, ArrowLeft, BarChart3, Trophy, Sparkles, Target } from "lucide-react";
import { getSportIcon, getSportName, SPORTS_LIST } from "./sports-config";

export function TrainingModules() {
  const [selectedSport, setSelectedSport] = useState<string | null>(null);

  // Sports data with proper sport icons
  const sports = useMemo(() => 
    SPORTS_LIST.filter(s => s.id !== 'other').map(sport => ({
      id: sport.id,
      name: sport.name,
      icon: getSportIcon(sport.id),
      modules: 0,
      color: "bg-athlete-saffron"
    }))
  , []);

  if (selectedSport) {
    const selectedSportData = sports.find(s => s.id === selectedSport);
    const SportIcon = selectedSportData?.icon || Trophy;
    
    return (
      <div className="pb-20 bg-athlete-gray-light min-h-screen">
        {/* Header */}
        <div className="bg-gradient-to-r from-athlete-green to-athlete-green-dark text-white p-4 pt-12">
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white hover:bg-white/20 -ml-2"
              onClick={() => setSelectedSport(null)}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex-1 min-w-0">
              <h2>{selectedSportData?.name} Modules</h2>
              <p className="text-green-100 text-sm">
                Start your training journey
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* Empty State for Modules */}
          <Card className="shadow-sm">
            <CardContent className="text-center py-16">
              <div className="w-20 h-20 mx-auto bg-athlete-green-light rounded-full flex items-center justify-center mb-4">
                <SportIcon className="w-10 h-10 text-athlete-green" />
              </div>
              <h3 className="text-lg mb-2">No Modules Available Yet</h3>
              <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
                Training modules for {selectedSportData?.name} are coming soon! We're preparing comprehensive lessons to help you improve your skills.
              </p>
              <Button 
                variant="outline" 
                className="hover-athlete-primary transition-all duration-300 btn-responsive"
                onClick={() => setSelectedSport(null)}
              >
                Browse Other Sports
              </Button>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="shadow-sm bg-gradient-to-br from-athlete-green-light to-white border-l-4 border-l-athlete-green">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-athlete-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm mb-1">Coming Soon!</h4>
                  <p className="text-xs text-gray-600">
                    We're developing expert-led training modules covering technique, strategy, fitness, and mental preparation for all major sports.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20 bg-athlete-gray-light min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-athlete-green to-athlete-green-dark text-white p-4 pt-12">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Play className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h2>Training Modules</h2>
            <p className="text-green-100 text-sm">
              Learn and improve your skills
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Overview Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="shadow-sm">
            <CardContent className="p-4 text-center">
              <BarChart3 className="w-8 h-8 mx-auto text-athlete-green mb-2" />
              <div className="text-2xl">0</div>
              <div className="text-xs text-gray-600">Completed</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-4 text-center">
              <Trophy className="w-8 h-8 mx-auto text-athlete-saffron mb-2" />
              <div className="text-2xl">0</div>
              <div className="text-xs text-gray-600">Points</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-4 text-center">
              <Target className="w-8 h-8 mx-auto text-athlete-navy mb-2" />
              <div className="text-2xl">0</div>
              <div className="text-xs text-gray-600">In Progress</div>
            </CardContent>
          </Card>
        </div>

        {/* Select Your Sport */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-athlete-green flex-shrink-0" />
              <span>Select Your Sport</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {sports.map((sport) => {
                const SportIcon = sport.icon;
                return (
                  <button
                    key={sport.id}
                    onClick={() => setSelectedSport(sport.id)}
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg border-2 border-transparent hover:border-athlete-green hover:bg-athlete-green-light transition-all duration-200 cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm">
                      <SportIcon className="w-6 h-6 text-athlete-green" />
                    </div>
                    <span className="text-sm text-center">{sport.name}</span>
                    <Badge variant="outline" className="mt-2 text-xs border-gray-300">
                      {sport.modules} modules
                    </Badge>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Get Started Guide */}
        <Card className="shadow-sm bg-gradient-to-br from-athlete-green-light to-white border-l-4 border-l-athlete-green">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-athlete-green flex-shrink-0" />
              <span>How Training Works</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 rounded-full bg-athlete-green text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                  1
                </div>
                <p>Select your sport to view available training modules</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 rounded-full bg-athlete-green text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                  2
                </div>
                <p>Complete modules to earn points and improve your ranking</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 rounded-full bg-athlete-green text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                  3
                </div>
                <p>Build training streaks by completing modules daily</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 rounded-full bg-athlete-green text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                  4
                </div>
                <p>Track your progress and unlock advanced modules</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Coming Soon Notice */}
        <Card className="shadow-sm border-l-4 border-l-athlete-saffron">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Target className="w-5 h-5 text-athlete-saffron flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-sm mb-1">Training Modules Coming Soon!</h4>
                <p className="text-xs text-gray-600">
                  We're preparing comprehensive training modules for all sports. Each module will include video lessons, practice exercises, and skill assessments to help you excel.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}