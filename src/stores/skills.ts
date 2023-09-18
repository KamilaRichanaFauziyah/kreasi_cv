import create, { GetState, SetState } from 'zustand';
import { persist } from 'zustand/middleware';
import produce from 'immer';
import { ISkillItem, ISkillState } from './skill.interface';
import resumeData from 'src/helpers/constants/resume-data.json';

const addSkill =
  (set: SetState<ISkillState>) =>
  ({ name, level }: ISkillItem) =>
    set(
      produce((state: ISkillState) => {
        state.values.push({ name, level });
      })
    );

const removeSkill = (set: SetState<ISkillState>) => (index: number) =>
  set(
    produce((state: ISkillState) => {
      state.values.splice(index, 1);
    })
  );

const setSkills = (set: SetState<ISkillState>) => (values: ISkillItem[]) => set(() => ({ values }));

const getSkills = (get: GetState<ISkillState>) => () => get().isEnabled ? get().values : [];

const setIsEnabled = (set: SetState<ISkillState>) => (isEnabled: boolean) =>
  set(() => ({ isEnabled }));

const getMethods = (set: SetState<ISkillState>, get: GetState<ISkillState>) => ({
  get: getSkills(get),
  add: addSkill(set),
  remove: removeSkill(set),
  reset: setSkills(set),
  setIsEnabled: setIsEnabled(set),
});

export const useLanguages = create<ISkillState>(
  persist(
    (set, get) => ({
      title: 'Keahlian dan kemampuan teknis',
      hasLevel: true,
      values: resumeData.skills.languages,
      isEnabled: true,

      ...getMethods(set, get),
    }),
    { name: 'tecnicala' }
  )
);

export const useFrameworks = create<ISkillState>(
  persist(
    (set, get) => ({
      title: 'Frameworks',
      hasLevel: true,
      values: resumeData.skills.frameworks,
      isEnabled: true,

      ...getMethods(set, get),
    }),
    { name: 'frameworks' }
  )
);

export const useTechnologies = create<ISkillState>(
  persist(
    (set, get) => ({
      title: 'Keterampilan / Eksposur',
      hasLevel: false,
      values: resumeData.skills.technologies,
      isEnabled: true,

      ...getMethods(set, get),
    }),
    { name: 'technology' }
  )
);

export const useLibraries = create<ISkillState>(
  persist(
    (set, get) => ({
      title: 'Libraries',
      hasLevel: false,
      values: resumeData.skills.libraries,
      isEnabled: true,

      ...getMethods(set, get),
    }),
    { name: 'libraries' }
  )
);

export const useDatabases = create<ISkillState>(
  persist(
    (set, get) => ({
      title: 'Penguasaan Bahasaa',
      hasLevel: false,
      values: resumeData.skills.databases,
      isEnabled: true,

      ...getMethods(set, get),
    }),
    { name: 'hehehae' }
  )
);

export const usePractices = create<ISkillState>(
  persist(
    (set, get) => ({
      title: 'Practices',
      hasLevel: false,
      values: resumeData.skills.practices,
      isEnabled: true,

      ...getMethods(set, get),
    }),
    { name: 'practices' }
  )
);

export const useTools = create<ISkillState>(
  persist(
    (set, get) => ({
      title: 'Penguasaan Bahasa',
      hasLevel: false,
      values: resumeData.skills.tools,
      isEnabled: true,

      ...getMethods(set, get),
    }),
    { name: 'language' }
  )
);
