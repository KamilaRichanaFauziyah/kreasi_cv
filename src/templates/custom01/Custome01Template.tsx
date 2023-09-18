import React, { useContext } from 'react';

import AboutMe from './components/AboutMe';
import Achievements from './components/Achievements';
import BasicIntro from './components/BasicIntro';
import { Education } from './components/Education';
import Involvement from './components/Involvement';
import { Objective } from './components/Objective';
import RatedSkills from './components/RatedSkills';
import { Section } from './components/Section';
import { SectionValidator } from 'src/helpers/common/components/ValidSectionRenderer';
import { StateContext } from 'src/modules/builder/resume/ResumeLayout';
import UnratedSkills from './components/UnratedSkills';
import Work from './components/Work';
import styled from '@emotion/styled';
import ProfileImageCV from './components/ProfileImageCV';
import SocialMedia from './components/SocialMedia';
import HeaderCV from './components/Header';

const ResumeContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 40px 25px;
  column-gap: 10px;

  @media print {
    border: none;
  }
`;

const ResumeContainer2 = styled.div`
  display: flex;
  height: 100%;
  column-gap: 10px;

  @media print {
    border: none;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  row-gap: 20px;
  height: 100%;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 70%;
  row-gap: 20px;
  height: 100%;
  font-size: 12px;
`;

const TwoSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  row-gap: 12px;
  height: 100%;
  font-size: 12px;
`;

export default function ProfessionalTemplate() {
  const resumeData = useContext(StateContext);
  const skills = resumeData.skills;
  const involvements = resumeData.activities.involvements;
  const achievements = resumeData.activities.achievements;

  return (
    <ResumeContainer>
      <LeftSection>

        <ProfileImageCV summary={resumeData.basics.summary} profileImage={resumeData.basics.image} />

        <Section 
        title="Biodata"
        profiles={resumeData.basics.profiles}
        titleClassname="text-xl font-bold">
          <BasicIntro basics={resumeData.basics} />
        </Section>

        <SectionValidator value={resumeData.basics.profiles}>
          <Section title="Media Sosial">
            <SocialMedia profile={resumeData.basics.profiles} />
          </Section>
        </SectionValidator>

        <SectionValidator value={resumeData.basics.summary}>
          <Section title="Ringkasan">
            <Objective objective={resumeData.basics.summary} />
          </Section>
        </SectionValidator>

        <SectionValidator value={resumeData.basics.objective}>
          <Section title="Tujuan Karier">
            <Objective objective={resumeData.basics.objective} />
          </Section>
        </SectionValidator>

        <SectionValidator value={resumeData.education}>
          <Section title="Pendidikan">
            <Education education={resumeData.education} />
          </Section>
        </SectionValidator>

        {/* <Section
          title={resumeData.basics?.name}
          profiles={resumeData.basics.profiles}
          titleClassname="text-xl font-bold"
        >
          <BasicIntro basics={resumeData.basics} />
        </Section>

        <SectionValidator value={resumeData.work}>
          <Section title="Pengalaman Kerja">
            <Work work={resumeData.work} />
          </Section>
        </SectionValidator>

        <SectionValidator value={involvements}>
          <Section title="Rekam Kegiatan">
            <Involvement data={involvements} />
          </Section>
        </SectionValidator>

        <SectionValidator value={achievements}>
          <Section title="Prestasi">
            <Achievements data={achievements} />
          </Section>
        </SectionValidator> */}

      </LeftSection>

      <RightSection>
      <Section title="">
            <HeaderCV basics={resumeData.basics} />
          </Section>

        <SectionValidator value={resumeData.work}>
          <Section title="Pengalaman Kerja">
            <Work work={resumeData.work} />
          </Section>
        </SectionValidator>

        <SectionValidator value={achievements}>
          <Section title="Prestasi">
            <Achievements data={achievements} />
          </Section>
        </SectionValidator>

        <ResumeContainer2>
          <TwoSection>
            <SectionValidator value={skills.languages}>
              <Section title="Keahlian dan Kemampuan">
                <RatedSkills items={skills.languages} />
              </Section>
            </SectionValidator>
          </TwoSection>
          <TwoSection>
            <SectionValidator value={skills.technologies}>
              <Section title="Keterampilan">
                <UnratedSkills items={skills.technologies} />
              </Section>
            </SectionValidator>
          </TwoSection>
        </ResumeContainer2>


        {/* <SectionValidator value={resumeData.basics.summary}>
          <Section title="Ringkasan">
            <AboutMe summary={resumeData.basics.summary} profileImage={resumeData.basics.image} />
          </Section>
        </SectionValidator>

        <SectionValidator value={resumeData.basics.objective}>
          <Section title="Tujuan Karier">
            <Objective objective={resumeData.basics.objective} />
          </Section>
        </SectionValidator>

        <SectionValidator value={skills.languages}>
          <Section title="Keahlian dan Kemampuan">
            <RatedSkills items={skills.languages} />
          </Section>
        </SectionValidator>

        <SectionValidator value={skills.technologies}>
          <Section title="Keterampilan">
            <UnratedSkills items={skills.technologies} />
          </Section>
        </SectionValidator>
        <SectionValidator value={skills.tools}>
          <Section title="Penguasaan Bahasa">
            <UnratedSkills items={skills.tools} />
          </Section>
        </SectionValidator>
        <SectionValidator value={resumeData.education}>
          <Section title="Pendidikan">
            <Education education={resumeData.education} />
          </Section>
        </SectionValidator> */}
        
      </RightSection>
    </ResumeContainer>
  );
}
