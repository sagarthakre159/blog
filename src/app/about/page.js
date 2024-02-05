import React from 'react'
async function productList(){
  let data = await fetch("https://dummyjson.com/products");
  data= await data.json();
  return data.products
}

export default async function page() {
  let products= await productList();
  return (
    <div>
      <h1>Product List</h1>
      {
        products.map((items)=>
        <div><h3>Name:{items.title}</h3></div>
        )
      }
    </div>
  )
}
