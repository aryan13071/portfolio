import React from 'react'
import { Link } from "react-router-dom";
import {Cards} from './Cards.jsx'
function Profiles () {
  return (
    <>
    {/* <div className="codeforces border-4 flex w-full justify-center gap-4 flex-wrap">
      <img src="src/assets/CF profile.png" alt="aya kya" className="max-w-xs w-full h-auto rounded-lg" />
      <img src="src/assets/CF solves.png" alt="aya kya" className="max-w-xs w-full h-auto rounded-lg" />
    </div>
    <button>click me </button> */}
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <Cards name="Codeforces" />
    </div>
    </>
  )
}
export default Profiles;