import styled from 'styled-components';
export const Container = styled.div`
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 1px 0 30px rgba(0, 0, 0, 0.2);
  width: 400px;

  h2 {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.gray900};
  }
  .vi__wrapper {
    width: 100%;
  }

  .container {
    width: 100%;
    height: 62px;
  }
  .character {
    width: 80px;
    height: 62px;
    margin: 0 0.4375rem;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.gray950};
  }
  .character--inactive {
    background: ${(props) => props.theme.colors.gray300};
  }
  .character--selected {
    border-color: ${(props) => props.theme.colors.gray950};
  }
`;

export const ContainerLink = styled.nav`
  display: flex;
  justify-content: center;

  align-items: center;
  gap: 8px;
  a {
    display: block;
    width: 100%;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.yellow700};
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    text-align: center;

    span {
      font-size: 14px;
      width: 100%;
      font-weight: 600;
    }

    &:hover {
      text-decoration: underline;
      span {
        color: ${(props) => props.theme.colors.yellow600};
      }
    }
  }
`;

export const InfoInstruction = styled.p`
  color: ${(props) => props.theme.colors.yellow700};
  font-size: 12px;
  line-height: 16px;
  margin-top: 1rem;
  text-align: left;

  span {
    display: block;
  }
`;
