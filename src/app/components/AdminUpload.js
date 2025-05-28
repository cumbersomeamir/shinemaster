'use client';

import { useState, useRef } from 'react';

const AdminUpload = ({ 
  images = [], 
  onImagesChange,
  maxImages = 20,
  allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'video/mp4', 'video/webm']
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = async (files) => {
    if (images.length + files.length > maxImages) {
      alert(`Maximum ${maxImages} files allowed`);
      return;
    }

    setUploading(true);
    const newImages = [];

    for (const file of files) {
      if (!allowedTypes.includes(file.type)) {
        alert(`File type ${file.type} not allowed`);
        continue;
      }

      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      
      // Simulate upload (in real app, upload to your storage service)
      const uploadedImage = {
        id: Date.now() + Math.random(),
        name: file.name,
        size: file.size,
        type: file.type,
        url: previewUrl,
        uploadedAt: new Date().toISOString()
      };

      newImages.push(uploadedImage);
    }

    const updatedImages = [...images, ...newImages];
    onImagesChange(updatedImages);
    setUploading(false);

    // Clear input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDelete = (imageId) => {
    if (confirm('Are you sure you want to delete this file?')) {
      const updatedImages = images.filter(img => img.id !== imageId);
      onImagesChange(updatedImages);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
          dragActive 
            ? 'border-[#FF9900] bg-[#FF9900]/10' 
            : 'border-[#00D4FF]/30 hover:border-[#00D4FF]/50'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={allowedTypes.join(',')}
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <div className="space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-[#00D4FF] to-[#FF9900] rounded-full flex items-center justify-center mx-auto">
            <span className="text-black text-2xl font-bold">📁</span>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-[#00D4FF] mb-2 font-orbitron">
              Upload Images & Videos
            </h3>
            <p className="text-[#8B8B8D] font-exo">
              Drag and drop files here or click to browse
            </p>
            <p className="text-sm text-[#8B8B8D] mt-2 font-exo">
              Supports: JPEG, PNG, WebP, MP4, WebM (Max {maxImages} files)
            </p>
          </div>
          
          {uploading && (
            <div className="inline-block px-4 py-2 bg-[#FF9900]/20 rounded-full">
              <span className="text-[#FF9900] font-exo">Uploading...</span>
            </div>
          )}
        </div>
      </div>

      {/* Images Grid */}
      {images.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#00D4FF] font-orbitron">
            Uploaded Files ({images.length}/{maxImages})
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-xl border border-[#00D4FF]/20 overflow-hidden"
              >
                {/* Image/Video Preview */}
                <div className="aspect-video bg-[#0A0A0B] flex items-center justify-center">
                  {image.type.startsWith('image/') ? (
                    <img
                      src={image.url}
                      alt={image.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={image.url}
                      className="w-full h-full object-cover"
                      muted
                      preload="metadata"
                    />
                  )}
                </div>
                
                {/* File Info */}
                <div className="p-4">
                  <h4 className="font-semibold text-white truncate mb-1 font-exo">
                    {image.name}
                  </h4>
                  <div className="flex justify-between items-center text-sm text-[#8B8B8D]">
                    <span className="font-exo">{formatFileSize(image.size)}</span>
                    <span className="px-2 py-1 bg-[#00D4FF]/20 rounded text-[#00D4FF] font-exo">
                      {image.type.split('/')[0]}
                    </span>
                  </div>
                </div>
                
                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(image.id)}
                  className="absolute top-2 right-2 w-8 h-8 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <span className="text-white text-sm">×</span>
                </button>
                
                {/* Type Indicator */}
                <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 rounded text-xs text-white font-exo">
                  {image.type.startsWith('video/') ? '🎥' : '📸'}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUpload;