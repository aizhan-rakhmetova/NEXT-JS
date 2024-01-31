import Image from "next/image";

export default function ProductDetails( { params } :
{ params:  { productId: string } }) {
  return (
      <div>
          <h1>Details of Product {params.productId} </h1>
      </div>


  );
}
