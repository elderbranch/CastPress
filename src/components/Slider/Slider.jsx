import { useState } from "react";
import "./Slider.scss"

const articles = [
  {
    title: "How to rapidly test any experience!",
    date: "Jan 18, 20213",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Everything you need to know about mind mapping creation",
    date: "Jan 18, 20212",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Making meetup podcast Theming; launch it now!",
    date: "Jan 18, 20213",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Making meetup podcast Theming; launch it now!",
    date: "Jan 18, 202133",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Making meetup podcast Theming; launch it now!",
    date: "Jan 18, 202133",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Making meetup podcast Theming; launch it now!",
    date: "Jan 18, 202133",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Making meetup podcast Theming; launch it now!",
    date: "Jan 18, 202133",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "How to rapidly test any experience!",
    date: "Jan 18, 20213",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Everything you need to know about mind mapping creation",
    date: "Jan 18, 20212",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Making meetup podcast Theming; launch it now!",
    date: "Jan 18, 20213",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Making meetup podcast Theming; launch it now!",
    date: "Jan 18, 202133",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Making meetup podcast Theming; launch it now!",
    date: "Jan 18, 202133",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Making meetup podcast Theming; launch it now!",
    date: "Jan 18, 202133",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Making meetup podcast Theming; launch it now!",
    date: "Jan 18, 202133",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "How to rapidly test any experience!",
    date: "Jan 18, 20213",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Everything you need to know about mind mapping creation",
    date: "Jan 18, 20212",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Making meetup podcast Theming; launch it now!",
    date: "Jan 18, 20213",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Making meetup podcast Theming; launch it now!",
    date: "Jan 18, 202133",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Making meetup podcast Theming; launch it now!",
    date: "Jan 18, 202133",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Making meetup podcast Theming; launch it now!",
    date: "Jan 18, 202133",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
  {
    title: "Making meetup podcast Theming; launch it now!",
    date: "Jan 18, 202133",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat mauris nisl ...",
    buttonText: "LISTEN NOW"
  },
];


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const articlesOnPage = Math.ceil(articles.length / 3);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articlesOnPage);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articlesOnPage) % articlesOnPage);
  };

  const getSlidesForCurrentPage = () => {
    const startIndex = currentSlide * 3;
    return articles.slice(startIndex, startIndex + 3);
  };

  const getVisiblePageNumbers = () => {
    const visiblePages = [];
      for (let i = Math.max(0, currentSlide - 1); i <= Math.min(articlesOnPage - 1, currentSlide + 1); i++) {
        visiblePages.push(i);
      }
    return visiblePages;
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="slider-container" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <div className="slides">
        {getSlidesForCurrentPage().map((slide, index) => (
          <div key={index} className="slide">
            <p className="date">{slide.date}</p>
            <h3>{slide.title}</h3>
            <p className="description">{slide.description}</p>
            <button>{slide.buttonText}</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        <span className="nav-arrow prev-arrow" onClick={prevSlide}></span>
        {getVisiblePageNumbers().map((pageNumber) => (
          <span
            key={pageNumber}
            className={`page-number ${pageNumber === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(pageNumber)}
          >
            {pageNumber + 1}
          </span>
        ))}
        <span className="nav-arrow next-arrow" onClick={nextSlide}></span>
      </div>
    </div>
  );
};


export default Slider;