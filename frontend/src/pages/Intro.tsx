import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './IntroPage.css';

export default function IntroPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) navigate('/home');
  }, [navigate]);

  return (
    <div className="intro-container">
      <div className="intro-text-area">
        <h2 className="intro-subtext">스마트스토어, 쿠팡 <br />온라인 스토어</h2>
        <h1 className="intro-maintext">
          <span className="highlight">통합관리</span> 솔루션
        </h1>
        <p className="intro-description">
          <span className="strong">상품 등록, 재고 관리, 주문 처리</span>를<br />
          한 곳에서 손쉽게 관리하세요.
        </p>
        <Link to="/login" className="intro-button">지금 시작하기</Link>
      </div>
    </div>
  );
}