import Card from "./components/Card";
import Balatro from "./components/balatro-background";
import jokerImg from "./assets/images/jokers/joker.png";
import n8nImg from "./assets/images/jokers/n8n.png";
import webdevImg from "./assets/images/jokers/webdev.png";
import pythonic from "./assets/images/jokers/pythonic.png";

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
          PORTIFÓLIO BALATREAL
        </h1>

        <div className="flex gap-8 justify-center items-center flex-wrap">
          <Card topText="JOKER" bottomText="JOKER" imageSrc={jokerImg} />
          <Card topText="JOKER" bottomText="JOKER" backgroundSrc={n8nImg} />
          <Card
            topText="JOKER"
            bottomText="JOKER"
            backgroundSrc={webdevImg}
            hasBorder={true}
          />
          <Card topText="JOKER" bottomText="JOKER" imageSrc={pythonic} />
        </div>
      </div>
    </div>
  );
}

export default App;
