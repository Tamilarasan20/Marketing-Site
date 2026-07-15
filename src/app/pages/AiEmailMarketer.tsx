import AgentLandingPage from "../components/AgentLandingPage";
import { agents } from "../data/agents";

export default function AiEmailMarketer() {
  return <AgentLandingPage agent={agents.clara} />;
}
