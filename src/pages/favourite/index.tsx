import React from 'react';
import { useAppSelector } from '../../hooks/redux';

function Favourite() {
  const selectedCurrencies = useAppSelector((state) => state?.currency);
  console.log(selectedCurrencies);
  return <div>Hello from FAV</div>;
}

export default Favourite;
