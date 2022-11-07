import { StyledGuessedCounter } from './GuessedCounterStyle';

interface GuessedWordsProps {
  guessedWords: number;
}

export default function GuessedCounter(props: GuessedWordsProps) {
  return (
    <StyledGuessedCounter>
      You Guessed: {props.guessedWords}
    </StyledGuessedCounter>
  );
}
