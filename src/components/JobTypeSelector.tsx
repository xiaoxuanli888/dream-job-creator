import { cn } from "@/lib/utils";

interface JobTypeSelectorProps {
  selected: "corporate" | "startup" | null;
  onSelect: (type: "corporate" | "startup") => void;
}

const JobTypeSelector = ({ selected, onSelect }: JobTypeSelectorProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={() => onSelect("corporate")}
        className={cn(
          "px-8 py-4 border-2 border-primary rounded-lg font-medium transition-all duration-200",
          selected === "corporate"
            ? "bg-primary text-primary-foreground"
            : "bg-background text-foreground hover:bg-muted"
        )}
      >
        A corporate job
      </button>
      <button
        onClick={() => onSelect("startup")}
        className={cn(
          "px-8 py-4 border-2 border-primary rounded-lg font-medium transition-all duration-200",
          selected === "startup"
            ? "bg-primary text-primary-foreground"
            : "bg-background text-foreground hover:bg-muted"
        )}
      >
        A startup job
      </button>
    </div>
  );
};

export default JobTypeSelector;
