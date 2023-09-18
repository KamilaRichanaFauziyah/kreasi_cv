import { SectionHeading } from '../atoms/SectionHeading';
import { SectionText } from '../atoms/SectionText';
import { HTMLRenderer } from 'src/helpers/common/components/HTMLRenderer';

export const Objective = ({ objective }: { objective: string }) => {
  return (
    <>
      <SectionHeading title="Tujuan karier" />
      <SectionText>
        <HTMLRenderer htmlString={objective} />
      </SectionText>
    </>
  );
};
