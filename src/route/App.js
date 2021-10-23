import '../assets/css/App.css';
import { Home } from '../components/screen/home/Home';
import { Footer } from '../components/util/Footer';
import { Header } from '../components/util/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
