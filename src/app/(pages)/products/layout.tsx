import Stepper from "@/common/components/Stepper";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const ProductsLayout = ({ children }: Props) => {
  return (
    <div className="py-10 px-0 md:px-15">
      <Stepper />
      {children}
    </div>
  );
};

export default ProductsLayout;
