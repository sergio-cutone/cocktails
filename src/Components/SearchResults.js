import React from "react"

const SearchResults = ({ searchResults, fetchById }) => {
  return (
    <p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 text-xs sm:text-md">
        {searchResults.map((drink, i) => (
          <p
            onClick={() => fetchById(drink.idDrink)}
            className="cursor-pointer hover:text-pink-700 hover:opacity-80 font-bold"
            key={`results-${i}`}
          >
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              title={drink.strDrink}
              className="rounded-lg shadow-lg mb-2 border-8 border-blue-400"
            />
            {drink.strDrink}
          </p>
        ))}
      </div>
    </p>
  )
}

export default SearchResults
