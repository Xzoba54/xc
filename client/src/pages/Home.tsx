import styled from "styled-components";
import ImageSlider from "../components/ImageSlider";
import Sidebar from "../components/Sidebar";
import Grid from "../components/Grid";
import Card from "../components/Card";
import ProductSlider from "../components/ProductSlider";
import Newsletter from "../components/Newsletter";

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 32px;
`;

const Home = () => {
  return (
    <div>
      <Row>
        <ImageSlider />
        <Sidebar />
        <Grid />
      </Row>
      <ProductSlider api="api" name="Nowości">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ProductSlider>
      <ProductSlider api="api" name="Popularne">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ProductSlider>
      <ProductSlider api="api" name="Ostatnio oglądane">
        <Card />
        <Card />
        <Card />
      </ProductSlider>
      <div>
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
