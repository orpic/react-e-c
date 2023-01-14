import { useDispatch } from "react-redux";
import { productActions } from "../store/productSlice";
import { useHttp } from "../hooks";
import { useEffect } from "react";
import { getProducts } from "../lib/api";

const useProductFetch = () => {
  const dispatch = useDispatch();

  // getting products data from http hook
  const {
    sendRequest,
    status,
    data: products,
    error,
  } = useHttp(getProducts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  // four status for product store - / pending / error / empty / success /
  useEffect(() => {
    if (status === "pending") {
      dispatch(productActions.updateStatus("pending"));
    }
    if (error) {
      dispatch(productActions.updateStatus("error"));
    }
    if (status === "completed" && (!products || products.length === 0)) {
      dispatch(productActions.updateStatus("empty"));
    }
    if (status === "completed" && products.length > 0) {
      dispatch(productActions.addProductsToStore(products));
      dispatch(productActions.updateStatus("success"));
    }
  }, [status, products, error, dispatch]);
};

export default useProductFetch;
