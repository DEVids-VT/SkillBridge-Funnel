'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { cards, colors } from '@/lib/design-system';

interface VideoPlayerProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (autoPlay) {
      video.play().catch(() => {
        // Auto-play failed, but that's okay
        setIsPlaying(false);
      });
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [autoPlay]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  return (
    <div
      className={cn(
        'relative group overflow-hidden rounded-xl',
        cards.base,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
      />
      
      {/* Overlay with play/pause button */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <Button
          onClick={togglePlayPause}
          variant="ghost"
          size="icon"
          className={cn(
            'size-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30',
            'hover:bg-white/30 hover:border-white/50 transition-all duration-300',
            'group-hover:scale-110',
            isHovered ? 'opacity-100' : 'opacity-80'
          )}
        >
          {isPlaying ? (
            <Pause className="size-8 text-white" />
          ) : (
            <Play className="size-8 text-white ml-1" />
          )}
        </Button>
      </div>
    </div>
  );
}; 