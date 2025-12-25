import { Marquee } from "@/components/magicui/marquee"

const testimonials = [
  {
    name: "Sarah Thompson",
    username: "Founder, Melbourne Home Decor Co.",
    body: "Jalex Media transformed our Facebook ads. We went from breaking even to 4x ROAS in just 3 months. Best decision we made for our business.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&auto=format",
  },
  {
    name: "Michael Chen",
    username: "CEO, CloudSync Solutions",
    body: "Their SEO work is incredible. We're now ranking #1 for our main keywords and organic traffic has increased by 280%.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces&auto=format",
  },
  {
    name: "Emily Rodriguez",
    username: "Owner, The Italian Corner",
    body: "The new website they designed has completely changed how customers find us. Reservations are up 150% since launch.",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=faces&auto=format",
  },
  {
    name: "David Park",
    username: "Principal, Park Property Group",
    body: "Google Ads was a mystery to me before Jalex. Now I'm getting quality leads every single day. Worth every penny.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&auto=format",
  },
  {
    name: "Jessica Williams",
    username: "Owner, FitLife Studio Melbourne",
    body: "Their content creation team understands our brand perfectly. Our Instagram engagement has tripled and new member sign-ups are through the roof.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces&auto=format",
  },
  {
    name: "Marcus Johnson",
    username: "Director, Elite Plumbing Services",
    body: "Finally a marketing agency that actually delivers results. No fluff, no BS—just real growth. Our revenue doubled in 6 months.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&auto=format",
  },
  {
    name: "Amanda Foster",
    username: "Creator, Digital Marketing Mastery",
    body: "The team at Jalex Media is responsive, creative, and most importantly, they get results. My course sales increased 200%.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces&auto=format",
  },
  {
    name: "Robert Kim",
    username: "Co-Founder, TechFlow Analytics",
    body: "We tried 3 agencies before Jalex. The difference is night and day. They actually understand performance marketing.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=faces&auto=format",
  },
  {
    name: "Lisa Martinez",
    username: "Principal Dentist, Bright Smiles Dental",
    body: "Our patient acquisition cost dropped by 60% with their Google Ads strategy. Can't recommend them enough.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=faces&auto=format",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const TestimonialCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-10 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]">
      <div className="absolute -top-5 -left-5 -z-10 h-40 w-40 rounded-full bg-gradient-to-b from-[#3b82f6]/10 to-transparent blur-md"></div>

      <div className="text-white/90 leading-relaxed">{body}</div>

      <div className="mt-5 flex items-center gap-2">
        <img
          src={img || "/placeholder.svg"}
          alt={name}
          height="40"
          width="40"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <div className="leading-5 font-medium tracking-tight text-white">{name}</div>
          <div className="leading-5 tracking-tight text-white/60">{username}</div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[540px]">
          <div className="flex justify-center">
            <button
              type="button"
              className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative text-white">Client Success Stories</span>
            </button>
          </div>
          <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10">
            Real Results, Real Businesses
          </h2>

          <p className="mt-5 relative z-10 text-center text-lg text-zinc-500">
            Don't just take our word for it. Here's what our clients have to say about working with Jalex Media.
          </p>
        </div>

        <div className="my-16 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <div>
            <Marquee pauseOnHover vertical className="[--duration:20s]">
              {firstColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </Marquee>
          </div>

          <div className="hidden md:block">
            <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
              {secondColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </Marquee>
          </div>

          <div className="hidden lg:block">
            <Marquee pauseOnHover vertical className="[--duration:30s]">
              {thirdColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}
