import { useState } from "react";
import "./App.css";
import iconCheck from "./assets/images/icon-check.svg";
import circles from "./assets/images/pattern-circles.svg";
// import backgroundImage from "./assets/bg-pattern.svg";

function App() {
  const features = [
    "Unlimited websites",
    "100% data ownership",
    "Email reports",
  ];

  const pricingData = [
    { pageviews: "10K", price: 8 },
    { pageviews: "50K", price: 12 },
    { pageviews: "100K", price: 16 },
    { pageviews: "500K", price: 24 },
    { pageviews: "1M", price: 36 },
  ];

  const [isYearly, setIsYearly] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(2); // Default to 100K

  const currentPlan = pricingData[selectedIndex];
  const finalPrice = isYearly
    ? (currentPlan.price * 12 * 0.75).toFixed(2) //25% discount
    : currentPlan.price.toFixed(2);

  return (
    <div className="font-manrope text-intro relative text-center text-neutral-grayish-blue font-manrope-600 text-balance flex flex-col place-content-center">
      <main>
        <div className="relative mx-auto my-20">
          <img
            src={circles}
            alt="circles"
            className="absolute left-1/2 right-1/2 -translate-x-1/2 -top-1/2 sm:-top-3/4 z-0"
          ></img>
          <h1 className="text-neutral-dark-desaturated-blue font-manrope-800 text-xl mb-2 relative z-10">
            Simple, traffic-based pricing
          </h1>
          <p className="relative z-10">
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </div>

        <div className="bg-white shadow-xl my-10 mx-auto rounded-md h-full w-full">
          <form className="py-6 px-10 mb-2 space-y-8 sm:space-y-0 sm:grid sm:grid-cols-4 sm:grid-rows-3 gap-6 items-center">
            <label htmlFor="pageview-range" className="uppercase font-manrope-800 mb-2 sm:mb-0 sm:justify-self-start sm:self-center col-start-1 col-end-3 row-start-1 row-end-2">
              {currentPlan.pageviews} Pageviews
            </label>

            {/* Range Slider */}
            <input
            id="pageview-range"
              type="range"
              min="0"
              max={pricingData.length - 1}
              value={selectedIndex}
              onChange={(e) => setSelectedIndex(Number(e.target.value))}
              className="w-full slider col-start-1 col-end-5"
              style={{
                background: `linear-gradient(to right, hsl(174, 77%, 80%) ${
                  selectedIndex * 25
                }%, hsl(224, 65%, 95%) ${selectedIndex * 25}%)`,
              }}
            />
            {/* Price Display */}
            <div className="flex items-center justify-center gap-2 col-start-3 row-start-1 row-end-2 col-end-5 sm:justify-self-end sm:self-center">
              <p className="text-3xl font-manrope-800 text-neutral-dark-desaturated-blue">
                ${finalPrice}{" "}
              </p>
              <span className="">/ {isYearly ? "year" : "month"}</span>
            </div>

            {/* Toggle Switch */}
            <label className="grid grid-cols-5 col-start-1 col-end-5 items-center justify-center gap-1 cursor-pointer text-xs">
              <p className="col-span-2 justify-self-end">Monthly Billing</p>
              <input
                type="checkbox"
                className="hidden"
                onChange={() => setIsYearly(!isYearly)}
              />
              <div
                className={`w-10 h-6 rounded-full place-self-center bg-neutral-light-grayish-blue-toggle hover:bg-primary-soft-cyan relative transition-all ${
                  isYearly ? "bg-green-500" : ""
                }`}
              >
                <div
                  className={`w-4 h-4 bg-neutral-white rounded-full absolute top-1 transition-all ${
                    isYearly ? "right-1" : "left-1"
                  }`}
                ></div>
              </div>
              <div className="col-span-2 flex gap-1 items-center justify-start">
                <p className="text-nowrap">Yearly Billing </p>
                <p className="bg-primary-light-grayish-red text-primary-light-red font-manrope-800 rounded-xl py-1 px-2 text-[10px]">
                  <span className="block sm:hidden">-25%</span>
                  <span className="hidden sm:block">25% discount</span>
                </p>
              </div>
            </label>
          </form>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-28 items-center justify-center gap-6 p-8">
            <div className="space-y-1">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center sm:justify-start gap-4"
                >
                  <img src={iconCheck} alt="" className="size-3" />
                  <p className="relative z-10">{feature}</p>
                </div>
              ))}
            </div>

            <button className="bg-neutral-dark-desaturated-blue text-neutral-light-grayish-blue-toggle hover:text-neutral-white py-3 px-12 w-fit rounded-full">
              Start my trial
            </button>
          </div>
        </div>
      </main>
      <footer class="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-primary-strong-cyan"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="#" className="text-primary-light-red">
          Onyinye Oguocha
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
