import { useNavigate } from 'react-router';
import { Bell, LogOut, User } from 'lucide-react';
import { Button } from './ui/button';
import { logout } from '../lib/auth';
import type { User as UserType } from '../lib/auth';

interface TopNavProps {
  user: UserType;
}

export function TopNav({ user }: TopNavProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
      {/* Left Section - Title */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          {user.role.charAt(0).toUpperCase() + user.role.slice(1)} Portal
        </h2>
        <p className="text-sm text-gray-500">{user.department}</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>

        {/* User Info */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-500">{user.designation}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Logout */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleLogout}
          className="text-gray-600 hover:text-red-600"
        >
          <LogOut className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}