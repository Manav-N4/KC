import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Search, Filter, Users, TrendingUp, BarChart3, Bell, Target, Sparkles, ArrowRight } from "lucide-react";
import { getSportIcon } from "./sports-config";

export function RecruiterDashboard() {
  const [selectedSport, setSelectedSport] = useState<string>("all");
  const [selectedAge, setSelectedAge] = useState<string>("all");
  const [selectedState, setSelectedState] = useState<string>("all");

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-athlete-saffron to-athlete-saffron-dark text-white p-4 pt-12">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h2>Recruiter Dashboard</h2>
            <p className="text-orange-100 text-sm">
              Discover talented athletes across India
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Search and Filter Section */}
        <Card className="shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Search className="w-5 h-5 text-athlete-saffron flex-shrink-0" />
              <span>Search Athletes</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search by name, school, or location..." 
                className="pl-10"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Select value={selectedSport} onValueChange={setSelectedSport}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Sport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sports</SelectItem>
                  <SelectItem value="cricket">Cricket</SelectItem>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="badminton">Badminton</SelectItem>
                  <SelectItem value="hockey">Hockey</SelectItem>
                  <SelectItem value="athletics">Athletics</SelectItem>
                  <SelectItem value="basketball">Basketball</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedAge} onValueChange={setSelectedAge}>
                <SelectTrigger>
                  <SelectValue placeholder="Age Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ages</SelectItem>
                  <SelectItem value="14-16">14-16 years</SelectItem>
                  <SelectItem value="17-18">17-18 years</SelectItem>
                  <SelectItem value="19+">19+ years</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger>
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                  <SelectItem value="west-bengal">West Bengal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-athlete-saffron text-white btn-hover-saffron transition-all duration-300 btn-responsive">
              <Filter className="w-4 h-4 mr-2" />
              Apply Filters
            </Button>
          </CardContent>
        </Card>

        {/* Empty State - No Athletes */}
        <Card className="shadow-sm">
          <CardContent className="text-center py-12">
            <div className="w-20 h-20 mx-auto bg-athlete-saffron-light rounded-full flex items-center justify-center mb-4">
              <Users className="w-10 h-10 text-athlete-saffron" />
            </div>
            <h3 className="text-lg mb-2">No Athletes Found</h3>
            <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
              There are currently no athletes with public profiles matching your search criteria. Try adjusting your filters or check back later as new athletes join the platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" className="hover-athlete-primary transition-all duration-300 btn-responsive">
                <Filter className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
              <Button className="bg-athlete-saffron text-white btn-hover-saffron transition-all duration-300 btn-responsive">
                <Bell className="w-4 h-4 mr-2" />
                Set Alert for New Athletes
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Stats - Empty State */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Card className="shadow-sm">
            <CardContent className="p-4 text-center">
              <BarChart3 className="w-8 h-8 mx-auto text-athlete-saffron mb-2" />
              <div className="text-2xl">0</div>
              <div className="text-xs text-gray-600">Total Athletes</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 mx-auto text-athlete-green mb-2" />
              <div className="text-2xl">0</div>
              <div className="text-xs text-gray-600">Shortlisted</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-4 text-center">
              <Target className="w-8 h-8 mx-auto text-athlete-navy mb-2" />
              <div className="text-2xl">0</div>
              <div className="text-xs text-gray-600">Contacted</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 mx-auto text-athlete-blue mb-2" />
              <div className="text-2xl">0</div>
              <div className="text-xs text-gray-600">This Week</div>
            </CardContent>
          </Card>
        </div>

        {/* Getting Started Guide */}
        <Card className="shadow-sm bg-gradient-to-br from-athlete-saffron-light to-white border-l-4 border-l-athlete-saffron">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-athlete-saffron flex-shrink-0" />
              <span>Getting Started</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 rounded-full bg-athlete-saffron text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                  1
                </div>
                <p>Set up your search filters to find athletes matching your criteria</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 rounded-full bg-athlete-saffron text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                  2
                </div>
                <p>Create alerts to get notified when new athletes join with public profiles</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 rounded-full bg-athlete-saffron text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                  3
                </div>
                <p>Review athlete profiles, achievements, and training history</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 rounded-full bg-athlete-saffron text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                  4
                </div>
                <p>Shortlist promising athletes and reach out through the platform</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips Card */}
        <Card className="shadow-sm border-l-4 border-l-athlete-green">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <Target className="w-5 h-5 text-athlete-green flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-sm mb-1">Pro Tip</h4>
                <p className="text-xs text-gray-600">
                  Athletes with verified profiles, high training streaks, and multiple achievements tend to be the most dedicated. Use filters to sort by performance metrics!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}