import React from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import "../App.css"
import { Footer } from "../components/Footer"

export const Main = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        
    </div>
  )
}
