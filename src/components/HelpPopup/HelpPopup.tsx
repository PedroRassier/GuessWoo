import { Circle, X } from 'phosphor-react';
import { StyledHelpPopup } from './HelpPopupStyle';

interface HelpPopupInterface {
  triger: boolean;
}

export default function HelpPopup(props: HelpPopupInterface) {
  return props.triger ? (
    <StyledHelpPopup>
      <header>
        <p></p>
        <h2>How to play</h2>
        <X size={32} color="#FD9C09" />
      </header>
      <article>
        <Circle size={12} weight="fill" color="#FD9C09" />
        <p>You will get a random word every time you refresh the tab</p>
      </article>
      <article>
        <Circle size={12} weight="fill" color="#FD9C09" />
        <p>Words can have a minimum of 4 letters and a maximum of 8</p>
      </article>
      <article>
        <Circle size={12} weight="fill" color="#FD9C09" />
        <p>You can try as many times as you want</p>
      </article>
    </StyledHelpPopup>
  ) : (
    <div></div>
  );
}
