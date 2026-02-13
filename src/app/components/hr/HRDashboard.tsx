import { useState } from 'react';
import { Users, Search, Filter, Plus, Edit, Trash2, MoreVertical, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Badge } from '../ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog';
import { Label } from '../ui/label';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const employees = [
  { id: 'EMP001', name: 'John Smith', department: 'Engineering', designation: 'Software Engineer', status: 'active' },
  { id: 'EMP002', name: 'Sarah Johnson', department: 'Engineering', designation: 'Senior Developer', status: 'active' },
  { id: 'EMP003', name: 'Michael Brown', department: 'Marketing', designation: 'Marketing Manager', status: 'active' },
  { id: 'EMP004', name: 'Emily Davis', department: 'HR', designation: 'HR Executive', status: 'active' },
  { id: 'EMP005', name: 'Robert Wilson', department: 'Sales', designation: 'Sales Executive', status: 'active' },
  { id: 'EMP006', name: 'Lisa Anderson', department: 'Engineering', designation: 'QA Engineer', status: 'inactive' },
  { id: 'EMP007', name: 'David Martinez', department: 'Finance', designation: 'Accountant', status: 'active' },
  { id: 'EMP008', name: 'Jennifer Taylor', department: 'Engineering', designation: 'DevOps Engineer', status: 'active' },
];

export function HRDashboard() {
  const [attendanceModalOpen, setAttendanceModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<string>('');

  const handleAttendanceOverride = (employeeId: string) => {
    setSelectedEmployee(employeeId);
    setAttendanceModalOpen(true);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">HR Dashboard</h1>
          <p className="text-gray-600">Manage employees and oversee operations.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="w-5 h-5" />
                Total Employees
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">147</p>
              <p className="text-sm text-green-600 mt-1">+12 this month</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Active Today</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">132</p>
              <p className="text-sm text-gray-500 mt-1">89.8% present</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">On Leave</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">15</p>
              <p className="text-sm text-gray-500 mt-1">Various types</p>
            </CardContent>
          </Card>

          <Card className="col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-lg">Pending Actions</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-gray-900">8</p>
              <p className="text-sm text-gray-500 mt-1">Requires attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Employee Management Table */}
        <Card className="border-none shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Employee Management</CardTitle>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Employee
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Filters and Search */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search employees..."
                  className="pl-10 bg-gray-50"
                />
              </div>
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                <Filter className="w-4 h-4 mr-2" />
                Filter by Department
              </Button>
            </div>

            {/* Table */}
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-to-r from-purple-50 to-blue-50">
                    <TableHead>Employee ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Designation</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow key={employee.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{employee.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-sm font-semibold">
                            {employee.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          {employee.name}
                        </div>
                      </TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>{employee.designation}</TableCell>
                      <TableCell>
                        <Badge
                          variant={employee.status === 'active' ? 'default' : 'secondary'}
                          className={employee.status === 'active' ? 'bg-green-100 text-green-700 hover:bg-green-100' : ''}
                        >
                          {employee.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleAttendanceOverride(employee.id)}>
                              <Clock className="w-4 h-4 mr-2" />
                              Override Attendance
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Override Modal */}
      <Dialog open={attendanceModalOpen} onOpenChange={setAttendanceModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Override Attendance</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Employee ID</Label>
              <Input value={selectedEmployee} disabled />
            </div>
            <div className="space-y-2">
              <Label>Date</Label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <Label>Clock In Time</Label>
              <Input type="time" />
            </div>
            <div className="space-y-2">
              <Label>Clock Out Time</Label>
              <Input type="time" />
            </div>
            <div className="space-y-2">
              <Label>Reason</Label>
              <Input placeholder="Enter reason for override" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAttendanceModalOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Save Override
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
