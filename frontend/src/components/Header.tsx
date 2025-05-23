import { Link, useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';
import { FaSignOutAlt } from 'react-icons/fa'; // 로그아웃 아이콘

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');
  const username = localStorage.getItem('username');
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    alert('로그아웃 완료');
    navigate('/login');
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow w-full">
      <Link to="/">
        <img src={logo} alt="로고" className="h-10" />
      </Link>
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <span className="text-sm text-gray-700 font-medium">{username}님</span>
            <button onClick={handleLogout} className="text-gray-700 text-xl hover:text-red-500" title="로그아웃">
              <FaSignOutAlt />
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-sm text-gray-700 font-medium">로그인</Link>
            <Link to="/signForm" className="text-sm text-gray-700 font-medium">회원가입</Link>
          </>
        )}
      </div>
    </header>
  );
}
