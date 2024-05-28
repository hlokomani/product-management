export interface Product {
    Id?: number;
    Name: string;
    Category: number;
    Price: number;
  }
  
  const API_BASE_URL = "https://gendacproficiencytest.azurewebsites.net/API/ProductsAPI";
  
  export const fetchProducts = async (params: any) => {
    const query = new URLSearchParams(params).toString();
    const response = await fetch(`${API_BASE_URL}?${query}`);
    return response.json();
  };
  
  export const fetchProductById = async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    return response.json();
  };
  
  export const createProduct = async (product: Product) => {
    return fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  };
  
  export const updateProduct = async (id: string, product: Product) => {
    return fetch(`${API_BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  };
  
  export const deleteProduct = async (id: string) => {
    return fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });
  };
  