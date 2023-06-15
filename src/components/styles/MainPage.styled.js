import styled from 'styled-components';
import { FaFolder } from 'react-icons/fa';

export const MainContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: start;
  width: 50%;
  height: 100%;
  padding: 24px;
`;

export const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
`;

export const Logo = styled.div`
  background-color: #d5e4f7;
  font-size: 40px;
  min-width: 80px;
  min-height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 80px;
  margin-right: 24px;
`;

export const InfoContainer = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Name = styled.h1`
  font-size: 20px;
  /* background-color: blue; */
`;

export const Links = styled.div`
  /* background-color: red; */
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

export const LinkIcon = styled(FaFolder)`
  color: grey;
  width: 14px;
  height: 14px;
  margin-right: 5px; // Add some spacing between the icon and the link text
`;

export const Link = styled.a`
  font-size: 12px;
  text-decoration: none;
  margin-right: 20px;
`;
