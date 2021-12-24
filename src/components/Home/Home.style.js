import styled from "styled-components";

/*

*/

export const Div = styled.div`

  .main-name {
    color: #1178F2;
  }
  .heading {
    font-size: 2.4em !important;
    padding-left: 44px !important;
    @media screen and (max-width: 768px) {
      font-size: 1.7em !important;
    }
  }
  .heading-name {
    font-size: 2.5em !important;
    padding-left: 45px !important;
    @media screen and (max-width: 768px) {
      font-size: 1.5em !important;
    }
  }
  .home-header {
    padding-top: 80px !important;
  }
  .home-content {
    padding: 9rem 0 2rem !important;
    color: whitesmoke;
    text-align: left;
    @media screen and (max-width: 768px) {
      text-align: center!important;
    }
  }
  .home-section {
    position: relative;
    background-position: top center;
    background-repeat: no-repeat;
    padding-bottom: 30px !important;
    padding-top: 30px !important;
    
  }
  
  .type-writer{
    color: #1178F2;
    text-align: left;
    @media screen and (max-width: 768px) {
      font-size: 1.5em !important;
      text-align: center !important;
    }
  }
  
  .Typewriter__wrapper {
    font-size: 2.2em !important;
    color: #1178F2 !important;
    font-weight: 600 !important;
  }
  .Typewriter__cursor {
    font-size: 2.4em !important;
    color: #1178F2 !important;
  }

  @media (max-width: 767px) {
    .Typewriter__wrapper {
      font-size: 1.4em !important;
      font-weight: 500 !important;
      position: center !important;
    }
    .Typewriter__cursor {
      display: none !important;
    }
  }

  .cv-button{
    @media screen and (max-width: 768px) {
      align-items: center!important;
    }
  }

  .btn {
    margin-left: 10px;
    margin-right: 10px;
  }
  /* Boostrap Buttons Styling */

  .btn-default {
    width: 45%;
    height: 45px;
    color: white;
    //background-color: #b968c7;
    letter-spacing: 1px;
    line-height: 15px;
    border: 2px solid rgba(108, 89, 179, 0.75);
    border-radius: 10px;
    transition: all 0.3s ease 0s;
  }

  .btn-default:hover {
    color: #FFF;
    background: rgba(108, 88, 179, 0.75);
    border: 2px solid rgba(108, 89, 179, 0.75);
  }


`;

export const Btn = styled.button`
  color: #fff !important;
  background-color: #623686 !important;
  border-radius: 20%;
  width: 25%;
  min-width: 200px;
  height: 60px !important;
  transition: all 0.3s;
  //outline: none;
  cursor: pointer;

  :hover {
   // opacity: 0.8;
    color: #fff !important;
    background-color: #6d20c5d7 !important;
  }

  @media screen and (max-width: 768px) {
    margin-top: 10%;
    width: 20%;
  }
`;

