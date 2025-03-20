import React from "react";
import { Card } from "./Card";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

interface SelectableCardProps {
  id: string;
  name: string;
  category: string;
  imageURL: string;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function SelectableCard({
  id,
  name,
  category,
  imageURL,
  selected,
  onSelect,
}: SelectableCardProps) {
  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-primary/50 relative",
        selected && "ring-2 ring-primary"
      )}
      onClick={() => onSelect(id)}
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
        <img src={imageURL} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{category}</p>
      </div>
    </Card>
  );
}
