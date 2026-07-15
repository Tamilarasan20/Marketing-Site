import AgentLandingPage from "../components/AgentLandingPage";
import { agents } from "../data/agents";

export default function AiMarketingLead() {
  return <AgentLandingPage agent={agents.lora} />;
}
