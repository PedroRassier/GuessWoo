import { Gear } from 'phosphor-react';
import GuessedCounter from '../GuessedCounter/GuessedCounter';
import InfoButton from '../InfoButton/InfoButton';
import { StyledHeader } from './HeaderStyle';

export default function Header() {
  return (
    <StyledHeader>
      <div className="InfoSetting">
        <InfoButton />
        <Gear size={45} color="#5A258F" />
      </div>
      <h1>GuessWoo</h1>
      <GuessedCounter guessedWords={0} />
    </StyledHeader>
  );
}
