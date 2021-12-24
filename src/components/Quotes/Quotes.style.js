import styled from "styled-components";

export const Text = styled.div`
  width: 100%;

  color: var(--white);
  overflow: hidden;
  text-align: center;
  
/*  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }*/
  /*

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }
  */
  
  h1 {
    text-align: left;
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Div = styled.div`
  float: right !important;

`;

export const Image = styled.img`
  height: 50px;
  align-items: end !important;

`;

export const TopHr = styled.hr`
  color: white !important;
  border-top: 3px solid white !important;
  margin-top: 5%;
  margin-bottom: 5%;
`;