/**
 * Shared content types. Every section of the site renders from typed data in
 * this folder, so adding a project or a job is a one-file edit and typos
 * surface as build errors instead of silent layout bugs.
 */

/**
 * The site's core motif. Everything Leo does sits on this axis:
 *   build - engineering: agents, models, software
 *   break - adversarial: red-teaming, evals, threat analysis
 *   both  - work that is simultaneously AI and security
 */
export type Spectrum = 'build' | 'break' | 'both';

export interface Project {
  name: string;
  /** Short descriptor shown under the project name. */
  tagline: string;
  /** 1-2 sentence impact summary. */
  impact: string;
  tech: string[];
  spectrum: Spectrum;
  /** Link to the source repository. Omit if the repo is private - the card
   * will show a "private repo" marker instead of a source link. */
  github?: string;
  /** Optional highlight, e.g. a publication note. */
  badge?: string;
}

/**
 * A secondary project shown as a compact tile in the "more projects" row -
 * one line, a spectrum dot, and a source link. Lighter weight than Project.
 */
export interface MiniProject {
  name: string;
  blurb: string;
  spectrum: Spectrum;
  github: string;
}

export interface Role {
  org: string;
  title: string;
  /** Human-readable range, e.g. "May 2026 - present". */
  dates: string;
  location?: string;
  spectrum: Spectrum;
  bullets: string[];
}

export interface Degree {
  school: string;
  degree: string;
  /** e.g. "Minor in Cyber Intelligence" or "Thesis-based". */
  detail?: string;
  gpa?: string;
  /** e.g. "Aug 2020 to May 2024". */
  years?: string;
}

export interface ResearchItem {
  /** Mono label rendered before the entry, e.g. "thesis". */
  kind: string;
  title: string;
  note?: string;
  /** Optional external link (publication DOI, etc.). */
  href?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}
