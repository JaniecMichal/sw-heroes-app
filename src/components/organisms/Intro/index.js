import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  Crawl,
  CrawlContent,
  CrawlHeader,
  CrawlSubHeader,
  CrawlText,
  Title,
  Wrapper,
} from './styled';
import Logo from 'components/atoms/Logo';
import Button from 'components/atoms/Button';
import { toPeopleList } from 'assets/customFunctions/routes';
import StyledLink from 'components/atoms/StyledLink';

const Intro = () => {
  const title = useRef();
  const content = useRef();

  useEffect(() => {
    let tl = new gsap.timeline();

    tl.set(title.current, { opacity: 1, scale: 2.75 })
      .to(title.current, { scale: 0.05, ease: 'power2', duration: 8 })
      .to(title.current, { opacity: 0, duration: 0.75 }, '-=1.5')
      .to(content.current, { top: '-170%', duration: 80 });
  }, []);

  return (
    <Wrapper>
      <Title ref={title}>
        <Logo logo={'Star wars heroes app'} />
      </Title>

      <Crawl>
        <CrawlContent ref={content}>
          <CrawlHeader>Episode X</CrawlHeader>
          <CrawlSubHeader>THE NEW APP IS A NEW HOPE</CrawlSubHeader>
          <CrawlText>
            Hello, in this interesting way I would like present my skills and
            person. I am junior frontend developer who wants get this job!
          </CrawlText>
          <CrawlText>
            I am still working to correct and improve this app. I hope that
            using will be good expierience and let you learn more about StarWars
            characters.
          </CrawlText>
          <CrawlText>
            If you joy this app and you would like to learn me more, please free
            to conact with me.
          </CrawlText>
        </CrawlContent>
      </Crawl>
      <StyledLink to={toPeopleList()}>
        <Button intro={'intro'}>Go to APP</Button>
      </StyledLink>
    </Wrapper>
  );
};

export default Intro;
