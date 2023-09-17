import React from "react";

const HeartRate = (props) => {
  const { checkCount, setCheckCount } = props;

  return (
    <div>
      <div className="rating gap-1">
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-red-400"
          checked={checkCount === 1 ? true : false}
          onChange={() => setCheckCount(1)}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-orange-400"
          checked={checkCount === 2 ? true : false}
          onChange={() => setCheckCount(2)}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-yellow-400"
          checked={checkCount === 3 ? true : false}
          onChange={() => setCheckCount(3)}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-lime-400"
          checked={checkCount === 4 ? true : false}
          onChange={() => setCheckCount(4)}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-green-400"
          checked={checkCount === 5 ? true : false}
          onChange={() => setCheckCount(5)}
        />
      </div>
    </div>
  );
};

export default HeartRate;
