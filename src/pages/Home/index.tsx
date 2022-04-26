import AdviceCard from "./components/AdviceCard";
import Footer from "./components/Footer";

function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-200 h-screen">
      <AdviceCard />
      <Footer />
    </main>
  );
}

export default Home;
