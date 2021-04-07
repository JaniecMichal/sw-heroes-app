import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  width: 100%;
`;

export const Title = styled.section`
  left: 50%;
  opacity: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  z-index: 200;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 18rem;
`;

export const Crawl = styled.section`
  font-size: 300%;
  bottom: 0;
  height: 80rem;
  left: 50%;
  position: absolute;
  transform: translateX(-50%) perspective(300px) rotateX(28deg);
  transform-origin: 50% 100%;
  width: 90%;
`;

export const CrawlContent = styled.div`
  position: absolute;
  top: 100%;
`;

export const CrawlHeader = styled.h1`
  font-weight: 600;
  margin-bottom: 5rem;
  text-align: center;
`;

export const CrawlSubHeader = styled.h2`
  font-size: 250%;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 7rem;
  transform: scale(1, 1.5);
  text-align: center;
`;

export const CrawlText = styled.p`
  font-weight: 700;
  line-height: 1.33;
  margin-bottom: 4rem;
  text-align: justify;
`;
