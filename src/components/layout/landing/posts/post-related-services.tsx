"use client";

import Link from "next/link";
import { posts } from "./data";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function PostRelatedServices() {
  const params = useParams();
  const serviceId = params.id as string;

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            You Might Also Like
          </h2>
          <p className="text-lg text-slate-600">
            Explore our other popular services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts
            .filter((s) => s.id !== serviceId)
            .slice(0, 2)
            .map((relatedService, index) => (
              <motion.div
                key={relatedService.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/service/${relatedService.id}`}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm cursor-pointer">
                    <div className="flex">
                      <Image
                        src={relatedService.image || "/placeholder.svg"}
                        alt={relatedService.title}
                        className="w-32 h-32 object-cover rounded-l-lg"
                        width={128}
                        height={128}
                      />
                      {/* <img
                        src={relatedService.image || "/placeholder.svg"}
                        alt={relatedService.title}
                        className="w-32 h-32 object-cover rounded-l-lg"
                      /> */}
                      <div className="flex-1 p-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary">
                            {relatedService.category}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm">
                              {relatedService.rating}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                          {relatedService.title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                          {relatedService.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-blue-600">
                            {relatedService.price}
                          </span>
                          <span className="text-sm text-slate-500">
                            {relatedService.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
