import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react'; // ✅ 추가

export default function RedirectIfLoggedIn({ children }: { children: ReactNode }) {
  const token = localStorage.getItem('accessToken');
  return token ? <Navigate to="/home" replace /> : children;
}