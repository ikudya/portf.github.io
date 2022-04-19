import React,{useState} from "react";
import SideBar from "../Components/Sidebar/SideBar";
import NavBar from "../Components/Navbar/navbar";
import FirstSection from "../Components/FirstSection/firstSection";
import MigrationSections from "../Components/MigrationSections/MigrationSections";
import {homeObjOne, homeObjThree, homeObjTwo} from "../Components/Data";
import UniversitySection from "../Components/UniversitySection/UniversitySection";
import Skills from "../Components/UniversitySection/Skills";

const Home = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
}
    return(
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <FirstSection/>
            <UniversitySection {...homeObjTwo}/>
            <Skills {...homeObjThree}/>
            <MigrationSections {...homeObjOne}/>



        </>
    )
}
export default Home;