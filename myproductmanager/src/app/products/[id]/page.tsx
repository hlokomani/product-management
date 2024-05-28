'use client'
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation"; // Correct import for app router
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AlertCircle } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";

interface Product {
  Id: number;
  Name: string;
  Category: number;
  Price: number;
}

export default function ProductDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params; // get id
  console.log(id);
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const response = await fetch(
          `https://gendacproficiencytest.azurewebsites.net/API/ProductsAPI/${id}`
        );
        const data = await response.json();
        setProduct(data);
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleUpdate = async () => {
    if (!product.Name || !product.Price || !product.Category) {
      setError("Name, Price, and Category cannot be blank.");
      return;
    }

    const response = await fetch(
      `https://gendacproficiencytest.azurewebsites.net/API/ProductsAPI/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );

    if (response.ok) {
      toast({
        description: `Product ${product.Name} has been updated.`,
      });
    } else {
      setError("Failed to update product.");
    }
  };

  const handleDelete = async () => {
    const response = await fetch(
      `https://gendacproficiencytest.azurewebsites.net/API/ProductsAPI/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      toast({
        description: `Product ${product.Name} has been deleted.`,
      });
      router.push("/products");
    } else {
      setError("Failed to delete product.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Card>
        <CardHeader>
          <CardTitle>{product.Name}</CardTitle>
          <CardDescription>Category: {product.Category}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-bold">${product.Price}</p>
          <div className="mt-4">
            <Input
              type="text"
              placeholder="Name"
              value={product.Name}
              onChange={(e) =>
                setProduct({ ...product, Name: e.target.value })
              }
              className="mb-2"
            />
            <Input
              type="number"
              placeholder="Price"
              value={product.Price}
              onChange={(e) =>
                setProduct({ ...product, Price: parseFloat(e.target.value) })
              }
              className="mb-2"
            />
            <Input
              type="number"
              placeholder="Category"
              value={product.Category}
              onChange={(e) =>
                setProduct({ ...product, Category: parseInt(e.target.value, 10) })
              }
              className="mb-2"
            />
          </div>
        </CardContent>
        <CardFooter>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Update</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Update</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to update the product details?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleUpdate}>Confirm</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="ml-4">Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete this product? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete}>Confirm</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
      <Button
        variant="outline"
        className="mt-4"
        onClick={() => router.push("/products")}
      >
        Back to Products
      </Button>
    </div>
  );
}
