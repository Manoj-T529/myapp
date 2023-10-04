import React, { useState } from 'react';
import Select from 'react-select';

const categoryOptions = [
  { label: 'Vegetables', value: 'vegetables' },
  { label: 'Fruits', value: 'fruits' },
  { label: 'Grains', value: 'grains' },
];

const fruitOptions = [
  { label: 'Apple', value: 'apple', costPerUnit: 2.0 },
  { label: 'Banana', value: 'banana', costPerUnit: 1.0 },
  { label: 'Orange', value: 'orange', costPerUnit: 1.5 },
  // Add more fruit options as needed
];

const grainsOptions = [
  { label: 'Rice', value: 'rice', costPerUnit: 2.0 },
  { label: 'Wheat', value: 'wheat', costPerUnit: 1.0 },
  { label: 'Millet', value: 'millet', costPerUnit: 1.5 },
  // Add more fruit options as needed
];

const vegetablesOptions = [
  { label: 'Carrot', value: 'carrot', costPerUnit: 2.0 },
  { label: 'BeetRoot', value: 'beetroot', costPerUnit: 1.0 },
  { label: 'Drumstick', value: 'drumstick', costPerUnit: 1.5 },
  // Add more fruit options as needed
];

const VegetableSelector = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [selectedGrains, setSelectedGrains] = useState(null);
  const [selectedVegetables, setSelectedVegetables] = useState(null);
  //const [quantity, setQuantity] = useState(1);

  const handleCategoryChange = (selected) => {
    setSelectedCategory(selected);
    setSelectedFruit(null); 
    setSelectedGrains(null);
    setSelectedVegetables(null);// Reset the selected fruit when changing the category
  };

  const handleFruitChange = (selected) => {
    setSelectedFruit(selected);
  };
  const handleGrainsChange = (selected) => {
    setSelectedGrains(selected);
  };
  const handleVegetablesChange = (selected) => {
    setSelectedVegetables(selected);
  };

  

  return (
    <div>
      <Select
        value={selectedCategory}
        onChange={handleCategoryChange}
        options={categoryOptions}
        placeholder="Select a category"
      />
      {selectedCategory && selectedCategory.value === 'fruits' && (
        <Select
          value={selectedFruit}
          onChange={handleFruitChange}
          options={fruitOptions}
          isMulti={true}
          placeholder="Select a fruit"
        />
      )}
      {selectedCategory && selectedCategory.value === 'grains' && (
        <Select
          value={selectedGrains}
          onChange={handleGrainsChange}
          options={grainsOptions}
          isMulti={true}
          placeholder="Select a Grain"
        />
      )}
       {selectedCategory && selectedCategory.value === 'vegetables' && (
        <Select
          value={selectedVegetables}
          onChange={handleVegetablesChange}
          options={vegetablesOptions}
          isMulti={true}
          placeholder="Select a Vegetable"
        />
      )}
    </div>
  );
};

export default VegetableSelector;