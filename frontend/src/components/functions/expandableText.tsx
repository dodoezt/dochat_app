import { useState } from 'react';

interface ExpandableTextProps {
  text: string;
  maxChars?: number; // batas karakter sebelum dipotong
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxChars = 120 }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = text?.length > maxChars;

  const displayText = expanded || !isLong ? text : text.slice(0, maxChars) + '...';

  return (
    <div className="text-sm text-[#e0e0e0] whitespace-pre-wrap break-words">
      {displayText}
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="ml-1 text-blue-[#888888] hover:underline"
        >
          {expanded ? 'Sembunyikan' : 'Lihat selengkapnya'}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
