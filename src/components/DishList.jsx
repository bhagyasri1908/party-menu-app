import React from "react";
import DishCard from "./DishCard";
import "./DishList.css";

function DishList({ dishes, selectedDishes, onAddDish, onRemoveDish, onViewIngredients }) {
  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          isSelected={selectedDishes.includes(dish.id)}
          onAddDish={onAddDish}
          onRemoveDish={onRemoveDish}
          onViewIngredients={onViewIngredients}
        />
      ))}
    </div>
  );
}

export default DishList;
