import styled from 'styled-components';

export const Wrapper = styled.div`


`;

/*   .tech-icons {
  background-color: white;
  color: black;
  height: 100px;
  width: 100px;
  font-size: 4.5em !important;
  margin: 15px !important;
  padding: 10px !important;
  opacity: 0.93 !important;
  border: 1.7px solid rgba(0, 82, 255, 0.96) !important;
/*  vertical-align: middle !important;

}


*/
export const Circle = styled.div`
  margin-top: 5px;
  width: 80px !important;
  height: 80px !important;
  background: white;
  border-radius: 50%;
  align-items: center !important;
  text-align: center !important;
  padding-right: 0px;
  line-height: 70px;
  font-size: 2.5rem;
  color: #232138;
  box-shadow: 4px 5px 4px 3px rgba(60, 63, 65, 0.29) !important;
  transition: all 1s ease 0s !important;
  
  @media (max-width: 767px) {
    .tech-icons {
      margin: 10px !important;
    }
  }

  :hover {
    transform: scale(1) !important;
    overflow: hidden !important;
    border: 2.2px solid white !important;
  }

  .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
  }
`;