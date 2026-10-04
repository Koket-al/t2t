/**
 * PROJECT DATA — single source of truth for every T2T project.
 *
 * ➕ To add a future project: copy a block, change the fields, save.
 *    It will automatically appear on the Projects page (and in the
 *    footer/home highlights via the same import). No component edits needed.
 *
 * Statuses used: Building · Prototype · Research · Experimental · Completed · Coming Soon
 */

export const projects = [
  {
    slug: 't2t',
    name: 'T2T — Trash to Token',
    tagline: 'Ethereum-Secured Circular Economy Infrastructure',
    category: 'Circular Economy · Web3 · Sustainability',
    description:
      'Explores how discarded materials can become digitally represented assets — creating incentives for recycling, building digital identity, and connecting physical activity with digital value.',
    longDescription:
      'T2T is the flagship experiment of T2T Technologies. The core question: can a discarded bottle or can carry a digital identity that makes recycling rewarding, verifiable, and worth doing again? The project connects physical materials to blockchain-based digital assets, exploring how small real-world actions can accumulate into verifiable digital history.',
    problem:
      'Recycling participation stays low when the act of recycling offers nothing back: no proof, no reward, no identity. Existing systems rarely make the individual contribution visible, so the loop between physical waste and digital value remains open.',
    idea:
      'Represent recoverable materials as digital tokens secured by Bitcoin-level infrastructure. Each verified recycling event becomes a data point — feeding rewards, building a digital identity for the contributor, and making circular-economy activity measurable.',
    howItWorks: [
      {
        title: 'Physical drop-off',
        text: 'Discarded materials are deposited and verified at collection points.',
      },
      {
        title: 'Verification',
        text: 'AI-assisted recognition and data capture confirm the material and the event.',
      },
      {
        title: 'Digital twin',
        text: 'The event is represented on-chain, linking material to a verifiable digital asset.',
      },
      {
        title: 'Identity & rewards',
        text: 'Contributors build a portable digital identity and earn token-based incentives.',
      },
    ],
    architectureNote:
      'Source code is available on GitHub — implementation details and architecture notes live in the repository.',
    technology: [
      'Blockchain',
      'ethereum',
      'AI recognition',
      'Digital identity',
      'RWA',
      'DePIN',
      'X-2-Earn',
      'Data systems',
    ],
    concepts: [
      'Recycling rewards',
      'Digital identity',
      'Real-world assets (RWA)',
      'DePIN',
      'Token',
      'Product authenticity',
    ],
    status: 'Completed',
    featured: true,
    github: 'https://github.com/koket-al/T2T-Technologies',
    demo: '',
    future: [
      'Validate the token model with a small-scale physical pilot',
      'design and implement a smart bin for automated recognition and verification',
      'Integrate with existing recycling infrastructure and partners',
      'Define the digital identity structure for contributors',
    ],
  },
  {
    slug: 'ghost',
    name: 'Ghost',
    tagline: 'Programmable Impermanence',
    category: 'Blockchain · Web3 · Experimental',
    description:
      'Temporary blockchain spaces that disappear on schedule — while preserving verifiable evidence that they existed and were used.',
    longDescription:
      'Ghost explores a paradox: digital spaces that vanish, on a ledger famous for remembering everything. Rooms can be created for a conversation, a drop, or an event, and set to dissolve after a time, an event, or a custom condition. What remains is not the space, but cryptographic proof that it existed.',
    problem:
      'Everything online is permanent by default. Messages, files, and rooms accumulate forever — yet there is no native way to have a digital space that is guaranteed to end, with proof that it happened.',
    idea:
      'Make impermanence a programmable feature. Ghost rooms live on-chain with expiration logic — dissolved by time, by events, or by conditions defined at creation. The blockchain layer preserves attestations of existence and use, even after the space itself is gone.',
    howItWorks: [
      {
        title: 'Create a room',
        text: 'A temporary space is deployed with its dissolution rules defined upfront.',
      },
      {
        title: 'Use it',
        text: 'Participants interact inside the room while it exists.',
      },
      {
        title: 'Dissolution',
        text: 'The room disappears when its condition triggers — time, event, or custom logic.',
      },
      {
        title: 'Verifiable remains',
        text: 'An on-chain attestation proves the room existed and was used, nothing more.',
      },
    ],
    architectureNote:
      'Source code is available on GitHub — the dissolution-condition contract patterns are implemented and documented in the repository.',
    technology: ['Solidity', 'Smart contracts', 'Ethereum', 'On-chain attestation'],
    concepts: ['Programmable impermanence', 'Ephemeral spaces', 'Verifiable existence'],
    status: 'Completed',
    featured: false,
    github: 'https://github.com/koket-al/Ghost',
    demo: 'https://ethghostvert.vercel.app/',
    future: [
      'Prototype the dissolution-condition contract patterns',
      'Define what the persistence layer should (and should not) store',
      'Test room lifecycle UX end to end',
    ],
  },
  {
    slug: 'reactsure',
    name: 'ReactSure',
    tagline: 'A Smoke Detector for DeFi',
    category: 'DeFi · Smart Contracts · Blockchain',
    description:
      'Parametric DeFi insurance, explored as a prototype: predefined market conditions that can automatically trigger a policy response.',
    longDescription:
      'ReactSure applies the logic of a smoke detector to decentralized finance. Instead of filing claims after a loss, a policy watches predefined on-chain conditions — and when they trigger, the response executes automatically. It is an exploration of reactivity in DeFi, built as a prototype, not a production insurance product.',
    problem:
      'DeFi losses often happen faster than any claim process. Traditional insurance depends on human assessment after the fact; DeFi needs protection that reacts in the same medium the risk lives in — on-chain, automatically.',
    idea:
      'Parametric policies where payout conditions are defined before anything happens. Oracle feeds watch the market; when a condition matches, the contract responds — no claims, no adjusters, no waiting.',
    howItWorks: [
      {
        title: 'Define conditions',
        text: 'A policy encodes objective, measurable triggers (e.g. price thresholds, volatility).',
      },
      {
        title: 'Watch via oracles',
        text: 'Oracle feeds stream external market data to the contract.',
      },
      {
        title: 'Automatic trigger',
        text: 'When conditions match, the policy response executes on its own.',
      },
      {
        title: 'Payout',
        text: 'Protection is delivered without a claims process.',
      },
    ],
    architectureNote:
      'Prototype contracts explore trigger patterns and oracle integration — full protocol design not yet public.',
    technology: ['Solidity', 'Smart contracts', 'Oracles', 'DeFi primitives'],
    concepts: ['Parametric insurance', 'Blockchain reactivity', 'Automated risk response'],
    status: 'Prototype',
    featured: false,
    github: '',
    demo: '',
    future: [
      'Harden the trigger-condition contract patterns',
      'Test oracle integration on a testnet',
      'Document the policy lifecycle',
    ],
  },
  {
    slug: 'zenith',
    name: 'Zenith',
    tagline: 'Stealth Loan',
    category: 'AI · Privacy · DeFi',
    description:
      'Private lending infrastructure, explored as research: blockchain, AI-assisted risk assessment, and confidential computation.',
    longDescription:
      'Zenith asks whether lending can be private by default. The research direction combines blockchain settlement, AI-assisted risk assessment, and confidential computation (such as iExec-style confidential infrastructure) so that a borrower can prove creditworthiness without exposing identity or financial history.',
    problem:
      'On-chain lending today is fully transparent — positions, history, and strategy are public. That transparency excludes users who need privacy, and it exposes strategies to copycats and liquidation hunters.',
    idea:
      'A lending flow where risk assessment runs on confidential computation, collateral and settlement stay on-chain, and the borrower reveals nothing more than the minimum required to underwrite the loan.',
    howItWorks: [
      {
        title: 'Confidential profile',
        text: 'Borrower data is assessed inside a confidential computation environment.',
      },
      {
        title: 'AI risk assessment',
        text: 'Models evaluate risk without exposing the underlying data.',
      },
      {
        title: 'On-chain settlement',
        text: 'Loan terms and collateral are executed by smart contracts.',
      },
      {
        title: 'Private by design',
        text: 'Identity and history remain hidden from public view.',
      },
    ],
    architectureNote:
      'Research-stage design — the confidential computation architecture is still being defined.',
    technology: ['Blockchain', 'AI models', 'Confidential computation', 'iExec', 'DeFi'],
    concepts: ['Private lending', 'Zero-exposure underwriting', 'Confidential DeFi'],
    status: 'Research',
    featured: false,
    github: '',
    demo: '',
    future: [
      'Scope the confidential-computation requirements',
      'Model risk-assessment approaches on synthetic data',
      'Draft the on-chain settlement design',
    ],
  },
  {
    slug: 'nft-marketplace',
    name: 'NFT Marketplace',
    tagline: 'A decentralized marketplace concept',
    category: 'Web3 · NFTs · Smart Contracts',
    description:
      'A decentralized marketplace concept for listing, buying, and selling NFTs — built to grow feature by feature as development continues.',
    longDescription:
      'A full-stack exploration of NFT market mechanics: on-chain listings, fixed-price sales, platform fees, and wallet integration, with a React front end. This page is intentionally easy to expand — each feature lands in the marketplace as development continues.',
    problem:
      'Understanding NFT marketplaces from the outside is easy; building one teaches where the real edge cases live — approval flows, fee handling, listing state, and metadata management.',
    idea:
      'A clean, complete marketplace loop: list an NFT at a fixed price, let others buy it, enforce a platform fee in the contract, and allow sellers to cancel — all enforced by the smart contract, not the interface.',
    howItWorks: [
      {
        title: 'Connect wallet',
        text: 'Users connect an Ethereum wallet to interact with the contracts.',
      },
      {
        title: 'List an NFT',
        text: 'Sellers set a fixed price; the listing is recorded on-chain.',
      },
      {
        title: 'Buy or cancel',
        text: 'Buyers purchase at the listed price; sellers can cancel active listings.',
      },
      {
        title: 'Fee enforced on-chain',
        text: 'The platform fee is applied inside the contract on every sale.',
      },
    ],
    architectureNote:
      'Built with React + Solidity on Ethereum, using Hardhat and OpenZeppelin contracts. Feature notes will be expanded as development continues.',
    technology: ['React', 'JavaScript', 'Solidity', 'Ethereum', 'Hardhat', 'OpenZeppelin'],
    concepts: ['NFT listings', 'Fixed-price sales', 'Platform fees', 'Wallet integration'],
    status: 'Building',
    featured: false,
    github: '',
    demo: '',
    future: [
      'Complete auction-style listings',
      'Add collection pages and metadata previews',
      'Refine the fee structure',
    ],
  },
]

/** Look up a project by its URL slug (returns undefined if not found). */
export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}

export const projectStatuses = [
  'Building',
  'Prototype',
  'Research',
  'Experimental',
  'Completed',
  'Coming Soon',
]
