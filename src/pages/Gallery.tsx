import React from 'react';
import { ModelViewer } from '@/components/ModelViewer';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOCK_MODELS = [
  { id: 1, name: 'Model 1', date: '2024-03-10', url: '/model1.glb' },
  { id: 2, name: 'Model 2', date: '2024-03-09', url: '/model2.glb' },
  { id: 3, name: 'Model 3', date: '2024-03-08', url: '/model3.glb' },
];

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <Button
            onClick={() => navigate('/upload')}
          >
            <Plus className="w-4 h-4 mr-2" />
            New Model
          </Button>
        </div>

        <h1 className="text-3xl font-bold mb-6">Your 3D Models</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_MODELS.map((model) => (
            <ModelViewer
              key={model.id}
              modelUrl={model.url}
              name={model.name}
              date={model.date}
              onDownload={() => console.log('Downloading', model.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}