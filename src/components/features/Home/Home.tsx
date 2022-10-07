/* eslint-disable @typescript-eslint/no-shadow */
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Menu } from '../../modules/Menu';
import { course } from './@types';
import { Course } from './components/Course';
import * as S from './HomeStyled';
import { useContentUser } from './userContent';
const Home = () => {
  const { userContent } = useContentUser();

  const skillSelect = userContent?.checkedSkills?.map((item) => item.label);
  const courseSelected = userContent.myCourses.filter(
    (course) => !!skillSelect?.find((a) => course.skill.includes(a))
  );
  return (
    <S.HomeContainer>
      <Menu />
      <S.ContainerCourses column>
        <S.ContentCourses column>
          <S.Title>Courses based on your skills</S.Title>
          {userContent?.checkedSkills?.length >= 2 && (
            <Swiper
              loop={true}
              spaceBetween={75}
              slidesPerView={3}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {courseSelected?.map((course, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Course
                      like={course.like}
                      title={course.title}
                      skill={course.skill}
                      videoId={course.videoId}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </S.ContentCourses>
        <S.ContentCourses column>
          <S.Title>Courses Avaliable</S.Title>
          <Swiper
            loop={true}
            spaceBetween={75}
            slidesPerView={3}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {userContent?.myCourses?.map((item: course, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <Course
                    like={item.like}
                    title={item.title}
                    skill={item.skill}
                    videoId={item.videoId}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </S.ContentCourses>
        {userContent?.likedCourse?.length > 0 && (
          <S.ContentCourses column>
            <S.Title>Liked courses</S.Title>
            <Swiper
              loop={true}
              spaceBetween={75}
              slidesPerView={3}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {userContent?.likedCourse?.map((item: course, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <Course
                      like={item.like}
                      title={item.title}
                      skill={item.skill}
                      videoId={item.videoId}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </S.ContentCourses>
        )}
      </S.ContainerCourses>
    </S.HomeContainer>
  );
};

export default Home;
