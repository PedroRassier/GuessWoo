import GameArea from "../../components/GameArea/GameArea";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/MainDiv";
import { StyledHome } from "./HomeStyle";

export default function Home() {
  return (
    <StyledHome>
      <Header />
      <Main />
    </StyledHome>
  );
}
