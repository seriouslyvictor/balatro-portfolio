import { useState } from "react";
import "./Card.inspection.css";
import "./Card.wobble.css";
import "./Card.lift.css";

function Card({
  topText = "JOKER",
  bottomText = "JOKER",
  imageSrc,
  backgroundSrc,
  hasBorder = false,
  initialState = "idle", // "idle" | "inspect" | "lift"
}) {
  const [cardState, setCardState] = useState(initialState);
  // Random delay for each card's wobble animation (for natural staggered effect)
  const [randomDelay] = useState(() => Math.random());

  const handleMouseEnter = () => {
    if (cardState !== "lift") {
      setCardState("inspect");
    }
  };

  const handleMouseLeave = () => {
    if (cardState !== "lift") {
      setCardState("idle");
    }
  };

  const handleClick = () => {
    setCardState(prevState => (prevState === "lift" ? "idle" : "lift"));
  };

  return (
    <div
      className={`card-container card-state-${cardState}`}
      style={{
        perspective: "560px",
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        className={`card-inner bg-white rounded-lg shadow-lg font-balatro ${hasBorder ? "border-4 border-white" : ""}`}
        style={{
          "width": "162px",
          "height": "219px",
          "--rand": randomDelay,
        }}
      >
        {/* Background Image */}
        {backgroundSrc && (
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <img
              src={backgroundSrc}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Top Left Text (vertical, top-down) */}
        <div className="absolute top-2 left-2 pointer-events-none z-10">
          <div className="vertical-text text-lg font-bold text-gray-700">
            {topText.split("").map((char, i) => (
              <div key={i} style={{ marginTop: i > 0 ? "-5px" : "0" }}>
                {char}
              </div>
            ))}
          </div>
        </div>

        {/* Center Image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={topText}
              className="w-full h-auto object-contain"
            />
          )}
        </div>

        {/* Bottom Left Text (vertical, bottom-up) */}
        <div className="absolute bottom-2 right-2 pointer-events-none z-10">
          <div className="vertical-text-reverse text-lg font-bold text-gray-700">
            {bottomText.split("").map((char, i) => (
              <div key={i} style={{ marginTop: i > 0 ? "-5px" : "0" }}>
                {char}
              </div>
            ))}
          </div>
        </div>

        {/* Hover Grid - 4x4 grid for detecting hover position */}
        <div className="hover-grid">
          {Array.from({ length: 16 }).map((_, i) => (
            <i key={i} className="hover-cell" data-cell={i + 1}></i>
          ))}
        </div>
      </div>

      <style>{`
        .vertical-text {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .vertical-text-reverse {
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}

export default Card;
