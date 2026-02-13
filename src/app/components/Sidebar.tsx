import { Link, useLocation } from 'react-router';
import { UserRole } from '../lib/auth';
import {
  LayoutDashboard,
  Calendar,
  FileText,
  Users,
  BarChart3,
  Bell,
  User,
  Settings,
  FileCheck,
  Building2
} from 'lucide-react';
import { cn } from './ui/utils';

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface SidebarProps {
  role: UserRole;
}

const menuItemsByRole: Record<UserRole, MenuItem[]> = {
  employee: [
    { label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, path: '/employee/dashboard' },
    { label: 'Attendance', icon: <Calendar className="w-5 h-5" />, path: '/employee/attendance' },
    { label: 'Leave', icon: <FileText className="w-5 h-5" />, path: '/employee/leave' },
    { label: 'Notifications', icon: <Bell className="w-5 h-5" />, path: '/employee/notifications' },
    { label: 'Profile', icon: <User className="w-5 h-5" />, path: '/employee/profile' },
  ],
  manager: [
    { label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, path: '/manager/dashboard' },
    { label: 'Attendance', icon: <Calendar className="w-5 h-5" />, path: '/manager/attendance' },
    { label: 'Leave', icon: <FileText className="w-5 h-5" />, path: '/manager/leave' },
    { label: 'My Team', icon: <Users className="w-5 h-5" />, path: '/manager/team' },
    { label: 'Reports', icon: <BarChart3 className="w-5 h-5" />, path: '/manager/reports' },
    { label: 'Notifications', icon: <Bell className="w-5 h-5" />, path: '/manager/notifications' },
  ],
  hr: [
    { label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, path: '/hr/dashboard' },
    { label: 'Attendance', icon: <Calendar className="w-5 h-5" />, path: '/hr/attendance' },
    { label: 'Leave', icon: <FileText className="w-5 h-5" />, path: '/hr/leave' },
    { label: 'Employees', icon: <Users className="w-5 h-5" />, path: '/hr/employees' },
    { label: 'Reports', icon: <BarChart3 className="w-5 h-5" />, path: '/hr/reports' },
    { label: 'Notifications', icon: <Bell className="w-5 h-5" />, path: '/hr/notifications' },
    { label: 'Audit Logs', icon: <FileCheck className="w-5 h-5" />, path: '/hr/audit-logs' },
  ],
  admin: [
    { label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, path: '/admin/dashboard' },
    { label: 'Attendance', icon: <Calendar className="w-5 h-5" />, path: '/admin/attendance' },
    { label: 'Leave', icon: <FileText className="w-5 h-5" />, path: '/admin/leave' },
    { label: 'Employees', icon: <Users className="w-5 h-5" />, path: '/admin/employees' },
    { label: 'Reports', icon: <BarChart3 className="w-5 h-5" />, path: '/admin/reports' },
    { label: 'Admin', icon: <Settings className="w-5 h-5" />, path: '/admin/settings' },
    { label: 'Audit Logs', icon: <FileCheck className="w-5 h-5" />, path: '/admin/audit-logs' },
  ]
};

export function Sidebar({ role }: SidebarProps) {
  const location = useLocation();
  const menuItems = menuItemsByRole[role];

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-blue-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-purple-700/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-lg">HRMS Portal</h1>
            <p className="text-xs text-purple-300 capitalize">{role} Dashboard</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-6 px-3 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-white text-purple-900 shadow-lg"
                  : "text-purple-100 hover:bg-purple-700/50 hover:text-white"
              )}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-purple-700/50">
        <p className="text-xs text-purple-300 text-center">
          © 2026 HRMS Portal
        </p>
      </div>
    </div>
  );
}
