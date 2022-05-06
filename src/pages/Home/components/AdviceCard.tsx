import { AdviceCardI } from "../../../ts/interfaces/global_interfaces";

function AdviceCard({ advice, getAdvice }: AdviceCardI) {
  return (
    <section className="rounded-2xl w-full max-w-xl h-80 bg-card flex flex-col items-center justify-center z-30 relative">
      {!advice ? (
        <div className="flex flex-col items-center gap-4">
          <div className="text-para font-extrabold text-2xl">
            Another Advice will be provided soon!.
          </div>
          <div className="lds-hourglass"></div>
        </div>
      ) : (
        <>
          <h4 className="text-but uppercase text-sm tracking-[4px] py-5 font-normal">
            Advice #{advice.data.slip.id}
          </h4>
          <p className="text-para font-extrabold text-2xl mb-28 tracking-wider text-center px-6">
            "{advice.data.slip.advice}"
          </p>
          <div className="bottom-16 - lg:flex hidden absolute">
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
          <div className=" bottom-12 flex lg:hidden absolute">
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
          <div className="w-16 h-16 bg-but flex rounded-full items-center justify-center overflow-visible cursor-pointer -bottom-8 hover:shadow-3xl transition-all z-40 absolute">
            <button onClick={() => getAdvice()}>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                  fill="#202733"
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default AdviceCard;
