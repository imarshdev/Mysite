import Intro, { TopBar } from "./components/blocks/intro";
import StackAndProjects from "./components/blocks/stack";
import Outro from "./components/blocks/outro";

export default function App() {
  return (
    <div className="container">
      <TopBar />
      <div className="content">
        <Intro />
        <StackAndProjects />
        <Outro />
      </div>
    </div>
  );
}
