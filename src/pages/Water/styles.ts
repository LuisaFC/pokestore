import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  height: 100hw;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;

  header {
    background: #37acd6;
    width: 100%;
    min-height: 10vh;

    display: flex;
    align-items: center;
    justify-content: initial;

    img {
      /* margin-bottom: 1rem;
      margin-top: 1rem;
      margin-right: 3rem; */

      margin: 1rem 3rem 1rem 4rem;

      .logo {
        width: 10vw;
      }
    }

    div {
      background: #fff;

      width: 40%;
      height: 6vh;

      display: flex;
      align-items: center;

      border-radius: 10px;

      svg {
        margin: 0 1rem;
      }

      input {
        flex: 1;
        border: 0;
        color: #333;
      }
    }
  }
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;

  display: flex;
  margin-top: 3vh;

  @media (max-width: 650px) {
    flex-direction: column-reverse;
  }
`;

export const ListItems = styled.div`
  flex: 2;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    list-style: none;
    margin-right: 20px;

    li {
      display: flex;
      flex-direction: column;
      background: #37acd6;
      border-radius: 15px;
      padding: 30px;

      img {
        align-self: center;
        max-width: 250px;
      }

      > strong {
        font-size: 16px;
        line-height: 20px;
        color: #fff;
        margin-top: 5px;
        text-transform: capitalize;
      }

      > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
      }

      button {
        background: #fff;
        color: #333;
        border: 0;
        border-radius: 10px;
        overflow: hidden;
        margin-top: auto;
        display: flex;
        align-items: center;
        transition: background 0.2s;
        &:hover {
          background: ${darken(0.05, '#F6C358')};
        }

        div {
          display: flex;
          align-items: center;
          padding: 12px;
          background: ${darken(0.1, '#F6C358')};
          svg {
            margin-right: 5px;
          }
        }
        span {
          flex: 1;
          text-align: center;
          font-weight: bold;
        }
      }
    }
  }

  @media (max-width: 650px) {
    height: 50%;
  }
`;

export const Cart = styled.div`
  flex: 1;
  height: 100%;
  background: ${lighten(0.3, '#f6c358')};
  border: 2px solid #37acd6;
  border-radius: 8px;

  padding: 1vw 2vw 2vw 2vw;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button {
      background: #37acd6;
      color: #fff;
      border: 2px solid #37acd6;
      border-radius: 10px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        background: #f6c358;
        color: #37acd6;
      }
    }
  }
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: #333;
  margin-bottom: 3vh;
`;

export const PokemonTable = styled.table`
  width: 100%;
  max-width: 100%;

  thead th {
    color: #3a3a3a;
    font-size: 18px;
    text-align: center;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid ${lighten(0.3, '#f6c358')};
    font-size: 18px;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
    color: #bf1f2f;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #3a3a3a;
    font-weight: bold;
    font-size: 18px;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
