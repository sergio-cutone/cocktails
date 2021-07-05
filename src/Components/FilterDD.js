import React, { useState, useEffect } from "react"
import axios from "axios"

const FilterDD = ({ fetchByIngredient }) => {
  const [filterList, setFilterList] = useState([])
  const fetchIngredientList = () => {
    const options = {
      url: "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
      method: "POST",
    }
    axios(options).then(response => {
      if (response.status !== 200) {
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
      }
      setFilterList(
        response.data.drinks.sort((a, b) => {
          const nameA = a.strIngredient1.toUpperCase() // ignore upper and lowercase
          const nameB = b.strIngredient1.toUpperCase() // ignore upper and lowercase
          if (nameA < nameB) {
            return -1
          }
          if (nameA > nameB) {
            return 1
          }
          return 0
        })
      )
    })
  }
  useEffect(() => {
    fetchIngredientList()
  }, [])
  return (
    <select
      className="pl-7 p-1 border border-gray-500 rounded-md h-10 w-full h-10 text-black"
      onChange={fetchByIngredient}
    >
      <option>Search by ingredient...</option>
      {filterList.map((ingredient, i) => (
        <option key={`ingredient-${i}`}>{ingredient.strIngredient1}</option>
      ))}
    </select>
  )
}

export default FilterDD
