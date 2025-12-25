"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle2, Home } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-8"
          >
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Thanks — we got your message{" "}
            <span className="inline-block" role="img" aria-label="check mark">
              ✅
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-12"
          >
            We'll get back to you within 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold py-4 px-8 rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

