/* eslint-disable @typescript-eslint/no-shadow */
import { useState } from 'react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { courses } from '../../../service/mock/courses';
import { skills } from '../../../service/mock/skills';
import { skillType } from './@types';
import { Course } from './components/Course';
import * as S from './HomeStyled';
const Home = () => {
  const [selectSkills, setSelectSkills] = useState(skills);
  const [checkedSkills, setCheckedSkills] = useState<skillType[]>([]);
  const [count, setCount] = useState(0);

  const handleChange = (skill: { status: boolean; label: string }) => {
    const newArray = selectSkills.map((item: skillType) => {
      if (item.label === skill.label) {
        return {
          ...item,
          status: !item.status
        };
      }
      return item;
    });
    const checked = newArray.filter((skill) => skill.status === true);
    if (count < 10) {
      setSelectSkills(newArray);
    }
    setCheckedSkills(checked);
    setCount(checked.length);
  };

  return (
    <S.HomeContainer>
      <S.ContainerSkills column>
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
          {checkedSkills.map((skill, index) => {
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
      </S.ContainerSkills>
      <S.ContainerCourses column>
        <S.ContainerGeneric column>
          <S.Title>Courses based on your skills</S.Title>
          {checkedSkills.length >= 2 && (
            <Swiper
              loop={true}
              spaceBetween={10}
              slidesPerView={3}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {courses.map((course, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Course
                      title={course.title}
                      skill={course.skill}
                      description={course.description}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </S.ContainerGeneric>
        <S.ContainerGeneric column>
          <S.Title>Courses Avaliable</S.Title>
          {checkedSkills.length >= 2 && (
            <Swiper
              loop={true}
              spaceBetween={10}
              slidesPerView={3}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {courses.map((course, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Course
                      title={course.title}
                      skill={course.skill}
                      description={course.description}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </S.ContainerGeneric>
      </S.ContainerCourses>
    </S.HomeContainer>
  );
};

export default Home;
