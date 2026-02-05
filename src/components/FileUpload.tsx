import { Upload } from "lucide-react";
import { useRef, useState } from "react";

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
}

const FileUpload = ({ onFileSelect }: FileUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx"
        className="hidden"
      />
      <button
        onClick={handleClick}
        className="group px-8 py-4 bg-foreground text-background rounded-full font-medium flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-lg shadow-foreground/20"
      >
        <Upload className="w-5 h-5 group-hover:animate-bounce" />
        Upload your CV here
      </button>
      {fileName && (
        <p className="mt-4 text-sm text-foreground font-medium bg-foreground/5 px-4 py-2 rounded-full">
          ✓ {fileName}
        </p>
      )}
    </div>
  );
};

export default FileUpload;
