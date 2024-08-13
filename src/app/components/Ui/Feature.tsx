import React from "react";

type FeatureProps = {
  className?: string;
  h3?: string;
  p?: string;
  imgclassName?: string;
};
export default function Feature({
  className,
  imgclassName,
  h3,
  p,
}: FeatureProps) {
  return (
    <div className="flex my-5">
      <div className="w-[16px] h-[112px] bg-white rounded-s-3xl"></div>
      <div
        className={`flex  justify-center gap-5 items-center rounded-e-3xl pl-5 ${className}`}
      >
        <div className={`mx-2 p-2 rounded-2xl ${imgclassName}`}>
          {/* <MdOutlineEmail size={40} className={`text-white `} /> */}
        </div>
        <div className="flex flex-col gap-4">
          <h3>{h3}</h3>
          <p>{p}</p>
        </div>
      </div>
    </div>
  );
}
