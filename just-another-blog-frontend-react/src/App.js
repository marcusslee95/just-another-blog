import Layout from "./dumbComponents/LayoutStuff/Layout";
import Intro from "./smartComponents/Intro";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SoftwareEngineering from "./smartComponents/SoftwareEngineering";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Intro/>
          </Route>
          <Route path="/swe" exact>
            <SoftwareEngineering/>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
// function App() {
//   return (
//     <Layout>
//       <Intro/>
//     </Layout>
//   );
// }

export default App;
