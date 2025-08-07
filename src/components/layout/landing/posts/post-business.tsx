"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Star,
  Clock,
  MapPin,
  Phone,
  Mail,
  Award,
  Shield,
  CheckCircle,
  Globe,
  Instagram,
  Facebook,
} from "lucide-react";
import { businessInfo } from "./data";
import SiteTitle from "@/components/layout/global/body/site-title";
import { MaxWidthWrapper } from "@/components/shared/wrappers/max-width-wrapper";

export default function PostBusiness() {
  return (
    <section className="py-12 bg-muted">
      <MaxWidthWrapper>
        <div className="container mx-auto">
          <SiteTitle
            title={`About ${businessInfo.name}`}
            pill=""
            subtitle={businessInfo.description}
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Business Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span>Business Overview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Established</span>
                    <span className="font-medium">
                      {businessInfo.yearEstablished}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Total Reviews</span>
                    <span className="font-medium">
                      {businessInfo.totalReviews.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Average Rating</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">
                        {businessInfo.averageRating}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>Contact & Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-slate-500 mt-1" />
                      <span className="text-sm text-slate-600">
                        {businessInfo.address}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-slate-600">
                        {businessInfo.phone}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-slate-600">
                        {businessInfo.email}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-slate-600">
                        {businessInfo.website}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {Object.entries(businessInfo.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-slate-600">{day}</span>
                      <span className="font-medium">{hours}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Amenities & Certifications */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <span>Amenities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {businessInfo.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-slate-700">
                          {amenity}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span>Certifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {businessInfo.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-center"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm">
                <Instagram className="h-4 w-4 mr-2" />
                {businessInfo.socialMedia.instagram}
              </Button>
              <Button variant="outline" size="sm">
                <Facebook className="h-4 w-4 mr-2" />
                {businessInfo.socialMedia.facebook}
              </Button>
              <Button variant="outline" size="sm">
                <Globe className="h-4 w-4 mr-2" />
                Website
              </Button>
            </div>
          </motion.div>

          {/* Contact Section */}
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Ready to begin your wellness journey? Contact us to schedule
                your appointment or learn more about our services.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>We will get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" type="tel" />
                  <Textarea placeholder="Tell us about your needs..." rows={4} />
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div> */}

              {/* Business Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-blue-600" />
                      <span>Business Overview</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Established</span>
                      <span className="font-medium">
                        {businessInfo.yearEstablished}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Total Reviews</span>
                      <span className="font-medium">
                        {businessInfo.totalReviews.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Average Rating</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium">
                          {businessInfo.averageRating}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">
                    Visit Our Spa
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-800">Address</p>
                        <p className="text-slate-600">
                          123 Wellness Boulevard
                          <br />
                          Serenity City, SC 12345
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-800">Phone</p>
                        <p className="text-slate-600">(555) 123-RELAX</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-800">Email</p>
                        <p className="text-slate-600">hello@serenityspa.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-800">Hours</p>
                        <p className="text-slate-600">
                          Mon-Fri: 9:00 AM - 8:00 PM
                          <br />
                          Sat-Sun: 10:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-4">Special Offer</h4>
                  <p className="mb-4">
                    Book your first session and get 20% off any additional
                    service!
                  </p>
                  <Button
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-slate-100"
                  >
                    Claim Offer
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
