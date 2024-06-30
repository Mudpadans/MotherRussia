import React, { useState, useRef } from 'react';
import './BasicWordList.css';
import { basicWordLists } from './wordData';

function BasicWordList() {
    const [ visibleList, setVisibleList ] = useState(null);
    const audioRefs = useRef([])

    const toggleList = (listName) => {
        setVisibleList(visibleList === listName ? null : listName);
    };

    const playAudio = (index) => {
        if (audioRefs.current[index]) {
            audioRefs.current[index].play()
        }
    }

    const renderWordList = (words) => {
        return words.map((word, index) => (
            <li key={index}>
                {word.english} - {word.russian} ({word.transliteration})
                {word.type && <span className={word.type}> ({word.type})</span>} 
                {word.gender && <span className={word.gender}> ({word.gender})</span>} 
                {word.audio && (
                    <button onClick={() => playAudio(index)}>
                        <i className="fas fa-volume-up"></i>Play
                    </button>
                )}
                {word.audio && (
                    <audio ref={(el) => (audioRefs.current[index] = el)} src={word.audio} />
                )}
            </li>
        ))
    }

    const categories = [
        { name: 'Greetings & Expressions', list: 'greetingsExpressions', icon: 'fas fa-handshake' },
        { name: 'Numbers 1-100', list: 'numbers', icon: 'fas fa-sort-numeric-up' },
        { name: 'Days of the Week', list: 'daysOfWeek', icon: 'fas fa-calendar-day' },
        { name: 'Months of the Year', list: 'monthsOfYear', icon: 'fas fa-calendar-alt' },
        { name: 'Phrases Related to Dates', list: 'phrasesRelatedToDates', icon: 'fas fa-clock' },
        { name: 'Colors', list: 'colors', icon: 'fas fa-palette' },
        { name: 'Family Members', list: 'familyMembers', icon: 'fas fa-users' },
        { name: 'Common Occupations', list: 'commonOccupations', icon: 'fas fa-briefcase' },
        { name: 'Descriptions (Physical Attributes)', list: 'descriptions', icon: 'fas fa-user' },
        { name: 'Common Verbs', list: 'commonVerbs', icon: 'fas fa-running' },
        { name: 'Common Adjectives', list: 'commonAdjectives', icon: 'fas fa-ad' },
        { name: 'Foods', list: 'foods', icon: 'fas fa-utensils' },
        { name: 'Drinks', list: 'drinks', icon: 'fas fa-coffee' },
        { name: 'Phrases for Ordering at a Restaurant', list: 'phrasesForOrderingAtARestaurant', icon: 'fas fa-concierge-bell' },
        { name: 'Names of Places', list: 'namesOfPlaces', icon: 'fas fa-map-marker-alt' },
        { name: 'Direction Words', list: 'directionWords', icon: 'fas fa-compass' },
        { name: 'Direction Phrases', list: 'directionPhrases', icon: 'fas fa-directions' },
        { name: 'Time-Related Words and Phrases', list: 'timeRelatedWordsAndPhrases', icon: 'fas fa-hourglass-half' },
        { name: 'Weather Terms and Descriptions', list: 'weatherTermsAndDescriptions', icon: 'fas fa-cloud-sun' },
        { name: 'Asking About Weather', list: 'askingAboutWeather', icon: 'fas fa-cloud' },
    ]

    return (
        <div>
            <h1>Basic Vocabulary Lists</h1>
            {categories.map((category, index) => (
                <div key={index}>
                    <h2 onClick={() => toggleList(category.list)}>
                        <i className={category.icon}></i>
                        {category.name}
                    </h2>
                    {visibleList === category.list && (
                        <ul>
                            {renderWordList(basicWordLists[category.list])}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    )
}

export default BasicWordList;