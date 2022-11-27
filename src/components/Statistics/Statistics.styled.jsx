import styled from 'styled-components';

export const Statisctic = styled.section`
  width: 360px;
  background-color: white;
  border: normal;
  border-radius: 4px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
  border-color: #82919f;
  text-align: center;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
`;

export const StatisticTitle = styled.h2`
  color: #82919f;
  padding: 32px;
  text-transform: uppercase;
  font-weight: 500;
`;

export const StatisticList = styled.ul`
  display: flex;
  width: 100%;
`;

export const StatisticListItem = styled.li`
  display: flex;
  width: calc(100% / 5);
`;

export const StatisticSpan = styled.span``;
