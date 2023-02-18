import styles from "@/styles/Hero.module.css";
import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Hero = () => {
  const [productBackground, setProductBackground] = useState(
    `${styles.backgroundProductOne}`
  );
  const [productName, setProductName] = useState("arise");

  const handleClick = () => {
    if (productBackground === `${styles.backgroundProductOne}`) {
      setProductBackground(`${styles.backgroundProductTwo}`);
      setProductName("black");
    } else {
      setProductBackground(`${styles.backgroundProductOne}`);
      setProductName("arise");
    }
  };

  return (
    <>
      <div className={`${productBackground} h-full grid grid-cols-3 pb-20`}>
        <div className="grid grid-rows-2">
          <div className="w-full flex justify-center items-end">
            <div className="w-64 h-32 grid grid-cols-8">
              <div
                className="col-span-2 grid place-items-center bg-gray-50"
                onClick={handleClick}
              >
                <FaAngleLeft />
              </div>
              <div className="col-span-6 bg-[url('/assets/coca-cola-bg.jpg')] bg-cover bg-no-repeat bg-center"></div>
            </div>
          </div>
          <div className="grid w-full h-44 self-end">
            <h1 className="text-9xl font-extrabold productName text-center">
              {productName}{" "}
            </h1>
          </div>
        </div>
        <div className="grid place-items-end grid-cols-2">
          <div className="grid place-content-center w-full h-44">
            <p>steel wired</p>
            <p>structure</p>
          </div>
          <div className="grid place-content-center w-full h-44">
            <p>clear lacquered</p>
            <p>finishes</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute right-0 bottom-0 w-96 h-44 bg-[#252525] grid grid-cols-8">
            <div className="col-span-6 bg-[url('/assets/cucharas-bg.jpg')] bg-center bg-no-repeat bg-cover "></div>
            <div
              className="col-span-2 grid place-items-center"
              onClick={handleClick}
            >
              <FaAngleRight size={20} color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
