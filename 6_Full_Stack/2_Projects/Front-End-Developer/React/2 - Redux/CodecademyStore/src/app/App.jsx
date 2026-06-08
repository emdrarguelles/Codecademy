import React from 'react';

import { Inventory } from '../features/inventory/Inventory';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter';
// Import the Cart component here.
import { Cart } from '../features/cart/Cart';
import { SearchTerm } from '../features/searchTerm/SearchTerm';
// Render the Cart component below <Inventory />
export const App = (props) => {
  const { state, dispatch } = props;

  const visibleInventory = state.inventory.filter(item =>
    item.name.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <SearchTerm
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />

      <Inventory
        inventory={visibleInventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch} 
      />

    </div>
  );
};
