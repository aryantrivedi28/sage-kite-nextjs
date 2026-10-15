/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SAGE KITE — CASE STUDIES
 * ─────────────────────────────────────────────────────────────────────────
 *  How to add a case study
 *  -----------------------
 *  Each case study has its own folder: app/case-studies/<slug>/ with
 *    study.tsx – all the content (see CaseStudy in ./types.ts)
 *    page.tsx  – identical in every folder; never edit it
 *
 *  1. Copy app/case-studies/_template/ to app/case-studies/<your-slug>/.
 *     The folder name must equal `slug`, lowercase with hyphens.
 *  2. Fill in study.tsx. Leave out any section you don't need.
 *  3. Import it below and add it to the TOP of `caseStudies` (newest first).
 *
 *  The /case-studies listing, the page, metadata, Article JSON-LD and the
 *  sitemap are all generated from the data.
 *
 *  Rules
 *  -----
 *  • State the origin of every case study (`origin` + `about`), and say that
 *    results are as reported unless Sage Kite measured them.
 *  • Never invent figures, quotes or clients. Label illustrative diagrams.
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { CaseStudy } from './types';
import hemlockReserve from '@/app/case-studies/hemlock-reserve/study';
import lumenGrowth from '@/app/case-studies/lumengrowth/study';
import santaBarbaraTrapeze from '@/app/case-studies/santa-barbara-trapeze/study';
import labTheory from '@/app/case-studies/labtheory/study';
import getDaily from '@/app/case-studies/get-daily/study';
import sampleSale260 from '@/app/case-studies/260-sample-sale/study';
import esma from '@/app/case-studies/esma/study';
import jensonUsa from '@/app/case-studies/jenson-usa/study';
import jivaAyurveda from '@/app/case-studies/jiva-ayurveda/study';

export * from './types';

/** Newest first. */
export const caseStudies: CaseStudy[] = [hemlockReserve, lumenGrowth, santaBarbaraTrapeze, labTheory, getDaily, sampleSale260, esma, jensonUsa, jivaAyurveda];

export const CASE_STUDIES_PATH = '/case-studies';
export const caseStudyPath = (slug: string) => `${CASE_STUDIES_PATH}/${slug}`;

/** Live (non-draft) case studies, in registry order. */
export const CASE_STUDIES: CaseStudy[] = caseStudies.filter((c) => !c.draft);
