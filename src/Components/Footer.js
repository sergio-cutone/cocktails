import React, { useEffect, useState } from "react"
import { ChevronUpIcon } from "@heroicons/react/solid"
import reactImg from "../img/react.png"
import cocktaildbImg from "../img/cocktaildb.png"
import axiosImg from "../img/axios.png"
import tailwindcssImg from "../img/tailwindcss.png"

const Footer = () => {
  const date = new Date()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  const [isVisible, isVisibleState] = useState(false)
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop
      if (scrolled > 300) {
        isVisibleState(true)
      } else {
        isVisibleState(false)
      }
    }
    window.addEventListener("scroll", toggleVisible)
  }, [])
  return (
    <>
      <footer className="p-10">
        <p>Copyright {date.getFullYear()} Sergio Cutone</p>
        <div className="text-center mt-2">
          <img
            src={reactImg}
            className="h-12 inline"
            alt="React"
            title="React"
          />
          <img
            src={axiosImg}
            className="h-12 inline"
            alt="Axios"
            title="Axios"
          />
          <img
            src={cocktaildbImg}
            className="h-12 inline"
            alt="The Cocktail DB"
            title="The Cocktail DB API"
          />
          <img
            src={tailwindcssImg}
            className="h-12 inline"
            alt="Tailwind CSS"
            title="Tailwind CSS"
          />
        </div>
      </footer>
      <ChevronUpIcon
        onClick={scrollToTop}
        className={`z-40 shadow-md fixed bottom-5 right-5 h-10 w-10 rounded-md cursor-pointer bg-pink-800 hover:bg-pink-600 text-white ${
          !isVisible && "hidden"
        }`}
      />
    </>
  )
}

export default Footer
