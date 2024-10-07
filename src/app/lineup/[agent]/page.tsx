"use client"
import { useParams } from "next/navigation";
import Link from "next/link";

const agentLineups = {
  Sova: "Here are Sova's lineups...",
  Brimstone: "Here are Brimstone's lineups...",
  Viper: "Here are Viper's lineups...",
  Killjoy: "Here are Killjoy's lineups...",
  Harbor: "Here are Harbor's lineups...",
  Cypher: "Here are Cypher's lineups...",
  Yoru: "Here are Yoru's lineups...",
  Fade: "Here are Fade's lineups...",
};

export default function AgentLineup() {
  const params = useParams(); // useParams to access the dynamic route
  const agent = params.agent; // Get the dynamic 'agent' parameter

  if (!agent) {
    return <div>Loading...</div>;
  }

  const lineup = agentLineups[agent as keyof typeof agentLineups] || "No lineups available for this agent.";

  return (
    <main className="container mx-auto p-24">
      <h1 className="text-3xl font-bold mb-6">{agent} Lineups</h1>
      <p>{lineup}</p>
      <Link href="/" className="mt-4 inline-block text-blue-500">
        Back to home
      </Link>
    </main>
  );
}
