import Reveal from './Reveal.jsx'

/**
 * TechMap — the interactive technology graph.
 * Pure CSS: nodes pulse gently, edges glow on hover of a node.
 */
export default function TechMap() {
  return (
    <Reveal className="techmap-wrap" delay={100}>
      <div className="techmap" role="img" aria-label="Map of T2T technology areas: AI and Data Systems above, Blockchain and Web3 beside the center, DeFi, Digital Identity and Real-World Systems below.">
        <div className="techmap-tier">
          <span className="tech-node t-depth1">AI</span>
        </div>
        <div className="techmap-tier">
          <span className="tech-node t-depth1">Data Systems</span>
        </div>
        <div className="techmap-tier techmap-tier-split">
          <span className="tech-node t-depth1">Blockchain</span>
          <span className="tech-node t-center">T2T Technologies</span>
          <span className="tech-node t-depth1">Web3</span>
        </div>
        <div className="techmap-tier techmap-tier-split">
          <span className="tech-node t-depth2">DeFi</span>
          <span className="tech-node t-depth2">Digital Identity</span>
        </div>
        <div className="techmap-tier">
          <span className="tech-node t-depth2">Real-World Systems</span>
        </div>
      </div>
      <p className="techmap-note">
        Each area feeds the others — models need data, contracts need settlement,
        and the point of it all is real-world systems that work.
      </p>
    </Reveal>
  )
}
