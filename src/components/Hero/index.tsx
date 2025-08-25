import styled from 'styled-components'

const Form = styled.form`
  min-height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }

  & > div {
    position: relative;
    color: #eee;
    max-width: 800px;
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    min-height: 280px;
    padding: 40px 0;
  }
`

const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`

const Hero = () => (
  <Form>
    <div>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </div>
  </Form>
)

export default Hero
