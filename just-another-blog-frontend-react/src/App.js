import Layout from "./dumbComponents/LayoutStuff/Layout";
import Intro from "./smartComponents/Intro";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SoftwareEngineering from "./smartComponents/SoftwareEngineering/SoftwareEngineering";
import EverythingElse from "./smartComponents/EverythingElse/EverythingElse";
import UserWritingArticle from "./smartComponents/UserWritingArticle/UserWritingArticle";

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
          <Route path="/else" exact>
            <EverythingElse/>
          </Route>
          <Route path="/userWritingArticle" exact>
            <UserWritingArticle/>
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
