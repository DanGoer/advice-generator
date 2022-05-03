function AdviceCard({ advice, getAdvice }: any) {
  return (
    <section className="rounded-2xl w-full max-w-xl h-80 bg-card flex flex-col items-center justify-center">
      <h4 className="text-but uppercase text-md tracking-wider py-5 font-normal">
        Advice #{advice.data.slip.id}
      </h4>
      <p className="text-para font-extrabold text-2xl mb-28 tracking-wider text-center px-6">
        "{advice.data.slip.advice}"
      </p>
      <div className="bottom-20 -mb-4 lg:flex hidden ">
        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>
      <div className=" bottom-20 -mb-4 flex lg:hidden ">
        <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>
      <div className="w-16 h-16 bg-but flex rounded-full items-center justify-center overflow-visible cursor-pointer bottom-0 hover:shadow-3xl transition-all">
        <button onClick={() => getAdvice()}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default AdviceCard;
