/* eslint-disable @typescript-eslint/no-shadow */
import { useState } from 'react';
import { skills } from '../../../service/mock/skills';
import { skillType } from '../../features/Home/@types';
import { useContentUser } from '../../features/Home/userContent';
import * as S from './MenuStyled';

const Menu = () => {
  const { userContent, setUserContent } = useContentUser();
  const [selectSkills, setSelectSkills] = useState(skills);
  const [count, setCount] = useState(0);

  const handleChange = (skill: { status: boolean; label: string }) => {
    const newArray = selectSkills?.map((item: skillType) => {
      if (item.label === skill.label) {
        return {
          ...item,
          status: !item.status
        };
      }
      return item;
    });
    const checked = newArray?.filter((skill) => skill.status === true);
    if (count < 10) {
      setSelectSkills(newArray);
    }
    setUserContent({
      ...userContent,
      checkedSkills: checked
    });
    setCount(checked.length);
  };

  return (
    <S.MenuContainer column active={userContent.showMenu}>
      <S.Title>Selected Skill</S.Title>
      <S.ContainerButtons>
        {selectSkills.map((skill, index) => {
          return (
            <S.Item key={index}>
              <S.CheckBox
                key={index}
                type="checkbox"
                id={`skill_${index}`}
                // onChange={handleChange(skill)}
                onChange={() => handleChange(skill)}
                defaultChecked={skill.status}
              />
              <S.Label htmlFor={`skill_${index}`} selected={skill.status}>
                {skill.label}
              </S.Label>
            </S.Item>
          );
        })}
      </S.ContainerButtons>
      <S.Title>Skills Avaliable</S.Title>

      <S.ContainerButtons>
        {userContent?.checkedSkills?.map((skill, index) => {
          return (
            <S.Item key={index}>
              <S.CheckBox
                key={index}
                type="checkbox"
                id={`skill_${index}`}
                onChange={() => handleChange(skill)}
                defaultChecked={skill.status}
              />
              <S.Label htmlFor={`skill_${index}`} selected={skill.status}>
                {skill?.label}
              </S.Label>
            </S.Item>
          );
        })}
      </S.ContainerButtons>
    </S.MenuContainer>
  );
};

export default Menu;
