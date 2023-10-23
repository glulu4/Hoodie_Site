import React from 'react'
import './Home.css'  
import Drexel from './athletics_D1.png'
import Hoodie2 from './hoodie2.png'







const Home = () => {

    // const buttonStyle = {
    //     fontSize:"2rem",
    //     padding:'2.5rem 5rem'
    // }


    const titleStyle = {
        textAlign:'center', 
        margin:'5%', 
        fontSize:"3rem", 
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
        // backgroundColor:'red', 
        flexDirection:'row',
        height: '70vh', // can change... maek sure its relative
        gap: '4rem',
        // outline: 'darkgreen',
        // outlineStyle: 'auto',
    }

    // const rowStyle2 = {
    //     display: "flex",
    //     width: '100%',
    //     backgroundColor: 'blue',
    //     flexDirection: 'row',
    //     height: '50vh'
    // }

    const gridContainerStyle = {
        display: "flex", 
        flexDirection: 'column',
        justifyContent:'flex-start', 
        alignItems:'center', 
        flexWrap: 'wrap', 
        gap: '4rem'
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
        
    }
    const boxStyle2 = {
        display: 'flex',
        flexBasis: "50%",
        // backgroundColor: 'aliceblue',
        // borderRadius: "50px",
        // flexShrink: "4",
        flexGrow: "1",
        minWidth: "0px",
        // outlineStyle: 'auto', 
        flexDirection: "column",
        margin: "2%",
        minHeight: "0px",
        overflow: 'hidden', // maybe change to croll

    }



    const imgStyle = { 
        objectFit: 'cover', 
        overflow: 'visible', 
        maxHeight: "100%", 
        minHeight: "100%", 
        background: 'none'
    }

    const pStyle = {
        fontFamily: "SpaceGrotesk", 
        fontWeight:200,
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

                    <div className='box' style={boxStyle2}>
                        <h1 className='underline'>Who we are</h1>

                        <p className='ptext' style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                            culpa qui officia deserunt mollit anim id est laborum.

                        </p>
                        
                    </div>
                    <div className='box' style={boxStyle}>
                        <img src={Hoodie2} alt="Sweatshirt" style={imgStyle}/>
                    </div>

                </div>


                <div className='row' style={rowStyle}>
                    <div className='box' style={boxStyle}>

                        <img src={Drexel} alt="Drexel logo" style={imgStyle} />


                    </div>
                    <div className='box' style={boxStyle2}>
                        <h1 className='underline'>More text</h1>
                        <p className='ptext' style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.

                        </p>



                    </div>

                </div>

                <div >
                    
                    <stripe-buy-button

                        buy-button-id="buy_btn_1O2JosFPIgNIxSQ6UuSwQqUe"
                        publishable-key="pk_test_51O0lj3FPIgNIxSQ67LM0R0vot4JE68k8yJmuKnSEK5wmxytnF0zuVI5yoQV7bNUk4wM63lTiicVKR4Gr6TdTgPDK00tqLwDGPw"
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