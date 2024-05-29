/* eslint-disable react/no-unescaped-entities */
import "./App.css";

// import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {

  const title = "Welcome to youthrive Blog";
  const info = "We provide current, reliable, Original Information about the happenings in your Enviroment.";
  return (
    <main className="container">
      <Header />
      <Hero title = {title} info ={info} />
      <Footer />
      
    </main>
  );
}

export default App;
