import React from "react";
import { Card } from "./Card";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";
import { Product } from "../../pages/Upload";

interface SelectableCardProps {
  id: string;
  productData: Product;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function SelectableCard({
  id,
  productData,
  selected,
  onSelect,
}: SelectableCardProps) {
  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-primary/50 relative",
        selected && "ring-2 ring-primary"
      )}
      onClick={() => onSelect(productData.id)}
    >
      <div
        className="absolute top-2 right-2 z-10 w-5 h-5 rounded border border-primary flex items-center justify-center transition-colors duration-200"
        style={{
          backgroundColor: selected ? "hsl(var(--primary))" : "transparent",
        }}
      >
        {selected && <Check className="w-4 h-4 text-primary-foreground" />}
      </div>
      <div className="aspect-square relative overflow-hidden">
        <img
          src={productData.imageUrl}
          alt={productData.name}
          className="object-cover w-full h-full"
          style={{ borderRadius: 11 }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{productData.name}</h3>
        <p className="text-sm text-muted-foreground">{productData.price}e</p>
        <p className="text-sm text-muted-foreground">
          {productData.dimensions}
        </p>
        <br />
        <p className="text-sm text-muted-foreground">
          {productData.productUrl}
        </p>
      </div>
    </Card>
  );
}
