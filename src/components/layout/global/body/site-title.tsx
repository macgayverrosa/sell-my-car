import { motion } from "framer-motion";

interface SiteComponentsTitleProps {
  pill?: string;
  title: string;
  subtitle?: string;
}

export default function SiteTitle(props: SiteComponentsTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            {props.pill}
          </div>
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl">
            {props.title}
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed lg:text-xl/relaxed">
            {props.subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
