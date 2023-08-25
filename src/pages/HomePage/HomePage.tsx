import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import { DietType } from "../../mocks/products";
import FilterBar from "../../components/FilterBar/FilterBar";
import ProductList from "../../components/ProductList/ProductList";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("tout");
  const [selectedDiet, setSelectedDiet] = useState<DietType | null>(null);

  const handleSetSelectedCategory = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handleDietClick = (diet: DietType | null) => {
    setSelectedDiet(diet);
  };

  return (
    <>
      <Hero />
      <main>
        <FilterBar
          setSelectedCategory={handleSetSelectedCategory}
          activeCategory={selectedCategory}
          setSelectedDiet={handleDietClick}
          activeDiet={selectedDiet}
        />
        <ProductList
          selectedCategory={selectedCategory === "tout" ? null : selectedCategory}
          selectedDiet={selectedDiet}
        />
      </main>
    </>
  );
};

export default HomePage;
