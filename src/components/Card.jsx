function Card({ topText = "JOKER", bottomText = "JACK", imageUrl, imageSrc }) {
  return (
    <div
      className="relative bg-white rounded-lg shadow-lg font-balatro"
      style={{ width: "162px", height: "219px" }}
    >
      {/* Top Left Text (vertical, top-down) */}
      <div className="absolute top-3 left-2">
        <div className="vertical-text text-xl font-bold text-gray-700 tracking-widest">
          {topText}
        </div>
      </div>

      {/* Center Image */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={topText}
            className="max-w-full max-h-full object-contain"
          />
        )}
      </div>

      {/* Bottom Left Text (vertical, bottom-up) */}
      <div className="absolute bottom-3 right-2">
        <div className="vertical-text-reverse text-xl font-bold text-gray-700 tracking-widest">
          {bottomText}
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
