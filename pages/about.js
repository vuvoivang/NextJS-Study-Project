import Image from 'next/image'
import Meta from "../components/Meta"
import { image } from "../components/Test"
// import AppContext from "./context/index";
// import { useContext } from "react";
const About = () => {

    return (
        <div>
            <Meta title="About me" description="Vo Hoang Vu" />
            {/*  */}
            <div className='about-me p-3' style={{
                borderRadius: "20px", overflow: "hidden",
                display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
                height: "80vh",
            }}>
                <img src={image} width="200"
                    style={{ borderRadius: "50%", border: "2px solid #fff", boxShadow: "0 0 10px #fff" }}
                    alt="Picture of the author" />
                <h1 className='m-2 '>My name: <span className='text-primary'>Vo Hoang Vu</span></h1>
                <p className='about-me'>
                    I am a software engineer, currently working at <a style={{ color: "blue" }} href="https://thuocsi.vn">Thuocsi</a> as a Front End Developer Intern.
                </p>
            </div>
            {/* <meta name="keywords" content="web development, programming" /> */}

        </div>
    )
}

export default About