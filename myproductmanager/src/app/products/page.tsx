'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import CreateProductDialog from "@/components/CreateProductDialog";
import { fetchProducts } from "@/api/api";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [orderBy, setOrderBy] = useState("Id");
  const [ascending, setAscending] = useState(true);
  const [filter, setFilter] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const fetchProductsData = async () => {
      const data = await fetchProducts({
        page,
        pageSize,
        orderBy,
        ascending,
        filter,
      });
      setProducts(data.Results);
      setTotalPages(data.TotalNumberOfPages);
    };

    fetchProductsData();
  }, [page, pageSize, orderBy, ascending, filter]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Products</h1>
        <CreateProductDialog />
      </div>
      <ProductFilter
        filter={filter}
        setFilter={setFilter}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        ascending={ascending}
        setAscending={setAscending}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product['Id']} product={product} />
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

