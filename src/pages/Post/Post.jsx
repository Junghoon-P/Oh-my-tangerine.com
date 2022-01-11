import React from "react";
import styled from 'styled-components';
import Header from "../../components/Header";
import Feed from "../../components/Feed";
import Chat from "../../components/Chat";
import InputChat from "../../components/InputChat";

const Post = () => {
  return (
    <>
      <Header />
      <Feed />
      <ChatList>
        <Chat />
        <Chat />
      </ChatList>
      <InputChat />
    </>
  );
};

const ChatList = styled.ul`
  padding: 20px 16px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;

export default Post;
