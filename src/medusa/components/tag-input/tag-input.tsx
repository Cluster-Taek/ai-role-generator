import { XMarkMini } from '@medusajs/icons';
import { Badge } from '@medusajs/ui';
import React, { useMemo, useState } from 'react';

interface ITagInputProps {
  options: string[];
  value: string[];
  onChange: (values: string[]) => void;
}

export const TagInput = (props: ITagInputProps) => {
  const { options, value, onChange } = props;
  const [inputValue, setInputValue] = useState('');
  const [isComposing, setIsComposing] = useState(false);

  const mostSimilarOption = useMemo(() => {
    if (inputValue.length === 0) {
      return null;
    }
    return options
      .filter((option) => !value.includes(option))
      .filter((option) => option.toLowerCase().startsWith(inputValue.toLowerCase()))?.[0];
  }, [options, value, inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCompositionStart = () => setIsComposing(true);
  const handleCompositionEnd = () => setIsComposing(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isComposing) {
      e.preventDefault();
      if (inputValue.trim()) {
        if (mostSimilarOption) {
          onChange([...value, mostSimilarOption]);
        } else {
          onChange([...value, inputValue]);
        }
        setInputValue('');
      }
    } else if (e.key === 'Backspace' && !inputValue) {
      onChange(value.slice(0, -1));
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mb-2">
      {value.map((tag) => (
        <Badge key={tag} className="flex items-center gap-2 truncate">
          <p className="truncate max-w-[120px]">{tag}</p>
          <XMarkMini className="cursor-pointer" onClick={() => onChange(value.filter((v) => v !== tag))} />
        </Badge>
      ))}
      <div className="relative p-0 w-[160px] h-4">
        <input
          placeholder="Add new tag"
          className="absolute top-0 left-0 flex-1 text-sm bg-transparent text-ui-fg-subtle focus:outline-none focus-within:outline-none focus-visible:outline-none"
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          value={inputValue}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
        />
        {mostSimilarOption && (
          <div className="absolute top-0 left-0 flex flex-row h-5 pointer-events-none">
            <div className="text-sm text-transparent whitespace-pre pointer-events-none">
              {mostSimilarOption.slice(0, inputValue.length)}
            </div>
            <div className="text-sm whitespace-pre pointer-events-none text-ui-fg-muted">
              {mostSimilarOption.slice(inputValue.length)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
