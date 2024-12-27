import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Home from "./Pages/Home";
import ImageCollection from "./Pages/ImageCollection";
import Form from "./Pages/Form.jsx";
import ImgPage from "./Components/ImgPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main id="main">
              <Home />
              <ImageCollection />
              <Form />
            </main>
          }
        />
        <Route path="/ImgPage" element={<ImgPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
