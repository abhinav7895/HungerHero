import { useEffect, useState } from "react";


export default function Shimmer() {
  const [shimmer, setShimmer] = useState(true);

  useEffect(() => {
    const shimmerInterval = setInterval(() => {
      setShimmer((prevShimmer) => !prevShimmer);
    }, 5000);

    return () => clearInterval(shimmerInterval);
  }, []);

  return (
    <>
      <div className="container grid grid-cols-2 md:grid-cols-3 place-items-center mx-auto my-9 gap-10 lg:grid-cols-4 w-[545]:grid-cols-1">
        {Array(10)
          .fill("")
          .map((index) => {
            return (
              <div
                className={`w-[238px] h-[262px] flex flex-col rounded-2xl p-2 bg-slate-200 ${
                  shimmer ? "animate-shimmer" : ""
                }`}
                key={crypto.randomUUID()}
              >
                <div className="h-[160px] w-[220px] object-cover rounded-xl bg-slate-300"></div>
                <div className="mt-2 w-[220px] h-7 bg-slate-300 rounded-xl"></div>
                <div className="mt-2 w-[220px] h-7 bg-slate-300 rounded-xl"></div>
                <div className="mt-2 w-[220px] h-7 bg-slate-300 rounded-xl"></div>
                <div className="mt-2 w-[100px] h-7 bg-blue-300 rounded-xl"></div>
              </div>
            );
          })}
      </div>
    </>
  );
}
