import Link from "next/link";

export default function Home() {
  const agents = [
    { name: "Sova", imgSrc: "/img/sova.png" },
    { name: "Chamber", imgSrc: "/img/chamber.png" },
    { name: "Raze", imgSrc: "/img/raze.png" },
    { name: "Viper", imgSrc: "/img/viper.png" },
    { name: "Killjoy", imgSrc: "/img/killjoy.png" },
    { name: "Sage", imgSrc: "/img/sage.png" },
    { name: "Yoru", imgSrc: "/img/yoru.png" },
    { name: "Fade", imgSrc: "/img/fade.png" },
  ];

  return (
    <main className="container mx-auto p-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"> {/* Responsive grid layout */}
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="relative w-full h-96 bg-[radial-gradient(circle,_rgba(var(--card),0.8),_rgba(var(--card),0.8))] border border-gray-300 shadow-lg transition duration-200 overflow-hidden group hover:border-blue-500"
          >
            <Link href={`/lineup/${agent.name}`}>
              <img
                src={agent.imgSrc}
                alt={agent.name}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-10 transition-transform duration-200 object-cover scale-150 group-hover:scale-110" // Zoom on hover
              />
              <h1 className="w-full px-4 py-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xl font-bold text-white bg-slate-800 bg-opacity-80 transition duration-200 group-hover:bg-blue-500">
                {agent.name}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
