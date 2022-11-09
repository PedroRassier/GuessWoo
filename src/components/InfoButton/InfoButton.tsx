import { useState } from 'react';
import HelpPopup from '../HelpPopup/HelpPopup';
import { StyledInfoButton } from './InfoButtonStyle';

export default function InfoButton() {
  const [helpTabState, setHelpTabState] = useState(false);

  const handleClick = () => {
    setHelpTabState(!helpTabState);
  };

  return (
    <StyledInfoButton onClick={handleClick}>
      {helpTabState ? <HelpPopup triger={helpTabState} /> : '?'}
    </StyledInfoButton>
  );
}
