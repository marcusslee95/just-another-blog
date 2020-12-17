import Layout from "./dumbComponents/Layout";
import Logo from "./dumbComponents/Logo";
import Intro from "./smartComponents/Intro";

function App() {
  return (
    <Layout>
      <Logo/>
      <Intro/>
    </Layout>
  );
}

export default App;
