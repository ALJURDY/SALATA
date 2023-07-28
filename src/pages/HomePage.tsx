import React from "react";
import Hero from "../components/Hero/Hero";
import {PRODUCTS } from "../mocks/products";
import FilterBar from "../components/FilterBar/FilterBar";
import ProductCart from "../components/ProductCard/ProductCard";
import ProductList from "../components/ProductList/ProductList";

const HomePage = () => {
  // Sélectionnez un produit spécifique pour passer à FilterButton
  const dietToDisplay = PRODUCTS[0]; 

  return (
    <>
      <Hero />
      <FilterBar />
      <ProductList/>
      
    </>
  );
};

export default HomePage;
