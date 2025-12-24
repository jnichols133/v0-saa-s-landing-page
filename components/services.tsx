"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Search, Palette, FileText, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Meta Ads",
    description:
      "Reach your ideal customers on Facebook and Instagram with data-driven campaigns that convert. We optimize every dollar for maximum ROI.",
    features: ["Audience Targeting", "Creative Testing", "Retargeting Campaigns", "Performance Analytics"],
  },
  {
    icon: TrendingUp,
    title: "Google Ads",
    description:
      "Capture high-intent buyers actively searching for your products or services. Get in front of customers when they're ready to buy.",
    features: ["Search Campaigns", "Display Advertising", "Shopping Ads", "YouTube Ads"],
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Dominate organic search results and build long-term traffic. We focus on sustainable strategies that compound over time.",
    features: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO"],
  },
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Beautiful, conversion-focused websites that turn visitors into customers. Mobile-first design with lightning-fast performance.",
    features: ["Custom Design", "E-commerce", "Landing Pages", "CRO Optimization"],
  },
  {
    icon: FileText,
    title: "Content Creation",
    description:
      "Engaging content that tells your brand story and drives action. From social media to long-form, we've got you covered.",
    features: ["Social Media Content", "Blog Writing", "Video Production", "Email Marketing"],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" className="text-foreground relative overflow-hidden py-24">
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent"></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6"
          >
            <span>Our Services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6"
          >
            Everything You Need to <span className="text-primary">Grow Online</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Full-service digital marketing solutions tailored to your business goals. We handle the complexity so you
            can focus on what you do best.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(231, 138, 83, 0.5)",
                boxShadow: "0 0 30px rgba(231, 138, 83, 0.15)",
              }}
              className={`group relative rounded-2xl border-2 border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
