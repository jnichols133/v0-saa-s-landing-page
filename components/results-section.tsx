"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: "$2.5M+", label: "Revenue Generated", description: "For our clients in the last 12 months" },
  { value: "340%", label: "Average ROAS", description: "Return on ad spend across all campaigns" },
  { value: "100+", label: "Happy Clients", description: "Businesses we've helped scale" },
  { value: "10M+", label: "Ad Impressions", description: "Monthly reach across all platforms" },
]

export function ResultsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

      <motion.div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6"
          >
            <span>Proven Results</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6"
          >
            Numbers That <span className="text-primary">Speak for Themselves</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We don't just talk about results—we deliver them. Here's what we've achieved for businesses like yours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative group"
            >
              <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 text-center h-full transition-all duration-300 hover:border-primary/30 hover:bg-card/80">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm px-6 py-3">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
                alt="Client"
                className="w-8 h-8 rounded-full border-2 border-background object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Client"
                className="w-8 h-8 rounded-full border-2 border-background object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                alt="Client"
                className="w-8 h-8 rounded-full border-2 border-background object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                alt="Client"
                className="w-8 h-8 rounded-full border-2 border-background object-cover"
              />
            </div>
            <span className="text-sm text-muted-foreground">
              Join <span className="text-foreground font-semibold">100+ businesses</span> already scaling with us
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
