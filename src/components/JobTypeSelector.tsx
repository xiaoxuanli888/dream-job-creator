import { cn } from "@/lib/utils";

type JobType = "corporate" | "startup" | "open" | null;

interface JobTypeSelectorProps {
  selected: JobType;
  onSelect: (type: "corporate" | "startup" | "open") => void;
}

const JobTypeSelector = ({ selected, onSelect }: JobTypeSelectorProps) => {
  const options = [
    { value: "corporate" as const, label: "A corporate job" },
    { value: "startup" as const, label: "A startup job" },
    { value: "open" as const, label: "I am open to all" },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-3 flex-wrap justify-center">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onSelect(option.value)}
          className={cn(
            "px-6 py-3 border-2 border-foreground rounded-full font-medium transition-all duration-300 text-sm",
            selected === option.value
              ? "bg-foreground text-background shadow-lg scale-105"
              : "bg-background text-foreground hover:bg-foreground hover:text-background"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default JobTypeSelector;
