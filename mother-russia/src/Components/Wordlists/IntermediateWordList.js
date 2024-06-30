import React, { useState } from 'react'
import './IntermediateWordList.css'
import { intermediateWordLists } from './wordData';

function IntermediateWordList() {
    const [ visibleList, setVisibleList ] = useState(null);
    const [ visibleSubList, setVisibleSubList ] = useState(null);

    const toggleList = (listName) => {
        setVisibleList(visibleList === listName ? null : listName);
        setVisibleSubList(null);
    }

    const toggleSubList = (subListName) => {
        setVisibleSubList(visibleSubList === subListName ? null : subListName);
    }

    const renderWordList = (words) => {
        return (
            <ul>
                {words.map((word, index) => (
                    <li key={index}>
                        {word.english} - {word.russian} ({word.transliteration})
                        {word.type && <span className={word.type}> ({word.type})</span>} 
                        {word.gender && <span className={word.gender}> ({word.gender})</span>}
                    </li>
                ))}
            </ul>
        )
    }

    const categories = [
        { name: 'Travel and Transportation', list: 'travelAndTransportation', icon: 'fas fa-truck-plane', subcategories: [
            { name: 'Airport and Train Station Vocabulary', list: 'airportAndTrainStation' },
            { name: 'Common Phrases for Buying Tickets', list: 'commonPhrasesForBuyingTickets' },
            { name: 'Vocabulary for Asking for Directions', list: 'vocabularyForAskingForDirections' },
            { name: 'Common Phrases Used During Travel', list: 'commonPhrasesUsedDuringTravel' }
        ]},
        { name: 'Shopping and Commerce', list: 'shoppingAndCommerce', icon: 'fas fa-bag-shopping', subcategories: [
            { name: 'Types of Stores', list: 'typesOfStores' },
            { name: 'Shopping Vocabulary', list: 'shoppingVocabulary' },
            { name: 'Phrases for Bargaining and Discussing Prices', list: 'phrasesForBargainingAndDiscussingPrices' },
            { name: 'Asking for Help', list: 'askingForHelp' }
        ]},
        { name: 'Health and Medical', list: 'healthAndMedical', icon: 'fas fa-kit-medical', subcategories: [
            { name: 'Medical Terms', list: 'medicalTerms' },
            { name: 'Symptoms', list: 'symptoms' },
            { name: 'Pharmacy Essentials', list: 'pharmacyEssentials' },
            { name: 'Discussing Emergencies', list: 'discussingEmergencies' },
            { name: 'Talking to Doctors', list: 'talkingToDoctors' }
        ]},
        { name: 'School and Education', list: 'schoolAndEducation', icon: 'fas fa-school', subcategories: [
            { name: 'Academic Subjects', list: 'academicSubjects' },
            { name: 'Classroom Items', list: 'classroomItems' },
            { name: 'Phrases Commonly Used in Academic Settings', list: 'phrasesCommonlyUsedInAcademicSettings' }
        ]},
        { name: 'Work and Professions', list: 'workAndProfessions', icon: 'fas fa-user-tie', subcategories: [
            { name: 'Job Titles', list: 'jobTitles' },
            { name: 'Office Items', list: 'officeItems' },
            { name: 'Job Application Process', list: 'jobApplicationProcess' },
            { name: 'Phrases for Professional Interactions', list: 'phrasesForProfessionalInteractions' }
        ]},
        { name: 'Sports and Leisure', list: 'sportsAndLeisure', icon: 'fas fa-medal', subcategories: [
            { name: 'Sports Names', list: 'sportsNames' },
            { name: 'Hobbies', list: 'hobbies' },
            { name: 'Equipment Used in Various Activities', list: 'equipmentUsedInVariousActivities' },
            { name: 'Phrases for Discussing Games and Sports', list: 'phrasesForDiscussingGamesAndSports' }
        ]},
        { name: 'Nature and Environment', list: 'natureAndEnvironment', icon: 'fas fa-seedling', subcategories: [
            { name: 'Landscapes', list: 'landscapes' },
            { name: 'Weather Patterns', list: 'weatherPatterns' },
            { name: 'Flora and Fauna', list: 'floraAndFauna' },
            { name: 'Environmental Issues', list: 'environmentalIssues' }
        ]},
        { name: 'Technology and Internet', list: 'technologyAndInternet', icon: 'fas fa-wifi', subcategories: [
            { name: 'Computer and Hardware', list: 'computerAndHardware' },
            { name: 'Internet and Networking', list: 'internetAndNetworking' },
            { name: 'Social Media and Online Communication', list: 'socialMediaAndOnlineCommunication' },
            { name: 'Tech Support Issues', list: 'techSupportIssues' }
        ]},
        { name: 'Arts and Entertainment', list: 'artsAndEntertainment', icon: 'fas fa-palette', subcategories: [
            { name: 'Movies and Cinema', list: 'moviesAndCinema' },
            { name: 'Music', list: 'music' },
            { name: 'Literature', list: 'literature' },
            { name: 'Cultural Events', list: 'culturalEvents' }
        ]},
        { name: 'Food Preparation and Cooking', list: 'foodPreparationAndCooking', icon: 'fas fa-utensils', subcategories: [
            { name: 'Cooking Utensils', list: 'cookingUtensils' },
            { name: 'Cooking Methods', list: 'cookingMethods' },
            { name: 'Ingredients', list: 'ingredients' },
            { name: 'Phrases for Cooking', list: 'phrasesForCooking' }
        ]},
        { name: 'Holidays and Celebrations', list: 'holidaysAndCelebrations', icon: 'fas fa-gifts', subcategories: [
            { name: 'Holidays', list: 'holidays' },
            { name: 'Celebration Activities', list: 'celebrationActivities' },
            { name: 'Phrases for Celebrations', list: 'phrasesForCelebrations' }
        ]},
        { name: 'Emotions and Relationships', list: 'emotionsAndRelationships', icon: 'fas fa-heart', subcategories: [
            { name: 'Emotions', list: 'emotions' },
            { name: 'Relationships', list: 'relationships' },
            { name: 'Phrases for Emotions', list: 'phrasesForEmotions' },
            { name: 'Phrases for Relationships', list: 'phrasesForRelationships' }
        ]},
        { name: 'Law and Government', list: 'lawAndGovernment', icon: 'fas fa-gavel', subcategories: [
            { name: 'Government Terms', list: 'governmentTerms' },
            { name: 'Legal Terms', list: 'legalTerms' },
            { name: 'Law Enforcement', list: 'lawEnforcement' },
            { name: 'Phrases for Legal and Government Matters', list: 'phrasesForLegalAndGovernmentMatters' }
        ]},
        { name: 'Real Estate and Housing', list: 'realEstateAndHousing', icon: 'fas fa-house', subcategories: [
            { name: 'Types of Housing', list: 'typesOfHousing' },
            { name: 'Parts of a House', list: 'partsOfAHouse' },
            { name: 'Real Estate Terms', list: 'realEstateTerms' },
            { name: 'Phrases for Real Estate', list: 'phrasesForRealEstate' }
        ]},
        { name: 'History and Culture', list: 'historyAndCulture', icon: 'fas fa-landmark', subcategories: [
            { name: 'Historical Periods', list: 'historicalPeriods' },
            { name: 'Historical Figures', list: 'historicalFigures' },
            { name: 'Cultural Concepts', list: 'culturalConcepts' },
            { name: 'Phrases for History and Culture', list: 'phrasesForHistoryAndCulture' }
        ]}
    ];

    return (
        <div>
            <h1>Intermediate Word Lists</h1>
            {categories.map((category, index) => (
                <div key={index}>
                    <h2 onClick={() => toggleList(category.list)} style={{cursor: 'pointer'}}>
                        <i className={category.icon}></i>
                        {category.name}
                    </h2>
                    {visibleList === category.list && category.subcategories.map((sub, subIndex) => (
                        <div key={subIndex} style={{ marginLeft: '20px' }}>
                            <h3 onClick={() => toggleSubList(sub.list)} style={{cursor: 'pointer'}}>
                                {sub.name}
                            </h3>
                            {visibleSubList === sub.list && renderWordList(intermediateWordLists[category.list][sub.list])}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default IntermediateWordList;