import type { Degree, ResearchItem } from './types';

export const degrees: Degree[] = [
  {
    school: 'Texas A&M University-Kingsville',
    degree: 'M.S. in Computer Science',
    detail: 'Thesis-based',
    gpa: '4.0 GPA',
    years: 'Jan 2024 to May 2025',
  },
  {
    school: 'Texas A&M University-Kingsville',
    degree: 'B.S. in Computer Science',
    detail: 'Minor in Cyber Intelligence',
    gpa: '3.78 GPA',
    years: 'Aug 2020 to May 2024',
  },
];

/**
 * Thesis, publications (newest first), senior design.
 * `href` on a publication makes its title a link (here: the IEEE DOI).
 */
export const research: ResearchItem[] = [
  {
    kind: 'thesis',
    title:
      'C2TGAN-NIDS: CNN and Conditional Tabular GAN-Based Network Intrusion ' +
      'Detection System',
    note: 'M.S. thesis, Texas A&M University-Kingsville',
  },
  {
    kind: 'publication',
    title:
      'Enhancing Intrusion Detection with Image-Based CNN and CTGAN ' +
      'Synthetic Oversampling',
    note: 'IEEE ICAIC 2026 · first author',
    href: 'https://doi.org/10.1109/ICAIC67076.2026.11395738',
  },
  {
    kind: 'publication',
    title:
      'AI2DS: Advanced Deep Autoencoder-Driven Method for Intelligent ' +
      'Network Intrusion Detection Systems',
    note: 'IEEE ICAIC 2025',
    href: 'https://doi.org/10.1109/ICAIC63015.2025.10849290',
  },
  {
    kind: 'publication',
    title:
      'Enhancing Intrusion Detection Through Deep Learning and Generative ' +
      'Adversarial Network',
    note: 'IEEE INTCEC 2024 · co-first author',
    href: 'https://doi.org/10.1109/INTCEC61833.2024.10602926',
  },
  {
    kind: 'senior design',
    title: 'Multi-Threat Detection (M.T.D.), an AI-based Android app',
    note: 'B.S. senior design project',
    href: 'https://github.com/LeoMartinezTAMUK/ML-Based_MTD',
  },
];
