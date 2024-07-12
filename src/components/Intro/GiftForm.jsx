import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "./SearchBar/Searchbar";

const GiftForm = ({
  onGenerateGiftIdeas,
  onFormDataChange,
  initialPrompt,
  isLoading,
  setIsLoading,
  onShowGiftIdeasContainer,
}) => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    occasion: "",
    recipientType: "",
    priceRange: "",
    categories: [],
    prompt: initialPrompt || "",
  });

  const [error, setError] = useState('');

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      prompt: initialPrompt,
    }));
  }, [initialPrompt]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    onFormDataChange({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updatedCategories = checked
      ? [...formData.categories, name]
      : formData.categories.filter((category) => category !== name);
    setFormData((prevData) => ({
      ...prevData,
      categories: updatedCategories,
    }));
    onFormDataChange({ ...formData, categories: updatedCategories });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await generateGiftIdeas();
    onShowGiftIdeasContainer(); // Show the gift ideas container
  };

  const generateGiftIdeas = async () => {
    console.log("Data being sent:", formData);

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
          onGenerateGiftIdeas([], data.error); // Pass error to the parent component
        } else {
          onGenerateGiftIdeas(data, ""); // Pass results to the parent component
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Error generating gift ideas');
        onGenerateGiftIdeas([], 'Error generating gift ideas'); // Pass error to the parent component
        setIsLoading(false);
      });
  };

  const handleSearchChange = (newSearchTerm) => {
    setFormData((prevData) => ({
      ...prevData,
      prompt: newSearchTerm,
    }));
    onFormDataChange({ ...formData, prompt: newSearchTerm });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="age" className="block mb-2">Age:</label>
        <select id="age" name="age" value={formData.age} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded">
          <option value="">Select age</option>
          <option value="0-12">0-12</option>
          <option value="13-17">13-17</option>
          <option value="18-24">18-24</option>
          <option value="25-34">25-34</option>
          <option value="35-44">35-44</option>
          <option value="45-54">45-54</option>
          <option value="55-64">55-64</option>
          <option value="65+">65+</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block mb-2">Gender:</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded">
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="occasion" className="block mb-2">Occasion:</label>
        <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded">
          <option value="">Select occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Christmas">Christmas</option>
          <option value="Valentine's Day">Valentine's Day</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="recipientType" className="block mb-2">Recipient Type:</label>
        <select id="recipientType" name="recipientType" value={formData.recipientType} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded">
          <option value="">Select recipient type</option>
          <option value="Family">Family</option>
          <option value="Friend">Friend</option>
          <option value="Colleague">Colleague</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="priceRange" className="block mb-2">Price Range:</label>
        <select id="priceRange" name="priceRange" value={formData.priceRange} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded">
          <option value="">Select price range</option>
          <option value="₹0-₹500">₹0-₹500</option>
          <option value="₹500-₹1000">₹500-₹1000</option>
          <option value="₹1000-₹3000">₹1000-₹3000</option>
          <option value="₹3000-₹5000">₹3000-₹5000</option>
          <option value="₹5000+">₹5000+</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Categories:</label>
        <label className="inline-flex items-center mr-4">
          <input type="checkbox" name="electronics" checked={formData.categories.includes("electronics")} onChange={handleCheckboxChange} className="form-checkbox" />
          <span className="ml-2">Electronics</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input type="checkbox" name="fashion" checked={formData.categories.includes("fashion")} onChange={handleCheckboxChange} className="form-checkbox" />
          <span className="ml-2">Fashion</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input type="checkbox" name="home" checked={formData.categories.includes("home")} onChange={handleCheckboxChange} className="form-checkbox" />
          <span className="ml-2">Home</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input type="checkbox" name="toys" checked={formData.categories.includes("toys")} onChange={handleCheckboxChange} className="form-checkbox" />
          <span className="ml-2">Toys</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input type="checkbox" name="beauty" checked={formData.categories.includes("beauty")} onChange={handleCheckboxChange} className="form-checkbox" />
          <span className="ml-2">Beauty</span>
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="prompt" className="block mb-2">Prompt:</label>
        <Searchbar searchTerm={formData.prompt} onSearchChange={handleSearchChange} />
      </div>
      <button type="submit" className="bg-orange-400 text-white px-4 py-2 rounded">
        {isLoading ? 'Loading...' : 'Generate Gift Ideas'}
      </button>
      <div className="results-container" id="results-container">
        {error && <p className="error">{error}</p>}
      </div>
    </form>
  );
};

export default GiftForm;
