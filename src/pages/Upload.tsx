import React, { useState } from 'react';
import { FileUpload } from '@/components/ui/FileUpload';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Upload() {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!file) return;
    
    setIsGenerating(true);
    // Implement generation logic here
    setTimeout(() => {
      setIsGenerating(false);
      navigate('/gallery');
    }, 2000);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <h1 className="text-3xl font-bold mb-6">Upload an Image</h1>
        <p className="text-muted-foreground mb-8">
          Select or drag an image to generate a 3D model. Supported formats: PNG, JPG, JPEG.
        </p>

        <FileUpload
          onFileSelect={setFile}
          className="mb-8"
        />

        <Button
          onClick={handleGenerate}
          disabled={!file || isGenerating}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generating 3D Model...
            </>
          ) : (
            'Generate 3D Model'
          )}
        </Button>
      </div>
    </div>
  );
}