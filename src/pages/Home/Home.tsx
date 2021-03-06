import axios from "axios";
import { useEffect, useState } from "react";
import AdviceCard from "./components/AdviceCard";
import Footer from "./components/Footer";

function Home() {
  const [advice, setAdvice] = useState<Object>("");

  const getAdvice = async () => {
    setAdvice("");
    const res = await axios.get("https://api.adviceslip.com/advice");
    setAdvice(res);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center bg-backg h-screen gap-6 z-20">
      <AdviceCard advice={advice} getAdvice={getAdvice} />
      <Footer />
    </main>
  );
}

export default Home;
