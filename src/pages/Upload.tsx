import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { ArrowLeft, Loader2, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SelectableCard } from "../components/ui/SelectableCard";
import { scrapeProducts } from "../api/scrape";
import Loader from "../components/Loader";

export interface Product {
  id: string;
  name: string;
  price: number;
  dimensions: string;
  imageUrl: string;
  productUrl: string;
}

export default function Upload() {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedCards, setSelectedCards] = useState<Set<string>>(new Set());
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleScrape = async () => {
    setIsLoading(true);
    const products = await scrapeProducts(url);
    setProducts(products);
    setIsLoading(false);
  };

  const toggleCard = (id: string) => {
    setSelectedCards((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  const handleGenerate = () => {
    const selectedImages = products.filter((product) =>
      selectedCards.has(product.id)
    );
    console.log("Selected images:", selectedImages);
  };

  return (
    <div className="min-h-screen p-4">
      {isLoading && (
        <div className="flex items-center justify-center h-full">
          <Loader />
        </div>
      )}
      <div className="max-w-6xl mx-auto">
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <h1 className="text-3xl font-bold mb-6">Generate 3D Models</h1>

        {/* URL Input Section */}
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter category URL"
            className="flex-1 px-4 py-2 rounded-lg bg-secondary text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button onClick={handleScrape}>
            <Search className="w-4 h-4 mr-2" />
            Scrape
          </Button>
        </div>

        {/* Image Selection Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Select Images to Generate
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <SelectableCard
                key={product.id}
                id={product.id}
                productData={product}
                selected={selectedCards.has(product.id)}
                onSelect={toggleCard}
              />
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <Button
          onClick={handleGenerate}
          disabled={selectedCards.size === 0 || isGenerating}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generating 3D Models...
            </>
          ) : (
            "Generate Selected Models"
          )}
        </Button>
      </div>
    </div>
  );
}
