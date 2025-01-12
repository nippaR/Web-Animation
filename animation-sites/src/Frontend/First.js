import React from "react";
import { motion } from "framer-motion";

const variantContainer = {
    hidden :{
        fontSize:'50px', color:'black',y:0
    },

    visible :{
        fontSize:'100px', color:'red',y:50,
        transition: {duration: 2, delay: 0.5, type: 'spring', stiffness: 120 }
    }
}

const variantButton = {
    visible :{
        whileHover: {scale:1.5, color:'black', originX:0, originY:0}
    }
}
function First() {
    return (

        <div>
            <motion.h2  variants={variantContainer}
                        initial = {'hidden'}
                        animate={'visible'}
                        
            
            
            >
                First Page
            </motion.h2>

            <motion.button variants={variantButton} whileHover={'visible'}>

                Click Me

            </motion.button>

        </div>
    );

   
}   

export default First;


/* using initial{{}}- start point animate{{}}- end */
/* using transition={{duration:2, delay:1.5, type:'tween'-this one use for animation stop to spring, 
    but default type is "spring", stiffness: 120 }}- duration of animation */