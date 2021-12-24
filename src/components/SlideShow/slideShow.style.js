import styled from "styled-components";

export const SLIDE = styled.div`
  background: rgba(0, 0, 0, 0);
  height: 100%;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: 150px;
  width: auto;
  margin-top: 10px;
  border-radius: 360px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  width: 100%;
  padding-top: 20px;
  color: var(--white);
  overflow: hidden;
  

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }

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

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  .user-info-body {
    padding-top: 10px;
    font-size: 1.2em !important;
    text-align: left;
  }

  h1 {
    text-align: left;
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;