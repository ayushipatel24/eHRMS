import { Calendar, Clock, CheckCircle, XCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export function AttendancePage() {
  const monthData = [
    { date: 1, day: 'Mon', status: 'present', hours: '9h 15m' },
    { date: 2, day: 'Tue', status: 'present', hours: '8h 45m' },
    { date: 3, day: 'Wed', status: 'present', hours: '9h 30m' },
    { date: 4, day: 'Thu', status: 'present', hours: '8h 20m' },
    { date: 5, day: 'Fri', status: 'present', hours: '9h 00m' },
    { date: 6, day: 'Sat', status: 'weekend', hours: '--' },
    { date: 7, day: 'Sun', status: 'weekend', hours: '--' },
    { date: 8, day: 'Mon', status: 'present', hours: '9h 10m' },
    { date: 9, day: 'Tue', status: 'leave', hours: '--' },
    { date: 10, day: 'Wed', status: 'present', hours: '8h 55m' },
    { date: 11, day: 'Thu', status: 'present', hours: '9h 25m' },
    { date: 12, day: 'Fri', status: 'present', hours: '4h 23m' },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Attendance</h1>
          <p className="text-gray-600">Track your attendance and working hours.</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">This Month</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">11</p>
              <p className="text-sm text-gray-500 mt-1">Days present</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Avg. Hours/Day</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">8.9h</p>
              <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Above average
              </p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Total Hours</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">98h</p>
              <p className="text-sm text-gray-500 mt-1">This month</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Attendance %</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">91.7%</p>
              <p className="text-sm text-gray-500 mt-1">11/12 days</p>
            </CardContent>
          </Card>
        </div>

        {/* Clock In/Out */}
        <Card className="mb-8 border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
            <CardTitle>Today's Attendance</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Clock In</h3>
                </div>
                <p className="text-3xl font-bold text-green-600">09:15 AM</p>
                <p className="text-sm text-gray-500 mt-1">February 12, 2026</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Working Duration</h3>
                </div>
                <p className="text-3xl font-bold text-blue-600">4h 23m</p>
                <p className="text-sm text-gray-500 mt-1">In progress</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <h3 className="font-semibold text-gray-900">Clock Out</h3>
                </div>
                <p className="text-3xl font-bold text-gray-400">-- : --</p>
                <Button className="mt-3 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Clock Out
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Calendar */}
        <Card className="border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
            <div className="flex items-center justify-between">
              <CardTitle>February 2026</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-7 gap-4">
              {monthData.map((day) => (
                <div
                  key={day.date}
                  className={`p-4 rounded-lg border-2 ${
                    day.status === 'present'
                      ? 'bg-green-50 border-green-200'
                      : day.status === 'leave'
                      ? 'bg-orange-50 border-orange-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">{day.day}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">{day.date}</p>
                    {day.status === 'present' && (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-600 mx-auto mb-1" />
                        <p className="text-xs text-green-600 font-medium">{day.hours}</p>
                      </>
                    )}
                    {day.status === 'leave' && (
                      <>
                        <XCircle className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                        <p className="text-xs text-orange-600 font-medium">Leave</p>
                      </>
                    )}
                    {day.status === 'weekend' && (
                      <p className="text-xs text-gray-400 font-medium">Weekend</p>
                    )}
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
