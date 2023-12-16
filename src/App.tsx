import { useEffect, useState } from "react"
import Navbar from "./scenes/navbar"
import { SelectedPage } from "@/shared/types";



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
    </div>
  )
}

export default App;
