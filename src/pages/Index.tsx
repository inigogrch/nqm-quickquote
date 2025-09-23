import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard on app load
    navigate('/dashboard');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand mx-auto"></div>
        <p className="mt-4 text-slate-600">Loading NQM Quick Quote...</p>
      </div>
    </div>
  );
}