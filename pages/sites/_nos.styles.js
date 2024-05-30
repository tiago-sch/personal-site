import styled from 'styled-components'

export const ChatConvoWrapper = styled.section`
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

export const ChatHeader = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

export const ChatBubble = styled.div`
  background-color: #f1f0f0;
  border-radius: 8px;
  padding: 12px;
  width: calc(100% - 60px);
  margin-right: auto;

  ${props => props.$isMe && `
    background-color: gold;
    margin-left: auto;
    margin-right: 0;
  `}

  * {
    white-space: pre-wrap;
    line-break: anywhere;
    color: #000;
  }
`;

export const ChatUser = styled.h2`
  small {
    margin-left: 8px;
    font-size: 0.8rem;
    color: #666;
  }
`;

export const ChatLike = styled.span`
  color: #666;
  font-size: 0.8rem;
  text-align: right;
  display: block;
  font-weight: bold;
`;