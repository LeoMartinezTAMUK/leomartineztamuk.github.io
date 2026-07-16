import type { Certification, SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    label: 'languages',
    items: ['Python', 'Java', 'C++', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    label: 'ai / llm',
    items: [
      'LangChain',
      'RAG',
      'MCP',
      'Vector databases',
      'OpenAI API',
      'Prompt injection',
      'Red-teaming',
      'LLM evals',
    ],
  },
  {
    label: 'ml / deep learning',
    items: [
      'TensorFlow / Keras',
      'scikit-learn',
      'CNNs',
      'GANs',
      'Autoencoders',
      'RNNs',
    ],
  },
  {
    label: 'security',
    items: [
      'Splunk',
      'CrowdStrike',
      'Tanium',
      'Wireshark',
      'Burp Suite',
      'Kali Linux',
      'MITRE ATT&CK',
    ],
  },
  {
    label: 'infrastructure',
    items: ['AWS', 'Azure', 'Docker / Podman', 'CMake', 'Git'],
  },
];

export const certifications: Certification[] = [
  { name: 'Security+', issuer: 'CompTIA' },
  { name: 'CySA+', issuer: 'CompTIA' },
  { name: 'CSAP', issuer: 'CompTIA' },
];

export const awards: string[] = [
  'President’s List & Dean’s List',
  'AT&T Technology Award',
  'DHS Cyber Intelligence Scholarship',
  'DOE NNSA Scholarship',
];
