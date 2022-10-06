/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback } from 'react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { courses } from '../../../service/mock/courses';
import { Menu } from '../../modules/Menu';
import { useModal } from '../../modules/Modal';
import { Course } from './components/Course';
import * as S from './HomeStyled';
import { useContentUser } from './userContent';
const Home = () => {
  const { showModal } = useModal();
  const { userContent } = useContentUser();
  const handleShowModal = useCallback(() => {
    showModal(
      <S.Iframe
        id="Video"
        height="345"
        frameBorder="0"
        allowFullScreen
        title="YouTube video player"
        src="https://www.youtube.com/embed/0mYq5LrQN1s"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />,
      '700px',
      false,
      '0'
    );
  }, [showModal]);

  const skillSelect = userContent?.checkedSkills?.map((item) => item.label);
  const courseSelected = courses.filter(
    (course) => !!skillSelect?.find((a) => course.skill.includes(a))
  );

  return (
    <S.HomeContainer>
      <Menu />
      <S.ContainerCourses column>
        <S.ContainerGeneric column>
          <S.Title>Courses based on your skills</S.Title>
          {userContent?.checkedSkills?.length >= 2 && (
            <Swiper
              loop={true}
              spaceBetween={10}
              slidesPerView={3}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {courseSelected?.map((course, index) => {
                return (
                  <SwiperSlide onClick={() => handleShowModal()} key={index}>
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
          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={3}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {courses?.map((course, index) => {
              return (
                <SwiperSlide onClick={() => handleShowModal()} key={index}>
                  <Course
                    title={course.title}
                    skill={course.skill}
                    description={course.description}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </S.ContainerGeneric>
      </S.ContainerCourses>
    </S.HomeContainer>
  );
};

export default Home;
