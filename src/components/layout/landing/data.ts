export interface ServiceProps {
  id: string
  title: string
  description: string
  price: string
  duration: string
  category: string
  image: string
  featured: boolean
  rating: number
  reviews: number
}

export const initialServices: ServiceProps[] = [
  {
    id: "1",
    title: "Swedish Relaxation Massage",
    description: "A gentle, flowing massage technique designed to promote relaxation and improve circulation.",
    price: "$120",
    duration: "60 min",
    category: "Relaxation",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    rating: 4.9,
    reviews: 127,
  },
  {
    id: "2",
    title: "Deep Tissue Therapy",
    description: "Intensive massage targeting deep muscle layers to relieve chronic tension and pain.",
    price: "$150",
    duration: "75 min",
    category: "Therapeutic",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    rating: 4.8,
    reviews: 89,
  },
  {
    id: "3",
    title: "Hot Stone Massage",
    description: "Heated stones placed on key points to melt away tension and promote deep relaxation.",
    price: "$180",
    duration: "90 min",
    category: "Luxury",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "4",
    title: "Prenatal Massage",
    description: "Specialized massage for expecting mothers to reduce pregnancy-related discomfort.",
    price: "$140",
    duration: "60 min",
    category: "Specialized",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    rating: 4.7,
    reviews: 73,
  },
]