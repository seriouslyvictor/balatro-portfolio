import { useState } from 'react';
import './Card.inspection.css';
import './Card.wobble.css';
import './Card.lift.css';

function Card({
  topText = "JOKER",
  bottomText = "JACK",
  imageUrl,
  imageSrc,
  initialState = "idle" // "idle" | "inspect" | "lift"
}) {
  const [cardState, setCardState] = useState(initialState);
  // Random delay for each card's wobble animation (for natural staggered effect)
  const randomDelay = Math.random();

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
    setCardState(prevState => prevState === "lift" ? "idle" : "lift");
  };

  return (
    <div
      className={`card-container card-state-${cardState}`}
      style={{
        perspective: "560px",
        transformStyle: "preserve-3d"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        className="card-inner bg-white rounded-lg shadow-lg font-balatro"
        style={{
          width: "162px",
          height: "219px",
          '--rand': randomDelay
        }}
      >
        {/* Top Left Text (vertical, top-down) */}
        <div className="absolute top-3 left-2 pointer-events-none z-10">
          <div className="vertical-text text-xl font-bold text-gray-700 tracking-widest">
            {topText}
          </div>
        </div>

        {/* Center Image */}
        <div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none z-10">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={topText}
              className="max-w-full max-h-full object-contain"
            />
          )}
        </div>

        {/* Bottom Left Text (vertical, bottom-up) */}
        <div className="absolute bottom-3 right-2 pointer-events-none z-10">
          <div className="vertical-text-reverse text-xl font-bold text-gray-700 tracking-widest">
            {bottomText}
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
          writing-mode: vertical-lr;
          text-orientation: mixed;
        }

        .vertical-text-reverse {
          writing-mode: vertical-lr;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}

export default Card;
