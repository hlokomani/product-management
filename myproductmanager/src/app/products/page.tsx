'use client'
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem, SelectContent, SelectTrigger } from "@/components/ui/select";

interface Product {
  Id: number;
  Name: string;
  Category: number;
  Price: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [orderBy, setOrderBy] = useState("Id");
  const [ascending, setAscending] = useState(true);
  const [filter, setFilter] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://gendacproficiencytest.azurewebsites.net/API/ProductsAPI?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&ascending=${ascending}&filter=${filter}`
      );
      const data = await response.json();
      setProducts(data.Results);
      setTotalPages(data.TotalNumberOfPages);
    };

    fetchProducts();
  }, [page, pageSize, orderBy, ascending, filter]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="mb-4 flex items-center">
        <Input
          type="text"
          placeholder="Search for products..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mr-4"
        />
        <Select value={orderBy} onValueChange={(value) => setOrderBy(value)}>
          <SelectTrigger>
            <span>{orderBy}</span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Id">ID</SelectItem>
            <SelectItem value="Name">Name</SelectItem>
            <SelectItem value="Category">Category</SelectItem>
            <SelectItem value="Price">Price</SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          className="ml-4"
          onClick={() => setAscending(!ascending)}
        >
          {ascending ? "Ascending" : "Descending"}
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.Id}>
            <CardHeader>
              <CardTitle>{product.Name}</CardTitle>
              <CardDescription>Category: {product.Category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold">R{product.Price}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
