import React from "react";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { Download } from "lucide-react";

interface ModelViewerProps {
  productLink: string;
  imageUrl: string;
  name: string;
  dimension: string;
  price: number;
  onDownload: () => void;
}

export function ModelViewer({
  productLink,
  name,
  dimension,
  imageUrl,
  price,
  onDownload,
}: ModelViewerProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square bg-secondary">
        {/* 3D viewer implementation will go here */}
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          <img src={imageUrl} alt="" width={"100%"} height={"100%"} />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold truncate">{name}</h3>
        <h3 className="font-semibold truncate">{price}</h3>
        <p className="text-sm text-muted-foreground">{dimension}</p>
        <Button onClick={onDownload} variant="outline" className="w-full mt-4">
          <Download className="w-4 h-4 mr-2" />
          Download Model
        </Button>
      </div>
    </Card>
  );
}
