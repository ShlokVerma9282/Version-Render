import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactTyped } from 'react-typed';
import Github from '../../img/facebookorange.png';
import messenger from '../../img/facebookmessenger.png';
import LinkedIn from '../../img/twitter.png';
import Instagram from '../../img/insta.png';
import GiftForm from './GiftForm';
import Carousel from './Carousel/Slider';

const ITEMS_PER_PAGE = 3;

const quotes = [
  "Your gift is being generated.",
  "We are finding the best gift for you.",
  "A gift, no matter how small, is a great thing.",
  "The best gifts come from the heart, not the store.",
  "The manner of giving is worth more than the gift.",
  "Every gift which is given, even though it be small, is in reality great, if it is given with affection.",
  "It's not how much we give but how much love we put into giving.",
  "The excellence of a gift lies in its appropriateness rather than in its value."
];

const shuffleArray = (array) => {
  let newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Intro = () => {
  const [showGiftProducts, setShowGiftProducts] = useState(false);
  const [giftIdeas, setGiftIdeas] = useState([]);
  const [error, setError] = useState("");
  const [showGiftIdeasContainer, setShowGiftIdeasContainer] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [formData, setFormData] = useState(null);
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [expandedIdeaIndex, setExpandedIdeaIndex] = useState(null);

  useEffect(() => {
    setQuotes(shuffleArray(quotes));
  }, []);

  const [shuffledQuotes, setQuotes] = useState(quotes);

  const handleButtonClick = () => setShowGiftProducts(true);

  const handleReviewClick = (review) => {
    setSelectedPrompt(review);
    setFormData((prevData) => ({
      ...prevData,
      prompt: review,
    }));
  };

  const handleGenerateGiftIdeas = async (ideas, error) => {
    setError(error);
    if (ideas && ideas.length > 0) {
      setGiftIdeas(ideas); // Clear previous ideas and set new ideas
      setCurrentPage(0); // Reset to the first page
      await updateGiftIdeasWithDetails(ideas);
    }
    setShowGiftIdeasContainer(true);
  };

  const handleFormDataChange = (data) => {
    setFormData(data);
  };

  const handleGenerateMore = async () => {
    if (!formData) {
      setError("Form data is missing");
      return;
    }
    setIsLoadingMore(true);
    fetch('https://amazon-1-w3xr.onrender.com/generate_gift_idea', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setGiftIdeas(prevIdeas => [...prevIdeas, ...data]); // Append new ideas to the existing list
          updateGiftIdeasWithDetails([...giftIdeas, ...data]);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Error generating gift ideas');
      })
      .finally(() => {
        setIsLoadingMore(false);
      });
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * ITEMS_PER_PAGE < giftIdeas.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const displayedIdeas = Array.isArray(giftIdeas) ? giftIdeas.slice(startIndex, startIndex + ITEMS_PER_PAGE) : [];

  const handleShowGiftIdeasContainer = () => {
    setShowGiftIdeasContainer(true);
  };

  const updateGiftIdeasWithDetails = async (ideas) => {
    const productNames = ideas.slice(0, 3).map((idea) => idea.Product_name);
    console.log('Sending first three product names to server:', productNames.join(', '));

    try {
      const response = await axios.get('http://localhost:3000/search', {
        params: { keywords: productNames.join(',') }
      });

      if (response.data && response.data.results) {
        const updatedIdeas = response.data.results.map((detail, index) => ({
          ...ideas[index],
          img: detail.Image,
          link: detail.Link
        }));

        setGiftIdeas((prevIdeas) => {
          const combinedIdeas = prevIdeas.map((idea, idx) => ({
            ...idea,
            ...(updatedIdeas.find((updIdea) => updIdea.Product_name === idea.Product_name) || {})
          }));
          return combinedIdeas;
        });
      } else {
        console.error('Unexpected response structure:', response.data);
        setError('Unexpected response structure');
      }
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row ml-4 md:ml-10 md:mt-24 pb-10 md:pb-20 pt-8 md:pt-13">
        <div className="flex flex-col flex-1 gap-8 items-start">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-3xl md:text-5xl mt-5 md:mt-10 text-orange-400 fuzzy-bubbles-bold">GiftGuru</p>
            <div className="flex justify-center items-center text-2xl md:text-5xl mt-3 md:mt-5">
              <p className="text-lg md:text-xl inline-block open-sans-regular">
                The ultimate destination for discovering the perfect gift for every occasion, offering an unparalleled selection of thoughtfully curated treasures for your
                <ReactTyped
                  className="inline-block text-orange-400 font-bold ml-1"
                  style={{ fontSize: "1.5rem", md: { fontSize: "1.875rem" } }}
                  strings={['Husband', 'Wife', 'Son', 'Daughter', 'Mother', 'Father', 'Friend']}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6 md:w-8 md:h-8 transform hover:scale-110 transition-transform duration-300" />
            <img src={Instagram} alt="Instagram" className="w-6 h-6 md:w-8 md:h-8 transform hover:scale-110 transition-transform duration-300" />
            <img src={Github} alt="Github" className="w-6 h-6 md:w-8 md:h-8 transform hover:scale-110 transition-transform duration-300" />
            <img src={messenger} alt="Messenger" className="w-6 h-6 md:w-8 md:h-8 transform hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="max-w-full lg:max-w-2xl p-2 bg-white shadow-md rounded-md hidden lg:block">
            <Carousel onReviewClick={handleReviewClick} />
          </div>
        </div>

        <div className="flex flex-1 relative lg:mt-0 mt-10">
          <div className="max-w-full lg:max-w-2xl ml-0 md:ml-10 p-8 bg-white shadow-md rounded-md">
            <GiftForm
              onGenerateGiftIdeas={handleGenerateGiftIdeas}
              onFormDataChange={handleFormDataChange}
              initialPrompt={selectedPrompt}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              onShowGiftIdeasContainer={handleShowGiftIdeasContainer}
            />
          </div>
        </div>
      </div>

      {showGiftIdeasContainer && (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-2">
          <div className="bg-white text-black p-4 shadow-md rounded-md w-full max-w-6xl">
            <h2 className="text-2xl mb-4 text-orange-400 fuzzy-bubbles-bold">Generated Gift Ideas</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {isLoading ? (
              <div className="flex flex-col items-center">
                <div className="spinner border-t-4 border-orange-400 rounded-full w-12 h-12 animate-spin"></div>
                <ReactTyped
                  className="mt-4 text-center text-gray-500"
                  style={{ fontSize: "1.5rem", md: { fontSize: "1.875rem" } }}
                  strings={shuffledQuotes}
                  typeSpeed={50}
                  backSpeed={25}
                  loop
                />
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {displayedIdeas.map((idea, index) => (
                    <div key={index} className="bg-white shadow-md rounded-md p-4 relative flex flex-col">
                      <div className="flex-grow">
                        <img
                          src={idea.image}
                          alt="Gift"
                          className="w-full h-40 object-contain mb-2"
                          style={{ objectFit: 'contain' }}
                        />
                        <h3 className="fuzzy-bubbles-bold mb-1 text-orange-400">
                          {expandedIdeaIndex === index ? idea.title : idea.title.slice(0, 35) + (idea.title.length > 35 ? "..." : "")}
                        </h3>
                        {idea.title.length > 35 && (
                          <button
                            onClick={() => setExpandedIdeaIndex(expandedIdeaIndex === index ? null : index)}
                            className="text-orange-400 hover:underline text-md"
                          >
                            {expandedIdeaIndex === index ? "Read less" : "Read more"}
                          </button>
                        )}
                        <p className="text-sm mb-2 mt-2">{idea.reason}</p>
                      </div>
                      <p className="text-sm mb-2 mt-2 text-black">Price: {idea.price}</p>
                      <a
                        href={idea.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:underline mt-2 flex flex-col"
                      >
                        View Product
                      </a>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 0}
                    className="bg-orange-400 text-white px-4 py-2 rounded-md disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNextPage}
                    disabled={(currentPage + 1) * ITEMS_PER_PAGE >= giftIdeas.length}
                    className="bg-orange-400 text-white px-4 py-2 rounded-md disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
                <button
                  onClick={handleGenerateMore}
                  className="mt-4 bg-orange-400 text-white px-4 py-2 rounded-md flex items-center justify-center"
                >
                  {isLoadingMore ? (
                    <div>Loading....</div>
                  ) : (
                    "Generate More"
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
