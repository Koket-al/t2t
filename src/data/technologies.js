/**
 * TECHNOLOGY AREAS — what T2T Technologies works with and why.
 * Rendered on the Technology page and referenced by the tech map.
 */

export const technologies = [
  {
    name: 'Blockchain',
    summary:
      'Shared ledgers that let systems agree without a central authority — the settlement layer for most T2T experiments.',
  },
  {
    name: 'Smart Contracts',
    summary:
      'Programmable agreements that execute exactly as written. The logic layer for DeFi, NFTs, and on-chain automation.',
  },
  {
    name: 'AI',
    summary:
      'Models that recognize, assess, and predict — applied to material verification, risk, and data-heavy problems.',
  },
  {
    name: 'Web3',
    summary:
      'User-owned interfaces and identity on top of public blockchains: wallets, tokens, and permissionless access.',
  },
  {
    name: 'DeFi',
    summary:
      'Financial primitives rebuilt as open software — lending, insurance, and markets that run without institutions.',
  },
  {
    name: 'Digital Identity',
    summary:
      'Portable, verifiable identity built from actions rather than paperwork — a core thread in the T2T flagship project.',
  },
  {
    name: 'Data',
    summary:
      'The raw material of every intelligent system: capturing real-world events and making them trustworthy and useful.',
  },
  {
    name: 'Software Engineering',
    summary:
      'The craft underneath everything — clean architecture, maintainable code, and tools that outlive the hype cycle.',
  },
  {
    name: 'Web Applications',
    summary:
      'Full-stack web2 products — modern front ends, APIs, and back ends that solve business problems end to end.',
  },
  {
    name: 'Sustainability',
    summary:
      'Technology aimed at real-world outcomes: circular economy, recycling incentives, and measurable environmental impact.',
  },
  {
    name: 'Emerging Technologies',
    summary:
      'Deliberate experimentation with what is new — tested seriously, kept if useful, documented either way. If the problem needs web2, web3, or something in between, we build the thing the problem needs.',
  },
]

/**
 * Tech map — the node graph shown on the Technology page.
 * `depth` controls distance from the center node (0 = center).
 */
export const techMapNodes = [
  { label: 'T2T Technologies', depth: 0 },
  { label: 'AI', depth: 1 },
  { label: 'Data Systems', depth: 1 },
  { label: 'Blockchain', depth: 1 },
  { label: 'Web3', depth: 1 },
  { label: 'DeFi', depth: 2 },
  { label: 'Digital Identity', depth: 2 },
  { label: 'Real-World Systems', depth: 2 },
]
