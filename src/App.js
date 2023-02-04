import './App.css';
import Layout from "./components/layout/layout"
import First from "./components/first/first"
import Second from "./components/second/second"

function App() {
  return (
    <div className="app">
      <Layout>
        <First />
        <Second />
      </Layout>
    </div>
  );
}

export default App;
