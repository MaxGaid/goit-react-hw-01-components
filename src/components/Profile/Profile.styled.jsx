import styled from 'styled-components';

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  border-color: #82919f;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
`;

export const User = styled.div`
  padding: 32px;
  text-align: center;
`;

export const UserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
`;

export const UserName = styled.p`
  margin-top: 16px;
  font-weight: bold;
  line-height: 1.5;
  font-size: larger;
`;

export const UserInfo = styled.p`
  color: #82919f;
  margin-top: 10px;
  font-size: smaller;
  font-weight: 500;
`;

export const Stats = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  background: #f3f6f9;
  border-top: 1px solid #d1d1d1;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  padding-top: 16px;
  padding-bottom: 16px;
  gap: 4px;

  &:not(:last-child) {
    border-right: 1px solid #d1d1d1;
  }
`;

export const StatsLbl = styled.span`
  color: #82919f;
  font-size: smaller;
`;

export const StatsQty = styled.span`
  font-weight: bolder;
`;
