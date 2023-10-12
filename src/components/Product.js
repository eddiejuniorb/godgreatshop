import React from "react";

function Product({ productname, discount, image, price }) {
  const actualPercentage = discount ? (discount / 100) * price : 0;
  const actualPrice = (price - actualPercentage).toFixed(0);

  return (
    <div>
      <div className="relative w-full">
        {/* Product Image */}
        <div className="bg-gray-100 p-3">
          <img src={image} alt="" />
        </div>
        {/* Produt Description */}
        <div className="mt-3">
          <h1 className="font-sansM">{productname}</h1>
          <div className="flex items-center gap-8 mt-1">
            <h1
              className={`font-sansM text-gray-900 ${
                discount && "text-red-700"
              }`}
            >
              {actualPrice} $
            </h1>
            {discount && (
              <h1 className="line-through font-sansM text-gray-900">
                {price} $
              </h1>
            )}
          </div>
        </div>

        {/* Discount Tag */}
        {discount && (
          <div className="absolute bg-red-700 text-white p-1 text-[13px] top-2 right-2 px-2 rounded-sm">
            <h1>Sale</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
