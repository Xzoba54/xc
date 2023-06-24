import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  margin: 2rem 15%;
  margin-bottom: 0;
`;

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        {/* navbar */}
        <Overlay>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* /collections/:brand (gan, MoYu)
            /:type (2x2x2, 3x3x3, pyraminx, megaminx, skewb)
            /new-products
            /product/:slug
            /popular */}
          </Routes>
        </Overlay>
        <Footer />
      </BrowserRouter>
    </Container>
  );
};

export default App;
