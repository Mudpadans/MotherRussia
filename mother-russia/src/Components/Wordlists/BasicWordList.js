import React, { useState } from 'react';
import './BasicWordList.css';
import { basicWordLists } from './wordData';
import Icons from '../Icons/Icons'

function BasicWordList() {
    const [ visibleList, setVisibleList ] = useState(null);

    const toggleList = (listName) => {
        setVisibleList(visibleList === listName ? null : listName);
    };

    const renderWordList = (words) => {
        return words.map((word, index) => (
            <li key={index}>
                {word.english} - {word.russian} ({word.transliteration})
                {word.type && <span className={word.type}> ({word.type})</span>} 
                {word.gender && <span className={word.gender}> ({word.gender})</span>} 
            </li>
        ))
    }

    const categories = [
        { name: 'Greetings & Expressions', list: 'greetingsExpressions', icon: Icons.GreetingsIcon },
        { name: 'Numbers 1-100', list: 'numbers' },
        { name: 'Days of the Week', list: 'daysOfWeek' },
        { name: 'Months of the Year', list: 'monthsOfYear' },
        { name: 'Phrases Related to Dates', list: 'phrasesRelatedToDates' },
        { name: 'Colors', list: 'colors' },
        { name: 'Family Members', list: 'familyMembers' },
        { name: 'Common Occupations', list: 'commonOccupations' },
        { name: 'Descriptions (Physical Attributes)', list: 'descriptions' },
        { name: 'Common Verbs', list: 'commonVerbs' },
        { name: 'Common Adjectives', list: 'commonAdjectives' },
        { name: 'Foods', list: 'foods' },
        { name: 'Drinks', list: 'drinks' },
        { name: 'Phrases for Ordering at a Restaurant', list: 'phrasesForOrderingAtARestaurant' },
        { name: 'Names of Places', list: 'namesOfPlaces' },
        { name: 'Direction Words', list: 'directionWords' },
        { name: 'Direction Phrases', list: 'directionPhrases' },
        { name: 'Time-Related Words and Phrases', list: 'timeRelatedWordsAndPhrases' },
        { name: 'Weather Terms and Descriptions', list: 'weatherTermsAndDescriptions' },
        { name: 'Asking About Weather', list: 'askingAboutWeather' },
    ]

    return (
        <div>
            <h1>Basic Vocabulary Lists</h1>
            {categories.map((category, index) => (
                <div key={index}>
                    <h2 onClick={() => toggleList(category.list)}>
                        <img src={category.icon} alt={`${category.name} icon`} />
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