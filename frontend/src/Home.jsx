import './App.css';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import ProdutosDestaque from './components/ProdutosDestaque';
import StoryBanner from './components/StoryBanner';
import Novidades from './components/Novidades';
import Tutoriais from './components/Tutoriais';
import Footer from './components/footer';

function HomePage() {
  return (
    <div className="homepage">
      <Topbar />
      <Hero />
      <ProdutosDestaque />
      <StoryBanner />
      <Novidades />
      <Tutoriais />
      <Footer />
    </div>
  );
}

export default HomePage;