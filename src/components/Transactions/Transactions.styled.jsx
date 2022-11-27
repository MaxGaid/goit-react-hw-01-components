import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  width: 720px;
  text-align: center;
  border-collapse: collapse;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);

  tr:nth-child(odd) {
    background-color: ${p => `white`};
  }
  tr:nth-child(even) {
    background-color: ${p => `#c4c4c4`};
  }

  th {
    text-transform: uppercase;
    background-color: #2da5cc;
    color: white;
    padding: 16px;
    font-weight: 500;
  }
`;
