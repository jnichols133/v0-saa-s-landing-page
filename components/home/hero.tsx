"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { CheckCircle2 } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      const headerOffset = 120
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <>
      <section className="relative overflow-hidden min-h-screen flex flex-col">
        <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 flex-1 flex flex-col">
          <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Trusted by 100+ businesses
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h1
                id="main-title"
                className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance"
              >
                Scale Your Business with <span className="text-primary">Digital Marketing</span> That Delivers
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground"
            >
              We help businesses grow through strategic Meta Ads, Google Ads, SEO, stunning web design, and engaging
              content. Get measurable results, not just promises.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={scrollToContact}
                  className="group relative overflow-hidden rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById("services")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  See Our Services
                </button>
              </div>
            </motion.div>
          </div>

          {/* Social Proof Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-auto pb-8"
          >
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-6">Certified Partners</p>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                {/* Meta Business Partner */}
                <div className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8 fill-current text-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
                  </svg>
                  <span className="text-sm font-medium text-foreground">Meta Partner</span>
                </div>

                {/* Google Partner */}
                <div className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8 fill-current text-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="text-sm font-medium text-foreground">Google Partner</span>
                </div>

                {/* Shopify Partner */}
                <div className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8 fill-current text-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.337 3.415c-.025-.025-.075-.05-.125-.05-.025 0-1.187.075-1.187.075s-.8-.8-.875-.875c-.075-.075-.25-.05-.3-.025-.025 0-.15.05-.375.1-.225-.65-.625-1.25-1.325-1.25h-.062c-.2-.25-.45-.375-.65-.375-.625 0-.925.775-.925.775s-.625 1.6-.75 1.925c-.35.1-.6.175-.625.175-.2.05-.2.075-.225.25-.025.15-.55 4.225-.55 4.225l4.45.85.475-4.95zM13.3 3.74c-.15.05-.325.1-.5.15v-.1c0-.325-.05-.6-.1-.825.25.025.425.3.6.775zm-.975-.65c.05.225.075.525.075.925v.05c-.475.225-.975.775-1.2 1.875-.3.1-.6.175-.85.25.2-.825.75-2.2 1.875-2.2z" />
                    <path d="M15.187 3.39c-.05 0-.1 0-.125.025-.025.025-1.175.075-1.175.075s-.8-.8-.875-.875c-.025-.025-.075-.05-.1-.05v16.95l5.575-1.2s-2.4-16.225-2.425-16.4c-.025-.05-.075-.075-.125-.075-.15-.025-.625-.075-.75-.075v.625z" />
                  </svg>
                  <span className="text-sm font-medium text-foreground">Shopify Expert</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
