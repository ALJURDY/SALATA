import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import { DietType } from "../../mocks/products";
import FilterBar from "../../components/FilterBar/FilterBar";
import ProductList from "../../components/ProductList/ProductList";

const HomePage = () => {

  // Hooks pour chaque rangée de boutons
  const [selectedCategory, setSelectedCategory] = useState<string>("tout");
  const [selectedDiets, setSelectedDiets] = useState<DietType[] | []>([]);

  return (
    <>
      <Hero />
      <main>
        <FilterBar
          setSelectedCategory={setSelectedCategory}
          activeCategory={selectedCategory}
          setSelectedDiets={setSelectedDiets}
          activeDiets={selectedDiets}
        />
        <ProductList
          selectedCategory={selectedCategory}
          selectedDiets={selectedDiets}
        />
      </main>
    </>
  );
};

export default HomePage;
