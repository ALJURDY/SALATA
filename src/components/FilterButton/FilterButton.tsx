import style from "./FilterButton.module.css"
import { jSXElement } from "@babel/types"

interface FilterButtonProps {
    children : JSX.Element | JSX.Element[];
  }

  const productDiet: string [] = [
    "végan",
    "végétarien",
    "sans porc",
    "sans gluten",
    "pâtes",
    "produits de la mer"
  ]

  const productCategory: string [] = [
    "salade",
    "boisson",
    "dessert"
  ]


export const FilterButton = (props : FilterButtonProps) => {
    const {children} = props;

    return <button />

  }

  
  export default FilterButton