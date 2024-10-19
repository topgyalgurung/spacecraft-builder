// stateless component showcases items in the inventory
import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";

const InventoryDisplay = ({ inventory, onDeleteItem }) => {
  return (
    <div>
      <h2>Inventory</h2>

      {inventory.map((item) => (
        <div
          key={item.id}
          className="flex flex-grow justify-between mb-5 p-5 border-2 border-solid border-white last:mb-5"
        >
          {/* itemContainer */}
          <div>
            <ItemCard
              name={item.name}
              quantity={item.quantity}
              purpose={item.purpose}
            />
          </div>

          <div>
            <ItemAction itemId={item.id} onDeleteItem={onDeleteItem} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventoryDisplay;
