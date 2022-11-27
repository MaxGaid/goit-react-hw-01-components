import styled from 'styled-components';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
`;

export const FriendItem = styled.li`
  width: 200px;
  padding: 16px;
  display: flex;
  align-items: center;
  background-color: white;
  border: normal;
  border-radius: 4px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
  border-color: #82919f;
  margin-left: auto;
  margin-right: auto;
`;

export const FriendSpan = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => {
    return p.isOnline ? `red` : `#00a65b`;
  }};
`;

export const FriendImg = styled.img`
  margin-left: 16px;
`;

export const FriendName = styled.p`
  margin-left: 16px;
  font-weight: 500;
  font-size: larger;
`;
