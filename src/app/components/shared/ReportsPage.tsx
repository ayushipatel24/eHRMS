import { BarChart3, Download, Calendar, Users, TrendingUp, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export function ReportsPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
            <p className="text-gray-600">View comprehensive reports and insights.</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Export All
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Attendance Rate</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">92.5%</p>
              <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +2.3% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Leave Utilization</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">68%</p>
              <p className="text-sm text-gray-500 mt-1">Of total allocation</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Avg Working Hours</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">8.7h</p>
              <p className="text-sm text-gray-500 mt-1">Per day</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Productivity</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">95%</p>
              <p className="text-sm text-green-600 mt-1">Above target</p>
            </CardContent>
          </Card>
        </div>

        {/* Report Categories */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <Card className="border-none shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-600" />
                Attendance Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {[
                  { name: 'Daily Attendance Report', date: 'February 12, 2026' },
                  { name: 'Weekly Attendance Summary', date: 'Week of Feb 5-11, 2026' },
                  { name: 'Monthly Attendance Report', date: 'January 2026' },
                  { name: 'Late Coming Analysis', date: 'Last 30 days' },
                ].map((report, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors">
                    <div>
                      <p className="font-medium text-gray-900">{report.name}</p>
                      <p className="text-sm text-gray-500">{report.date}</p>
                    </div>
                    <Button size="sm" variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-100">
                      <Download className="w-4 h-4 mr-1" />
                      Export
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Leave Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {[
                  { name: 'Leave Balance Report', date: 'As of Feb 12, 2026' },
                  { name: 'Leave Application Summary', date: 'This month' },
                  { name: 'Leave Trends Analysis', date: 'Last 6 months' },
                  { name: 'Department-wise Leave Report', date: 'January 2026' },
                ].map((report, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors">
                    <div>
                      <p className="font-medium text-gray-900">{report.name}</p>
                      <p className="text-sm text-gray-500">{report.date}</p>
                    </div>
                    <Button size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-100">
                      <Download className="w-4 h-4 mr-1" />
                      Export
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Analytics */}
        <Card className="border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600" />
              Performance Analytics
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-3 gap-6">
              {[
                { name: 'Employee Performance Report', period: 'Q4 2025', score: '4.2/5' },
                { name: 'Team Productivity Metrics', period: 'This month', score: '95%' },
                { name: 'Goal Achievement Report', period: 'Last quarter', score: '88%' },
              ].map((report, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{report.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{report.period}</p>
                  <div className="flex items-end justify-between">
                    <span className="text-3xl font-bold text-green-600">{report.score}</span>
                    <Button size="sm" variant="outline" className="border-green-200 text-green-600 hover:bg-green-100">
                      View
                    </Button>
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
