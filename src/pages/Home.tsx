import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Cuboid as Cube, ArrowRight, Images } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl text-center">
        <div className="mb-8 flex justify-center">
          <Cube className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text animate-gradient">
          AI-Powered 3D Model Generation
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Transform your images into stunning 3D models with the power of artificial intelligence.
          Upload any image and watch as our AI brings it to life in three dimensions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => navigate('/upload')}
            className="group"
          >
            Start Creating
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/gallery')}
            className="group"
          >
            View Gallery
            <Images className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" />
          </Button>
        </div>
      </div>
    </div>
  );
}