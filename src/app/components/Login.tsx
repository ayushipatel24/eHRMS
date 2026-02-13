import { useState } from 'react';
import { useNavigate } from 'react-router';
import { login } from '../lib/auth';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Building2 } from 'lucide-react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const user = await login(email, password);
      // Navigate based on role - automatically determined from backend
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-purple-100">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to access your HRMS portal</p>
          </div>

          {/* Demo Credentials */}
          {/* <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
            <p className="text-xs font-semibold text-gray-700 mb-2">Demo Credentials:</p>
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Employee:</strong> employee@company.com</p>
              <p><strong>Manager:</strong> manager@company.com</p>
              <p><strong>HR:</strong> hr@company.com</p>
              <p><strong>Admin:</strong> admin@company.com</p>
              <p className="mt-2"><strong>Password:</strong> password</p>
            </div>
          </div> */}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Official Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-11"
              />
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-11 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Login'}
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-gray-500">
            Role is automatically assigned based on your email
          </p>
        </div>
      </div>
    </div>
  );
}
