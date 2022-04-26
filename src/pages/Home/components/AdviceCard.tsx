function AdviceCard({ advice }) {
  console.log(JSON.stringify(advice));
  return (
    <section className=" w-1/2 h-80 bg-blue border-1 flex flex-col items-center justify-center">
      <p>{advice.data.slip.advice}</p>
    </section>
  );
}

export default AdviceCard;
