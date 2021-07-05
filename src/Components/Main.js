import React, { useState, useEffect } from "react"
import axios from "axios"
import Header from "./Header"
import Random from "./Random"
import Details from "./Details"
import SearchResults from "./SearchResults"

const Main = () => {
  const [isRandomDrink, setIsRandomDrink] = useState(true)
  const [searchResults, setSearchResults] = useState(false)
  const [drinkDetails, setDrinkDetails] = useState(false)

  const fetchByIngredient = ingredient => {
    const options = {
      url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient.target.value}`,
    }
    axios(options).then(response => {
      if (response.status !== 200) {
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
      }
      setIsRandomDrink(false)
      setSearchResults(response.data.drinks)
    })
  }

  const fetchByLetter = letter => {
    const options = {
      url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter.target.value}`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      timeout: 4000,
    }
    axios(options).then(response => {
      if (response.status !== 200) {
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
      }
      setIsRandomDrink(false)
      setSearchResults(response.data.drinks)
    })
  }

  const fetchById = id => {
    const options = {
      url: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
      method: "POST",
    }
    axios(options).then(response => {
      if (response.status !== 200) {
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
      }
      setDrinkDetails(response.data.drinks[0])
    })
  }

  const fetchRandomDrink = () => {
    const options = {
      url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      method: "POST",
    }
    axios(options).then(response => {
      if (response.status !== 200) {
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
      }
      setIsRandomDrink(response.data.drinks[0])
    })
  }

  const handleRandomDrink = () => {
    fetchRandomDrink()
    setSearchResults(false)
  }

  useEffect(() => {
    fetchRandomDrink()
  }, [])

  return (
    <>
      <Header
        handleRandomDrink={handleRandomDrink}
        setSearchResults={setSearchResults}
        fetchByLetter={fetchByLetter}
        fetchByIngredient={fetchByIngredient}
      />
      <div className="bg-pink-100 p-5 shadow-lg rounded-b-lg">
        {drinkDetails && (
          <Details
            setDrinkDetails={setDrinkDetails}
            drinkDetails={drinkDetails}
          />
        )}
        {searchResults && (
          <SearchResults searchResults={searchResults} fetchById={fetchById} />
        )}
        {isRandomDrink && (
          <Random
            randomDrink={isRandomDrink}
            fetchRandomDrink={fetchRandomDrink}
          />
        )}
      </div>
    </>
  )
}

export default Main
