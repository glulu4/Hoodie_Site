// import React, {useEffect, useState} from 'react'
import React from 'react'
import './Home.css'  
// import Drexel from './athletics_D1.png'
// import Hoodie2 from './hoodie2.png'
import { isMobile } from 'react-device-detect';

import hoodie_front from './hoodie_front.png';
import hoodie_back from './hoodie_back.png';

// import { motion, AnimatePresence } from "framer-motion";










const Home = () => {
    // const [hoodie, setHoodie] = useState(hoodie_front)
    // const [fade, setFade] = useState("fade-in");



    // useEffect(() => {
    //     const interval = setInterval(() => {

    //         setFade("fade-out");

    //         setTimeout(() => {
    //             setHoodie(prev => prev === hoodie_back ? hoodie_front : hoodie_back);
    //             setFade("fade-in");
    //         }, 1000); // Corresponds to the fade-out animation duration


            
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, []);



    


    // const buttonStyle = {
    //     fontSize:"2rem",
    //     padding:'2.5rem 5rem'
    // }
    const textHeadStyle = {
        fontSize: isMobile ? "1.5rem" : "2.2rem", 

    }

    const titleStyle = {
        textAlign:'center', 
        margin:'5%', 
        fontSize: isMobile ? "2.5rem": "3rem", 
        fontFamily: "Lulo", 
        // background: 'linear-gradient(45deg, #003d66, lightblue)', // #30C5FF
        background: 'linear-gradient(45deg, #003d66, #30C5FF)',
        // background: 'linear-gradient(45deg, midnightblue, skyblue)',

        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    }

    const rowStyle = {
        display:"flex", 
        width:'100%',
        height:'auto',
        flexDirection: isMobile ? "column" : "row",
        gap: '4rem',
    }

    const rowStyle2 = {
        display: "flex",
        width: '100%',
        height: 'auto',
        flexDirection: isMobile ? "column-reverse" : "row",
        gap: '4rem',

    }

    const gridContainerStyle = {
        display: "flex", 
        flexDirection: 'column',
        justifyContent:'flex-start', 
        alignItems:'center', 
        flexWrap: 'wrap', 
        gap: '3rem'
    }

    const boxStyle = {
        display: 'flex',
        flexBasis: "50%",
        // backgroundColor: 'aliceblue',
        // borderRadius:"50px", 
        // flexShrink: "4",
        flexGrow:"1", 
        minWidth:"0px",
        // outlineStyle: 'auto', 
        flexDirection:"column", 
        margin:"2%", 
        minHeight:"0px", 
        overflow:'hidden', // maybe change to croll
        justifyContent: "flex-start",

        
    }
    const boxStyle2 = {
        // border: '1px solid black',
        display: 'flex',
        flexBasis: "50%",
        // backgroundColor: 'aliceblue',
        // borderRadius: "50px",
        // flexShrink: "4",
        justifyContent:"center" ,
        flexGrow: "1",
        minWidth: "0px",
        flexDirection: "column",
        margin: "2%",
        minHeight: "0px",
        overflow: 'auto', // maybe change to croll
        // boxShadow: "-20px 20px 0px 0px white", 


    }



    const imgStyle = { 
        objectFit: 'contain', 
        overflow: 'visible', 
        maxHeight: "100%", 
        minHeight: "100%", 
        background: 'none'
    }

    const pStyle = {
        fontFamily: "SpaceGrotesk", 
        fontWeight:200,
        fontSize: isMobile ? '3vh' : 'auto',
    }

    const noStyle = {
        fontStyle: 'normal', 
        color:'white'
    }


    return(
        <div className='home-page-container'>
            <h1 style={titleStyle}> <span style={noStyle}>🇮🇱</span>Help support Israel<span style={noStyle}>🇮🇱</span></h1>
            {/* grid 1 */}
            <div className='grid-container' style={gridContainerStyle}>

                <div className='row' style={rowStyle}>

                    <div className='box' style={boxStyle}>
                        <h1 className='underline' style={textHeadStyle}>Who we are </h1>

                        <p className='ptext' style={pStyle}>
                            We are a group of Jewish Israeli-American students 
                            committed to supporting our community in Israel and 
                            the U.S. The events of October 7th deeply impacted us
                             and highlighted the challenges Jewish students face in
                              universities. Despite the hardships, we stand united to 
                              uphold our heritage in the diaspora. We may hail from 
                              different regions, but our solidarity for Israel and 
                              Jewish identity is unwavering. "Never Again is Now" 
                              is more than a slogan; it's a vow to actively oppose
                               antisemitism and honor the silent pledge to our ancestors. 
                               We refuse to be silenced or intimidated. With pride and 
                               determination, we uphold the legacy of the Jewish people, 
                               unique and resilient. Never Again is Now!

                        </p>
                        
                    </div>
                    <div className='box' style={boxStyle2}>
                        <img src={hoodie_back} alt="Sweatshirt" style={imgStyle}/>
                        {/* className={fade} */}
                    </div>

                </div>


                <div className='row' style={rowStyle2}>
                    <div className='box' style={boxStyle}>

                        <img src={hoodie_front} alt="Drexel logo" style={imgStyle} />


                    </div>
                    <div className='box' style={boxStyle2}>
                        <h1 className='underline'>What We're Doing</h1>
                        <p className='ptext' style={pStyle}>
                            We created these sweatshirts as a reminder to everyone 
                            around us who chants for our destruction and as a reminder, 
                            most importantly, for ourselves, that we are not Jews with 
                            trembling knees. We will not let them win. Each sweatshirt's 
                            proceeds will be donated to the Friends of the IDF (FIDF), who 
                            support the soldiers in every way they can to help them bring 
                            the hostages home and win the war of good vs evil. The FIDF has 
                            people on the ground in Israel, allowing them to determine what 
                            the IDF needs and purchases it. We are all one big family. When 
                            you come after one Jew, you come after all of us. Together, we 
                            will win. Our light will dispel the darkness. Am Yisrael Chai!

                        </p>



                    </div>

                </div>

                <div >
                    
                    <stripe-buy-button
                        buy-button-id="buy_btn_1OC9mOFPIgNIxSQ60dPJzGuC"
                        publishable-key="pk_live_51O0lj3FPIgNIxSQ6x1y7v0ErqsCIZUseGyRFlJjKAV589qGRticWQVcTbJ0qvAF21HJJCTvErzyCe2AXe1FBS8UJ008E8ckRgY"
                    >
                    </stripe-buy-button>
                </div>

                
            </div>
            <br/>
            <br />

            <br />

            <br />

            <br />





        </div>
    )
}


export default Home;