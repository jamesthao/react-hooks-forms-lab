import React, { useState } from "react";
import items from "../data/items";

function ItemForm(props) {
  const [item, setItem] = useState({ id: "", name: "", category: "" })

  const handelChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
  }
  return (
    <form className="NewItem"

      onSubmit={() => {
        props.onItemFormSubmit({
          id: uuid(), name: item.name, category: item.category
        })
      }}
    >

      <label>
        Category:
        <select name="category" value={items.name} onChange={e => handelChange(e)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onClick={props.onItemFormSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
