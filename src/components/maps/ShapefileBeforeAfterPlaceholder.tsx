type Props = {
  title?: string;
  note?: string;
};

const ShapefileBeforeAfterPlaceholder = ({
  title = "Before / After Map",
  note = "Restore shapefile layers placeholder — swap with Map component when ready.",
}: Props) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-xl">{title}</h3>
        <span className="text-xs text-muted-foreground">Interactive map coming soon</span>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-border rounded-lg p-4 bg-muted/20">
          <div className="mb-2 text-sm font-semibold">Before</div>
          <div className="aspect-video flex items-center justify-center text-xs text-muted-foreground bg-background/50 rounded">
            Restore shapefile layer (before)
          </div>
        </div>
        <div className="border border-border rounded-lg p-4 bg-muted/20">
          <div className="mb-2 text-sm font-semibold">After</div>
          <div className="aspect-video flex items-center justify-center text-xs text-muted-foreground bg-background/50 rounded">
            Restore shapefile layer (after)
          </div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">{note}</p>
    </div>
  );
};

export default ShapefileBeforeAfterPlaceholder;


