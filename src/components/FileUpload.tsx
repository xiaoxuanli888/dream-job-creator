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
    <div className="w-full">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx"
        className="hidden"
      />
      <button
        onClick={handleClick}
        className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
      >
        <Upload className="w-5 h-5" />
        Upload your CV here
      </button>
      {fileName && (
        <p className="mt-3 text-sm text-muted-foreground">
          Selected: {fileName}
        </p>
      )}
    </div>
  );
};

export default FileUpload;
