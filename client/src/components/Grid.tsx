import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Element = styled.div`
  height: 162px;
  cursor: pointer;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Img = styled.img`
  height: 162px;
  object-fit: contain;
  border-radius: 12px;
`;

const Grid = () => {
  return (
    <Container>
      <Row>
        <Element>
          <Img src="/assets/gan11.png" />
        </Element>
        <Element>
          <Img src="/assets/no_image.png" />
        </Element>
      </Row>
      <Element>
        <Img src="/assets/no_image.png" />
      </Element>
    </Container>
  );
};

export default Grid;
