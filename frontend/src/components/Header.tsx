import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow w-full">
      <Link to="/">
        <img src={logo} alt="로고" className="h-10" />
      </Link>
      <div className="flex items-center space-x-4">
        <Link
          to="/login"
          className="text-sm text-gray-700 font-medium "
        >
          로그인
        </Link>
        <Link
          to="/signForm"
          className="text-sm text-gray-700 font-medium"
        >
          회원가입
        </Link>
      </div>
    </header>
  );
}