import styled from "styled-components";

const Container = styled.div``;
const Img = styled.img`
  width: 600px;
  object-fit: contain;
  border-radius: 12px;
  cursor: pointer;
`;
const Arrow = styled.div`
  width: 45px;
  height: 45px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: #fff;
  border-radius: 50%;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 8px;
  }
  &.left {
    rotate: -90deg;
    left: 0;
  }
  &.right {
    rotate: 90deg;
    right: 0;
  }
`;
const Icon = styled.img`
  width: 32px;
`;

const Body = styled.div`
  position: relative;
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Slides = styled.div`
  display: flex;
  gap: 10px;
`;
const Slide = styled.div`
  width: 8px;
  height: 8px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
  &.active {
    background-color: #353d46;
  }
`;

const ImageSlider = () => {
  return (
    <Container>
      <Body>
        <Img src="/assets/gan11.png" />
        <Arrow className="left">
          <Icon src="/assets/arrow.svg" />
        </Arrow>
        <Arrow className="right">
          <Icon src="/assets/arrow.svg" />
        </Arrow>
      </Body>
      <Footer>
        <Slides>
          <Slide></Slide>
          <Slide></Slide>
          <Slide></Slide>
          <Slide className="active"></Slide>
          <Slide></Slide>
        </Slides>
      </Footer>
    </Container>
  );
};

export default ImageSlider;
