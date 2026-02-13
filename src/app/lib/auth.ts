// Mock authentication service
export type UserRole = 'employee' | 'manager' | 'hr' | 'admin';

export interface User {
  email: string;
  name: string;
  role: UserRole;
  department?: string;
  designation?: string;
  employeeId?: string;
}

// Mock user database
const mockUsers: Record<string, { password: string; user: User }> = {
  'employee@company.com': {
    password: 'password',
    user: {
      email: 'employee@company.com',
      name: 'Employee',
      role: 'employee',
      department: 'Engineering',
      designation: 'Software Engineer',
      employeeId: 'EMP001'
    }
  },
  'manager@company.com': {
    password: 'password',
    user: {
      email: 'manager@company.com',
      name: 'Manager',
      role: 'manager',
      department: 'Engineering',
      designation: 'Engineering Manager',
      employeeId: 'MGR001'
    }
  },
  'hr@company.com': {
    password: 'password',
    user: {
      email: 'hr@company.com',
      name: 'HR',
      role: 'hr',
      department: 'Human Resources',
      designation: 'HR Manager',
      employeeId: 'HR001'
    }
  },
  'admin@company.com': {
    password: 'password',
    user: {
      email: 'admin@company.com',
      name: 'Admin',
      role: 'admin',
      department: 'IT',
      designation: 'System Administrator',
      employeeId: 'ADM001'
    }
  }
};

export const login = async (email: string, password: string): Promise<User> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const userData = mockUsers[email.toLowerCase()];
  
  if (!userData || userData.password !== password) {
    throw new Error('Invalid credentials');
  }
  
  // Store user in localStorage
  localStorage.setItem('user', JSON.stringify(userData.user));
  
  return userData.user;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
};