import { createBrowserRouter, Navigate } from 'react-router';
import { Login } from './components/Login';
import { DashboardLayout } from './components/layouts/DashboardLayout';
import { EmployeeDashboard } from './components/employee/EmployeeDashboard';
import { ManagerDashboard } from './components/manager/ManagerDashboard';
import { HRDashboard } from './components/hr/HRDashboard';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AttendancePage } from './components/shared/AttendancePage';
import { LeavePage } from './components/shared/LeavePage';
import { NotificationsPage } from './components/shared/NotificationsPage';
import { ProfilePage } from './components/employee/ProfilePage';
import { TeamPage } from './components/manager/TeamPage';
import { ReportsPage } from './components/shared/ReportsPage';
import { AuditLogsPage } from './components/shared/AuditLogsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/employee',
    element: <DashboardLayout role="employee" />,
    children: [
      { index: true, element: <Navigate to="/employee/dashboard" replace /> },
      { path: 'dashboard', element: <EmployeeDashboard /> },
      { path: 'attendance', element: <AttendancePage /> },
      { path: 'leave', element: <LeavePage /> },
      { path: 'notifications', element: <NotificationsPage /> },
      { path: 'profile', element: <ProfilePage /> },
    ],
  },
  {
    path: '/manager',
    element: <DashboardLayout role="manager" />,
    children: [
      { index: true, element: <Navigate to="/manager/dashboard" replace /> },
      { path: 'dashboard', element: <ManagerDashboard /> },
      { path: 'attendance', element: <AttendancePage /> },
      { path: 'leave', element: <LeavePage /> },
      { path: 'team', element: <TeamPage /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'notifications', element: <NotificationsPage /> },
    ],
  },
  {
    path: '/hr',
    element: <DashboardLayout role="hr" />,
    children: [
      { index: true, element: <Navigate to="/hr/dashboard" replace /> },
      { path: 'dashboard', element: <HRDashboard /> },
      { path: 'attendance', element: <AttendancePage /> },
      { path: 'leave', element: <LeavePage /> },
      { path: 'employees', element: <HRDashboard /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'notifications', element: <NotificationsPage /> },
      { path: 'audit-logs', element: <AuditLogsPage /> },
    ],
  },
  {
    path: '/admin',
    element: <DashboardLayout role="admin" />,
    children: [
      { index: true, element: <Navigate to="/admin/dashboard" replace /> },
      { path: 'dashboard', element: <AdminDashboard /> },
      { path: 'attendance', element: <AttendancePage /> },
      { path: 'leave', element: <LeavePage /> },
      { path: 'employees', element: <HRDashboard /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'settings', element: <AdminDashboard /> },
      { path: 'audit-logs', element: <AuditLogsPage /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);