import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  gap: 24px;
  padding: 1.5rem;
  background-color: #f5f5f5;
  border-radius: 12px;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Logo = styled.div`
  color: #353d46;
  font-size: 28px;
  font-weight: 500;
`;
const Text = styled.div`
  color: #353d46;
  font-size: 16px;
`;
const EmailInput = styled.input`
  border: none;
  font-size: 18px;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  color: #353d46;
`;
const SubscribeButton = styled.button`
  font-size: 15px;
  padding: 0.6rem;
  color: #353d46;
  font-weight: 400;
  border: 1px solid #ccc;
  background-color: #338af3;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #338af3;
  }
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Newsletter = () => {
  return (
    <Container>
      <Col>
        <Logo>Newsletter</Logo>
        <Text>Zapisz się i korzystaj ze specjalnych ofert i promocji</Text>
      </Col>
      <Row>
        <EmailInput type="email" placeholder="example@gmail.com" />
        <SubscribeButton type="button">Subskrybuj</SubscribeButton>
      </Row>
    </Container>
  );
};

export default Newsletter;
