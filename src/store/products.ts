import { defineStore } from 'pinia'
import { request } from '@/datocms';
import { ref } from 'vue';
import type { Product } from '@/types'

export const useProductsStore = defineStore('products', ()=>{
  const products = ref<Product[]>([]);
  const product = ref<Product>();
  const loading = ref(false);
  const error = ref<Error | unknown>();

  const fetchProducts = async (filter: string) => {
    error.value = null;
    loading.value = true;
    try {
      const res = await request({
        query: `query{
          allProducts${filter ? `(filter: { ${filter}: { eq: true } })` : '' } {
            id
            name
            slug
            price
            category
            size
            description
            images {
              url
              }
            }
          }`,
        variables: undefined,
        includeDrafts: undefined,
        excludeInvalid: undefined
      });
      products.value = res.allProducts;
    } catch (e) {
      error.value = e;
    }
    loading.value = false;
}

  const fetchProduct = async (id: string)=>{
    error.value = null;
    loading.value = true;
    try {
      const res = await request({
        query: `
        query{
          product(filter: { id: { eq: ${id} } }){
              id
              name
              slug
              price
              category
              size
              description
              new
              popular
              images {
                url
                }
          }
        }
        `,
        variables: undefined,
        includeDrafts: undefined,
        excludeInvalid: undefined
      });
      product.value = res.product;
    } catch (e) {
      error.value = e;
    }
    loading.value = false;
  }
  return {products, product, error, loading, fetchProducts, fetchProduct}
})