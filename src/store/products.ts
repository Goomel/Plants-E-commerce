import { defineStore } from 'pinia'
import { request } from '@/datocms';
import { ref, computed } from 'vue';
import { Category, Product, TypeOfProducts } from '@/types'
import { Filter } from '@/types'

export const useProductsStore = defineStore('products', ()=>{
  const products = ref<Product[]>([]);
  const product = ref<Product>();
  const loading = ref(false);
  const error = ref<Error | unknown>();
  const filters = ref<Filter>({
    price: null,
    category: null,
    size: null
  })
  const currentProducts = ref(TypeOfProducts.All)
  const filteredProducts = computed(()=>{
    return products.value.filter(product => {
      if (filters.value.price && product.price !== filters.value.price){
        return false
      }
      if (filters.value.category && product.category !== filters.value.category){
        return false
      }
      if (filters.value.size && product.size !== filters.value.size){
        return false
      }
      return true
    })
  })

  const fetchProducts = async (filter: TypeOfProducts) => {
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
            popular
            new
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

  const updateCategory = (category: Category) =>{
    filters.value.category = category
  }
//  const updatePrice = () => {

//  }
  const updateCurrentProducts = (currentType: TypeOfProducts) =>{
    currentProducts.value = currentType
    fetchProducts(currentProducts.value)
  }

  return {products, product, error, loading, fetchProducts, fetchProduct, filteredProducts, filters, updateCategory,currentProducts, updateCurrentProducts}
})