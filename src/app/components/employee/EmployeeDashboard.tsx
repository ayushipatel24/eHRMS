import { Calendar, Clock, FileText, Bell, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export function EmployeeDashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your overview for today.</p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          {/* Today's Attendance */}
          <Card className="col-span-4 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="w-5 h-5" />
                Your Presence
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Clock In</span>
                  <span className="font-semibold text-green-600">09:15 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Clock Out</span>
                  <span className="font-semibold text-gray-400">-- : --</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t">
                  <span className="text-gray-600">Working Hours</span>
                  <span className="font-semibold text-purple-600">4h 23m</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leave Status */}
          <Card className="col-span-4 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText className="w-5 h-5" />
                Today's Leave
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Available</span>
                  <span className="font-semibold text-green-600">12 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Used</span>
                  <span className="font-semibold text-orange-600">8 days</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t">
                  <span className="text-gray-600">Pending</span>
                  <span className="font-semibold text-blue-600">1 request</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="col-span-4 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Unread</span>
                  <span className="font-semibold text-red-600">3 new</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total</span>
                  <span className="font-semibold text-gray-600">15</span>
                </div>
                <Button className="w-full mt-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  View All
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <div className="grid grid-cols-12 gap-6">
          {/* Attendance History */}
          <Card className="col-span-8 border-none shadow-lg">
            <CardHeader>
              <CardTitle>Recent Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { date: 'Feb 12, 2026', checkIn: '09:15 AM', checkOut: '06:30 PM', status: 'present' },
                  { date: 'Feb 11, 2026', checkIn: '09:00 AM', checkOut: '06:15 PM', status: 'present' },
                  { date: 'Feb 10, 2026', checkIn: '09:30 AM', checkOut: '06:45 PM', status: 'present' },
                  { date: 'Feb 9, 2026', checkIn: '--', checkOut: '--', status: 'leave' },
                  { date: 'Feb 8, 2026', checkIn: '--', checkOut: '--', status: 'weekend' },
                ].map((record, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-4">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="font-medium text-gray-900">{record.date}</p>
                        <p className="text-sm text-gray-500">
                          {record.checkIn} - {record.checkOut}
                        </p>
                      </div>
                    </div>
                    <div>
                      {record.status === 'present' && (
                        <span className="flex items-center gap-1 text-green-600 font-medium">
                          <CheckCircle className="w-4 h-4" />
                          Present
                        </span>
                      )}
                      {record.status === 'leave' && (
                        <span className="flex items-center gap-1 text-orange-600 font-medium">
                          <FileText className="w-4 h-4" />
                          On Leave
                        </span>
                      )}
                      {record.status === 'weekend' && (
                        <span className="text-gray-500 font-medium">Weekend</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="col-span-4 border-none shadow-lg">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Clock className="w-4 h-4 mr-2" />
                  Clock In/Out
                </Button>
                <Button variant="outline" className="w-full justify-start border-purple-200 hover:bg-purple-50">
                  <FileText className="w-4 h-4 mr-2 text-purple-600" />
                  Apply for Leave
                </Button>
                <Button variant="outline" className="w-full justify-start border-blue-200 hover:bg-blue-50">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                  View Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
