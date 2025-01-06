
export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SimInvest</h1>
        <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-100 transition duration-300">
          Simular Agora
        </button>
      </div>
    </header>
  );
}
