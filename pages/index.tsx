import Layout from "../components/layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Briefcase, Globe, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            Welcome to Domain Sage
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Your trusted source for premium domain names
          </p>
          <Button size="lg" asChild>
            <Link href="/domains">Explore Domains</Link>
          </Button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          Why Choose Domain Sage?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Premium Selection",
              description: "Curated list of high-quality domains",
              icon: Globe,
            },
            {
              title: "Expert Guidance",
              description: "Professional advice on domain investments",
              icon: Briefcase,
            },
            {
              title: "Market Insights",
              description: "Stay updated with domain market trends",
              icon: TrendingUp,
            },
          ].map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="h-8 w-8 md:h-10 md:w-10 mb-2 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            Ready to find your perfect domain?
          </h2>
          <Button size="lg" asChild>
            <Link href="/domains">
              View All Domains <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
