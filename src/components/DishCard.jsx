import React from "react";
import "./DishCard.css";

function DishCard({ dish, isSelected, onAddDish, onRemoveDish, onViewIngredients }) {
  return (
    <div className="dish-card">
      <div className="dish-row">
        {/* Left side - details */}
        <div className="dish-details-column">
          <div className="dish-header">
            <h3>{dish.name}</h3>
            <img
              src={dish.type === "VEG" ? "/veg-icon.png" : "/nonveg-icon.png"}
              alt={dish.type}
              className="dish-type-icon"
            />
          </div>

          <p className="dish-desc">{dish.description}</p>

          <div className="dish-buttons">
            <button className="ingredients-btn" onClick={() => onViewIngredients(dish)}>
              Ingredient
            </button>
          </div>
        </div>

        {/* Right side - image with add/remove button */}
        <div className="dish-image-container">
          <img
            src={dish.image || "https://via.placeholder.com/150"}
            alt={dish.name}
            className="dish-img"
          />
          <button
            className={`add-btn ${isSelected ? "selected-btn" : ""}`}
            onClick={() => (isSelected ? onRemoveDish(dish.id) : onAddDish(dish.id))}
          >
            {isSelected ? "Remove" : "Add +"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
