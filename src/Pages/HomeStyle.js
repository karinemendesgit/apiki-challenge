import styled from 'styled-components';

export const Main = styled.main `
  padding: 80px 40px;
  display: grid;
  place-content: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  background-color: aliceblue;
`

export const Card = styled.div `
  border: 2px solid #ffb703;
  border-radius: 8px;
  padding: 10px;
  color: #023047;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  h2 {
    text-align: center;
    font-size: 18px;
  }
  img {
    height: 160px;
    width: 310px;
    border-radius: 4px;
    border: none;
  }
  p {
    padding: 0px 7px;
    font-size: 14px;
  }
  a {
    color: #fb8500;
    font-weight: bold;
    font-size: 16px;
    padding-bottom: 10px;
  }
`

export const Button = styled.button `
  background-color: #219ebc;  
  border-radius: 8px;
  color: #8ecae6;
  font-size: 18px;
  border: none;
  height: 50px;
  width: 180px;
  cursor: pointer;
  margin-top: 30px;
`
