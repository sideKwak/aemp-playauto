import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SignForm() {
  return (
    <>
      <Header />

      <main className="flex flex-col items-center justify-center px-4 py-16 bg-gray-50 min-h-screen">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">회원가입</h2>
          <form className="space-y-6">

            {/* 아이디 */}
            <div>
              <label htmlFor="username" className="text-sm font-semibold text-gray-600">아이디</label>
              <input
                type="text"
                id="username"
                name="username"
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
    </>
  )
}
