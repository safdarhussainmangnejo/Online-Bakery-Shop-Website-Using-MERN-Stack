import { Product } from "./Product";
import React from "react";

export function Products() {
  return (
    <div>
        <div style={{width:"20%", margin:"auto", marginTop:"40px"}}>
            <h1>OUR PRODUCTS</h1>
        </div>
      <Product />
    </div>
  );
}
