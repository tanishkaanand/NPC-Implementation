import React, { useState } from 'react';
import './SliderComparison.css';

function SliderComparison() {
    const initialSliderStates = [
        { name: 'Openness', values: ['Loving', 'Confident'], value: 0 },
        { name: 'Conscientiousness', values: ['Excited', 'Annoyed'], value: 0 },
        { name: 'Extraversion', values: ['Teasing', 'Sad'], value: 0 },
        { name: 'Agreeableness', values: ['Happy', 'Angry'], value: 0 },
        { name: 'Neuroticism', values: ['Nervous', 'Crying'], value: 0 }
    ];

    const [sliders, setSliders] = useState(initialSliderStates); // State to store the names, values, and options of sliders

    // Function to handle change in slider value
    const handleSliderChange = (index, event) => {
        const newSliders = [...sliders];
        newSliders[index].value = parseInt(event.target.value);
        setSliders(newSliders);
    };

    let initialEmotion;

    // Function to find the slider with the maximum value
    const findMaxSlider = () => {
        let maxSlider = sliders[0];
        for (let i = 1; i < sliders.length; i++) {
            if (sliders[i].value > maxSlider.value) {
                maxSlider = sliders[i];
            }
        }
        // Select the first value associated with the max slider's name
        initialEmotion = maxSlider.values[0];
        return maxSlider.name;
    };

    return (
        <div>
            {/* Display the sliders and their current values */}
            {sliders.map((slider, index) => (
                <div key={index}>
                    <p>{slider.name} : {slider.value}</p>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={slider.value}
                        onChange={(event) => handleSliderChange(index, event)}
                        style={{ width: "300px" }} // Optional: Set the width of the slider
                    />
                </div>
            ))}

            {/* Display the selected value from the slider with the maximum value */}
            <p>Your characters's initial personality: {findMaxSlider()}</p>
            <p>Your characters's initial emotion: {initialEmotion}</p>
        </div>
    );
}

export default SliderComparison;
