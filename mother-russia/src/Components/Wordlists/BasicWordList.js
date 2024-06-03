import React, { useState } from 'react';
import './BasicWordList.css';
import { basicWordLists } from './wordData'

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
            </li>
        ))
    }

    const categories = [
        { name: 'Greetings & Expressions', list: 'greetingsExpressions' },
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
                    <h2 onClick={() => toggleList(category.list)} style={{cursor: 'pointer'}}>
                        {category.name}
                    </h2>
                    {visibleList === category.list && (
                        <ul>
                            {renderWordList(basicWordLists[category.list])}
                        </ul>
                    )}
                </div>
            ))}
                {/* <h2>Greetings & Expressions</h2>
                    <ul>
                        {renderWordList(wordLists.greetingsExpressions)}
                    </ul>
                <h2>Numbers 1-100</h2>
                    <ul>
                        {renderWordList(wordLists.numbers)}
                    </ul>
                <h2>Days of the Week</h2>
                    <ul>
                        {renderWordList(wordLists.daysOfWeek)}
                    </ul>
                <h2>Months of the Year</h2>
                    <ul>
                        {renderWordList(wordLists.monthsOfYear)}
                    </ul>
                <h2>Phrases Related to Dates</h2>
                    <ul>
                        {renderWordList(wordLists.phrasesRelatedToDates)}
                    </ul>
                <h2>Colors</h2>
                    <ul>
                        {renderWordList(wordLists.colors)}
                    </ul>
                <h2>Family Members</h2>
                    <ul>
                        {renderWordList(wordLists.familyMembers)}
                    </ul>
                <h2>Common Occupations</h2>
                    <ul>
                        {renderWordList(wordLists.commonOccupations)}
                    </ul>
                <h2>Descriptions (Physical Attributes)</h2>
                    <ul>
                        {renderWordList(wordLists.descriptions)}
                    </ul>
                <h2>Common Verbs</h2>
                    <ul>
                        {renderWordList(wordLists.commonVerbs)}
                    </ul>
                <h2>Common Adjectives</h2>
                    <ul>
                        {renderWordList(wordLists.commonAdjectives)}
                    </ul>
                <h2>Foods</h2>
                    <ul>
                        {renderWordList(wordLists.foods)}
                    </ul>
                <h2>Drinks</h2>
                    <ul>
                        {renderWordList(wordLists.drinks)}
                    </ul>
                <h2>Phrases for Ordering at a Restaurant</h2>
                    <ul>
                        {renderWordList(wordLists.phrasesForOrderingAtARestaurant)}
                    </ul>
                <h2>Names of Places</h2>
                    <ul>
                        {renderWordList(wordLists.namesOfPlaces)}
                    </ul>
                <h2>Direction Words</h2>
                    <ul>
                        {renderWordList(wordLists.directionWords)}
                    </ul>
                <h2>Direction Phrases</h2>
                    <ul>
                        {renderWordList(wordLists.directionPhrases)}
                    </ul>
                <h2>Time-Related Words and Phrases</h2>
                    <ul>
                        {renderWordList(wordLists.timeRelatedWordsAndPhrases)}
                    </ul>
                <h2>Weather Terms and Descriptions</h2>
                    <ul>
                        {renderWordList(wordLists.weatherTermsAndDescriptions)}
                    </ul>
                <h2>Asking About Weather</h2>
                    <ul>
                        {renderWordList(wordLists.askingAboutWeather)}
                    </ul> */}
        </div>
    )
}

export default BasicWordList;