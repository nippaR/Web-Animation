import React from "react";
import { motion } from "framer-motion";

function First() {
    return (

        <div>
            <motion.h2 animate={{fontSize:100, color:'#ffff66',y:50}}>First Page</motion.h2>

        </div>
    );

   
}   

export default First;


/* using initial{{}}- start point animate{{}}- end */
/* using transition={{duration:2, delay:1.5, type:'tween'-this one use for animation stop to spring, 
    but default type is "spring", stiffness: 120 }}- duration of animation */