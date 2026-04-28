import ClassBased from "./ClassBased";
import ClassBasedSecond from "./ClassBasedSecond";
import ConditionalRendering from "./ConditionalRendering";
import ControlledForm from "./ControlledForm";
import FunctionBased from "./FunctionBased";

function App() {
  // ! Class Based (State Full) vs

  return (
    <div>
      <h2>This is the H2 in APP</h2>
      <ClassBased />
      {new ClassBased().render()}
      <ClassBasedSecond />
      <FunctionBased />
      <ConditionalRendering />
      <ControlledForm />
    </div>
  );
}
export default App;
