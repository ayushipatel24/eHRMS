import { FileCheck, User, Calendar, Filter, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';

export function AuditLogsPage() {
  const auditLogs = [
    { id: 1, user: 'Emily Davis', action: 'Updated employee record', target: 'EMP045 - Michael Scott', timestamp: '2026-02-12 13:45:22', type: 'update' },
    { id: 2, user: 'Emily Davis', action: 'Approved leave request', target: 'Leave #234 - Jim Halpert', timestamp: '2026-02-12 11:30:15', type: 'approval' },
    { id: 3, user: 'Sarah Johnson', action: 'Override attendance', target: 'EMP023 - Pam Beesly', timestamp: '2026-02-12 10:15:08', type: 'override' },
    { id: 4, user: 'Michael Brown', action: 'Created new user', target: 'ADM005 - Dwight Schrute', timestamp: '2026-02-11 16:22:45', type: 'create' },
    { id: 5, user: 'Emily Davis', action: 'Rejected leave request', target: 'Leave #235 - Stanley Hudson', timestamp: '2026-02-11 14:10:33', type: 'rejection' },
    { id: 6, user: 'Michael Brown', action: 'Updated system settings', target: 'Email Notifications', timestamp: '2026-02-11 09:45:12', type: 'system' },
    { id: 7, user: 'Sarah Johnson', action: 'Deleted employee record', target: 'EMP089 - Toby Flenderson', timestamp: '2026-02-10 15:30:00', type: 'delete' },
    { id: 8, user: 'Emily Davis', action: 'Bulk import employees', target: '15 new records', timestamp: '2026-02-10 11:00:00', type: 'import' },
  ];

  const getActionColor = (type: string) => {
    switch (type) {
      case 'create':
      case 'approval':
        return 'bg-green-100 text-green-700';
      case 'update':
      case 'override':
        return 'bg-blue-100 text-blue-700';
      case 'delete':
      case 'rejection':
        return 'bg-red-100 text-red-700';
      case 'system':
      case 'import':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Audit Logs</h1>
          <p className="text-gray-600">Track all system activities and changes.</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Total Actions</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">1,247</p>
              <p className="text-sm text-gray-500 mt-1">Last 30 days</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Today</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">48</p>
              <p className="text-sm text-gray-500 mt-1">Actions performed</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Active Users</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">12</p>
              <p className="text-sm text-gray-500 mt-1">In last hour</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Critical Actions</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">5</p>
              <p className="text-sm text-gray-500 mt-1">Require review</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6 border-none shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search logs..."
                  className="pl-10 bg-gray-50"
                />
              </div>
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                <Filter className="w-4 h-4 mr-2" />
                Filter by Action
              </Button>
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Calendar className="w-4 h-4 mr-2" />
                Date Range
              </Button>
              <Button variant="outline" className="border-green-200 text-green-600 hover:bg-green-50">
                <User className="w-4 h-4 mr-2" />
                Filter by User
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Audit Logs List */}
        <Card className="border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-purple-600" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-3">
              {auditLogs.map((log) => (
                <div key={log.id} className="p-5 bg-white rounded-lg border-2 border-gray-200 hover:border-purple-300 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{log.user}</p>
                          <p className="text-sm text-gray-500">{log.timestamp}</p>
                        </div>
                        <Badge className={getActionColor(log.type)}>
                          {log.type}
                        </Badge>
                      </div>
                      <div className="ml-13 space-y-1">
                        <p className="text-gray-900">
                          <span className="font-medium">{log.action}</span>
                        </p>
                        <p className="text-sm text-gray-600">Target: {log.target}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm" className="bg-purple-600 text-white hover:bg-purple-700">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
