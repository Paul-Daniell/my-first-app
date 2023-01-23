import { useState } from "react";
import "./App.css";
import { DrinkChoice } from "./Components/DrinkChoice";
import { DrinkSearch } from "./Components/DrinkSearch";

export const App = () => {
  const [userDrink, setUserDrink] = useState();
  const greeting = "Welcome to our cafe!";

  return (
    <div className="App">
      {userDrink ? (
        <DrinkChoice drink={userDrink} />
      ) : (
        <>
          <h1>{greeting}</h1>

          <DrinkSearch />
        </>
      )}
    </div>
  );
};
