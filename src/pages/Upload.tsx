import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { ArrowLeft, Loader2, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SelectableCard } from "../components/ui/SelectableCard";

// Mock data for the cards
const MOCK_IMAGES = [
  {
    id: "1",
    name: "Modern Chair",
    category: "Furniture",
    imageURL:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "2",
    name: "Vintage Lamp",
    category: "Lighting",
    imageURL:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "3",
    name: "Ceramic Vase",
    category: "Decoration",
    imageURL:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "4",
    name: "Wall Art",
    category: "Decoration",
    imageURL:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400",
  },
];

export default function Upload() {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedCards, setSelectedCards] = useState<Set<string>>(new Set());

  const handleScrape = () => {
    alert(url);
  };

  const toggleCard = (id: string) => {
    const newSelected = new Set(selectedCards);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedCards(newSelected);
  };

  const handleGenerate = () => {
    const selectedImages = MOCK_IMAGES.filter((img) =>
      selectedCards.has(img.id)
    );
    console.log("Selected images:", selectedImages);
  };

  return (
    <div className="min-h-screen p-4">
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
            placeholder="Enter image URL"
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
            {MOCK_IMAGES.map((image) => (
              <SelectableCard
                key={image.id}
                {...image}
                selected={selectedCards.has(image.id)}
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
