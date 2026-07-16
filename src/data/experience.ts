import type { Role } from './types';

/**
 * Work history, newest first. To add a role: prepend an object here.
 * `spectrum` colors the timeline marker: build (blue), break (red), both (violet).
 */
export const experience: Role[] = [
  {
    org: 'SAIC, partnered with Scale AI',
    title: 'Senior AI/LLM Security Engineer',
    dates: 'May 2026 to present',
    location: 'Remote (Reston, VA)',
    spectrum: 'break',
    bullets: [
      'Run adversarial security evaluations of LLM agents: jailbreaks, ' +
        'prompt injection, policy bypasses, sensitive-information ' +
        'disclosure, and unsafe cyber outputs.',
      'Jailbreak LLM agents to elicit specific categories of malware in a ' +
        'sandboxed environment, grading each output on whether working code ' +
        'emerged, the agent’s effort (multi-step reasoning and ' +
        'self-correction), and whether it layered in obfuscation or error ' +
        'handling.',
      'Design cyber-focused evaluation scenarios spanning realistic attack, ' +
        'defense, incident-response, network traffic analysis, and security ' +
        'decision-making tasks.',
      'Analyze agent behavior for exploitable actions, reasoning failures, ' +
        'unsafe compliance, and hallucinated security guidance, documenting ' +
        'failure modes in structured reports across model families.',
      'Review other engineers’ agent jailbreak submissions to approve or ' +
        'reject each, mentoring cybersecurity engineers and pentesters on ' +
        'adversarial technique through the review process.',
    ],
  },
  {
    org: 'DOE/NNSA, Lawrence Livermore National Laboratory',
    title: 'AI Engineer',
    dates: 'May 2025 to May 2026',
    location: 'Remote (Livermore, CA)',
    spectrum: 'build',
    bullets: [
      'Built LLM-powered agents and evaluation workflows for 50+ C++ repair ' +
        'tasks (code generation, vulnerability checks, rebuilds, testing, ' +
        'logging, and patch verification), cutting manual review effort by 35%.',
      'Engineered custom Docker images to extend the capabilities of ' +
        'existing software agents, and trained/tested on datasets built to ' +
        'automate codebase bug patching.',
    ],
  },
  {
    org: 'Department of Homeland Security - CBP, Branch of Cyber Intelligence',
    title: 'Cyber Threat Intelligence Intern',
    dates: 'May to Aug 2024',
    location: 'Remote (Ashburn, VA)',
    spectrum: 'break',
    bullets: [
      'Analyzed 30+ threat reports with MITRE ATT&CK TTP assessments and ' +
        'performed threat hunts using Splunk, CrowdStrike, and Tanium.',
      'Combined quantitative dataset analysis with qualitative TTP ' +
        'assessment to deliver actionable security recommendations ' +
        '(ORISE-partnered internship).',
    ],
  },
  {
    org: 'Texas A&M University-Kingsville',
    title: 'AI/ML Graduate Research Assistant',
    dates: 'Jan 2023 to Jun 2025',
    location: 'Hybrid (Kingsville, TX)',
    spectrum: 'both',
    bullets: [
      'Trained DNN, AE, CNN, and LSTM/GRU-RNN models for classification ' +
        'problems in AI cybersecurity, reducing false negatives by 10%.',
      'Analyzed contemporary ML/AI and cyber-intelligence research and ' +
        'wrote conference manuscripts, with work published at IEEE ICAIC and ' +
        'INTCEC.',
    ],
  },
  {
    org: 'CVS Health',
    title: 'Software Engineer Intern',
    dates: 'May to Aug 2023',
    location: 'Remote (Woonsocket, RI)',
    spectrum: 'build',
    bullets: [
      'Improved patient access to medication through mobile-app and web UI ' +
        'enhancements using Postman, Flask/Django, and Spring Boot, working ' +
        'in an agile production environment.',
    ],
  },
  {
    org: 'TAMUK, Information Technology Services',
    title: 'Technology Advisor',
    dates: 'Aug 2021 to Mar 2024',
    location: 'On-site (Kingsville, TX)',
    spectrum: 'build',
    bullets: [
      'Network troubleshooting and infrastructure support across campus, ' +
        'from rewiring damaged ethernet to assessing critical infrastructure ' +
        'alongside network engineers.',
    ],
  },
];
