import React from 'react';
import './index.scss';
import { useAppSelector } from '../../hooks/redux';
import { useGetCurrencyRatesQuery } from '../../store/currencies/currencies.api';
import Pair from '../../components/Pair/Pair';

function Favourite() {
  const { selectedCurrencies } = useAppSelector((state) => state?.currency);
  const { isLoading, isError, data } = useGetCurrencyRatesQuery(
    selectedCurrencies.join(',')
  );
  const pairs: object = data?.data;

  if (!pairs || Object.keys(pairs).length === 0) {
    return (
      <div className="favorites container">
        Выберете пары на главной странице
      </div>
    );
  }

  const convertedPairs: { name: string; value: string }[] = Object.entries(
    pairs!
  ).map((item) => ({ name: item[0], value: item[1] }));

  return (
    <div className="favorites container">
      {isLoading && <p>Загрузка...</p>}
      {isError && <p>Что-то пошло не так...</p>}
      {convertedPairs.map((item, index) => (
        <Pair pair={item} key={index} />
      ))}
    </div>
  );
}

export default Favourite;
