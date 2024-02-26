import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
`
export const TextEditorCardContainer = styled.div`
  height: 80vh;
  width: 80vw;
  background-color: #1b1c22;
  border-radius: 7px;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const TextEditorImgContainer = styled.div`
  height: 80%;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 45%;
    width: 100%;
  }
`
export const Heading = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #f8fafc;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`
export const TextEditorImage = styled.img`
  height: 60%;
  width: 60%;
`
export const TextEditorCardRightSideBgContainer = styled.div`
  height: 100%;
  width: 55%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 55%;
    width: 100%;
    justify-content: center;
  }
`
export const TextAreaConfigurationContainer = styled.div`
  height: 94%;
  width: 97%;
  box-shadow: 0 0 0 0.5px #cbd5e1;
  border-radius: 10px;
  background-color: #25262c;
`
export const EditItemsContainer = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  @media screen and (max-width: 768px) {
    height: 15%;
  }
`
export const EditButton = styled.button`
  padding: 0px;
  background-color: transparent;
  margin-right: 20px;
  border: none;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
`

export const TextAreaInput = styled.textarea`
  padding: 10px;
  background-color: #25262c;
  border: none;
  font-family: 'Roboto';
  height: 90%;
  width: 100%;
  background-color: #;
  outline: none;
  color: #f1f5f9;
  font-size: 22px;
  font-weight: ${props => (props.isBoldActive ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalicActive ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.isUnderLineActive ? 'underline' : 'normal'};

  @media screen and (max-width: 768px) {
    height: 84%;
    font-size: 18px;
  }
`
