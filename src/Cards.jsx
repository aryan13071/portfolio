import React from 'react'
import { motion } from "motion/react"
function open(pos){
    if(pos=="1") window.open("https://codeforces.com/profile/aryan___");
    if(pos=="2") window.open("https://www.codechef.com/users/coderaryan2005");
    if(pos=="3") window.open("https://leetcode.com/u/ARYAN____SINGH/");
    if(pos=="4") window.open("https://atcoder.jp/users/aryan___");
}
export const Cards = (props) => {
  return (
    <div>
        <img src={props.link} alt="aya kya" className="max-w-xs w-full h-auto rounded-lg" />
        <button className ="butt hover:text-6xl cursor-pointer duration-200" onClick={()=>open(props.pos)}>{props.name} </button>
    </div>
  )
}
