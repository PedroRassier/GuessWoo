import styled from 'styled-components';

export const StyledHelpPopup = styled.div`
  position: relative;
  right: -100%;
  top: 50%;
  width: 45.5rem;
  height: 35rem;
  border-radius: 10px;
  background-color: #131313;
  display: grid;
  place-items: center;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h2 {
      font-size: 40px;
      color: #ffffff;
    }
  }
  article {
    p {
      width: 25rem;
    }
    margin-bottom: 1rem;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
  }
`;
