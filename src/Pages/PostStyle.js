import styled from 'styled-components';

export const Container = styled.div `  
  color: gray;
  background-color: #e5e5e5;
  a {
    text-decoration: none;
  }
`

export const ImageDiv = styled.div `  
  display: grid;
  place-content: center;
  padding-top: 30px;
  margin-bottom: 50px;
`

export const Image = styled.img `
  height: 500px;
  width: 1200px;
  border-radius: 6px;
  border: none;  
`

export const Title = styled.h2 `
  text-align: center;
  font-size: 34px;
  color: #219ebc;
`

export const Parag = styled.div `
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 360px;
  p {
    font-size: 14px;
    margin-top: 2px;
    color: #fb8500;
  }
`

export const Text = styled.div `
  text-align: center;
  width: 1200px;
  margin-left: 360px;
  display: flex;
  flex-direction: column;
  color: #023047;
  font-size: 18px;
  a {
    color: #023047;
    text-decoration: underline;
  }
`

export const DivBackButton = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  background-color: #e5e5e5;
`

export const BackButton = styled.button `
  background-color: #219ebc;
  margin-bottom: 30px;
  border-radius: 8px;
  font-size: 18px;
  border: none;
  height: 50px;
  width: 180px;
  display: grid;
  place-content: center;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #8ecae6;
  }
`