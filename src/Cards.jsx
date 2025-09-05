import React from 'react'

function open(){
    window.open("https://codeforces.com/profile/aryan___");
}
export const Cards = (props) => {
  return (
    <div>
        <img src="src/assets/CF profile.png" alt="aya kya" className="max-w-xs w-full h-auto rounded-lg" />
        <button className ="butt hover:text-6xl cursor-pointer duration-200" onClick={open}>{props.name} </button>
    </div>
  )
}
