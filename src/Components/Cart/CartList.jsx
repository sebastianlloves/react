import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, deleteItem } from "../../features/cart/cartSlice";
import CountSelector from "./CountSelector";
import { TrashIcon } from "@heroicons/react/24/outline";
import ViewTransitionLink from "../../routes/ViewTransitionLink";

const CartList = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <ul role="list" className="mx-6 divide-y divide-gray-200">
        {cartItems.map(
          ({
            id,
            colorSelected,
            sizeSelected,
            countSelected,
            imagesURL,
            name,
            price,
            idCartItem,
          }) => (
            <li
              key={`${id}-${colorSelected}-${sizeSelected}`}
              className="flex flex-wrap border py-6"
            >
              <div className="flex max-w-[50%] flex-col gap-4 border sm:flex-row">
                <ViewTransitionLink to={`../product/${id}`}>
                  <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-md border-transparent p-2 shadow-md shadow-stone-300">
                    <img
                      src={imagesURL[0]}
                      className="img-product max-h-full max-w-full object-cover object-center"
                      style={{ viewTransitionName: `img-product-${id}` }}
                    />
                  </div>
                </ViewTransitionLink>
                <div className="ml-2">
                  <ViewTransitionLink to={`../product/${id}`}>
                    <h3 className="mb-1 line-clamp-1">{name}</h3>
                  </ViewTransitionLink>
                  <p className="w-max mt-1 text-sm font-normal text-gray-500">
                    Color: {colorSelected}
                  </p>
                  <p className="w-max mt-1 text-sm font-normal text-gray-500">
                    Talle: {sizeSelected}
                  </p>
                </div>
              </div>
              {/* Segundo cuadro */}
              <div className="flex w-1/2 flex-col sm:flex-row justify-evenly sm:justify- items-center border py-4 sm:p-0 text-base font-medium text-gray-900">
                <CountSelector itemData={{ idCartItem, countSelected }} />
                <div className="flex h-1/2 sm:h-full flex-col-reverse items-center justify-around border sm:flex-col">
                  <p className="w-max border font-semibold">{`U$D ${(
                    price * countSelected
                  ).toFixed(2)}`}</p>
                  <TrashIcon
                    className="w-6 cursor-pointer border text-indigo-700 duration-200 hover:text-indigo-500"
                    onClick={() => {
                      dispatch(deleteItem(idCartItem));
                    }}
                  />
                </div>
              </div>
            </li>
          )
        )}
      </ul>

      <div className="mt-8 border-t border-gray-400 px-4 py-8 sm:px-6">
        <div className="flex justify-between text-lg font-medium text-gray-900">
          <p>Subtotal</p>
          <p className="w-max text-center text-xl font-bold">
            U$D{" "}
            {cartItems
              .reduce(
                (prevValue, currentValue) =>
                  prevValue + currentValue.price * currentValue.countSelected,
                0
              )
              .toFixed(2)}
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Envío e impuestos calculados al finalizar compra.
        </p>
        <div className="mt-6">
          <button className="my-10 w-full max-w-[14rem] rounded-md bg-azure-950/95 py-3 text-base font-medium text-white shadow-md shadow-azure-800/80 duration-300 hover:bg-azure-950">
            <ViewTransitionLink to={`../`}>
              Finalizar
            </ViewTransitionLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
