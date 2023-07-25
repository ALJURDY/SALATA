import React from "react";
import FilterButton from "../components/FilterButton/FilterButton";
import Hero from "../components/Hero/Hero";
import {PRODUCTS } from "../mocks/products";
import FilterBar from "../components/FilterBar/FilterBar";

const HomePage = () => {
  // Sélectionnez un produit spécifique pour passer à FilterButton
  const dietToDisplay = PRODUCTS[0]; 

  return (
    <>
      <Hero />
      <FilterBar />
      
    </>
  );
};

export default HomePage;
