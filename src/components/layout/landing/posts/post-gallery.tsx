"use client";

import { useState } from "react";
import { PostProps } from "./data";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function PostGallery({ post }: { post: PostProps }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={post.gallery[activeImageIndex] || post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
            width={800}
            height={400}
          />
          {/* <img
            src={post.gallery[activeImageIndex] || post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
          /> */}
          <div className="absolute top-4 left-4">
            {post.featured && (
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Featured
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {post.gallery.map((image, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveImageIndex(index)}
              className={`relative overflow-hidden rounded-lg ${
                activeImageIndex === index ? "ring-2 ring-blue-600" : ""
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${post.title} ${index + 1}`}
                className="w-full h-20 object-cover"
                width={200}
                height={100}
              />
              {/* <img
                src={image || "/placeholder.svg"}
                alt={`${post.title} ${index + 1}`}
                className="w-full h-20 object-cover"
              /> */}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
