import React, { useEffect, useState } from "react";
import { ModelViewer } from "@/components/ModelViewer";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Product } from "./Upload";
import { getProductsWithPagination } from "../api/getProductsPagination";

export default function Gallery() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchedProducts = async () => {
      const { products, totalPages } = await getProductsWithPagination(
        limit,
        page
      );
      setProducts(products);
      setTotalPages(totalPages);
    };
    fetchedProducts();
  }, [page, limit]);

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <Button onClick={() => navigate("/upload")}>
            <Plus className="w-4 h-4 mr-2" />
            New Model
          </Button>
        </div>

        <h1 className="text-3xl font-bold mb-6">Your 3D Models</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((model) => (
            <ModelViewer
              key={model.id}
              productLink={model.productLink}
              name={model.name}
              dimension={model.dimension}
              price={model.price}
              imageUrl={model.imageUrl}
              onDownload={() => console.log("Downloading", model.name)}
            />
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 space-x-4">
          <Button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            variant="outline"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </Button>

          <span className="text-lg font-medium">
            Page {page} of {totalPages}
          </span>

          <Button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            variant="outline"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
