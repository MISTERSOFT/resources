import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ContentCreatorLandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Star className="h-6 w-6 text-primary" />
            <span>CreatorHub</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#features" className="font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="#creators" className="font-medium transition-colors hover:text-primary">
              Creators
            </Link>
            <Link href="#pricing" className="font-medium transition-colors hover:text-primary">
              Pricing
            </Link>
            <Link href="#faq" className="font-medium transition-colors hover:text-primary">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="#">Log in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="#">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Monetize your content. Connect with fans.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The all-in-one platform for creators to build a sustainable business and deeper connections with
                    their audience.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#">
                      Get started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#">See how it works</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-background"
                      >
                        <Image
                          src={`/placeholder.svg?height=32&width=32&text=${i}`}
                          alt="User"
                          width={32}
                          height={32}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-muted-foreground">
                    Join <span className="font-medium text-foreground">10,000+</span> creators
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl -z-10" />
                <Image
                  src="/placeholder.svg?height=600&width=500&text=Creator+Platform"
                  alt="Creator Platform"
                  width={500}
                  height={600}
                  className="mx-auto aspect-[4/5] overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Everything you need to succeed
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Powerful tools to help you monetize your content, engage with your audience, and grow your business.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Subscription Tiers",
                  description:
                    "Create multiple subscription tiers with different perks and pricing to maximize your revenue.",
                  icon: "💰",
                },
                {
                  title: "Direct Messaging",
                  description: "Connect with your fans through private messaging and build deeper relationships.",
                  icon: "💬",
                },
                {
                  title: "Content Scheduling",
                  description: "Plan and schedule your content in advance to maintain a consistent posting schedule.",
                  icon: "📅",
                },
                {
                  title: "Analytics Dashboard",
                  description: "Track your growth, revenue, and engagement with detailed analytics and insights.",
                  icon: "📊",
                },
                {
                  title: "Custom Branding",
                  description: "Personalize your profile with custom colors, fonts, and layouts to match your brand.",
                  icon: "🎨",
                },
                {
                  title: "Multi-Platform Integration",
                  description:
                    "Connect your other social media accounts to cross-promote your content and grow your audience.",
                  icon: "🔄",
                },
              ].map((feature, i) => (
                <div key={i} className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="creators" className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join successful creators</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                See how creators across different niches are building their businesses and connecting with their fans.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alex Johnson",
                  niche: "Fitness & Wellness",
                  revenue: "$15,000/month",
                  testimonial:
                    "CreatorHub has completely transformed how I monetize my fitness content. My income has tripled in just 6 months!",
                },
                {
                  name: "Sarah Williams",
                  niche: "Digital Art",
                  revenue: "$8,500/month",
                  testimonial:
                    "As an artist, I was struggling to make ends meet. Now I have a steady income from my subscribers who love my exclusive content.",
                },
                {
                  name: "Michael Chen",
                  niche: "Cooking & Recipes",
                  revenue: "$12,000/month",
                  testimonial:
                    "The direct connection with my fans has been incredible. They love the exclusive recipes and cooking tutorials I share.",
                },
              ].map((creator, i) => (
                <div key={i} className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <Image
                      src={`/placeholder.svg?height=80&width=80&text=${creator.name.charAt(0)}`}
                      alt={creator.name}
                      width={80}
                      height={80}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold">{creator.name}</h3>
                      <p className="text-sm text-muted-foreground">{creator.niche}</p>
                      <p className="text-sm font-medium text-primary">{creator.revenue}</p>
                    </div>
                  </div>
                  <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                    "{creator.testimonial}"
                  </blockquote>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="#">View more success stories</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, transparent pricing
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                No hidden fees. Keep more of what you earn with our creator-friendly pricing.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Starter",
                  price: "$0",
                  description: "Perfect for creators just getting started",
                  features: [
                    "Up to 100 subscribers",
                    "Basic analytics",
                    "Standard support",
                    "5% platform fee",
                    "Standard payout schedule",
                  ],
                  cta: "Start for free",
                  popular: false,
                },
                {
                  title: "Pro",
                  price: "$29",
                  description: "For growing creators ready to scale",
                  features: [
                    "Unlimited subscribers",
                    "Advanced analytics",
                    "Priority support",
                    "3% platform fee",
                    "Faster payouts",
                    "Custom branding",
                  ],
                  cta: "Get started",
                  popular: true,
                },
                {
                  title: "Business",
                  price: "$99",
                  description: "For established creators and teams",
                  features: [
                    "Everything in Pro",
                    "Team accounts",
                    "API access",
                    "2% platform fee",
                    "Instant payouts",
                    "Dedicated account manager",
                    "Custom integrations",
                  ],
                  cta: "Contact sales",
                  popular: false,
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`flex flex-col rounded-lg border p-6 shadow-sm ${
                    plan.popular ? "border-primary ring-1 ring-primary" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`mt-8 ${plan.popular ? "" : "bg-muted-foreground/80 hover:bg-muted-foreground"}`}
                    size="lg"
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="#">{plan.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently asked questions
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Got questions? We've got answers.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6">
              {[
                {
                  question: "How do I get paid?",
                  answer:
                    "You can connect your bank account or PayPal to receive payments. We process payouts on a weekly basis, with Pro and Business plans offering faster payout options.",
                },
                {
                  question: "What types of content can I share?",
                  answer:
                    "You can share text, images, videos, audio, and live streams. All content must comply with our community guidelines and terms of service.",
                },
                {
                  question: "Can I migrate from another platform?",
                  answer:
                    "Yes! We offer migration tools and dedicated support to help you move your content and audience from other platforms.",
                },
                {
                  question: "How do I set up subscription tiers?",
                  answer:
                    "In your creator dashboard, you can easily set up multiple subscription tiers with different prices and perks. You can customize what content is available to each tier.",
                },
                {
                  question: "Is there a mobile app?",
                  answer:
                    "Yes, we have iOS and Android apps for both creators and fans, making it easy to create and consume content on the go.",
                },
                {
                  question: "What support do you offer?",
                  answer:
                    "We offer email support for all users, with priority support for Pro users and dedicated account managers for Business users.",
                },
              ].map((faq, i) => (
                <div key={i} className="rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to start your creator journey?
                </h2>
                <p className="mt-4 max-w-[600px] md:text-xl">
                  Join thousands of creators who are building sustainable businesses and meaningful connections with
                  their audience.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end lg:justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="#">
                    Get started for free <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-sm text-primary-foreground/80">No credit card required</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <Star className="h-6 w-6 text-primary" />
                <span>CreatorHub</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                The all-in-one platform for creators to monetize their content and connect with fans.
              </p>
            </div>
            <div className="grid gap-4">
              <h3 className="text-lg font-medium">Product</h3>
              <nav className="grid gap-2 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Features
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Testimonials
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </nav>
            </div>
            <div className="grid gap-4">
              <h3 className="text-lg font-medium">Company</h3>
              <nav className="grid gap-2 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="grid gap-4">
              <h3 className="text-lg font-medium">Legal</h3>
              <nav className="grid gap-2 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Cookies
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Licenses
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} CreatorHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

