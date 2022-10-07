import { useCallback } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useModal } from '../../../../modules/Modal';
import { course } from '../../@types';
import { useContentUser } from '../../userContent';
import * as S from './CourseStyled';

/* eslint-disable @typescript-eslint/no-shadow */
const Course = ({ title, skill, description, like }: course) => {
  const { showModal } = useModal();
  const { userContent, setUserContent } = useContentUser();

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

  const handleChange = (course: string) => {
    const newArray = userContent?.myCourses?.map((item) => {
      if (item.title === course) {
        return {
          ...item,
          like: !item.like
        };
      }
      return item;
    });
    const liked = newArray?.filter((item) => item.like === true);
    console.log({
      newArray,
      liked
    });
    setUserContent({
      ...userContent,
      myCourses: newArray,
      likedCourse: liked
    });
  };

  return (
    <S.CourseContainer>
      <S.Image
        onClick={() => handleShowModal()}
        src="https://media.istockphoto.com/photos/hand-with-marker-writing-skill-concept-picture-id637711198?k=20&m=637711198&s=612x612&w=0&h=bznzNhH923ckyX6LINoDPtH6z3wbB0yO6Gvk5fQR0ms="
        alt=""
      />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Like onClick={() => handleChange(title)} acitve={like}>
          {like ? <AiFillHeart /> : <AiOutlineHeart />}
          <S.Text>{like ? 'Curtido' : 'Curtir'}</S.Text>
        </S.Like>
      </S.Content>
      <S.Skills>
        {skill.map((skill, index) => {
          return <S.Skill key={index}>{skill}</S.Skill>;
        })}
      </S.Skills>
      {/* <S.Text>{description}</S.Text> */}
    </S.CourseContainer>
  );
};

export default Course;
