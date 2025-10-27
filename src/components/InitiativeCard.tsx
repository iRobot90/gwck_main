import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface InitiativeCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const InitiativeCard = ({ title, description, icon }: InitiativeCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-smooth border-border group">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth text-primary">
          {icon}
        </div>
        <CardTitle className="font-heading text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default InitiativeCard;
