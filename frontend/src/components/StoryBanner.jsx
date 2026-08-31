import '../App.css';
import balsamolabial from '../assets/balsamolabial.jpg';

function StoryBanner() {
  return (
    <section className="story-banner">
      <div
        className="story-img"
        style={{ backgroundImage: `url(${balsamolabial})` }}
      />
      <div className="story-content">
        <p className="eyebrow eyebrow-light">Our mission</p>
        <h2 className="story-title">Beauty that tell<br />your history</h2>
        <p className="story-text">
          Products that were tought to tell who you are, without mascaras — just your most authentic version.
        </p>
        <a href="#" className="btn-outline-light">Find your Brand</a>
      </div>
    </section>
  );
}

export default StoryBanner;