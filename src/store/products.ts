import { defineStore } from 'pinia'
import { request } from '@/datocms';
import { ref } from 'vue';
import { Product } from '@/types'

export const useProductsStore = defineStore('products', ()=>{
  const products = ref<Product[]>([]);
  const product = ref<Product>();
  const loading = ref(true);
  const error = ref<Error | unknown>();

  const fetchProducts = async (filter: string) => {
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

  const fetchProduct = async (id: number)=>{
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
      console.log(e)
    }
  }
  return {products, product, error, loading, fetchProducts, fetchProduct}
})