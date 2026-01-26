import React, { useState, useEffect } from 'react';
import { useStory } from '../../contexts/StoryContext';
import { useAudio } from '../../contexts/AudioContext';
import { IMAGE_MANIFEST } from '../../data/storyData';

export default function ChoiceScene({ scene }) {
  const { makeChoice } = useStory();
  const { playSfx } = useAudio();
  const content = scene.content;
  const [hoveredOption, setHoveredOption] = useState(null);

  const backgrounds = content.backgrounds || {};
  const defaultBg = IMAGE_MANIFEST[backgrounds.default] || `/assets/images/${backgrounds.default}`;
  const takeBg = IMAGE_MANIFEST[backgrounds.take] || `/assets/images/${backgrounds.take}`;
  const refuseBg = IMAGE_MANIFEST[backgrounds.refuse] || `/assets/images/${backgrounds.refuse}`;

  useEffect(() => {
    // Preload images
    if (backgrounds.default) new Image().src = defaultBg;
    if (backgrounds.take) new Image().src = takeBg;
    if (backgrounds.refuse) new Image().src = refuseBg;
  }, [defaultBg, takeBg, refuseBg, backgrounds]);

  const handleChoice = (choiceId) => {
    makeChoice(choiceId);
  };

  const handleMouseEnter = (optionId) => {
    setHoveredOption(optionId);
    
    if (optionId === 'take') {
      playSfx('alarm-notif');
    } else if (optionId === 'refuse') {
      playSfx('glitch-bio');
    }
  };

  const handleMouseLeave = () => {
    setHoveredOption(null);
  };

  const getCurrentBackground = () => {
    if (hoveredOption === 'take') return takeBg;
    if (hoveredOption === 'refuse') return refuseBg;
    return defaultBg;
  };

  return (
    <div className="scene scene--choice">
      {/* Background layers */}
      <div 
        className="choice__background choice__background--default"
        style={{ 
          backgroundImage: `url(${defaultBg})`,
          opacity: hoveredOption === null ? 1 : 0,
        }}
      />
      <div 
        className="choice__background choice__background--take"
        style={{ 
          backgroundImage: `url(${takeBg})`,
          opacity: hoveredOption === 'take' ? 1 : 0,
        }}
      />
      <div 
        className="choice__background choice__background--refuse"
        style={{ 
          backgroundImage: `url(${refuseBg})`,
          opacity: hoveredOption === 'refuse' ? 1 : 0,
        }}
      />
      
      {/* Overlay for readability */}
      <div className="choice__overlay" />
      
      {/* Content */}
      <div className="choice__container">
        <h2 className="choice__question">{content.question}</h2>
        <div className="choice__buttons">
          {content.options.map((option) => (
            <button
              key={option.id}
              className={`choice__button choice__button--${option.id}`}
              onClick={() => handleChoice(option.id)}
              onMouseEnter={() => handleMouseEnter(option.id)}
              onMouseLeave={handleMouseLeave}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
