import styled from "styled-components";
import Newsletter from "./Newsletter";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  background-color: #f5f5f5;
  margin-top: 2rem;
`;
const Body = styled.div`
  display: flex;
  gap: 24px;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CategoryName = styled.span`
  position: relative;
  color: #353d46;
  font-size: 24px;
  font-weight: 500;
  &::before {
    position: absolute;
    bottom: -4px;
    content: "";
    height: 3px;
    width: 50px;
    background-color: #ccc;
  }
`;
const ColElement = styled.div`
  display: flex;
  flex-direction: column;
`;
const Key = styled.span`
  color: #353d46;
  font-weight: 500;
  font-size: 17px;
`;
const Value = styled.span`
  color: #353d46;
`;

const SocialMediaSpan = styled.span`
  color: #353d46;
  font-size: 24px;
  font-weight: 500;
`;
const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const Social = styled.div``;
const SocialIcon = styled.img`
  width: 28px;
  cursor: pointer;
`;
const SocialRow = styled.div`
  display: flex;
  gap: 12px;
`;

const Footer = () => {
  return (
    <Container>
      <Body>
        <Col>
          <CategoryName>Kontakt</CategoryName>
          <ColElement>
            <Key>Adres Email</Key>
            <Value>example@gmail.com</Value>
          </ColElement>
          <ColElement>
            <Key>Telefon</Key>
            <Value>000-000-0000</Value>
          </ColElement>
          <SocialMedia>
            <SocialMediaSpan>Social Media</SocialMediaSpan>
            <SocialRow>
              <Social>
                <SocialIcon src="/assets/socials/twitter.svg" />
              </Social>
              <Social>
                <SocialIcon src="/assets/socials/facebook.svg" />
              </Social>
              <Social>
                <SocialIcon src="/assets/socials/youtube.svg" />
              </Social>
            </SocialRow>
          </SocialMedia>
        </Col>
        <Newsletter />
      </Body>
    </Container>
  );
};

export default Footer;
