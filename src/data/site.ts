/**
 * Global site identity and metadata. Edit here; every page reads from this.
 */
export const site = {
  name: 'Leo Martinez III',
  role: 'AI/LLM Security Engineer',
  location: 'Texas',
  availability: 'open to remote',

  email: 'mtz3.leo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/leo-martinez-iii/',
  github: 'https://github.com/LeoMartinezTAMUK',
  researchgate: 'https://www.researchgate.net/profile/Leo-Martinez-Iii',

  /**
   * The hero statement, split into parts so the "build" and "break" words
   * can carry the site's two accent colors. The parallel two-sentence form
   * ("I build... I break...") mirrors the dual-spectrum motif.
   */
  statement: {
    pre: 'I ',
    build: 'build',
    mid: ' AI agents. I ',
    break: 'break',
    post: ' the ones that can’t be trusted.',
  },

  /** One-line support text under the hero statement. */
  heroSupport:
    'Adversarial LLM evaluation, autonomous coding agents, and ML-based ' +
    'cyber threat detection. Research to production.',

  /**
   * Organizations shown as the hero trust line. Rendered with non-breaking
   * spaces inside each name (see index.astro), so the line only ever wraps
   * between orgs.
   */
  orgs: [
    'SAIC × Scale AI',
    'DOE/NNSA - LLNL',
    'DHS/CBP',
    'CVS Health',
    'TAMUK',
  ],

  /** <title> and meta description used across the site.
   * Description stays near 155 chars so search results show it untruncated. */
  title: 'Leo Martinez III · AI/LLM Security Engineer',
  description:
    'AI/LLM security engineer. I build AI agents and break the ones that ' +
    'can’t be trusted: adversarial LLM evals, agent benchmarks, and ' +
    'ML-based cyber threat detection.',
} as const;
