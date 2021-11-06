import { useState } from 'react';

function Item({ name, category }) {

  const [added, setAdded] = useState(true)

  function addToCartClick() {
    setAdded((added) => !added )
  }

  const cartValue = added ? "Add to Cart" : "Remove From Cart";
  const classValue = added ? "" : "in-cart";
  const buttonClassName = added ? "add" : "remove";

  return (
    <li className={classValue}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClassName} onClick={addToCartClick}>{cartValue}</button>
    </li>
  );
}

export default Item;
