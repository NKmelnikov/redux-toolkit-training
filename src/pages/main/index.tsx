import React from 'react';
import './index.scss';
import { useGetCurrencyListQuery } from '../../store/currencies/currencies.api';
import CurrencyCard from '../../components/CurrencyCard/CurrencyCard';

function Main() {
  const { isLoading, isError, data } = useGetCurrencyListQuery('');
  const currencies = data?.data;

  return (
    <main className="currencies container">
      {isLoading && <p>Загрузка...</p>}
      {isError && <p>Что-то пошло не так...</p>}
      {currencies?.map((el, i) => (
        <CurrencyCard el={el} key={i} />
      ))}
    </main>
  );
}

export default Main;
