import React from 'react';
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
} from './styles/MainPage.styled';

const MainPage = () => {
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
        <div className='separator-line'></div>
        <div className='form-block'>{/* Forms and button */}</div>
      </MainContent>
    </Wrapper>
  );
};

export default MainPage;
