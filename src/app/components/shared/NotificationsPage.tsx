import { Bell, CheckCircle, AlertCircle, Info, Calendar, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: 'success',
      icon: <CheckCircle className="w-5 h-5" />,
      title: 'Leave Approved',
      message: 'Your annual leave request for Feb 20-24 has been approved.',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      type: 'info',
      icon: <Info className="w-5 h-5" />,
      title: 'System Update',
      message: 'System maintenance scheduled for this weekend. Please save your work.',
      time: '5 hours ago',
      read: false,
    },
    {
      id: 3,
      type: 'alert',
      icon: <AlertCircle className="w-5 h-5" />,
      title: 'Attendance Reminder',
      message: 'Don\'t forget to clock out before leaving today.',
      time: '1 day ago',
      read: false,
    },
    {
      id: 4,
      type: 'info',
      icon: <Calendar className="w-5 h-5" />,
      title: 'Upcoming Holiday',
      message: 'Republic Day holiday on January 26, 2026.',
      time: '2 days ago',
      read: true,
    },
    {
      id: 5,
      type: 'info',
      icon: <FileText className="w-5 h-5" />,
      title: 'Document Submission',
      message: 'Please submit your monthly timesheet by end of this week.',
      time: '3 days ago',
      read: true,
    },
    {
      id: 6,
      type: 'success',
      icon: <CheckCircle className="w-5 h-5" />,
      title: 'Profile Updated',
      message: 'Your profile information has been successfully updated.',
      time: '1 week ago',
      read: true,
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
            <p className="text-gray-600">Stay updated with your latest activities.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
              Mark all as read
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Clear all
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <Card className="border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bell className="w-5 h-5" />
                Unread
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">3</p>
              <p className="text-sm text-gray-500 mt-1">New notifications</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Today</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">3</p>
              <p className="text-sm text-gray-500 mt-1">Received today</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Total</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">6</p>
              <p className="text-sm text-gray-500 mt-1">All notifications</p>
            </CardContent>
          </Card>
        </div>

        {/* Notifications List */}
        <Card className="border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
            <CardTitle>All Notifications</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-5 rounded-lg border-2 transition-all ${
                    notification.read
                      ? 'bg-white border-gray-200 hover:border-gray-300'
                      : 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-300 hover:border-purple-400'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        notification.type === 'success'
                          ? 'bg-green-100 text-green-600'
                          : notification.type === 'alert'
                          ? 'bg-orange-100 text-orange-600'
                          : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {notification.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                        <div className="flex items-center gap-2">
                          {!notification.read && (
                            <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                              New
                            </Badge>
                          )}
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{notification.message}</p>
                      {!notification.read && (
                        <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 -ml-2">
                          Mark as read
                        </Button>
                      )}
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
