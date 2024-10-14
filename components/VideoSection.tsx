"use client";

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Play, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const videoCategories = ["AI Fundamentals", "Investment Strategies", "Risk Management"];

interface Video {
  title: string;
  thumbnail: string;
  videoId: string;
  category: string;
}

const videos: Video[] = [
  {
    title: "AI-Driven Investment Analysis",
    thumbnail: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7",
    videoId: "dQw4w9WgXcQ",
    category: "AI Fundamentals"
  },
  {
    title: "Machine Learning in Portfolio Optimization",
    thumbnail: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7",
    videoId: "dQw4w9WgXcQ",
    category: "Investment Strategies"
  },
  {
    title: "AI-Powered Risk Assessment Techniques",
    thumbnail: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7",
    videoId: "dQw4w9WgXcQ",
    category: "Risk Management"
  }
];

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <section id="videos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-display animate-fade-in">Featured Videos</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {videoCategories.map((category, index) => (
            <Button key={index} variant="outline" className="rounded-full">
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in border-primary/10">
              <CardHeader className="p-0">
                <div className="relative group">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                          onClick={() => setSelectedVideo(video)}
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>{selectedVideo?.title}</DialogTitle>
                        </DialogHeader>
                        <div className="aspect-video">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${selectedVideo?.videoId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg hover:text-primary transition-colors">{video.title}</CardTitle>
                <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mt-2">
                  {video.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center animate-fade-in">
          <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
            View All Videos
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;