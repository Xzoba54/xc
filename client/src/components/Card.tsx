import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 240px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  border: 1px solid #fff;
  border-radius: 8px;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  &:hover > div:first-child > div:last-child,
  &:hover > div:last-child > div > div:last-child {
    opacity: 1;
  }
`;
const Header = styled.div`
  display: flex;
`;
const Body = styled.div`
  display: flex;
  padding: 0.5rem;
`;
const Name = styled.span`
  color: #1e2227;
`;
const Price = styled.span`
  font-weight: 500;
  font-size: 15px;
  color: #353d46;
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Rating = styled.div`
  margin: 6px 0;
`;
const Star = styled.img`
  width: 18px;
`;

const Heart = styled.div`
  opacity: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50%;
  top: 8px;
  right: 8px;
  transition: all 0.2s linear;
  &:hover {
    background-color: #ebebeb;
  }
`;
const HeartIcon = styled.img`
  width: 25px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Cart = styled.div`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s linear;
  &:hover {
    background-color: #ebebeb;
  }
`;
const CartIcon = styled.img`
  width: 24px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;

const Tag = styled.div`
  padding: 4px 6px;
  border: 2px solid #f5f5f5;
  border-radius: 28px;
`;
const TagName = styled.div`
  font-size: 14px;
  color: #353d46;
  font-weight: 400;
`;

const Card = () => {
  return (
    <Container>
      <Header>
        <Tag>
          <TagName>Promocja</TagName>
        </Tag>

        <Heart>
          <HeartIcon src="/assets/heart.svg" />
        </Heart>
      </Header>
      <Body>
        <Img src="/assets/gan356mair.png" />
      </Body>
      <Footer>
        <Name>GAN 251M Air</Name>
        <Row>
          <Col>
            <Rating>
              <Star src="/assets/f_star.svg" />
              <Star src="/assets/f_star.svg" />
              <Star src="/assets/f_star.svg" />
              <Star src="/assets/f_star.svg" />
              <Star src="/assets/f_star.svg" />
            </Rating>
            <Price>109,99 zł</Price>
          </Col>
          <Cart>
            <CartIcon src="/assets/cart.svg" />
          </Cart>
        </Row>
      </Footer>
    </Container>
  );
};

export default Card;
