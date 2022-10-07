import { createContext, ReactNode, useMemo, useState } from 'react';
import { courses } from '../../../service/mock/courses';
import { contentContextType } from './@types';

type ContentPropsType = {
  userContent: contentContextType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUserContent: (c: any) => void;
};

export const ContentContext = createContext<ContentPropsType>(
  {} as ContentPropsType
);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [userContent, setUserContent] = useState<contentContextType>({
    myCourses: courses
  } as contentContextType);
  const value = useMemo(
    () => ({ userContent, setUserContent }),
    [userContent, setUserContent]
  );

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};
