import Link from "next/link";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button 
          as={Link} 
          href="/" 
          color="primary" 
          size="lg"
          startContent={<Icon icon="lucide:home" />}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
