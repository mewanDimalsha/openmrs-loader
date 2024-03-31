import { useEffect, useState, useRef } from "react";
import "./Loader.css";

const Loader = () => {
  const [text, setText] = useState("");
  const message = "Write Code. Save Lives.";
  const index = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setText((prevText) => prevText + message[index.current]);
      index.current++;
      if (index.current > message.length - 1) {
        setText("");
        index.current = 0;
      }
    }, 250);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="loader-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 487.85 486.93"
          className="loader-svg"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                className="cls-1"
                d="M132.47,131.38a158.6,158.6,0,0,1,43-30c12-5.67,55.79-24.52,109-10a158.27,158.27,0,0,1,70,41q1-52.5,2-105a238.11,238.11,0,0,0-97-27c-60.35-3.44-106,17.34-126,28C132.8,57.71,132.13,126.38,132.47,131.38Z"
              />
              <path
                className="cls-2"
                d="M356.47,131.42a159,159,0,0,1,30,43c5.67,12,24.52,55.79,10,109a158.24,158.24,0,0,1-41,70l105,2a238,238,0,0,0,27-97c3.43-60.35-17.35-106-28-126C430.13,131.76,361.47,131.09,356.47,131.42Z"
              />
              <path
                className="cls-3"
                d="M356.38,355.55a158.76,158.76,0,0,1-43,30c-12,5.67-55.79,24.52-109,10a158.3,158.3,0,0,1-70-41q-1,52.5-2,105a238,238,0,0,0,97,27c60.35,3.43,106-17.34,126-28C356.05,429.22,356.71,360.55,356.38,355.55Z"
              />
              <path
                className="cls-4"
                d="M131.38,355.33a158.6,158.6,0,0,1-30-43c-5.67-12-24.52-55.79-10-109a158.27,158.27,0,0,1,41-70l-105-2a238.11,238.11,0,0,0-27,97c-3.44,60.35,17.34,106,28,126C57.71,355,126.38,355.67,131.38,355.33Z"
              />
            </g>
          </g>
        </svg>
        <p className="animated-text">{text}</p>
      </div>
    </>
  );
};
export default Loader;
