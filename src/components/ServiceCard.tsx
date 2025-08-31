import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onMoreClick: () => void;
  className?: string;
}

export function ServiceCard({ title, description, icon, onMoreClick, className = '' }: ServiceCardProps) {
  return (
    <Card className={`h-full group hover:shadow-lg transition-all duration-300 ${className}`}>
      <CardHeader className="pb-4">
        {icon && (
          <div className="mb-3 text-primary">
            {icon}
          </div>
        )}
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-full">
        <CardDescription className="flex-1 mb-4 text-sm leading-relaxed">
          {description}
        </CardDescription>
        <Button 
          variant="outline" 
          size="sm"
          onClick={onMoreClick}
          className="self-start group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
        >
          More
          <ArrowRight className="ml-2 h-3 w-3" />
        </Button>
      </CardContent>
    </Card>
  );
}