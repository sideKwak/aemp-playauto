import logo from '../img/logo.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Example() {
  return (
    <>
      <Header />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={logo}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            로그인
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                아이디
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                  비밀번호
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    비밀번호 찾기
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  아이디 저장
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="stay-logged-in"
                  name="stay-logged-in"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="stay-logged-in" className="ml-2 block text-sm text-gray-900">
                  로그인 상태 유지
                </label>
              </div>
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

          {/* 회원가입 / 아이디찾기 / 비번찾기 링크 */}
          <div className="flex justify-center items-center mt-6 space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:underline">일반 회원가입</a>
            <span>|</span>
            <a href="#" className="hover:underline">아이디 찾기</a>
            <span>|</span>
            <a href="#" className="hover:underline">비밀번호 찾기</a>
          </div>

          {/* 또는 */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-400">또는</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* 소셜 로그인 버튼 */}
          <div className="space-y-4">
            {/* 네이버 로그인 */}
            <button className="flex w-full items-center justify-center rounded-md bg-green-500 px-4 py-2 text-white font-semibold hover:bg-green-400">
              N 네이버 로그인
            </button>

            {/* 구글 로그인 */}
            <button className="flex w-full items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                className="h-5 w-5 mr-2"
                alt="구글"
              />
              구글 로그인
            </button>

            {/* 카카오 로그인 추가 */}
            <button className="flex w-full items-center justify-center rounded-md bg-yellow-300 px-4 py-2 text-black font-semibold hover:bg-yellow-200">
              <img
                src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
                className="h-5 w-5 mr-2"
                alt="카카오"
              />
              카카오 1초 로그인 / 회원가입
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}