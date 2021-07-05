import React from "react"
import { XIcon } from "@heroicons/react/solid"

const ingredients = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Details = ({ drinkDetails, setDrinkDetails }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-pink-900 z-50 text-white px-6 py-10 overflow-y-auto text-sm sm:text-base">
      <div className="max-w-screen-md mx-auto">
        <div
          onClick={() => setDrinkDetails(false)}
          className="cursor-pointer fixed top-2 left-2 rounded-lg p-1 bg-blue-500 hover:bg-blue-300 text-white font-bold leading-7 border-2 border-white"
        >
          <XIcon className="h-6" />
        </div>
        <h2 className="text-xl font-bold mb-3 text-blue-300">Drink Details</h2>
        <img
          src={drinkDetails.strDrinkThumb}
          alt={drinkDetails.strDrink}
          className="w-48 sm:w-80 mx-auto rounded-lg shadow-lg mb-2 border-8 border-blue-500"
        />
        <p className="text-blue-300 font-bold">{drinkDetails.strDrink}</p>
        <p>
          <strong>Type:</strong> {drinkDetails.strAlcoholic}
        </p>
        <p>
          <strong>Glass:</strong> {drinkDetails.strGlass}
        </p>
        <p className="mt-5">
          <strong>Ingredients</strong>
        </p>
        {ingredients.map(
          (e, i) =>
            drinkDetails["strIngredient" + e] && (
              <div
                key={`ingredients-${i}`}
                className="grid grid-cols-2 border-b border-white py-2"
              >
                <div>{drinkDetails["strIngredient" + e]}</div>
                <div>{drinkDetails["strMeasure" + e]}</div>{" "}
              </div>
            )
        )}
        <p className="text-center font-bold mt-5">Instructions</p>
        <p className="text-left">{drinkDetails.strInstructions}</p>
      </div>
    </div>
  )
}

export default Details
