import { Users, Mail, Phone, Calendar, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export function TeamPage() {
  const teamMembers = [
    { id: 1, name: 'Alice Johnson', role: 'Senior Developer', email: 'alice@company.com', phone: '+1 555-0101', joinDate: 'Jan 2023', status: 'active', performance: 'excellent' },
    { id: 2, name: 'Bob Williams', role: 'Developer', email: 'bob@company.com', phone: '+1 555-0102', joinDate: 'Mar 2023', status: 'active', performance: 'good' },
    { id: 3, name: 'Charlie Brown', role: 'Junior Developer', email: 'charlie@company.com', phone: '+1 555-0103', joinDate: 'Jun 2023', status: 'active', performance: 'good' },
    { id: 4, name: 'Diana Prince', role: 'QA Engineer', email: 'diana@company.com', phone: '+1 555-0104', joinDate: 'Feb 2023', status: 'active', performance: 'excellent' },
    { id: 5, name: 'Ethan Hunt', role: 'DevOps Engineer', email: 'ethan@company.com', phone: '+1 555-0105', joinDate: 'Apr 2023', status: 'active', performance: 'good' },
    { id: 6, name: 'Fiona Green', role: 'UX Designer', email: 'fiona@company.com', phone: '+1 555-0106', joinDate: 'May 2023', status: 'on-leave', performance: 'excellent' },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Team</h1>
          <p className="text-gray-600">Manage and view your team members.</p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="w-5 h-5" />
                Team Size
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">12</p>
              <p className="text-sm text-gray-500 mt-1">Total members</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Active Members</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">11</p>
              <p className="text-sm text-gray-500 mt-1">Currently working</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Avg Performance</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">4.2/5</p>
              <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Above target
              </p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">On Leave</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">1</p>
              <p className="text-sm text-gray-500 mt-1">Currently absent</p>
            </CardContent>
          </Card>
        </div>

        {/* Team Members Grid */}
        <Card className="border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <div key={member.id} className="p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-purple-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">{member.name}</h3>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge
                            className={
                              member.status === 'active'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-orange-100 text-orange-700'
                            }
                          >
                            {member.status === 'active' ? 'Active' : 'On Leave'}
                          </Badge>
                          {member.performance === 'excellent' && (
                            <Badge className="bg-purple-100 text-purple-700">
                              <Award className="w-3 h-3 mr-1" />
                              Top Performer
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Mail className="w-4 h-4 text-purple-600" />
                          {member.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone className="w-4 h-4 text-purple-600" />
                          {member.phone}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-purple-600" />
                          Joined {member.joinDate}
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 border-purple-200 text-purple-600 hover:bg-purple-50">
                          View Details
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
