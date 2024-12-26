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
    <div className="flex mt-1">
      <div className="w-[.5rem] bg-white rounded-s-3xl"></div>
      <div
        className={`flex justify-center gap-5 items-center rounded-e-2xl p-2  ${className} shadow-2xl`}
      >
        <div className="flex flex-col gap-1">
          <h3 className="pl-1 font-bold">{h3}</h3>
          <div className="flex flex-col">
            {p?.split("\n")?.map((item, index) => (
              <div key={index} className="flex flex-col">
                {item?.split(":")?.map((item, index) => (
                  <p
                    key={index}
                    style={{
                      fontSize:
                        index % 2 === 0
                          ? "clamp(.7rem, 1vw, 1rem)"
                          : "clamp(.5rem, 1vw, .8rem)",
                    }}
                    className={`${index % 2 == 0 ? "pl-3 font-semibold" : "pl-5"}`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
