import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './styles/Wrapper.styled';
import {
  MainContent,
  ProfileBlock,
  Logo,
  Name,
  Links,
  Link,
  InfoContainer,
  LinkIcon,
  Line,
  FormBlock,
  FormButton,
  FormLabel,
} from './styles/MainPage.styled';
import { FormInput } from './styles/FormInput.styled';

const MainPage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/create');
  };

  return (
    <Wrapper>
      <MainContent>
        <ProfileBlock>
          <Logo>ВМ</Logo>
          <InfoContainer>
            <Name>Виктор Мурзин</Name>
            <Links>
              <Link href='https://t.me/username'>
                <LinkIcon />
                Telegram
              </Link>
              <Link href='https://github.com/username'>
                <LinkIcon />
                GitHub
              </Link>
              <Link href='/resume.pdf'>
                <LinkIcon />
                Resume
              </Link>
            </Links>
          </InfoContainer>
        </ProfileBlock>
        <Line />
        <FormBlock>
          <FormLabel htmlFor='phone'>Номер телефона</FormLabel>
          <FormInput type='tel' id='phone' placeholder='+ 7 999 999-99-99' />
          <FormLabel htmlFor='email'>Email</FormLabel>
          <FormInput type='email' id='email' placeholder='tim.jennings@example.com' />
        </FormBlock>
        <FormButton id='button-start' onClick={handleStartClick}>
          Начать
        </FormButton>
      </MainContent>
    </Wrapper>
  );
};

export default MainPage;
