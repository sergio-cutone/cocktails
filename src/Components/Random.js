import React from "react"

const Random = ({ randomDrink }) => {
  const ingredients = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <>
      {randomDrink ? (
        <div className="mb-5">
          <h2 className="text-xl font-bold my-3">Random Drink</h2>
          <img
            src={randomDrink.strDrinkThumb}
            alt={randomDrink.strDrink}
            className="w-48 sm:w-80 mx-auto rounded-lg shadow-lg border-8 border-blue-400 mb-2"
          />
          <p className="font-bold">{randomDrink.strDrink}</p>
          <p>
            <strong>Type:</strong> {randomDrink.strAlcoholic}
          </p>
          <p>
            <strong>Glass:</strong> {randomDrink.strGlass}
          </p>
          <p className="mt-5">
            <strong>Ingredients</strong>
          </p>
          {ingredients.map(
            (e, i) =>
              randomDrink["strIngredient" + e] && (
                <div
                  className="grid grid-cols-2 border-b border-black py-2"
                  key={`ingredient-${i}`}
                >
                  <div>{randomDrink["strIngredient" + e]}</div>
                  <div>{randomDrink["strMeasure" + e]}</div>{" "}
                </div>
              )
          )}
          <p className="text-center font-bold mt-5">Instructions</p>
          <p className="text-left">{randomDrink.strInstructions}</p>
        </div>
      ) : (
        "Loading Random Drink..."
      )}
    </>
  )
}

export default Random
