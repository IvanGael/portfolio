import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="A Propos" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    "Je suis étudiant en ingénierie informatique à l'Institut Africain d'informatique(IAI-TOGO)."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    "Je suis très passionné par le développement web notamment autour des technologies Javascript(React, Vue, Angular, nodeJs) et PHP(Laravel)😊."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    "A travers les projets, j'ai pu me faire de l'expérience avec les bases de données ⚙️ notamment Mysql, Sql server, MongoDb, Firebase."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphFour || "Je m'intéresse également au domaine de l'analyse des données et de l'intelligence artificielle📊."}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href="https://drive.google.com/file/d/1CFa9aC7p3IkXsj9f8Xu1f0Aea6SNvg9M/view?usp=sharing"
                    >
                      Mon CV
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
