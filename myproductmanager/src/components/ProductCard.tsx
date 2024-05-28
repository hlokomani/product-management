import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Product {
  Id: number;
  Name: string;
  Category: number;
  Price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.Name}</CardTitle>
        <CardDescription>Category: {product.Category}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-bold">R{product.Price}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          onClick={() => router.push(`/products/${product.Id}`)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
