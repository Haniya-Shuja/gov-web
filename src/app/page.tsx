
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";
import Courses from "./components/Courses/Courses";



export default function Home() {
  return (
   <div>
    <Header/>
    
    <Hero/>
    <Cards/>
   <Courses/>
   
    <Footer/>
   </div>
  );
}
