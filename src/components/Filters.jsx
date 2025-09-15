import React from "react";
import "./Filters.css";

function Filters({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegOnly,
  nonVegOnly,
  onVegOnlyChange,
  onNonVegOnlyChange,
  categoryCounts,
}) {
  const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

  return (
    <div className="filters-container">
      {/* Search Input */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search dishes..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={activeCategory === cat ? "active-tab" : ""}
          >
            {cat} ({categoryCounts[cat] || 0})
          </button>
        ))}
      </div>

      {/* Veg & Non-Veg Toggle + Selected Count */}
      <div className="veg-nonveg-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={vegOnly}
            onChange={(e) => onVegOnlyChange(e.target.checked)}
          />
          <span className="slider veg-slider"></span>
          <span className="label-text">Veg</span>
        </label>

        <label className="switch">
          <input
            type="checkbox"
            checked={nonVegOnly}
            onChange={(e) => onNonVegOnlyChange(e.target.checked)}
          />
          <span className="slider nonveg-slider"></span>
          <span className="label-text">Non-Veg</span>
        </label>

        <div className="selected-count">
          {activeCategory} Selected: {categoryCounts[activeCategory] || 0}
        </div>
      </div>
    </div>
  );
}

export default Filters;
