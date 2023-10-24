import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  height: calc(100vh - 12rem);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &::before {
    content: '';
    width: 520px;
    height: 100px;
    position: absolute;
    left: 10px;
    bottom: -24px;
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.008),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.8)
    );
    z-index: -2;
    transform: rotate(-7deg);
    border-bottom-left-radius: 8px;
    filter: blur(3px);
  }

  &::after {
    content: '';
    width: 520px;
    height: 100px;
    position: absolute;
    right: 10px;
    bottom: -24px;
    background: linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0.008),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.8)
    );
    z-index: -2;
    transform: rotate(7deg);
    border-bottom-right-radius: 8px;
    filter: blur(3px);
  }
`;

export const MessagesContainer = styled.div`
  flex: 1;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
`;

export const MessagesContent = styled.div``;

export const InputContainer = styled.div`
  background: linear-gradient(
    ${(props) => props.theme.colors.gray600},
    ${(props) => props.theme.colors.gray600}
  );
  width: 100%;
  border-radius: 26px;
  padding: 8px;
`;

export const InputContent = styled.form`
  background: ${(props) => props.theme.colors.white};
  width: 100%;
  border-radius: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;

  button {
    background: transparent;
    border: 0;
    margin-left: 2rem;
    img {
    }
  }
`;

export const Input = styled.textarea`
  resize: none;
  overflow-y: auto;
  line-height: 20px;
  flex: 1;
  background: transparent;
  border: 0;
`;
