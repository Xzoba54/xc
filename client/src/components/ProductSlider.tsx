import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-top: 1px solid #ccc;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
`;
const Body = styled.div`
  display: flex;
  gap: 6px;
  padding: 4px 0px;
`;

const Name = styled.span`
  font-weight: 500;
  font-size: 32px;
  color: #353d46;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem 1rem;
  border-radius: 28px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;
const ShowAll = styled.span`
  color: #353d46;
  font-size: 15px;
`;
const Icon = styled.img`
  rotate: 90deg;
`;

type Props = {
  children: React.JSX.Element | React.JSX.Element[];
  name: string;
  api: string;
};

const Slider = ({ children, name, api }: Props) => {
  return (
    <Container>
      <Header>
        <Name>{name}</Name>
        <Button>
          <ShowAll>Pokaż wszystkie</ShowAll>
          <Icon src="/assets/arrow.svg" />
        </Button>
      </Header>
      <Body>{children}</Body>
    </Container>
  );
};

export default Slider;
