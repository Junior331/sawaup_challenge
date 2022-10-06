export type skillType = {
  label: string;
  status: boolean;
};
export type course = {
  title: string;
  skill: string[];
  description: string;
};

export type contentContextType = {
  showMenu?: boolean;
  checkedSkills: skillType[] | [];
};
