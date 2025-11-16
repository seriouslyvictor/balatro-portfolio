import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Balatro Card Component
      </h1>

      <div className="flex gap-6 justify-center items-center flex-wrap">
        {/* Example cards */}
        <Card topText="JOKER" bottomText="JACK" />
        <Card topText="QUEEN" bottomText="QUEEN" />
        <Card topText="KING" bottomText="KING" />
      </div>
    </div>
  );
}

export default App;
