// enables users to delete an item
// invokes callback function handed down from SpacecraftBuilder to InventoryDisplay

const ItemAction = ({ itemId, onDeleteItem }) => {
  return (
    <>
      <button
        className="flex items-center justify-center w-40 h-10 outline outline-red-500  "
        onClick={() => onDeleteItem(itemId)}
      >
        Delete
      </button>
    </>
  );
};

export default ItemAction;
