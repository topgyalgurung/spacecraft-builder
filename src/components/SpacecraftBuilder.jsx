import { useState } from "react";
import { v4 as uuid } from "uuid";

// import components
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";

// pivotal component that manage inventory for spacecraft design process

const SpacecraftBuilder = () => {
  //manage state of inventory
  const [inventory, setInventory] = useState([]);

  const addSpaceCraft = (item) => {
    setInventory((prevItem) => [...prevItem, item]); // { ...item, id: uuid }]);
  };

  const deleteItem = (id) => {
    setInventory((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1 className="text-5xl font-bold">Spacecraft Builder</h1>
      <h2> Add an Item to the Inventory</h2>

      <div className="mb-5">
        {/* render ItemForm to allow submission allowing add items by passing down callback function */}
        <ItemForm onItemSubmit={addSpaceCraft} />
      </div>

      {/* Render InventoryDisplay to showcase inventory items and delete them.   */}
      <div>
        <InventoryDisplay inventory={inventory} onDeleteItem={deleteItem} />
      </div>
    </div>
  );
};

export default SpacecraftBuilder;
