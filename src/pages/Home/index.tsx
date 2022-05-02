import axios from "axios";
import { useEffect, useState } from "react";
import AdviceCard from "./components/AdviceCard";
import Footer from "./components/Footer";

function Home() {
  const [advice, setAdvice] = useState<any>();

  const getAdvice = async () => {
    const res = await axios.get("https://api.adviceslip.com/advice");
    setAdvice(res);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center bg-backg h-screen gap-6">
      {advice && <AdviceCard advice={advice} getAdvice={getAdvice} />}

      <Footer />
    </main>
  );
}

export default Home;
