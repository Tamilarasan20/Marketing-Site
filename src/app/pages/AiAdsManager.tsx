import AgentLandingPage from "../components/AgentLandingPage";
import { agents } from "../data/agents";

export default function AiAdsManager() {
  return <AgentLandingPage agent={agents.angie} />;
}
