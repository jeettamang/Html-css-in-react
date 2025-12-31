import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/product.css";

const Product = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const res = await axios.get("https://dummyjson.com/recipes");

    setRecipes(res.data.recipes);
    console.log(res.data.recipes);
  };
  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <>
      <h1 className="heading">Recipes with different cuisine</h1>
      {recipes.length > 0 ? (
        <div className="recipes">
          {recipes.map((item) => {
            return (
              <div key={item.id} className="recipes-child">
                <img src={item.image} alt={item.name} />
                <div className="heading-para">
                  <h2>{item.name}</h2>
                  <p>
                    Cuisine: <i>{item.cuisine}</i>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Product;
