import React, { useRef } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      author: "Chris",
      role: "President and CEO, PrintReach, USA",
      rating: 4.5,
      avatar:
        "https://imgs.search.brave.com/5TDF9hL1fiUvpeWoLhfSD3oOkswWCowMXmTWY0vKo2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3J0cmFpdC1t/YW4td2VhcmluZy1z/dW5nbGFzc2VzXzEw/NDg5NDQtMTYxOTgu/anBnP3NlbXQ9YWlz/X2h5YnJpZA",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Jane",
      role: "CEO, TechCorp, USA",
      rating: 4,
      avatar:
        "https://imgs.search.brave.com/5TDF9hL1fiUvpeWoLhfSD3oOkswWCowMXmTWY0vKo2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3J0cmFpdC1t/YW4td2VhcmluZy1z/dW5nbGFzc2VzXzEw/NDg5NDQtMTYxOTgu/anBnP3NlbXQ9YWlz/X2h5YnJpZA",
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.ullamco laboris nisi ut aliquip ex ea commodo consequat",
      author: "Mark",
      role: "Founder, InnovateX, UK",
      rating: 5,
      avatar:
        "https://imgs.search.brave.com/5TDF9hL1fiUvpeWoLhfSD3oOkswWCowMXmTWY0vKo2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3J0cmFpdC1t/YW4td2VhcmluZy1z/dW5nbGFzc2VzXzEw/NDg5NDQtMTYxOTgu/anBnP3NlbXQ9YWlz/X2h5YnJpZA",
    },
  ];

  const scrollRef = useRef(null);

  const handleNext = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  const handlePrev = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  return (
    <div className="bg-blue-900 py-16 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">What People Say About Us</h1>
      </div>

      <div className="relative px-4 md:px-10">
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10">
          <button
            onClick={handlePrev}
            className="bg-white text-blue-900 p-3 rounded-full shadow-md hover:bg-yellow-500"
          >
            &#8592;
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10">
          <button
            onClick={handleNext}
            className="bg-white text-blue-900 p-3 rounded-full shadow-md hover:bg-yellow-500"
          >
            &#8594;
          </button>
        </div>

        {/* Testimonial Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth px-4"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg p-6 flex-shrink-0 w-80 md:w-96"
            >
              {/* Inverted Commas and Stars */}
              <div className="flex justify-between items-center mb-4">
                {/* Inverted Comma */}
                <span
                  className="text-5xl font-bold"
                  style={{
                    background: "linear-gradient(to right, orange, blue)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  “
                </span>
                {/* Star Ratings */}
                <div
                  className="flex"
                  style={{ width: "139px", height: "28px", overflow: "hidden" }}
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-500 text-lg ${
                        i < Math.round(testimonial.rating) ? "" : "opacity-50"
                      }`}
                      style={{ width: "28px", height: "28px" }}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm mb-4">{testimonial.text}</p>

              {/* Author Details */}
              <div className="flex items-center">
                {/* Avatar */}
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-lg">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className="w-3 h-3 rounded-full bg-gray-400 mx-1 cursor-pointer hover:bg-yellow-500"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
