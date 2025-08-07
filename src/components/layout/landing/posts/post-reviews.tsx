"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle } from "lucide-react";
import { reviews, PostProps } from "./data";

export default function PostReviews({ post }: { post: PostProps }) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <span className="text-lg font-medium">{post.rating} out of 5</span>
            <span className="text-slate-500">({post.reviews} reviews)</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-md bg-white h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        {review.name}
                      </h4>
                      <p className="text-sm text-slate-500">{review.date}</p>
                    </div>
                    {review.verified && (
                      <Badge variant="secondary" className="text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>

                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {review.comment}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline">View All Reviews</Button>
        </div>
      </div>
    </section>
  );
}
