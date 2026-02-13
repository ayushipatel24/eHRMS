import { Settings, Users, Calendar, Shield, Clock, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';

export function AdminDashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">System configuration and administration.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          <Card className="col-span-4 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="w-5 h-5" />
                Total Users
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">147</p>
              <p className="text-sm text-gray-500 mt-1">Across all roles</p>
            </CardContent>
          </Card>

          <Card className="col-span-4 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="w-5 h-5" />
                Active Roles
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">4</p>
              <p className="text-sm text-gray-500 mt-1">Employee, Manager, HR, Admin</p>
            </CardContent>
          </Card>

          <Card className="col-span-4 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Globe className="w-5 h-5" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-green-600">Healthy</p>
              <p className="text-sm text-gray-500 mt-1">All systems operational</p>
            </CardContent>
          </Card>
        </div>

        {/* Admin Sections */}
        <div className="grid grid-cols-12 gap-6">
          {/* Role & Permission Matrix */}
          <Card className="col-span-6 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-600" />
                Role & Permission Matrix
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {[
                  { role: 'Admin', permissions: ['Full Access', 'User Management', 'System Config'], color: 'purple' },
                  { role: 'HR', permissions: ['Employee Management', 'Leave Approval', 'Reports'], color: 'blue' },
                  { role: 'Manager', permissions: ['Team Management', 'Attendance', 'Reports'], color: 'green' },
                  { role: 'Employee', permissions: ['Self Service', 'Leave Request', 'Attendance'], color: 'orange' },
                ].map((item) => (
                  <div key={item.role} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{item.role}</h3>
                      <Button size="sm" variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50">
                        Edit
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.permissions.map((perm) => (
                        <span key={perm} className={`px-3 py-1 bg-${item.color}-100 text-${item.color}-700 text-xs rounded-full`}>
                          {perm}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Shift Management */}
          <Card className="col-span-6 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Shift Management
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {[
                  { name: 'Morning Shift', time: '09:00 AM - 06:00 PM', employees: 85 },
                  { name: 'Evening Shift', time: '02:00 PM - 11:00 PM', employees: 42 },
                  { name: 'Night Shift', time: '11:00 PM - 08:00 AM', employees: 20 },
                ].map((shift) => (
                  <div key={shift.name} className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{shift.name}</h3>
                      <Button size="sm" variant="ghost" className="text-purple-600">
                        Edit
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{shift.time}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{shift.employees} employees</span>
                      <div className="w-24 bg-purple-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${(shift.employees / 147) * 100}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Add New Shift
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Holiday Calendar */}
          <Card className="col-span-6 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-600" />
                Holiday Calendar 2026
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {[
                  { name: 'New Year Day', date: 'Jan 1, 2026', type: 'Public Holiday' },
                  { name: 'Republic Day', date: 'Jan 26, 2026', type: 'Public Holiday' },
                  { name: 'Independence Day', date: 'Aug 15, 2026', type: 'Public Holiday' },
                  { name: 'Gandhi Jayanti', date: 'Oct 2, 2026', type: 'Public Holiday' },
                  { name: 'Christmas', date: 'Dec 25, 2026', type: 'Public Holiday' },
                ].map((holiday, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div>
                      <p className="font-medium text-gray-900">{holiday.name}</p>
                      <p className="text-sm text-gray-500">{holiday.date}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                      {holiday.type}
                    </span>
                  </div>
                ))}
                <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                  Manage Holidays
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* System Settings */}
          <Card className="col-span-6 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-orange-600" />
                System Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <Label className="text-base font-medium">Email Notifications</Label>
                    <p className="text-sm text-gray-500">Send email alerts for important events</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <Label className="text-base font-medium">Automatic Backups</Label>
                    <p className="text-sm text-gray-500">Daily automated system backups</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <Label className="text-base font-medium">Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500">Require 2FA for all users</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <Label className="text-base font-medium">Maintenance Mode</Label>
                    <p className="text-sm text-gray-500">Put system in maintenance mode</p>
                  </div>
                  <Switch />
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Save Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
