import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

function useIncreaseSingleItemInCart(setIsDialogOpen, setDialogMessage) {
  const dispatch = useDispatch();
  const increaseCartItem = (quantityLeft, id, quantity) => {
    if (quantityLeft > 0) {
      dispatch(
        cartActions.addItemToCart({
          id: id,
        })
      );
    } else {
      setIsDialogOpen(true);
      setDialogMessage({
        title: "Limited Stock",
        message: `We only have ${quantity} piece(s) in our store`,
      });
    }
  };

  return { increaseCartItem };
}

export default useIncreaseSingleItemInCart;
