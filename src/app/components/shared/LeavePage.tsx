import { useState } from 'react';
import { FileText, Plus, Calendar, CheckCircle, Clock, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';

export function LeavePage() {
  const [applyLeaveOpen, setApplyLeaveOpen] = useState(false);

  const leaveRequests = [
    { id: 1, type: 'Sick Leave', from: 'Feb 5, 2026', to: 'Feb 6, 2026', days: 2, status: 'approved', reason: 'Medical checkup' },
    { id: 2, type: 'Casual Leave', from: 'Feb 9, 2026', to: 'Feb 9, 2026', days: 1, status: 'approved', reason: 'Personal work' },
    { id: 3, type: 'Annual Leave', from: 'Feb 20, 2026', to: 'Feb 24, 2026', days: 5, status: 'pending', reason: 'Family vacation' },
    { id: 4, type: 'Sick Leave', from: 'Jan 15, 2026', to: 'Jan 17, 2026', days: 3, status: 'rejected', reason: 'Flu' },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Leave Management</h1>
            <p className="text-gray-600">Apply for leave and track your requests.</p>
          </div>
          <Button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            onClick={() => setApplyLeaveOpen(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Apply Leave
          </Button>
        </div>

        {/* Leave Balance Cards */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Available</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">12</p>
              <p className="text-sm text-gray-500 mt-1">Days remaining</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Used</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">8</p>
              <p className="text-sm text-gray-500 mt-1">Days taken</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Pending</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">1</p>
              <p className="text-sm text-gray-500 mt-1">Awaiting approval</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Total</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">20</p>
              <p className="text-sm text-gray-500 mt-1">Annual quota</p>
            </CardContent>
          </Card>
        </div>

        {/* Leave Breakdown */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          <Card className="col-span-12 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
              <CardTitle>Leave Type Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-4 gap-6">
                {[
                  { type: 'Sick Leave', available: 5, total: 10, color: 'red' },
                  { type: 'Casual Leave', available: 3, total: 5, color: 'orange' },
                  { type: 'Annual Leave', available: 4, total: 5, color: 'blue' },
                  { type: 'Emergency Leave', available: 0, total: 0, color: 'purple' },
                ].map((leave) => (
                  <div key={leave.type} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">{leave.type}</h3>
                    <div className="flex items-end justify-between mb-2">
                      <span className="text-2xl font-bold text-gray-900">{leave.available}</span>
                      <span className="text-sm text-gray-500">/ {leave.total}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-${leave.color}-600 h-2 rounded-full`}
                        style={{ width: `${(leave.available / leave.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leave History */}
        <Card className="border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
            <CardTitle>Leave History</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {leaveRequests.map((request) => (
                <div key={request.id} className="p-5 bg-white rounded-lg border-2 border-gray-200 hover:border-purple-300 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <FileText className="w-5 h-5 text-purple-600" />
                        <h3 className="font-semibold text-gray-900">{request.type}</h3>
                        <Badge
                          variant={request.status === 'approved' ? 'default' : request.status === 'pending' ? 'secondary' : 'destructive'}
                          className={
                            request.status === 'approved'
                              ? 'bg-green-100 text-green-700'
                              : request.status === 'pending'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-red-100 text-red-700'
                          }
                        >
                          {request.status === 'approved' && <CheckCircle className="w-3 h-3 mr-1" />}
                          {request.status === 'pending' && <Clock className="w-3 h-3 mr-1" />}
                          {request.status === 'rejected' && <XCircle className="w-3 h-3 mr-1" />}
                          {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                        </Badge>
                      </div>
                      <div className="ml-8 space-y-1">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {request.from} - {request.to}
                          </span>
                          <span>•</span>
                          <span>{request.days} day{request.days > 1 ? 's' : ''}</span>
                        </div>
                        <p className="text-sm text-gray-600">Reason: {request.reason}</p>
                      </div>
                    </div>
                    {request.status === 'pending' && (
                      <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                        Cancel
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Apply Leave Dialog */}
      <Dialog open={applyLeaveOpen} onOpenChange={setApplyLeaveOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Apply for Leave</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Leave Type</Label>
              <select className="w-full h-10 px-3 rounded-md border border-gray-300">
                <option>Sick Leave</option>
                <option>Casual Leave</option>
                <option>Annual Leave</option>
                <option>Emergency Leave</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>From Date</Label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <Label>To Date</Label>
                <Input type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Reason</Label>
              <Textarea placeholder="Enter reason for leave..." rows={4} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setApplyLeaveOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Submit Request
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
