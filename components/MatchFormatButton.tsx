import { FC } from 'react';
import TextButton from './TextButton';
import { MatchFormat } from '@/firebase/models/game';

interface MatchFormatButtonProps {
  format: MatchFormat;
  selectedFormat: MatchFormat | null;
  setSelectedFormat: (format: MatchFormat | null) => void;
}

const MatchFormatButton: FC<MatchFormatButtonProps> = ({
  format,
  selectedFormat,
  setSelectedFormat,
}) => {
  const handlePress = () => {
    if (selectedFormat === format) {
      setSelectedFormat(null);
      return;
    }

    setSelectedFormat(format);
  };

  return (
    <TextButton
      toggle={format === selectedFormat}
      onPress={handlePress}
      title={format}
      style={{ flex: 1 }}
    />
  );
};

export default MatchFormatButton;
