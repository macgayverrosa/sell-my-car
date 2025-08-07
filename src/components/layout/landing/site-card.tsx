"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceProps {
  services: Array<{
    id: string;
    title: string;
    description: string;
    price: string;
    duration: string;
    category: string;
    image: string;
    featured: boolean;
    rating: number;
    reviews: number;
  }>;
}

export default function SiteCard({ services }: ServiceProps) {
  return (
    <>
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="group"
        >
          <Link href={`/post/${service.id}`}>
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <Image
                  alt={service.title}
                  src={service.image || "/placeholder.svg"}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  width={1200}
                  height={1200}
                />
                {/* <img
                src={}
                alt={}
                className=""
              /> */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white">Featured</Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">
                      {service.rating}
                    </span>
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {service.price}
                    </div>
                    <div className="text-sm text-slate-500 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                </div>
                <CardDescription className="text-slate-600">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary">{service.category}</Badge>
                    <span className="text-sm text-slate-500">
                      {service.reviews} reviews
                    </span>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </>
  );
}
