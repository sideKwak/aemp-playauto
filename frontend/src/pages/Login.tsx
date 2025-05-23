import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        // console.error('❌ 로그인 에러 상세:', errorData);

        // message가 객체인지 문자열인지 구분해서 처리
        const message =
          typeof errorData.message === 'string'
            ? errorData.message
            : errorData.message?.message || '로그인에 실패했습니다.';

        alert(`🚫 로그인 실패 : ${message}`);
        return;
      }

      const { accessToken, username } = await response.json();
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('username', username);
      alert('✅ 로그인 성공');
      navigate('/home');
    } catch (error: any) {
      console.error('❌ 서버 통신 중 에러:', error);
      alert('서버 오류로 인해 로그인할 수 없습니다.');
    }
  };

  return (
    <>
      <Header />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            로그인
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-900">
                아이디
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
                className="mt-2 w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                className="mt-2 w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              />
            </div>

            <div className="flex items-center space-x-4">
              <label className="flex items-center text-sm text-gray-900">
                <input type="checkbox" className="mr-2 h-4 w-4" /> 아이디 저장
              </label>
              <label className="flex items-center text-sm text-gray-900">
                <input type="checkbox" className="mr-2 h-4 w-4" /> 로그인 상태 유지
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-700"
              >
                로그인
              </button>
            </div>
          </form>

          <div className="flex justify-center items-center mt-6 space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:underline">일반 회원가입</a>
            <span>|</span>
            <a href="#" className="hover:underline">아이디 찾기</a>
            <span>|</span>
            <a href="#" className="hover:underline">비밀번호 찾기</a>
          </div>

          <div className="space-y-4 mt-8">
            <button className="w-full py-2 bg-green-500 text-white rounded-md font-semibold">N 네이버 로그인</button>
            <button className="w-full py-2 border border-gray-300 text-gray-700 rounded-md font-semibold">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="구글" className="inline w-5 mr-2" />
              구글 로그인
            </button>
            <button className="w-full py-2 bg-yellow-300 text-black rounded-md font-semibold">
              <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" alt="카카오" className="inline w-5 mr-2" />
              카카오 1초 로그인
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}