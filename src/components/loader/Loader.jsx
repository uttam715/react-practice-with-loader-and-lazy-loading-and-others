import { useState, useEffect } from "react";

export default function Loader() {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const timmer = setTimeout(() => {
      setIsLoad(false);
    }, 3000);

    return () => clearTimeout(timmer);
  }, [isLoad]);

  return (
    <>
      <div>
        Explanation: w-12 h-12 → sets width and height (can adjust size).
        border-4 → sets border thickness. border-blue-500 → sets the visible
        part of the border. border-t-transparent → makes the top part
        transparent (so it looks like it's spinning). rounded-full → makes it a
        circle. animate-spin → applies a spinning animation (built-in Tailwind
        utility).
        <button
          class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          onClick={() => setIsLoad(true)}
        >
          Click Loading
        </button>
      </div>

      <LoaderModal isLoad={isLoad}></LoaderModal>
    </>
  );
}

export function LoaderModal({isLoad}) {
  console.log(isLoad);
  return (
    <>
      <div
        className={
          isLoad
            ? "flex justify-center items-center z-10 fixed inset-0  bg-black/30 backdrop-blur-[1px]"
            : "hidden"
        }
      >
        <div className="border w-16 h-16 rounded-full border-4 border-t-transparent animate-spin"></div>
      </div>
    </>
  );
}
