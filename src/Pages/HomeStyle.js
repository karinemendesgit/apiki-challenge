import styled from 'styled-components';

export const Main = styled.main `
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background-color: aliceblue;
`

export const Card = styled.div `
  border: 2px solid #ffb703;
  border-radius: 8px;
  height: 600px;
  width: 800px;
  padding: 20px;
  color: #023047;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    height: 400px;
    width: 600px;
    border-radius: 4px;
    border: none;
  }
  a {
    color: #fb8500;
    font-weight: bold;
    font-size: 18px;
  }
`

export const Button = styled.button `
  background-color: #219ebc;
  margin-bottom: 30px;
  border-radius: 8px;
  color: #8ecae6;
  font-size: 18px;
  border: none;
  height: 50px;
  width: 180px;
  cursor: pointer;
`
