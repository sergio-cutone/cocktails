import React, { useState } from "react"
import FilterDD from "./FilterDD"
import AlphaDD from "./AlphaDD"
import { SearchIcon } from "@heroicons/react/solid"
import { XIcon } from "@heroicons/react/solid"
import { QuestionMarkCircleIcon } from "@heroicons/react/solid"
import logo from "../img/logo.png"

const FilterBar = ({
  handleRandomDrink,
  setSearchResults,
  fetchByIngredient,
  fetchByLetter,
}) => {
  const [alphaSearch, setAlphaSearch] = useState(true)

  return (
    <>
      <header className="px-6 py-3 bg-pink-900">
        <img
          src={logo}
          alt="Cocktails"
          className="mx-auto w-48 sm:w-64 cursor-pointer"
          onClick={handleRandomDrink}
        />
      </header>
      <div className="relative p-2 bg-pink-800 text-white shadow-lg">
        {alphaSearch ? (
          <>
            <AlphaDD fetchByLetter={fetchByLetter} />
            <SearchIcon
              className="absolute left-2 top-1/2 transform -translate-y-1/2 h-7 cursor-pointer hover:text-pink-200"
              onClick={() => setAlphaSearch(!alphaSearch)}
            />
            <QuestionMarkCircleIcon
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 cursor-pointer hover:text-pink-200"
              onClick={handleRandomDrink}
            />
          </>
        ) : (
          <>
            <FilterDD
              setSearchResults={setSearchResults}
              fetchByIngredient={fetchByIngredient}
            />
            <XIcon
              className="absolute left-2 top-1/2 transform -translate-y-1/2 h-7 text-black cursor-pointer hover:text-pink-200"
              onClick={() => setAlphaSearch(!alphaSearch)}
            />
          </>
        )}
      </div>
    </>
  )
}

export default FilterBar
