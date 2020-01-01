import styled from 'styled-components'

export const Grid = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr 75px 75px 75px 75px 50px 50px 50px 100px 1fr;
  grid-template-columns: 1fr 1fr 150px 150px repeat(2, 75px) repeat(3, 150px) 1fr;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 80px 60px 20px 60px 80px 1fr;
    grid-template-rows: 2fr 150px 10px 150px 10px 150px 1fr;
    overflow: scroll;
  }
`
const Btn = styled.div`
  height: 150px;
  width: 150px;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PhotoButton = styled(Btn)`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  background-image: url(${require('../images/assets/photoBtn.png')});

  @media (max-width: 800px) {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}
`
export const ArtButton = styled(Btn)`
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 5;
  background-image: url(${require('../images/assets/artBtn.png')});
  border: 1px solid white;

  @media (max-width: 800px) {
  grid-column-start: 5;
  grid-column-end: 7;
  grid-row-start: 2;
  grid-row-end: 3;
  border: none;
}
`

export const CVButton = styled(Btn)`
  grid-column-start: 5;
  grid-column-end: 7;
  grid-row-start: 8;
  grid-row-end: 10;
  background-image: url(${require('../images/assets/cvBtn.png')});

  @media (max-width: 800px) {
  grid-column-start: 3;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 5;
}
`
export const DesignButton = styled(Btn)`
  grid-column-start: 8;
  grid-column-end: 9;
  grid-row-start: 6;
  grid-row-end: 9;
  background-image: url(${require('../images/assets/designBtn.png')});

  @media (max-width: 800px) {
  grid-column-start: 5;
  grid-column-end: 7;
  grid-row-start: 6;
  grid-row-end: 7;
}
`
export const CurationButton = styled(Btn)`
  grid-column-start: 9;
  grid-column-end: 10;
  grid-row-start: 4;
  grid-row-end: 6;
  background-image: url(${require('../images/assets/curationBtn.png')});

  @media (max-width: 800px) {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 7;
}
`

export const FullName = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 8;
  justify-self: center;
  align-self: center;

  @media (max-width: 800px) {
  grid-column-start: 3;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;
}
`
