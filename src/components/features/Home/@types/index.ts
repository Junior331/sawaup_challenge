export type skillType = {
  label: string;
  status: boolean;
};
export type course = {
  title: string;
  like: boolean;
  skill: string[];
  videoId: string;
};

export type contentContextType = {
  showMenu?: boolean;
  myCourses: course[];
  likedCourse: course[] | [];
  checkedSkills: skillType[] | [];
};
