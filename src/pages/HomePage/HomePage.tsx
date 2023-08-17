import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
import {PRODUCTS } from "../../mocks/products";
import FilterBar from "../../components/FilterBar/FilterBar";
import ProductList from "../../components/ProductList/ProductList";


  const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>("tout");
  
    const handleSetSelectedCategory = (category: string | null) => {
      setSelectedCategory(category);
    };
  
    return (
      <>
        <Hero />
        <main>
          <FilterBar
            setSelectedCategory={handleSetSelectedCategory}
            activeCategory={selectedCategory}
          />
          <ProductList selectedCategory={selectedCategory === "tout" ? null : selectedCategory} />
        </main>
      </>
    );
  };  

export default HomePage