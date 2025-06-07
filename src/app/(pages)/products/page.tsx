import ProductCard from "@/common/components/ProductCard";
import { getSkips } from "@/libs/data/getSkips";
import React, { Suspense, use } from "react";

const ProductsPage = () => {
  const skips = use(getSkips());
  return (
    <Suspense fallback={<div>loadinng</div>}>
      <h3 className="text-3xl">Choose Your Skip Size</h3>
      <p className="text-lg">Select the skip size that best suits your needs</p>
      <ul className="flex flex-wrap justify-between mt-7">
        {skips.data.map((skip) => (
          <li key={skip.id} className="w-full md:w-[410px] mb-5">
            <ProductCard skip={skip} />
          </li>
        ))}
      </ul>
    </Suspense>
  );
};

export default ProductsPage;
