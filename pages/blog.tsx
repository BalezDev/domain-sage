import Layout from "../components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Domain Investing",
    date: "2023-06-01",
    excerpt:
      "Explore the trends shaping the domain market in the coming years.",
  },
  {
    title: "How to Value a Domain Name",
    date: "2023-05-15",
    excerpt:
      "Learn the key factors that determine a domain's worth in today's market.",
  },
  {
    title: "Top TLDs for Tech Startups",
    date: "2023-05-01",
    excerpt:
      "Discover the most popular top-level domains for technology companies.",
  },
  // Add more blog posts here
];

export default function Blog() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Domain Sage Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
