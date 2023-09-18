import BasicLayout from 'src/modules/builder/editor/modules/basic/BasicLayout';
import SkillsLayout from 'src/modules/builder/editor/modules/skills/SkillsLayout';
import EducationLayout from 'src/modules/builder/editor/modules/education/EducationLayout';
import ExperienceLayout from 'src/modules/builder/editor/modules/experience/ExperienceLayout';
import ActivitiesLayout from 'src/modules/builder/editor/modules/activities/ActivitiesLayout';
import VolunteeringLayout from 'src/modules/builder/editor/modules/volunteering/VolunteeringLayout';
import AwardsLayout from 'src/modules/builder/editor/modules/awards/AwardsLayout';

export const headers: {
  [key: string]: { title: string; component: () => JSX.Element };
} = {
  'basic-details': { title: 'Data diri', component: BasicLayout },
  'skills-and-expertise': {
    title: 'Kemampuan dan keahlian',
    component: SkillsLayout,
  },
  education: { title: 'Pendidikan', component: EducationLayout },
  experience: { title: 'Pengalaman', component: ExperienceLayout },
  activities: { title: 'Rekam Kegiatan', component: ActivitiesLayout },
  volunteering: { title: 'Kegiatan Sukarela', component: VolunteeringLayout },
  awards: { title: 'Penghargaan', component: AwardsLayout },
};
