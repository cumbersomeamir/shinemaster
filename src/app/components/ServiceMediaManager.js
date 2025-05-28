'use client';

import { useState, useEffect, useRef } from 'react';

const ServiceMediaManager = ({ 
  serviceName, 
  isAdminLoggedIn = false,
  maxFiles = 20,
  allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'video/mp4', 'video/webm', 'video/mov']
}) => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);
  const [uploadFeedback, setUploadFeedback] = useState('');
  const fileInputRef = useRef(null);

  // Storage key based on service name
  const storageKey = `${serviceName.toLowerCase().replace(/\s+/g, '-')}-media`;

  useEffect(() => {
    // Load saved media files for this service
    const savedMedia = localStorage.getItem(storageKey);
    if (savedMedia) {
      try {
        setMediaFiles(JSON.parse(savedMedia));
      } catch (error) {
        console.error('Error loading saved media:', error);
      }
    }
  }, [storageKey]);

  const saveMediaToStorage = (media) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(media));
      setUploadFeedback('✅ Files saved successfully!');
      setTimeout(() => setUploadFeedback(''), 3000);
    } catch (error) {
      console.error('Error saving media:', error);
      setUploadFeedback('❌ Error saving files');
      setTimeout(() => setUploadFeedback(''), 3000);
    }
  };

  // Generate video thumbnail
  const generateVideoThumbnail = (file) => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      video.addEventListener('loadedmetadata', () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        video.currentTime = 2; // Seek to 2 seconds for better thumbnail
      });
      
      video.addEventListener('seeked', () => {
        try {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const thumbnailUrl = canvas.toDataURL('image/jpeg', 0.7);
          resolve(thumbnailUrl);
        } catch (error) {
          console.error('Error creating thumbnail:', error);
          resolve(URL.createObjectURL(file)); // Fallback to original video
        }
      });
      
      video.addEventListener('error', () => {
        resolve(URL.createObjectURL(file)); // Fallback to original video
      });
      
      video.src = URL.createObjectURL(file);
      video.load();
    });
  };

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
    if (mediaFiles.length + files.length > maxFiles) {
      setUploadFeedback(`❌ Maximum ${maxFiles} files allowed`);
      setTimeout(() => setUploadFeedback(''), 3000);
      return;
    }

    setUploading(true);
    setUploadFeedback('🔄 Processing files...');
    const newMediaFiles = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      if (!allowedTypes.includes(file.type)) {
        setUploadFeedback(`❌ File type ${file.type} not allowed`);
        continue;
      }

      // Update progress
      setUploadProgress(prev => ({ ...prev, [file.name]: 'processing' }));

      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      let thumbnailUrl = previewUrl;

      // Generate thumbnail for videos
      if (file.type.startsWith('video/')) {
        try {
          thumbnailUrl = await generateVideoThumbnail(file);
        } catch (error) {
          console.error('Error generating thumbnail:', error);
          // Use a placeholder or the video URL itself
          thumbnailUrl = null; // We'll handle this in the display
        }
      }
      
      // Create media object
      const mediaFile = {
        id: Date.now() + Math.random() + i,
        name: file.name,
        size: file.size,
        type: file.type,
        url: previewUrl,
        thumbnail: thumbnailUrl,
        uploadedAt: new Date().toISOString(),
        isVideo: file.type.startsWith('video/'),
        duration: file.type.startsWith('video/') ? 'Loading...' : null
      };

      // Get video duration if it's a video
      if (file.type.startsWith('video/')) {
        const video = document.createElement('video');
        video.addEventListener('loadedmetadata', () => {
          mediaFile.duration = formatDuration(video.duration);
        });
        video.src = previewUrl;
      }

      newMediaFiles.push(mediaFile);
      setUploadProgress(prev => ({ ...prev, [file.name]: 'complete' }));
    }

    const updatedMedia = [...mediaFiles, ...newMediaFiles];
    setMediaFiles(updatedMedia);
    saveMediaToStorage(updatedMedia);
    setUploading(false);
    setUploadProgress({});

    // Clear input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDelete = (mediaId) => {
    if (confirm('Are you sure you want to delete this file?')) {
      const updatedMedia = mediaFiles.filter(media => media.id !== mediaId);
      setMediaFiles(updatedMedia);
      saveMediaToStorage(updatedMedia);
      setUploadFeedback('🗑️ File deleted successfully');
      setTimeout(() => setUploadFeedback(''), 2000);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const openLightbox = (media) => {
    setSelectedMedia(media);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    setShowLightbox(false);
  };

  const nextMedia = () => {
    const currentIndex = mediaFiles.findIndex(media => media.id === selectedMedia.id);
    const nextIndex = (currentIndex + 1) % mediaFiles.length;
    setSelectedMedia(mediaFiles[nextIndex]);
  };

  const prevMedia = () => {
    const currentIndex = mediaFiles.findIndex(media => media.id === selectedMedia.id);
    const prevIndex = currentIndex === 0 ? mediaFiles.length - 1 : currentIndex - 1;
    setSelectedMedia(mediaFiles[prevIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!showLightbox) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextMedia();
      } else if (e.key === 'ArrowLeft') {
        prevMedia();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showLightbox, selectedMedia]);

  return (
    <div className="space-y-8">
      {/* Admin Panel */}
      {isAdminLoggedIn && (
        <div className="space-y-6 mb-16">
          {/* Admin Panel Toggle - ALWAYS VISIBLE WHEN LOGGED IN */}
          <div className="text-center">
            <button
              onClick={() => setShowAdminPanel(!showAdminPanel)}
              className="px-8 py-4 bg-gradient-to-r from-[#FF9900] to-[#00D4FF] text-black font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg font-exo text-lg"
            >
              {showAdminPanel ? '🔒 Hide Media Manager' : '📁 Show Media Manager'}
            </button>
          </div>

          {/* Upload Feedback */}
          {uploadFeedback && (
            <div className="text-center">
              <div className="inline-block px-6 py-3 bg-[#00D4FF]/20 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] font-exo text-lg">
                {uploadFeedback}
              </div>
            </div>
          )}

          {/* Upload Panel */}
          {showAdminPanel && (
            <div className="p-8 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-3xl border border-[#FF9900]/30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#FF9900] font-orbitron">Media Manager</h2>
                <div className="text-sm text-[#8B8B8D] font-exo">
                  {mediaFiles.length}/{maxFiles} files | Data saved in browser storage
                </div>
              </div>

              {/* Data Storage Info */}
              <div className="mb-6 p-4 bg-[#00D4FF]/10 border border-[#00D4FF]/20 rounded-xl">
                <h3 className="text-[#00D4FF] font-semibold mb-2 font-exo">📁 Storage Information</h3>
                <p className="text-sm text-[#8B8B8D] font-exo">
                  Files are stored in your browser's local storage. They will persist until you clear browser data or manually delete them. 
                  For production use, consider implementing a proper file storage solution.
                </p>
              </div>

              {/* Upload Area */}
              <div
                className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 mb-6 ${
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
                  disabled={uploading}
                />
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00D4FF] to-[#FF9900] rounded-full flex items-center justify-center mx-auto">
                    <span className="text-black text-2xl font-bold">📁</span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-[#00D4FF] mb-2 font-orbitron">
                      Upload Media Files
                    </h3>
                    <p className="text-[#8B8B8D] font-exo">
                      Drag and drop files here or click to browse
                    </p>
                    <p className="text-sm text-[#8B8B8D] mt-2 font-exo">
                      Supports: Images (JPEG, PNG, WebP) & Videos (MP4, WebM, MOV)
                    </p>
                  </div>
                  
                  {uploading && (
                    <div className="space-y-2">
                      <div className="inline-block px-4 py-2 bg-[#FF9900]/20 rounded-full">
                        <span className="text-[#FF9900] font-exo">Processing files...</span>
                      </div>
                      {Object.entries(uploadProgress).map(([fileName, status]) => (
                        <div key={fileName} className="text-sm text-[#8B8B8D] font-exo">
                          {fileName}: {status === 'processing' ? '🔄 Processing...' : '✅ Complete'}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Admin Media Grid */}
              {mediaFiles.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#00D4FF] font-orbitron">
                    Uploaded Files
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mediaFiles.map((media) => (
                      <div
                        key={media.id}
                        className="group relative bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-xl border border-[#00D4FF]/20 overflow-hidden"
                      >
                        {/* Media Preview with Thumbnail */}
                        <div className="aspect-video bg-[#0A0A0B] flex items-center justify-center relative">
                          {media.isVideo ? (
                            <>
                              {media.thumbnail ? (
                                <img
                                  src={media.thumbnail}
                                  alt={media.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-[#2D2D30] to-[#1A1A1B] flex items-center justify-center">
                                  <div className="text-center">
                                    <div className="text-4xl mb-2">🎥</div>
                                    <div className="text-sm text-[#8B8B8D] font-exo">Video File</div>
                                  </div>
                                </div>
                              )}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center">
                                  <span className="text-white text-xl ml-1">▶️</span>
                                </div>
                              </div>
                            </>
                          ) : (
                            <img
                              src={media.url}
                              alt={media.name}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        
                        {/* File Info */}
                        <div className="p-4">
                          <h4 className="font-semibold text-white truncate mb-1 font-exo">
                            {media.name}
                          </h4>
                          <div className="flex justify-between items-center text-sm text-[#8B8B8D]">
                            <span className="font-exo">{formatFileSize(media.size)}</span>
                            <span className="px-2 py-1 bg-[#00D4FF]/20 rounded text-[#00D4FF] font-exo">
                              {media.isVideo ? `Video ${media.duration || ''}` : 'Image'}
                            </span>
                          </div>
                        </div>
                        
                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(media.id)}
                          className="absolute top-2 right-2 w-8 h-8 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          <span className="text-white text-sm">×</span>
                        </button>
                        
                        {/* Type Indicator */}
                        <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 rounded text-xs text-white font-exo">
                          {media.isVideo ? '🎥' : '📸'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Public Gallery */}
      {mediaFiles.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-[#0A0A0B] to-[#1A1A1B] rounded-3xl">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#FF9900] bg-clip-text text-transparent mb-4 font-orbitron">
                Recent Works
              </h2>
              <p className="text-xl text-[#8B8B8D] font-exo">
                See our latest {serviceName.toLowerCase()} projects
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaFiles.slice(0, 12).map((media, index) => (
                <div
                  key={media.id}
                  className="group relative bg-gradient-to-br from-[#2D2D30]/30 to-[#1A1A1B]/30 rounded-2xl overflow-hidden border border-[#00D4FF]/20 hover:border-[#FF9900]/50 transition-all duration-500 cursor-pointer"
                  onClick={() => openLightbox(media)}
                >
                  <div className="aspect-video relative">
                    {media.isVideo ? (
                      <>
                        {media.thumbnail ? (
                          <img
                            src={media.thumbnail}
                            alt={media.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#2D2D30] to-[#1A1A1B] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <div className="text-center">
                              <div className="text-6xl mb-4">🎥</div>
                              <div className="text-lg text-[#8B8B8D] font-exo">Video File</div>
                            </div>
                          </div>
                        )}
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white/30">
                            <span className="text-white text-2xl ml-1">▶️</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <img
                        src={media.url}
                        alt={media.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-sm text-white font-exo">
                    {media.isVideo ? '🎥 Video' : '📸 Image'}
                  </div>

                  {/* Duration Badge for Videos */}
                  {media.isVideo && media.duration && media.duration !== 'Loading...' && (
                    <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs text-white font-exo">
                      {media.duration}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {mediaFiles.length > 12 && (
              <div className="text-center mt-8">
                <button className="px-8 py-3 bg-gradient-to-r from-[#00D4FF] to-[#FF9900] text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg font-exo">
                  View All {mediaFiles.length} Files
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {showLightbox && selectedMedia && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl hover:bg-white/30 transition-colors z-10"
          >
            ×
          </button>

          {/* Navigation Buttons */}
          {mediaFiles.length > 1 && (
            <>
              <button
                onClick={prevMedia}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl hover:bg-white/30 transition-colors z-10"
              >
                ←
              </button>
              <button
                onClick={nextMedia}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl hover:bg-white/30 transition-colors z-10"
              >
                →
              </button>
            </>
          )}

          {/* Media Content */}
          <div className="max-w-5xl max-h-full w-full h-full flex items-center justify-center">
            {selectedMedia.isVideo ? (
              <video
                src={selectedMedia.url}
                className="max-w-full max-h-full object-contain"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img
                src={selectedMedia.url}
                alt={selectedMedia.name}
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>

          {/* Media Info */}
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <div className="inline-block px-6 py-3 bg-black/60 backdrop-blur-sm rounded-full">
              <h3 className="text-white font-semibold font-exo">{selectedMedia.name}</h3>
              <p className="text-[#8B8B8D] text-sm font-exo">
                {selectedMedia.isVideo ? 'Video' : 'Image'} • {formatFileSize(selectedMedia.size)}
                {selectedMedia.isVideo && selectedMedia.duration && selectedMedia.duration !== 'Loading...' && (
                  <span> • {selectedMedia.duration}</span>
                )}
              </p>
            </div>
          </div>

          {/* Keyboard Navigation Hint */}
          <div className="absolute top-4 left-4 text-xs text-white/60 font-exo">
            Use ← → keys or click buttons to navigate • ESC to close
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceMediaManager;