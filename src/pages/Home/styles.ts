import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #79caf9;
`;

export const Title = styled.h1`
  color: #3a3a3a;
  max-width: 500px;
  line-height: 56px;
  margin-bottom: 50px;

  text-align: center;
  font-size: 40px;
`;

export const StoreList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  list-style: none;
  width: 80%;
  max-height: 80vh;

  li {
    display: flex;
    flex-direction: column;
    background: #f6c358;
    border-radius: 10px;
    padding: 10px;

    text-align: center;

    p {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 3rem;
      color: #3a3a3a;
    }

    img {
      align-self: center;
      max-width: 250px;

      margin-bottom: 3rem;
    }

    a {
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }
  }
`;
