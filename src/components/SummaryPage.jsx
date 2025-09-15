import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { dishes } from "../data/mockDishes";

function SummaryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDishes } = location.state || { selectedDishes: [] };

  const selectedDishObjects = dishes.filter((dish) =>
    selectedDishes.includes(dish.id)
  );

  return (
    <div className="app-container">
      <h1>Selected Dishes Summary</h1>
      {selectedDishObjects.length === 0 ? (
        <p>No dishes selected.</p>
      ) : (
        <ul>
          {selectedDishObjects.map((dish) => (
            <li key={dish.id}>
              <strong>{dish.name}</strong> - {dish.description}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Back to Menu
      </button>
    </div>
  );
}

export default SummaryPage;
