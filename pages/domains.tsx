import Layout from "../components/layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const domains = [
  {
    name: "example.com",
    price: 1000,
    danLink: "https://dan.com/buy-domain/example.com",
    godaddyLink:
      "https://www.godaddy.com/domainsearch/find?domainToCheck=example.com",
  },
  {
    name: "mydomain.net",
    price: 500,
    danLink: "https://dan.com/buy-domain/mydomain.net",
    godaddyLink:
      "https://www.godaddy.com/domainsearch/find?domainToCheck=mydomain.net",
  },
  {
    name: "coolsite.org",
    price: 750,
    danLink: "https://dan.com/buy-domain/coolsite.org",
    godaddyLink:
      "https://www.godaddy.com/domainsearch/find?domainToCheck=coolsite.org",
  },
  // Add more domains here
];

export default function Domains() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Domains For Sale
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <Card key={domain.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{domain.name}</CardTitle>
                <CardDescription>Price: ${domain.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  This domain is available for purchase. Click on one of the
                  links below to buy it on your preferred platform.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <a
                    href={domain.danLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Dan.com <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href={domain.godaddyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on GoDaddy <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
