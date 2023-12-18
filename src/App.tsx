import { useEffect, useState } from "react"
import Navbar from "./scenes/navbar"
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import Classes from "@/scenes/ourclasses";
import ContactUs from "@/scenes/contactus";
import Footer from "@/scenes/footer/Footer";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopofPage, setIsTopofPage] = useState<boolean>(true);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopofPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopofPage(false)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  

  return (
    <div className="app bg-gray-20">
      <Navbar 
      isTopofpage={isTopofPage}
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <Classes setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App;
