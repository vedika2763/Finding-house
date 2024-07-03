import { useEffect, useState } from "react";

const Counter = ({ finalNumber }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < finalNumber) {
        setCount(count + 1);
      }
    }, 100); // Adjust the interval for smoother animation

    return () => clearInterval(timer);
  }, [count, finalNumber]);

  return <p className="counter text-left">{count}</p>;
};

export default Counter;
