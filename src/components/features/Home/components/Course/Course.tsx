import { course } from '../../@types';
import * as S from './CourseStyled';

/* eslint-disable @typescript-eslint/no-shadow */
const Course = ({ title, skill, description }: course) => {
  return (
    <S.CourseContainer>
      <S.Image
        src="https://media.istockphoto.com/photos/hand-with-marker-writing-skill-concept-picture-id637711198?k=20&m=637711198&s=612x612&w=0&h=bznzNhH923ckyX6LINoDPtH6z3wbB0yO6Gvk5fQR0ms="
        alt=""
      />
      <S.Title>{title}</S.Title>
      <S.Skills>
        {skill.map((skill, index) => {
          return <S.Skill key={index}>{skill}</S.Skill>;
        })}
      </S.Skills>
      <S.Text>{description}</S.Text>
    </S.CourseContainer>
  );
};

export default Course;
