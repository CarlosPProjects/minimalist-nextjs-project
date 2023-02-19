import styles from "@/styles/Hero.module.css";
import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { SlBasket, SlInfo, SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { motion } from "framer-motion";

const Hero = () => {
  const [productBackground, setProductBackground] = useState(
    `${styles.backgroundProductOne}`
  );
  const [productName, setProductName] = useState("arise");
  const [nextProduct, setNextProduct] = useState(
    `${styles.backgroundProductTwo}`
  );
  const [productInfo, setProductInfo] = useState("Crusious minimalistic");

  const handleClick = () => {
    if (productBackground === `${styles.backgroundProductOne}`) {
      setProductBackground(`${styles.backgroundProductTwo}`);
      setProductName("black");
      setNextProduct(`${styles.backgroundProductOne}`);
      setProductInfo("Outdoor furniture");
    } else {
      setProductBackground(`${styles.backgroundProductOne}`);
      setProductName("arise");
      setNextProduct(`${styles.backgroundProductTwo}`);
      setProductInfo("Crusious minimalistic");
    }
  };

  return (
    <>
      <div className={`${productBackground} h-full `}>
        <div className="h-full flex items-end justify-center pb-8 xl:hidden">
          <div className="flex w-40 justify-between rounded-full bg-gray-50 py-3 px-4">
            <div className="cursor-pointer" onClick={handleClick}>
              <SlArrowLeft />
            </div>
            <div>
              <SlBasket size={18} />
            </div>
            <div className="cursor-pointer" onClick={handleClick}>
              <SlArrowRight />
            </div>
          </div>
        </div>
        <div className="h-full grid grid-cols-3 pb-20 max-xl:hidden">
          <div className="flex flex-col-reverse">
            {/* <div className="grid grid-rows-2">
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
          </div> */}
            <div className="w-full h-6 flex items-center justify-center gap-2">
              <div className="rounded-full bg-black w-2 h-2"></div>
              <div className="rounded-full bg-gray-400 w-2 h-2"></div>
              <div className="rounded-full bg-gray-400 w-2 h-2"></div>
            </div>
            <div className="grid w-full h-fit self-end" key={productName}>
              <motion.h1
                className="text-9xl font-extrabold productName text-center"
                initial={{ opacity: 0, translateX: -100 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ type: "spring", duration: 0.6 }}
              >
                {productName}{" "}
              </motion.h1>
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
              <div
                className={`${nextProduct} col-span-6 flex flex-col justify-center p-8 gap-3`}
                key={productInfo}
              >
                <h5 className="text-gray-50 text-base font-semibold">
                  Next up
                </h5>
                <motion.h3
                  initial={{ opacity: 0, translateX: -100 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="text-gray-50 text-2xl"
                >
                  {productInfo}{" "}
                </motion.h3>
              </div>
              <div
                className="col-span-2 grid place-items-center cursor-pointer"
                onClick={handleClick}
              >
                <FaAngleRight size={20} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
