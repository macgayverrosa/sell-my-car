export interface PostProps {
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
  benefits: string[];
  includes: string[];
  gallery: string[];
}

export const posts: PostProps[] = [
  {
    id: "1",
    title: "Swedish Relaxation Massage",
    description:
      "A gentle, flowing massage technique designed to promote relaxation and improve circulation. This therapeutic treatment uses long, smooth strokes, kneading, and circular movements on superficial layers of muscle using massage lotion or oil.",
    price: "$120",
    duration: "60 min",
    category: "Relaxation",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    rating: 4.9,
    reviews: 127,
    benefits: [
      "Reduces stress and anxiety",
      "Improves blood circulation",
      "Relieves muscle tension",
      "Promotes better sleep",
      "Boosts immune system",
      "Increases flexibility",
    ],
    includes: [
      "Pre-treatment consultation",
      "60-minute massage session",
      "Essential oil aromatherapy",
      "Hot towel treatment",
      "Post-treatment relaxation time",
      "Complimentary herbal tea",
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: "2",
    title: "Deep Tissue Therapy",
    description:
      "Intensive massage targeting deep muscle layers to relieve chronic tension and pain. This technique focuses on the deeper layers of muscle tissue and is designed to reach the deep sections of thick muscles.",
    price: "$150",
    duration: "75 min",
    category: "Therapeutic",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    rating: 4.8,
    reviews: 89,
    benefits: [
      "Relieves chronic pain",
      "Reduces muscle tension",
      "Improves posture",
      "Increases range of motion",
      "Breaks up scar tissue",
      "Lowers blood pressure",
    ],
    includes: [
      "Detailed assessment",
      "75-minute deep tissue session",
      "Targeted pressure point work",
      "Muscle recovery guidance",
      "Ice/heat therapy as needed",
      "Follow-up care recommendations",
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
];

export interface Business {
  id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  hours: {
    [key: string]: string;
  };
  amenities: string[];
  certifications: string[];
  yearEstablished: number;
  totalReviews: number;
  averageRating: number;
  images: string[];
  socialMedia: {
    instagram?: string;
    facebook?: string;
    website?: string;
  };
}

export const businessInfo: Business = {
  id: "serenity-spa",
  name: "Serenity Spa",
  description:
    "A premier wellness destination offering world-class massage therapy and holistic treatments. Our experienced team of licensed therapists is dedicated to providing personalized care in a tranquil, luxurious environment.",
  address: "123 Wellness Boulevard, Serenity City, SC 12345",
  phone: "(555) 123-RELAX",
  email: "hello@serenityspa.com",
  website: "www.serenityspa.com",
  hours: {
    Monday: "9:00 AM - 8:00 PM",
    Tuesday: "9:00 AM - 8:00 PM",
    Wednesday: "9:00 AM - 8:00 PM",
    Thursday: "9:00 AM - 8:00 PM",
    Friday: "9:00 AM - 8:00 PM",
    Saturday: "10:00 AM - 6:00 PM",
    Sunday: "10:00 AM - 6:00 PM",
  },
  amenities: [
    "Private treatment rooms",
    "Relaxation lounge",
    "Steam room",
    "Sauna",
    "Meditation garden",
    "Complimentary refreshments",
    "Parking available",
    "Wheelchair accessible",
  ],
  certifications: [
    "Licensed Massage Therapy",
    "Certified Aromatherapy",
    "Hot Stone Certification",
    "Prenatal Massage Certified",
    "Sports Massage Certified",
  ],
  yearEstablished: 2008,
  totalReviews: 1247,
  averageRating: 4.8,
  images: [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ],
  socialMedia: {
    instagram: "@serenityspa",
    facebook: "SerenitySpaWellness",
    website: "www.serenityspa.com",
  },
};

export const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Absolutely amazing experience! The Swedish massage was exactly what I needed after a stressful week. The therapist was professional and the atmosphere was so relaxing.",
    verified: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    date: "1 month ago",
    comment:
      "Best deep tissue massage I've ever had. Really helped with my chronic back pain. The facility is beautiful and the staff is incredibly knowledgeable.",
    verified: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 4,
    date: "3 weeks ago",
    comment:
      "Great service and very clean facility. The hot stone massage was wonderful. Only minor complaint is that booking can be difficult during peak times.",
    verified: true,
  },
];