import styled from 'styled-components';
import {IMAGE_BASE_URL, BACKDROP_SIZE} from '../../config';

export const Wrapper = styled.div`


`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(255 254 254 / 10%);
  border-radius: 20px;
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
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
    width: 35px !important;
    height: 35px !important;
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


export const Image = styled.img`
  width: 100%;
  height: 430px;
  max-width: 720px;
  transition: all 0.3s;
  //border-radius: 360px;
  animation: animateThumb 0.5s;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center !important;
  padding-top: 66px !important;

  :hover {
    opacity: 0.8;
  }

  @keyFrames animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

`;

export const TopHr = styled.hr`
  color: white !important;
  border-top: 3px solid white !important;
`;
export const BotHr = styled.hr`
  color: white !important;
  border-top: 0.5px solid white !important;
`;


export const Vl = styled.div`
  left: 0;
  border-left: 6px;
  background: repeating-linear-gradient(
          45deg,
          #ffffff00,
          #ffffff00 3px,
          #1378f2 3px,
          #1378f2 6px
  );
  width: 6px;
  height: 100%;
  margin-left: 50%;
`;
