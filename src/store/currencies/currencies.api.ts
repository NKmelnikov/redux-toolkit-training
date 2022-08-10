import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ICurrencyList,
  ICurrencyRates
} from '../../models';

// const URL_API_BASE = 'https://currate.ru/api/';
const URL_API_BASE = 'http://localhost:8010/proxy/api/';
const API_KEY = '1c98a1dae29172f38bd160f9e49dea5f';

export const currenciesApi = createApi({
  reducerPath: 'currenciesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URL_API_BASE,
  }),
  endpoints: (build) => ({
    getCurrencyList: build.query<ICurrencyList, string>({
      query: () => ({
        url: ``,
        method: 'GET',
        params: {
          get: 'currency_list',
          key: API_KEY,
        },
      }),
    }),
    getCurrencyRates: build.query<ICurrencyRates, string>({
      query: (pairs) => ({
        url: ``,
        method: 'GET',
        params: {
          get: 'rates',
          pairs:pairs,
          key: API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetCurrencyListQuery, useGetCurrencyRatesQuery } = currenciesApi;
