import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Element = styled.div`
  min-width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    background-color: #e6e6e6;
  }
`;
const Name = styled.span`
  color: #353d46;
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  rotate: 90deg;
`;

const Sidebar = () => {
  return (
    <Container>
      <Element>
        <Name>Klasyczne kostki</Name>
        <Arrow>
          <Icon src="/assets/arrow.svg" />
        </Arrow>
      </Element>
      <Element>
        <Name>Układanki</Name>
        <Arrow>
          <Icon src="/assets/arrow.svg" />
        </Arrow>
      </Element>
      <Element>
        <Name>Dodatki</Name>
        <Arrow>
          <Icon src="/assets/arrow.svg" />
        </Arrow>
      </Element>
      <Element>
        <Name>Smary</Name>
        <Arrow>
          <Icon src="/assets/arrow.svg" />
        </Arrow>
      </Element>
    </Container>
  );
};

export default Sidebar;
