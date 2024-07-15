import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { formatCurrency } from "../../utilities/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2 ">
      <img
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex flex-col flex-grow pt-1">
        <p className="font-medium ">{name}</p>
        <p className="text-sm italic capitalize text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="flex items-center justify-between mt-auto">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart && !soldOut && <DeleteItem pizzaId={id} />}
          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
