import type { MiniProject, Project } from './types';

/**
 * Featured projects, rendered as full cards in order on the homepage.
 * To add one: append an object here - nothing else to touch.
 *
 * Order is deliberate: it leads with the "break" side (the rarer half of the
 * profile), and the first three cards are one of each spectrum
 * (break -> both -> build), so a visitor who reads only the top of the
 * section already sees the full hybrid story.
 */
export const projects: Project[] = [
  {
    name: 'MCP-Strike',
    tagline: 'Adversarial security scanner for MCP servers',
    impact:
      'An active, runtime adversarial security scanner for Model Context ' +
      'Protocol (MCP) servers. It exercises a server’s live tools to surface ' +
      'exploitable behavior and reports structured findings, shipped as an ' +
      'installable Python CLI on PyPI.',
    tech: ['Python', 'MCP', 'Typer', 'pydantic'],
    spectrum: 'break',
    github: 'https://github.com/LeoMartinezTAMUK/mcp-strike',
    badge: 'Published · PyPI',
  },
  {
    name: 'C2TGAN-NIDS',
    tagline: 'Image-based CNN intrusion detection with GAN balancing',
    impact:
      'My master’s thesis and a first-author IEEE ICAIC 2026 paper: a ' +
      '5-class CNN that reshapes tabular NSL-KDD traffic into 11×11 ' +
      'grayscale images to exploit spatial features, balanced with a CTGAN ' +
      'and undersampling pipeline. It averages 6.6% higher accuracy and ' +
      '12.4% higher F1 than state-of-the-art baselines.',
    tech: ['Python', 'Keras', 'CNN', 'CTGAN'],
    spectrum: 'both',
    github: 'https://github.com/LeoMartinezTAMUK/CNN-CTGAN_5-Class_ID',
    badge: 'Published · IEEE ICAIC 2026',
  },
  {
    name: 'Context-Constrained C++ Codebase AI Agent',
    tagline: 'Autonomous repair agent for large C++ repositories',
    impact:
      'An autonomous coding agent that navigates large C++ repos under a ' +
      'hard 5,000-token context budget. Hybrid code retrieval with LLM ' +
      'ranking decides what the model gets to see, and automated build/test ' +
      'execution with compiler-error parsing closes the loop on every change.',
    tech: ['Python', 'OpenAI API', 'CMake', 'LLM agents'],
    spectrum: 'build',
    github: 'https://github.com/LeoMartinezTAMUK/codebase_AI-agent',
  },
  {
    name: 'ROSE-Bench',
    tagline: 'Benchmark for LLM agents on real-world C++ repair',
    impact:
      'A domain-specific benchmark for evaluating autonomous LLM agents on ' +
      'real-world C++ compiler and bug repair, built from a curated dataset ' +
      'of real Git issues with reproducible Docker and Bash infrastructure ' +
      'so every result can be re-run.',
    tech: ['Python', 'Docker', 'Bash', 'C++', 'LLM evals'],
    spectrum: 'break',
    // Private repository: no github link, the card shows "private repo".
  },
  {
    name: 'DNN-CTGAN NIDS',
    tagline: 'Tabular DNN intrusion detection with GAN oversampling',
    impact:
      'A co-first-author IEEE INTCEC 2024 paper and the tabular counterpart ' +
      'to C2TGAN-NIDS: a deep neural network that classifies four NSL-KDD ' +
      'attack classes directly from tabular traffic, using CTGAN to ' +
      'synthesize minority-class samples. The balanced pipeline lifts ' +
      'average F1 by roughly 80% over prior CGAN and WCGAN oversampling ' +
      'baselines.',
    tech: ['Python', 'Keras', 'DNN', 'CTGAN'],
    spectrum: 'both',
    github: 'https://github.com/LeoMartinezTAMUK/Network_Intrusion_DNN-CTGAN',
    badge: 'Published · IEEE INTCEC 2024',
  },
];

/**
 * Secondary projects - compact tiles under the featured cards.
 * To add one: append an object here.
 */
export const moreProjects: MiniProject[] = [
  {
    name: 'Home-Lab SOC Portfolio',
    blurb:
      'Simulated Security Operations Center lab in VirtualBox, documenting ' +
      'cyber attacks and their detections.',
    spectrum: 'break',
    github: 'https://github.com/LeoMartinezTAMUK/Home-Lab-SOC-Portfolio',
  },
  {
    name: 'IRIS',
    blurb:
      'Deep-learning framework for real-time network intrusion detection ' +
      'using DNNs.',
    spectrum: 'both',
    github: 'https://github.com/LeoMartinezTAMUK/IRIS',
  },
  {
    name: 'Ransomware Family Classifier',
    blurb:
      'DNN that classifies ransomware families using the Ransomware RISS ' +
      'dataset.',
    spectrum: 'both',
    github:
      'https://github.com/LeoMartinezTAMUK/Ransomware_Family_Classification_ML',
  },
  {
    name: 'PCAP-to-CSV Extractor',
    blurb:
      'PyShark-based tool that converts packet captures into CSV feature ' +
      'sets for ML pipelines.',
    spectrum: 'build',
    github: 'https://github.com/LeoMartinezTAMUK/pcap-to-csv-extractor',
  },
];
