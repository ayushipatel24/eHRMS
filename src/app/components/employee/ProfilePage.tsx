import { User, Mail, Phone, MapPin, Briefcase, Calendar, Edit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { getCurrentUser } from '../../lib/auth';

export function ProfilePage() {
  const user = getCurrentUser();
  
  if (!user) return null;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
            <p className="text-gray-600">View and manage your personal information.</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Profile Card */}
          <Card className="col-span-4 border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{user.name}</h2>
                <p className="text-gray-600 mb-2">{user.designation}</p>
                <Badge className="bg-green-100 text-green-700">Active</Badge>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-600">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-600">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-600">San Francisco, CA</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Details */}
          <div className="col-span-8 space-y-6">
            {/* Personal Information */}
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Employee ID</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">{user.employeeId}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Full Name</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">{user.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Date of Birth</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">March 15, 1990</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Gender</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">Male</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Marital Status</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">Single</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Nationality</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">American</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Employment Details */}
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-purple-600" />
                  Employment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Department</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">Engineering</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Designation</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">Software Engineer</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Date of Joining</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">January 15, 2024</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Employment Type</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">Full-time</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Manager</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">Sarah Johnson</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Work Location</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">San Francisco Office</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
                <CardTitle>Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Contact Name</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">Jane Smith</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Relationship</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">Sister</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Phone Number</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">+1 (555) 987-6543</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">jane.smith@email.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bank Details */}
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
                <CardTitle>Bank Details</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Bank Name</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">Chase Bank</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Account Number</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">****7890</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">IFSC Code</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">CHAS0001234</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Branch</label>
                    <p className="text-base font-semibold text-gray-900 mt-1">San Francisco Main</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}