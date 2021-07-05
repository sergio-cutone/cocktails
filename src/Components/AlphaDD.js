import React from "react"

const AlphaDD = ({ fetchByLetter }) => {
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]
  return (
    <>
      Drinks by letter:{" "}
      <select
        onBlur={fetchByLetter}
        className="p-1 border border-gray-500 rounded-md h-10 text-black"
      >
        {alpha.map((letter, i) => {
          return (
            <option value={letter} key={`letter-${i}`}>
              {letter}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default AlphaDD
