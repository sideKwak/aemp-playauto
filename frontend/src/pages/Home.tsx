import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    // 페이지 진입하자마자 모달 자동 오픈
    setIsModalOpen(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1 p-8 flex flex-col items-center bg-gray-50">
        <div className="w-full max-w-6xl space-y-8">

          {/* 통합 솔루션 대시보드 타이틀 */}
          <h1 className="text-2xl font-bold text-gray-800">쇼핑몰 통합관리 솔루션</h1>

          {/* 요약 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-700">오늘 주문</h2>
              <p className="text-3xl font-bold mt-2">12건</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-700">재고 부족 상품</h2>
              <p className="text-3xl font-bold mt-2">3개</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-700">연동 마켓</h2>
              <p className="text-3xl font-bold mt-2">5개</p>
            </div>
          </div>

          {/* 빠른 작업 */}
          <div className="bg-white rounded-xl shadow p-6 mt-8 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">빠른 작업</h2>
            <div className="flex space-x-4">
              <button className="flex-1 py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700">
                상품 등록
              </button>
              <button className="flex-1 py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700">
                주문 수집
              </button>
              <button className="flex-1 py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700">
                재고 동기화
              </button>
            </div>
          </div>

        </div>
      </main>

      <Footer />

      {/* 모달창 */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-10 relative">
            {/* 닫기 버튼 */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>

            {/* 모달 내용 */}
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">🚀 프로젝트 구축 히스토리</h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed max-h-[400px] overflow-y-auto px-2">
              <h3 className="font-bold">적용 완료</h3>
              <p>✅ EC2 인스턴스 생성 및 세팅 (Amazon Linux 2023)</p>
              <p>✅ Docker로 백엔드(NestJS) + 프론트엔드(React Vite) 환경 구축</p>
              <p>✅ Nginx 리버스 프록시 및 SSL 인증서 발급 완료</p>
              <p>✅ 도메인 연결 및 HTTPS 설정 (Let's Encrypt)</p>
              <p>✅ GitHub Actions와 AWS EC2를 연동한 자동화 배포 파이프라인 구축</p>
              <p>✅ 프론트엔드 Vite 빌드 → Nginx 정적 파일 서빙 구조 적용</p>
              <p>✅ 백엔드 NestJS 빌드 및 Docker 이미지로 운영 서버 배포</p>
              <p>✅ 현재 운영 중 (aemp.p-e.kr)</p>

              <h3 className="font-bold">진행 예정</h3>
              <p>✅ 쇼핑몰 통합 상품 등록 기능 개발</p>
              <p>✅ 재고 관리 및 재고 동기화 기능 추가</p>
              <p>✅ 주문 수집 및 배송 처리 시스템 구축</p>
              <p>✅ 관리자용 통계/리포트 대시보드 개발</p>
              <p>✅ 외부 쇼핑몰 API (스마트스토어, 쿠팡) 연동</p>
              <p>✅ 실시간 알림 기능 (배송 상태, 재고 알림 등)</p>
              <p>✅ CI/CD 파이프라인 고도화 및 운영 자동화</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
