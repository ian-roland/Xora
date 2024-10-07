import clsx from "clsx";
import { useState } from "react";
import { Element } from "react-scroll";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-[960px] border-2 border-red-500">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>

            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <button className={clsx('pricing-head_btn' , monthly && "text-p4")} onClick={() => setMonthly(true)}>Monthly</button>
              <button className={clsx('pricing-head_btn' , !monthly && "text-p4")} onClick={() => setMonthly(false)}>Annual</button>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
