import React from "react"
function Header(){
    const styles={
        height:"90px",
        width:"70px",
        textAlign: "center",
        fontSize: "30px",
        display:"flex",
        justifyContent: "center",
        alignItems: "center"
       

    }
    return(
        <header>
            <img style={styles} src="https://www.stickpng.com/assets/thumbs/580b585b2edbce24c47b2a27.png" alt="problem"/> Meme Generator</header>
        
           
    )

}
export default Header