import { useEffect, useState } from 'react';

// 🔹 Product라는 데이터 타입을 정의 (선택사항, TS인 경우)
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

function App() {
  // 🔹 서버에서 받아온 상품 목록을 담는 state
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // 🔸 NestJS 서버에 GET 요청
    fetch("http://localhost:3000/products")
      .then(res => res.json()) // 🔸 응답을 JSON으로 변환
      .then(data => {
        console.log("서버 응답 데이터:", data);
        setProducts(data); // 🔸 응답 데이터를 상태에 저장
      })
      .catch(err => {
        console.error("❌ 요청 중 에러 발생:", err);
      });
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번 실행

  return (
    <div>
      <h1>📦 상품 목록 [deploy.yml 자동 테스트1]</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            🛍️ {product.name} - 💰 {product.price}원 ({product.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;