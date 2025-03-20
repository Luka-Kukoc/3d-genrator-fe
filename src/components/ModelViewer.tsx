import React from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Download } from 'lucide-react';

interface ModelViewerProps {
  modelUrl: string;
  name: string;
  date: string;
  onDownload: () => void;
}

export function ModelViewer({ modelUrl, name, date, onDownload }: ModelViewerProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square bg-secondary">
        {/* 3D viewer implementation will go here */}
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          3D Preview
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold truncate">{name}</h3>
        <p className="text-sm text-muted-foreground">{date}</p>
        <Button
          onClick={onDownload}
          variant="outline"
          className="w-full mt-4"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Model
        </Button>
      </div>
    </Card>
  );
}