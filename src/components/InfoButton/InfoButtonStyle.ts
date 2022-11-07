import styled from 'styled-components';

export const StyledInfoButton = styled.button`
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  background: 0;
  font-size: 32px;
  color: #ffff;
  border: 3px solid #5a258f;
  border-radius: 100%;
  transition: 0.2s;

  &:hover {
    background: #161616;
  }
`;
