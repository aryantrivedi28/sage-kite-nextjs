import { CaseStudyPage, caseStudyMetadata } from '@/components/case-studies/CaseStudyPage';
import study from './study';

export const metadata = caseStudyMetadata(study);

export default function Page() {
  return <CaseStudyPage study={study} />;
}
