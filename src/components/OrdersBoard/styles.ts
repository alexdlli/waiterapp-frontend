import styled from 'styled-components';

export const Board = styled.div`
  flex: 1;
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    padding: 8px;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  button {
    height: 128px;
    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    strong {
      font-size: 1.6rem;
      font-weight: 500;
    }

    span {
      font-size: 1.4rem;
      color: #666;
    }

    & + button {
      margin-top: 24px;
    }
  }
`;
