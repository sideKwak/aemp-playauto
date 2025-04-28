import Header from '../components/Header';
import Footer from '../components/Footer';

const dummyProducts = [
  { id: 1, name: '트렌디 자켓', price: 69000 },
  { id: 2, name: '모던 셔츠', price: 39000 },
  { id: 3, name: '캐주얼 팬츠', price: 49000 },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* 본문 */}
      <main className="flex-1 flex justify-center items-start p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {dummyProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700">{product.price.toLocaleString()}원</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}