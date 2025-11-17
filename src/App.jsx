import Card from "./components/Card";
import Balatro from "./components/balatro-background";
import jokerImg from "./assets/images/jokers/joker.png";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-8 relative">
      {/* Balatro Background */}
      <div className="fixed inset-0 z-0">
        <Balatro mouseInteraction={false} spinAmount={0.1} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Balatro Card Component
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center text-white/90 space-y-2">
            <p className="text-lg font-semibold">Card States:</p>
            <ul className="space-y-1 text-sm">
              <li>
                <span className="text-blue-400">Idle:</span> Cards wobble/float
                by default
              </li>
              <li>
                <span className="text-green-400">Inspect:</span> Hover over a
                card for 3D inspection
              </li>
              <li>
                <span className="text-orange-400">Lift:</span> Click a card to
                select/deselect (persists on hover)
              </li>
            </ul>
          </div>

          <div className="flex gap-8 justify-center items-center flex-wrap">
            <Card topText="JOKER" bottomText="JOKER" imageSrc={jokerImg} />
            <Card topText="QUEEN" bottomText="QUEEN" />
            <Card topText="KING" bottomText="KING" />
            <Card topText="ACE" bottomText="ACE" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
