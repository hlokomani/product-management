import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectContent, SelectTrigger } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface ProductFilterProps {
  filter: string;
  setFilter: (value: string) => void;
  orderBy: string;
  setOrderBy: (value: string) => void;
  ascending: boolean;
  setAscending: (value: boolean) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ filter, setFilter, orderBy, setOrderBy, ascending, setAscending }) => {
  return (
    <div className="mb-4 flex items-center">
      <Input
        type="text"
        placeholder="Filter products..."
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
  );
};

export default ProductFilter;
