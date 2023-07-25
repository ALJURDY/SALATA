import { IProduct } from "../../mocks/products";
import style from "./FilterButton.module.css"

interface FilterButtonProps {
  item: IProduct;
  // category: IProduct;
}



const FilterButton = (props: FilterButtonProps) => {
  const { item, } = props;
  const { diet } = item;
  // const { cate } = category;
  
  return (
    <button className={style.FilterButtonTangerine}>
      {diet && diet.map((regime, index) => <span key={index}>{regime}</span>)}
      {/* {cate && cate.map((choix, index)=> <span key= {index}>{choix}</span>)} */}

    </button>
  );
}



export default FilterButton
