"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Star,
  Clock,
  DollarSign,
  Phone,
  CalendarIcon,
  MessageCircle,
} from "lucide-react";
import { PostProps } from "./data";

export default function PostServiceDetails({ post }: { post: PostProps }) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const availableTimes = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <div>
        <div className="flex items-center space-x-3 mb-2">
          <Badge variant="secondary">{post.category}</Badge>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="font-medium">{post.rating}</span>
            <span className="text-muted-foreground">
              ({post.reviews} reviews)
            </span>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {post.description}
        </p>
      </div>

      {/* Pricing & Duration */}
      <div className="flex items-center space-x-8 py-6 border-y border-slate-200">
        <div className="flex items-center space-x-2">
          <DollarSign className="h-5 w-5 text-primary" />
          <span className="text-2xl font-bold text-primary">{post.price}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <span className="text-lg text-muted-foreground">{post.duration}</span>
        </div>
      </div>

      {/* Booking Button */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="w-full bg-primary hover:from-blue-700 hover:to-purple-700 text-lg py-6"
          >
            <CalendarIcon className="mr-2 h-5 w-5" />
            Book This Service
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Book Your {post.title}</DialogTitle>
            <DialogDescription>
              Select your preferred date and time for your massage session.
            </DialogDescription>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-base font-medium mb-3 block">
                Select Date
              </Label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
                disabled={(date) => date < new Date()}
              />
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-base font-medium mb-3 block">
                  Available Times
                </Label>
                <div className="grid grid-cols-2 gap-2">
                  {availableTimes.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                      className={
                        selectedTime === time
                          ? "bg-blue-600 hover:bg-blue-700"
                          : ""
                      }
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>

              <div className="space-y-3">
                <Label htmlFor="notes">Special Requests (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Any specific areas of focus or special requests..."
                  rows={3}
                />
              </div>

              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                disabled={!selectedDate || !selectedTime}
              >
                Confirm Booking
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Quick Contact */}
      <div className="flex space-x-4">
        <Button variant="outline" className="flex-1 bg-transparent">
          <Phone className="h-4 w-4 mr-2" />
          Call Now
        </Button>
        <Button variant="outline" className="flex-1 bg-transparent">
          <MessageCircle className="h-4 w-4 mr-2" />
          Message
        </Button>
      </div>
    </motion.div>
  );
}
