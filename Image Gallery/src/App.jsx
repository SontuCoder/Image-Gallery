import Header from "./Components/Header";
import Form from "./Pages/Form";
import Home from "./Pages/Home";
import ImageCollection from "./Pages/ImageCollection";



function App() {
  return (
    <>
      <Header/>
      <main id="main">
        <Home/>
        <ImageCollection/>
        <Form/>
      </main>
    </>
  )
}

export default App
