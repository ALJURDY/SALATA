import style from "./FilterBar.module.css";
import FilterButton from "../FilterButton/FilterButton";
import { DietType, ProductCategoryType } from "../../mocks/products";

const DietTypes: DietType[] = [ 
  "végan",
  "végétarien",
  "sans porc",
  "sans gluten",
  "pâtes",
  "produits de la mer",
];

const ProductCategoryTypes: ProductCategoryType[] = [
    "salade",
    "boisson",
    "dessert"
];


const FilterBar = () => {
  return (
    <section className={style.FilterBarSection}>
        <h2 className={style.FilterBarH2}>Quelles saveurs italiennes aujourd'hui ?</h2>
      {DietTypes.map((dietType, index) => (
        <FilterButton
          key={index}
          item={{
            id: 0,
            name: "",
            price: 0,
            description: "",
            diet: [dietType],
            category: "salade",
            img: { src: "", alt: "" },
          }}
        />
      ))}
      
    </section>
  );
}

export default FilterBar;

