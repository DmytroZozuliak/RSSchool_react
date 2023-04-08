import axios from 'axios';
import { ProductsResponse } from '../types/itemType';

const BASE_URL = 'https://dummyjson.com';
const PAGE_LIMIT = 5;

const dummyJsonApi = axios.create({
  baseURL: BASE_URL,
});

export async function getProducts(term: string, controller?: AbortController) {
  const response = await dummyJsonApi<ProductsResponse>('/products/search', {
    params: {
      limit: PAGE_LIMIT,
      skip: 0,
      q: term,
    },
    signal: controller?.signal,
  });

  return response.data;
}