import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SignForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    birth: '',
    email: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          name: formData.name,
          phone: formData.phone,
          birth: formData.birth,
          email: formData.email,
        }),
      });

      if (response.ok) {
        alert('회원가입 완료!');
        // window.location.href = '/login';
      } else {
        const errorData = await response.json();
        alert(`회원가입 실패: ${errorData.message || '서버 에러'}`);
      }
    } catch (error) {
      console.error('회원가입 에러:', error);
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    setIsModalOpen(true); // 진입 시 모달 자동 오픈
  }, []);

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Header />

      <main className="flex flex-col items-center justify-center px-4 py-16 bg-gray-50 min-h-screen">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">회원가입</h2>
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* 아이디 */}
            <div>
              <label htmlFor="username" className="text-sm font-semibold text-gray-600">아이디</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="4-20자 영문 소문자, 숫자 조합"
                className="mt-2 w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 text-sm py-2"
              />
            </div>

            {/* 비밀번호 */}
            <div>
              <label htmlFor="password" className="text-sm font-semibold text-gray-600">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="8자 이상 영문/숫자/특수문자"
                className="mt-2 w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 text-sm py-2"
              />
            </div>

            {/* 비밀번호 확인 */}
            <div>
              <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-600">비밀번호 확인</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="비밀번호 재입력"
                className="mt-2 w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 text-sm py-2"
              />
            </div>

            {/* 이름 */}
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-gray-600">이름</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="이름 입력"
                className="mt-2 w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 text-sm py-2"
              />
            </div>

            {/* 휴대전화 */}
            <div>
              <label htmlFor="phone" className="text-sm font-semibold text-gray-600">휴대전화</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="010-1234-5678"
                className="mt-2 w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 text-sm py-2"
              />
            </div>

            {/* 생일 */}
            <div>
              <label htmlFor="birth" className="text-sm font-semibold text-gray-600">생년월일</label>
              <input
                type="date"
                id="birth"
                name="birth"
                value={formData.birth}
                onChange={handleChange}
                className="mt-2 w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 text-sm py-2"
              />
            </div>

            {/* 이메일 */}
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-gray-600">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="mt-2 w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 text-sm py-2"
              />
            </div>

            {/* 버튼 */}
            <div>
              <button
                type="submit"
                className="w-full py-3 rounded-md bg-gray-800 text-white text-sm font-semibold hover:bg-gray-700 transition"
              >
                회원가입
              </button>
            </div>

          </form>
        </div>
      </main>

      <Footer />

      {/* 모달 추가 */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-10 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              🚀 회원가입 진행 방향
            </h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed max-h-[400px] overflow-y-auto px-2">
              <p>✅ 입력 폼 검증 (비밀번호 일치 확인)</p>
              <p>✅ 비밀번호 암호화 후 DB 저장</p>
              <p>✅ 이메일 중복 체크 및 검증</p>
              <p>✅ 회원가입 완료 후 로그인 페이지 이동</p>
              <p>✅ 소셜 회원가입(Naver, Google, Kakao) 연동 예정</p>
              <p>✅ 개인정보 처리방침 및 약관 동의 추가 예정</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
