interface MetricCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const MetricCard = ({ value, label, icon }: MetricCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-smooth animate-scale-in">
      {icon && (
        <div className="flex justify-center mb-4 text-primary">
          {icon}
        </div>
      )}
      <div className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2">
        {value}
      </div>
      <div className="text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
};

export default MetricCard;
