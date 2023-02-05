import styled from "styled-components"

export const SOutline = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 998;
    backdrop-filter: blur(3px);

    transition: 0.5s;
`
export const SInfoWrapper = styled.div`
    position: relative;
    width: 100%;
    z-index: 10;
`
export const SInfo = styled.div`
    position: relative;
    width: 100%;
    z-index: 10;
    font-size: 30px;
    color: white;
    padding-left: 5%;
`
interface SWrapperProps {
    background: string
}
export const SWrapper = styled.div<SWrapperProps>`
  position: absolute; 
  display: flex;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  height: 40vw;
  width: 70vw;
  transform: translate(-50%,-50%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 15px;
  border: 5px groove grey; {
  background-image: ${({ background }) => `url(${background})`};
`
export const SName = styled.div`
    position: relative;
    display: flex;
    z-index: 10;
    align-items: center;
    font-size: 50px;
    color: rgba(255, 255, 255, 1);
    padding: 5%;
    height: 15%;
    width: 100%;
`
export const SPicture = styled.img`
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    height: 100%;
    padding-right: 4%;
    overflow: hidden;
    object-fit: contain;
    cursor: pointer;
`
export const SIcon = styled.img`
    margin-right: 3%;
    height: 6vh;
`
