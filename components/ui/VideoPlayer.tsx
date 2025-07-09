'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { cards } from '@/lib/design-system';

interface VideoPlayerProps {
  src: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  className,
  loop = true,
  muted = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [isMuted, setIsMuted] = useState(muted);
  const [previousVolume, setPreviousVolume] = useState(0.2);
  const [isMobile, setIsMobile] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [hideControlsTimer, setHideControlsTimer] = useState<NodeJS.Timeout | null>(null);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-hide controls on mobile
  useEffect(() => {
    if (isMobile && showControls) {
      if (hideControlsTimer) {
        clearTimeout(hideControlsTimer);
      }
      
      const timer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
      
      setHideControlsTimer(timer);
    }
    
    return () => {
      if (hideControlsTimer) {
        clearTimeout(hideControlsTimer);
      }
    };
  }, [showControls, isMobile]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  // Intersection Observer for automatic play/pause on viewport enter/exit
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let observer: IntersectionObserver;

    // Add a small delay to ensure the video is fully rendered
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Video is in view, play it
              video.play().catch(() => {
                // Play failed, but that's okay
                setIsPlaying(false);
              });
            } else {
              // Video is out of view, pause it
              video.pause();
            }
          });
        },
        {
          threshold: 0.1, // Play when 10% of video is visible (more aggressive)
          rootMargin: '50px 0px 50px 0px', // Start playing a bit before fully visible
        }
      );

      observer.observe(video);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  // Initialize video volume
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = volume;
    video.muted = isMuted;
  }, [volume, isMuted]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    const video = videoRef.current;
    if (!video) return;

    setVolume(newVolume);
    video.volume = newVolume;
    
    if (newVolume === 0) {
      setIsMuted(true);
      video.muted = true;
    } else {
      setIsMuted(false);
      video.muted = false;
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      // Unmute
      setIsMuted(false);
      video.muted = false;
      const volumeToRestore = previousVolume > 0 ? previousVolume : 0.5;
      setVolume(volumeToRestore);
      video.volume = volumeToRestore;
    } else {
      // Mute
      setPreviousVolume(volume);
      setIsMuted(true);
      video.muted = true;
      setVolume(0);
    }
  };

  const handleVideoClick = () => {
    if (isMobile) {
      setShowControls(!showControls);
    } else {
      togglePlayPause();
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  const shouldShowControls = isMobile ? showControls : isHovered;

  return (
    <div
      className={cn(
        'relative group overflow-hidden rounded-lg sm:rounded-xl touch-manipulation',
        cards.base,
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        autoPlay={false}
        loop={loop}
        muted={muted}
        playsInline
        controls={false}
      />
      
      {/* Overlay with controls */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        {/* Play/Pause Button */}
        <Button
          onClick={(e) => {
            e.stopPropagation();
            togglePlayPause();
          }}
          variant="ghost"
          size="icon"
          className={cn(
            'rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300',
            'hover:bg-white/30 hover:border-white/50',
            'active:scale-95',
            // Mobile optimizations
            isMobile 
              ? 'size-12 sm:size-14' 
              : 'size-16 group-hover:scale-110',
            shouldShowControls ? 'opacity-100' : 'opacity-80'
          )}
        >
          {isPlaying ? (
            <Pause className={cn(
              'text-white',
              isMobile ? 'size-6 sm:size-7' : 'size-8'
            )} />
          ) : (
            <Play className={cn(
              'text-white',
              isMobile ? 'size-6 sm:size-7 ml-0.5' : 'size-8 ml-1'
            )} />
          )}
        </Button>

        {/* Volume Controls */}
        <div className={cn(
          'absolute flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-2 transition-all duration-300',
          // Mobile positioning and sizing
          isMobile 
            ? 'bottom-3 right-3 flex-col-reverse' 
            : 'bottom-4 right-4 flex-row',
          shouldShowControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        )}>
          {/* Volume Slider */}
          <div className={cn(
            'flex items-center',
            isMobile ? 'mb-2' : 'mr-2'
          )}>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              onClick={(e) => e.stopPropagation()}
              className={cn(
                'appearance-none bg-white/20 rounded-full outline-none slider-thumb',
                isMobile 
                  ? 'h-2 w-16 sm:w-20' 
                  : 'h-1 w-20',
                '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white',
                '[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none'
              )}
            />
          </div>

          {/* Mute Button */}
          <Button
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
            variant="ghost"
            size="icon"
            className={cn(
              'rounded-full hover:bg-white/20 transition-colors',
              isMobile ? 'size-8' : 'size-8'
            )}
          >
            {isMuted ? (
              <VolumeX className={cn(
                'text-white',
                isMobile ? 'size-4' : 'size-4'
              )} />
            ) : (
              <Volume2 className={cn(
                'text-white',
                isMobile ? 'size-4' : 'size-4'
              )} />
            )}
          </Button>
        </div>

        {/* Mobile tap instruction */}
        {isMobile && !showControls && (
          <div className="absolute bottom-4 left-4 text-white/60 text-xs bg-black/40 backdrop-blur-sm rounded px-2 py-1">
            Tap to show controls
          </div>
        )}
      </div>
    </div>
  );
}; 