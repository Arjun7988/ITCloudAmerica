import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.error('Error toggling video playback:', error);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,102,204,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,51,102,0.15)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">
            See How We Transform Businesses
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Watch how our innovative solutions help businesses achieve their digital transformation goals
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            poster="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1920"
            playsInline
          >
            <source 
              src="https://cdn.coverr.co/videos/coverr-typing-on-computer-keyboard-2633/1080p.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          
          <button
            onClick={togglePlay}
            className="absolute inset-0 w-full h-full flex items-center justify-center group"
          >
            <div className={`
              transform transition-all duration-500 rounded-full
              ${isPlaying ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
              bg-white/10 backdrop-blur-sm p-6
              group-hover:bg-white/20
            `}>
              {isPlaying ? (
                <Pause className="w-12 h-12 text-white" />
              ) : (
                <Play className="w-12 h-12 text-white" />
              )}
            </div>
          </button>
        </div>

       
      </div>
    </section>
  );
};

export default VideoSection;