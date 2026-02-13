import { Users, CheckCircle, Clock, FileText, AlertCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export function ManagerDashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manager Dashboard</h1>
          <p className="text-gray-600">Manage your team and track performance.</p>
        </div>

        {/* Team Summary Cards */}
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
              <p className="text-sm text-gray-500 mt-1">Active members</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle className="w-5 h-5" />
                Present Today
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">10</p>
              <p className="text-sm text-gray-500 mt-1">83% attendance</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText className="w-5 h-5" />
                On Leave
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">2</p>
              <p className="text-sm text-gray-500 mt-1">Approved leave</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertCircle className="w-5 h-5" />
                Pending
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">3</p>
              <p className="text-sm text-gray-500 mt-1">Leave requests</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Pending Leave Approvals */}
          <Card className="col-span-8 border-none shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Pending Leave Approvals</CardTitle>
              <Button variant="outline" size="sm" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Alice Johnson', type: 'Sick Leave', days: '2 days', date: 'Feb 15-16, 2026', status: 'pending' },
                  { name: 'Bob Williams', type: 'Casual Leave', days: '1 day', date: 'Feb 14, 2026', status: 'pending' },
                  { name: 'Charlie Brown', type: 'Annual Leave', days: '5 days', date: 'Feb 20-24, 2026', status: 'pending' },
                ].map((request, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-semibold">
                            {request.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{request.name}</p>
                            <p className="text-sm text-gray-600">{request.type}</p>
                          </div>
                        </div>
                        <div className="ml-13 flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {request.days}
                          </span>
                          <span>{request.date}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                          Reject
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team Attendance Overview */}
          <Card className="col-span-4 border-none shadow-lg">
            <CardHeader>
              <CardTitle>Team Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Present</span>
                    <span className="text-2xl font-bold text-green-600">10</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">On Leave</span>
                    <span className="text-2xl font-bold text-orange-600">2</span>
                  </div>
                  <div className="w-full bg-orange-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '17%' }}></div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Avg. Hours/Day</span>
                    <span className="text-2xl font-bold text-blue-600">8.5h</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-green-600 mt-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>+5% from last week</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  View Detailed Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
