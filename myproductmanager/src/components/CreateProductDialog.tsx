import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import { useToast } from "@/components/ui/use-toast";
import { createProduct } from "@/api/api";

const CreateProductDialog: React.FC = () => {
  const [newProduct, setNewProduct] = useState({ Name: "", Category: "1", Price: "" });
  const [error, setError] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleCreateProduct = async () => {
    if (!newProduct.Name || !newProduct.Price || !newProduct.Category) {
      setError("All fields are required.");
      return;
    }

    const response = await createProduct({
      Name: newProduct.Name,
      Category: parseInt(newProduct.Category, 10),
      Price: parseFloat(newProduct.Price),
    });

    if (response.ok) {
      toast({
        description: `Product ${newProduct.Name} has been created.`,
      });
      setNewProduct({ Name: "", Category: "1", Price: "" });
      setError(null);
      setIsDialogOpen(false);
    } else {
      setError("Failed to create product.");
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsDialogOpen(true)}>Create Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Product</DialogTitle>
          <DialogDescription>
            Fill in the details of the new product.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Input
              id="name"
              placeholder="Product Name"
              value={newProduct.Name}
              onChange={(e) => setNewProduct({ ...newProduct, Name: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Select
              value={newProduct.Category}
              onValueChange={(value) => setNewProduct({ ...newProduct, Category: value })}
            >
              <SelectTrigger>
                <span>Category {newProduct.Category}</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Category A</SelectItem>
                <SelectItem value="2">Category B</SelectItem>
                <SelectItem value="3">Category C</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Input
              id="price"
              placeholder="Price"
              value={newProduct.Price}
              onChange={(e) => setNewProduct({ ...newProduct, Price: e.target.value })}
            />
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
          <Button type="button" onClick={handleCreateProduct}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProductDialog;
