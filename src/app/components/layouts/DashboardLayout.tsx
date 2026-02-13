import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { Sidebar } from '../Sidebar';
import { TopNav } from '../TopNav';
import { getCurrentUser } from '../../lib/auth';
import type { UserRole } from '../../lib/auth';

interface DashboardLayoutProps {
  role: UserRole;
}

export function DashboardLayout({ role }: DashboardLayoutProps) {
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!user) {
      navigate('/');
      return;
    }

    // Redirect if user's role doesn't match the expected role for this layout
    if (user.role !== role) {
      navigate(`/${user.role}/dashboard`);
    }
  }, [user, role, navigate]);

  if (!user || user.role !== role) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role={role} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav user={user} />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
