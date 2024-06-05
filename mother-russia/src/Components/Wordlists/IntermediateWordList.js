import React, { useState } from 'react'
import './IntermediateWordList.css'
import { intermediateWordLists } from './wordData';

function IntermediateWordList() {
    const [ visibleList, setVisibleList ] = useState(null);

    const toggleList = (listName) => {
        setVisibleList(visibleList === listName ? null : listName);
    }

    const renderWordList = (words) => {
        return words.map((word, index) => {
            <li key={index}>
                {word.english} - {word.russian} ({word.transliteration})
                {word.type && <span className={word.type}> ({word.type})</span>} 
                {word.gender && <span className={word.gender}> ({word.gender})</span>}
            </li>
        })
    }

    return (
        <div>
            <h1>Intermediate Vocabulary Lists</h1>
                <h2>Travel and Transportation</h2>
                    <h3>Airport and Train Station Vocabulary</h3> 
                        <ul>
                            <li>Airport - Аэропорт (Aeroport)</li>
                            <li>Train Station - Вокзал (Vokzal)</li>
                            <li>Ticket - Билет (Bilet)</li>
                            <li>Passport - Паспорт (Pasport)</li>
                            <li>Luggage - Багаж (Bagazh)</li>
                            <li>Departure - Отправление (Otpravlenie)</li>
                            <li>Arrival - Прибытие (Pribytie)</li>
                            <li>Check-In - Регистрация (Registratsiya)</li>
                            <li>Customs - Таможня (Tamozhnya)</li>
                            <li>Security Check - Контроль безопасности (Kontrol' bezopasnosti)</li>
                            <li>Gate - Выход на посадку (Vykhod na posadku)</li>
                            <li>Boarding - Посадка (Posadka)</li>
                            <li>Flight - Рейс (Reys)</li>
                            <li>Delayed - Задержан (Zaderzhan)</li>
                            <li>Cancelled - Отменен (Otmenen)</li>
                        </ul>
                    <h3>Common Phrases for Buying Tickets</h3>
                        <ul>
                            <li>One ticket to Moscow, please. - Один билет до Москвы, пожалуйста. (Odin bilet do Moskvy, pozhaluysta.)</li>
                            <li>Where can I buy a ticket? - Где я могу купить билет? (Gde ya mogu kupit' bilet?)</li>
                            <li>Is this seat available? - Это место свободно? (Eto mesto svobodno?)</li>
                            <li>I’d like to book a seat by the window. - Я бы хотел забронировать место у окна. (Ya by khotel zabronirovat' mesto u okna.)</li>
                        </ul>
                    <h3>Vocabulary for Asking for Directions</h3>
                        <ul>
                            <li>Where is...? - Где находится...? (Gde nakhoditsya...?)</li>
                            <li>How do I get to...? - Как мне добраться до...? (Kak mne dobratsya do...?)</li>
                            <li>Is it far? - Это далеко? (Eto daleko?)</li>
                            <li>To the left. - Налево. (Nalevo.)</li>
                            <li>To the right. - Направо. (Napravo.)</li>
                            <li>Straight ahead. - Прямо. (Pryamo.)</li>
                            <li>Map - Карта (Karta)</li>
                        </ul>
                    <h3>Common Phrases Used During Travel</h3>
                        <ul>
                            <li>Can you show me on the map? - Можете показать на карте? (Mozhete pokazat' na karte?)</li>
                            <li>I need a taxi. - Мне нужно такси. (Mne nuzhno taksi.)</li>
                            <li>How much does it cost? - Сколько это стоит? (Skol'ko eto stoit?)</li>
                            <li>Please stop here. - Остановитесь здесь, пожалуйста. (Ostanovites' zdes', pozhaluysta.)</li>
                            <li>I am lost. - Я потерялся (if male)/потерялась (if female). (Ya poteryalsya/poteryalas'.)</li>
                            <li>Does this train/bus go to...? - Этот поезд/автобус идет до...? (Etot poyezd/avtobus idet do...?)</li>
                        </ul>
                <h2>Shopping and Commerce</h2>
                    <h3>Types of Stores</h3>
                        <ul>
                            <li>Supermarket - Супермаркет (Supermarket)</li>
                            <li>Department Store - Универмаг (Universam)</li>
                            <li>Pharmacy - Аптека (Apteka)</li>
                            <li>Bookstore - Книжный магазин (Knizhnyy magazin)</li>
                            <li>Clothing Store - Магазин одежды (Magazin odezhdy)</li>
                            <li>Shoe Store - Магазин обуви (Magazin obuvi)</li>
                            <li>Grocery Store - Продуктовый магазин (Produktovyy magazin)</li>
                            <li>Market - Рынок (Rynok)</li>
                            <li>Bakery - Булочная (Bulochnaya)</li>
                            <li>Butcher Shop - Мясная лавка (Myasnaya lavka)</li>
                            <li>Fish Market - Рыбный рынок (Rybn'y rynok)</li>
                            <li>Electronics Store - Магазин электроники (Magazin elektroniki)</li>
                        </ul>
                    <h3>Shopping Vocabulary</h3>
                        <ul>
                            <li>Price - Цена (Tsena)</li>
                            <li>Discount - Скидка (Skidka)</li>
                            <li>Sale - Распродажа (Rasprodazha)</li>
                            <li>Cashier - Кассир (Kassir)</li>
                            <li>Receipt - Чек (Chek)</li>
                            <li>Shopping Cart - Тележка (Telezhka)</li>
                            <li>Shopping Bag - Пакет (Paket)</li>
                            <li>Fitting Room - Примерочная (Primerochnaya)</li>
                            <li>Size - Размер (Razmer)</li>
                            <li>Exchange - Обмен (Obmen)</li>
                            <li>Return - Возврат (Vozvrat)</li>
                        </ul>
                    <h3>Phrases for Bargaining and Discussing Prices</h3>
                        <ul>
                            <li>How much is this? - Сколько это стоит? (Skol'ko eto stoit?)</li>
                            <li>Can you give a better price? - Можете сделать цену ниже? (Mozhete sdelat' tsenu nizhe?)</li>
                            <li>It's too expensive. - Это слишком дорого. (Eto slishkom dorogo.)</li>
                            <li>Do you have anything cheaper? - У вас есть что-нибудь подешевле? (U vas est' chto-nibud' podeshevle?)</li>
                            <li>I'm just looking, thanks. - Я просто смотрю, спасибо. (Ya prosto smotryu, spasibo.)</li>
                            <li>I would like to buy this. - Я бы хотел купить это. (Ya by khotel kupit' eto.)</li>
                            <li>Can I pay by card? - Можно платить картой? (Mozhno platit' kartoy?)</li>
                            <li>Is there a discount for cash? - Есть ли скидка за наличные? (Est' li skidka za nalichnye?)</li>
                        </ul>
                    <h3>Asking for Help</h3>
                        <ul>
                            <li>Where can I find...? - Где я могу найти...? (Gde ya mogu nayti...?)</li>
                            <li>Do you have this in another color? - У вас есть это в другом цвете? (U vas est' eto v drugom tsvete?)</li>
                            <li>I need help. - Мне нужна помощь. (Mne nuzhna pomoshch')</li>
                        </ul>
                <h2>Health and Medical</h2>
                    <h3>Medical Terms</h3>
                        <ul>
                            <li>Doctor - Доктор (Doktor)</li>
                            <li>Nurse - Медсестра (Medsestra)</li>
                            <li>Hospital - Больница (Bol'nitsa)</li>
                            <li>Clinic - Клиника (Klinika)</li>
                            <li>Pharmacy - Аптека (Apteka)</li>
                            <li>Medicine - Лекарство (Lekarstvo)</li>
                            <li>Prescription - Рецепт (Retsept)</li>
                            <li>Surgery - Хирургия (Khirurgiya)</li>
                            <li>Vaccine - Вакцина (Vaktsina)</li>
                            <li>Emergency Room (ER) - Приемное отделение (Priemnoe otdelenie)</li>
                        </ul>
                    <h3>Symptoms</h3>
                        <ul>
                            <li>Fever - Жар (Zhar)</li>
                            <li>Cough - Кашель (Kashel')</li>
                            <li>Headache - Головная боль (Golovnaya bol')</li>
                            <li>Stomachache - Боль в животе (Bol' v zhivote)</li>
                            <li>Nausea - Тошнота (Toshnota)</li>
                            <li>Dizziness - Головокружение (Golovokruzhenie)</li>
                            <li>Pain - Боль (Bol')</li>
                            <li>Injury - Травма (Travma)</li>
                            <li>Allergy - Аллергия (Allergiya)</li>
                            <li>Cold - Простуда (Prostuda)</li>
                        </ul>
                    <h3>Pharmacy Essentials</h3>
                        <ul>
                            <li>Painkiller - Обезболивающее (Obezbolivayushchee)</li>
                            <li>Antibiotic - Антибиотик (Antibiotik)</li>
                            <li>Bandage - Бинт (Bint)</li>
                            <li>Antiseptic - Антисептик (Antiseptik)</li>
                            <li>Thermometer - Термометр (Termometr)</li>
                            <li>Cough Syrup - Сироп от кашля (Sirop ot kashlya)</li>
                            <li>Vitamins - Витамины (Vitaminy)</li>
                        </ul>
                    <h3>Discussing Emergencies</h3>
                        <ul>
                            <li>I need a doctor. - Мне нужен доктор. (Mne nuzhen doktor.)</li>
                            <li>Call an ambulance! - Вызовите скорую помощь! (Vyzyvite skoruyu pomosh'!)</li>
                            <li>It's an emergency. - Это чрезвычайная ситуация. (Eto chrezvychaynaya situatsiya.)</li>
                            <li>I'm allergic to... - У меня аллергия на... (U menya allergiya na...)</li>
                            <li>I feel sick. - Мне плохо. (Mne ploho.)</li>
                        </ul>
                    <h3>Talking to Doctors</h3>
                        <ul>
                            <li>What’s wrong with me? - Что со мной? (Chto so mnoy?)</li>
                            <li>It hurts here. - Здесь болит. (Zdes' bolit.)</li>
                            <li>I have been feeling... - Я чувствую... (Ya chuvstvuyu...)</li>
                            <li>How long should I take this medicine? - Как долго мне принимать это лекарство? (Kak dolgo mne prinimat' eto lekarstvo?)</li>
                            <li>Are there any side effects? - Есть ли побочные эффекты? (Est' li pobochnye effekty?)</li>
                        </ul>
                <h2>School and Education</h2>
                    <h3>Academic Subjects</h3>
                        <ul>
                            <li>Mathematics - Математика (Matematika)</li>
                            <li>Science - Наука (Nauka); often specified, e.g., Биология (Biology), Физика (Physics), Химия (Chemistry)</li>
                            <li>Literature - Литература (Literatura)</li>
                            <li>History - История (Istoriya)</li>
                            <li>Geography - География (Geografiya)</li>
                            <li>Art - Искусство (Iskusstvo)</li>
                            <li>Physical Education - Физическая культура (Fizicheskaya kultura)</li>
                            <li>Foreign Languages - Иностранные языки (Inostrannye yazyki)</li>
                            <li>Music - Музыка (Muzyka)</li>
                            <li>Computer Science - Информатика (Informatika)</li>
                        </ul>
                    <h3>Classroom Items</h3>
                        <ul>
                            <li>Book - Книга (Kniga)</li>
                            <li>Notebook - Тетрадь (Tetrad')</li>
                            <li>Pen/Pencil - Ручка/Карандаш (Ruchka/Karandash)</li>
                            <li>Desk - Парта (Parta)</li>
                            <li>Chair - Стул (Stul)</li>
                            <li>Blackboard - Доска (Doska)</li>
                            <li>Chalk - Мел (Mel)</li>
                            <li>Marker - Маркер (Marker)</li>
                            <li>Eraser - Ластик (Lastik) for pencils, Стирка (Stirka) for blackboard</li>
                            <li>Ruler - Линейка (Lineyka)</li>
                            <li>Backpack - Рюкзак (Ryukzak)</li>
                        </ul>
                    <h3>Phrases Commonly Used in Academic Settings</h3>
                        <ul>
                            <li>I have a question. - У меня вопрос. (U menya vopros.)</li>
                            <li>What page are we on? - На какой мы странице? (Na kakoy my stranitse?)</li>
                            <li>I didn’t understand the homework. - Я не понял(а) домашнее задание. (Ya ne ponyal/a domashnee zadanie.)</li>
                            <li>Can you help me with this? - Можешь мне помочь с этим? (Mozhesh' mne pomoch' s etim?)</li>
                            <li>When is the assignment due? - Когда сдавать задание? (Kogda sdavat' zadanie?)</li>
                            <li>I need to go to the library. - Мне нужно идти в библиотеку. (Mne nuzhno idti v biblioteku.)</li>
                            <li>Let’s study together. - Давай учиться вместе. (Davay uchitsya vmeste.)</li>
                            <li>Who is the teacher for this class? - Кто преподаватель этого класса? (Kto prepodavatel' etogo klassa?)</li>
                            <li>I passed/failed the test. - Я сдал(а)/не сдал(а) тест. (Ya sdal/a/ne sdal/a test.)</li>
                            <li>Can I borrow your notes? - Можно взять твои конспекты? (Mozhno vzyat' tvoi konspekty?)</li>
                        </ul>
                <h2>Work and Professions</h2>
                    <h3>Job Titles</h3>
                        <ul>
                            <li>Doctor - Доктор (Doktor)</li>
                            <li>Teacher - Учитель (Uchitel)</li>
                            <li>Engineer - Инженер (Inzhener)</li>
                            <li>Nurse - Медсестра (Medsestra)</li>
                            <li>Lawyer - Адвокат (Advokat)</li>
                            <li>Accountant - Бухгалтер (Bukhgalter)</li>
                            <li>Manager - Менеджер (Menedzher)</li>
                            <li>Programmer - Программист (Programmist)</li>
                            <li>Salesperson - Продавец (Prodavets)</li>
                            <li>Chef - Повар (Povar)</li>
                            <li>Mechanic - Механик (Mekhanik)</li>
                            <li>Artist - Художник (Khudozhnik)</li>
                            <li>Architect - Архитектор (Arkhitektor)</li>
                        </ul>
                    <h3>Office Items</h3>
                        <ul>
                            <li>Computer - Компьютер (Kompyuter)</li>
                            <li>Printer - Принтер (Printer)</li>
                            <li>Fax machine - Факс (Faks)</li>
                            <li>Desk - Рабочий стол (Rabochiy stol)</li>
                            <li>Chair - Стул (Stul)</li>
                            <li>File - Папка (Papka)</li>
                            <li>Pen - Ручка (Ruchka)</li>
                            <li>Pencil - Карандаш (Karandash)</li>
                            <li>Notebook - Записная книжка (Zapisnaya knizhka)</li>
                            <li>Calendar - Календарь (Kalendar)</li>
                        </ul>
                    <h3>Job Application Process</h3>
                        <ul>
                            <li>Resume/CV - Резюме (Rezyume)</li>
                            <li>Cover letter - Сопроводительное письмо (Soprovo ditel'noe pismo)</li>
                            <li>Job interview - Собеседование (Sobesedovanie)</li>
                            <li>Hire - Нанять (Nanyat')</li>
                            <li>Fire - Уволить (Uvolit')</li>
                            <li>Salary - Зарплата (Zarplata)</li>
                            <li>Contract - Контракт (Kontrakt)</li>
                            <li>Benefits - Льготы (L'goty)</li>
                        </ul>
                    <h3>Phrases for Professional Interactions</h3>
                        <ul>
                            <li>Can we schedule a meeting? - Можем мы запланировать встречу? (Mozhem my zaplanirovat' vstrechu?)</li>
                            <li>I will send you the report by email. - Я отправлю вам отчет по электронной почте. (Ya otpravlyu vam otchet po elektronnoy pochte.)</li>
                            <li>Please, review the document. - Пожалуйста, просмотрите документ. (Pozhaluysta, prosmotrite dokument.)</li>
                            <li>What is the deadline for this project? - Какой срок для этого проекта? (Kakoy srok dlya etogo proekta?)</li>
                            <li>I am out of the office today. - Я сегодня не в офисе. (Ya segodnya ne v ofise.)</li>
                            <li>Do you have any questions about the presentation? - У вас есть вопросы к презентации? (U vas est' voprosy k prezentatsii?)</li>
                            <li>Let's discuss it during our next meeting. - Давайте обсудим это на нашей следующей встрече. (Davayte obsudim eto na nashey sleduyushchey vstreche.)</li>
                            <li>Thank you for your cooperation. - Спасибо за сотрудничество. (Spasibo za sotrudnichestvo.)</li>
                        </ul>
                <h2>Sports and Leisure</h2>
                    <h3>Sports Names</h3>
                        <ul>
                            <li>Soccer - Футбол (Futbol)</li>
                            <li>Basketball - Баскетбол (Basketbol)</li>
                            <li>Volleyball - Волейбол (Voleybol)</li>
                            <li>Tennis - Теннис (Tennis)</li>
                            <li>Swimming - Плавание (Plavanie)</li>
                            <li>Gymnastics - Гимнастика (Gimnastika)</li>
                            <li>Figure Skating - Фигурное катание (Figurnoe katanie)</li>
                            <li>Hockey - Хоккей (Khokkey)</li>
                            <li>Boxing - Бокс (Boks)</li>
                            <li>Skiing - Лыжный спорт (Lyzhnyy sport)</li>
                        </ul>
                    <h3>Hobbies</h3>
                        <ul>
                            <li>Reading - Чтение (Chtenie)</li>
                            <li>Drawing - Рисование (Risovanie)</li>
                            <li>Dancing - Танцы (Tantsy)</li>
                            <li>Singing - Пение (Penie)</li>
                            <li>Fishing - Рыбалка (Rybalka)</li>
                            <li>Photography - Фотография (Fotografiya)</li>
                            <li>Cooking - Кулинария (Kulinariya)</li>
                            <li>Gardening - Садоводство (Sadovodstvo)</li>
                        </ul>
                    <h3>Equipment Used in Various Activities</h3>
                        <ul>
                            <li>Ball - Мяч (Myach)</li>
                            <li>Racket - Ракетка (Raketka)</li>
                            <li>Swimsuit - Купальник (Kupal'nik)</li>
                            <li>Skates - Коньки (Kon'ki)</li>
                            <li>Skis - Лыжи (Lyzhi)</li>
                            <li>Helmet - Шлем (Shlem)</li>
                            <li>Gloves - Перчатки (Perchatki)</li>
                            <li>Net - Сетка (Setka)</li>
                            <li>Fishing rod - Удочка (Udochka)</li>
                            <li>Camera - Фотоаппарат (Fotoapparat)</li>
                        </ul>
                    <h3>Phrases for Discussing Games and Sports</h3>
                        <ul>
                            <li>Who won the game? - Кто выиграл игру? (Kto vyigral igru?)</li>
                            <li>Let’s play soccer. - Давай поиграем в футбол. (Davay poigraem v futbol.)</li>
                            <li>I go to the gym three times a week. - Я хожу в спортзал три раза в неделю. (Ya khozhu v sportzal tri raza v nedelyu.)</li>
                            <li>Do you want to join me for a swim? - Хочешь со мной поплавать? (Khocheh so mnoy poplavat'?)</li>
                            <li>I enjoy skiing in the winter. - Я люблю кататься на лыжах зимой. (Ya lyublyu katat'sya na lyzhakh zimoy.)</li>
                            <li>Let's set up the net for volleyball. - Давай установим сетку для волейбола. (Davay ustanovim setku dlya voleybola.)</li>
                        </ul>
                <h2>Nature and Environment</h2>
                    <h3>Landscapes</h3>
                        <ul>
                            <li>Forest - Лес (Les)</li>
                            <li>Mountain - Гора (Gora)</li>
                            <li>River - Река (Reka)</li>
                            <li>Sea - Море (More)</li>
                            <li>Ocean - Океан (Okean)</li>
                            <li>Lake - Озеро (Ozero)</li>
                            <li>Beach - Пляж (Plyazh)</li>
                            <li>Desert - Пустыня (Pustynya)</li>
                            <li>Valley - Долина (Dolina)</li>
                            <li>Hill - Холм (Kholm)</li>
                        </ul>
                    <h3>Weather Patterns</h3>
                        <ul>
                            <li>Rain - Дождь (Dozhd')</li>
                            <li>Snow - Снег (Sneg)</li>
                            <li>Fog - Туман (Tuman)</li>
                            <li>Wind - Ветер (Veter)</li>
                            <li>Storm - Буря (Burya)</li>
                            <li>Thunderstorm - Гроза (Groza)</li>
                            <li>Breeze - Бриз (Briz)</li>
                            <li>Heatwave - Жара (Zhara)</li>
                            <li>Drought - Засуха (Zasukha)</li>
                            <li>Flood - Наводнение (Navodnenie)</li>
                        </ul>
                    <h3>Flora and Fauna</h3>
                        <ul>
                            <li>Tree - Дерево (Derevo)</li>
                            <li>Flower - Цветок (Tsvetok)</li>
                            <li>Grass - Трава (Trava)</li>
                            <li>Bush - Куст (Kust)</li>
                            <li>Leaf - Лист (List)</li>
                            <li>Bird - Птица (Ptitsa)</li>
                            <li>Fish - Рыба (Ryba)</li>
                            <li>Insect - Насекомое (Nasekomoe)</li>
                            <li>Mammal - Млекопитающее (Mlekopitayushchee)</li>
                            <li>Reptile - Рептилия (Reptiliya)</li>
                        </ul>
                    <h3>Environmental Issues</h3>
                        <ul>
                            <li>Pollution - Загрязнение (Zagryaznenie)</li>
                            <li>Global warming - Глобальное потепление (Global'noe poteplenie)</li>
                            <li>Deforestation - Вырубка лесов (Vyrubka lesov)</li>
                            <li>Wildlife conservation - Охрана дикой природы (Ohrana dikoy prirody)</li>
                            <li>Recycling - Переработка (Pererabotka)</li>
                            <li>Sustainable development - Устойчивое развитие (Ustoychivoe razvitie)</li>
                            <li>Ecosystem - Экосистема (Ekosistema)</li>
                            <li>Biodiversity - Биоразнообразие (Bioraznoobrazie)</li>
                            <li>Waste management - Управление отходами (Upravlenie otkhodami)</li>
                            <li>Energy conservation - Энергосбережение (Energosberezhenie)</li>
                        </ul>
                <h2>Technology and Internet</h2>
                    <h3>Computer and Hardware</h3>
                        <ul>
                            <li>Computer - Компьютер (Kompyuter)</li>
                            <li>Laptop - Ноутбук (Noutbuk)</li>
                            <li>Tablet - Планшет (Planshet)</li>
                            <li>Monitor - Монитор (Monitor)</li>
                            <li>Keyboard - Клавиатура (Klaviatura)</li>
                            <li>Mouse - Мышь (Mysh')</li>
                            <li>Printer - Принтер (Printer)</li>
                            <li>USB drive - Флешка (Fleshka)</li>
                            <li>Hard drive - Жесткий диск (Zhestkiy disk)</li>
                            <li>Charger - Зарядное устройство (Zaryadnoe ustroystvo)</li>
                        </ul>
                    <h3>Internet and Networking</h3>
                        <ul>
                            <li>Internet - Интернет (Internet)</li>
                            <li>Website - Сайт (Sayt)</li>
                            <li>Link - Ссылка (Ssylka)</li>
                            <li>Search engine - Поисковая система (Poiskovaya sistema)</li>
                            <li>Email - Электронная почта (Elektronnaya pochta)</li>
                            <li>Wi-Fi - Вай-фай (Wi-Fi)</li>
                            <li>Router - Роутер (Router)</li>
                            <li>Browser - Браузер (Brauzer)</li>
                            <li>Download - Скачать (Skachat')</li>
                            <li>Upload - Загрузить (Zagruzit')</li>
                        </ul>
                    <h3>Social Media and Online Communication</h3>
                        <ul>
                            <li>Social media - Социальные сети (Sotsial'nye seti)</li>
                            <li>Post - Пост (Post)</li>
                            <li>Comment - Комментарий (Kommentariy)</li>
                            <li>Message - Сообщение (Soobshchenie)</li>
                            <li>Friend - Друг (Drug)</li>
                            <li>Follower - Подписчик (Podpischik)</li>
                            <li>Like - Лайк (Layk)</li>
                            <li>Share - Поделиться (Podelit'sya)</li>
                            <li>Profile - Профиль (Profil')</li>
                            <li>Hashtag - Хештег (Kheshteg)</li>
                        </ul>
                    <h3>Tech Support Issues</h3>
                        <ul>
                            <li>Error - Ошибка (Oshibka)</li>
                            <li>Bug - Баг (Bag)</li>
                            <li>Crash - Сбой (Sboy)</li>
                            <li>Update - Обновление (Obnovlenie)</li>
                            <li>Backup - Резервная копия (Rezervnaya kopiya)</li>
                            <li>Virus - Вирус (Virus)</li>
                            <li>Malware - Вредоносное ПО (Vredonosnoe PO)</li>
                            <li>Password - Пароль (Parol)</li>
                            <li>Support - Поддержка (Podderzhka)</li>
                            <li>Settings - Настройки (Nastroyki)</li>
                        </ul>
                <h2>Arts and Entertainment</h2>
                    <h3>Movies and Cinema</h3>
                        <ul>
                            <li>Movie - Фильм (Film)</li>
                            <li>Cinema - Кинотеатр (Kinoteatr)</li>
                            <li>Actor - Актер (Akter)</li>
                            <li>Actress - Актриса (Aktrisa)</li>
                            <li>Director - Режиссер (Rezhisser)</li>
                            <li>Screenplay - Сценарий (Stsenariy)</li>
                            <li>Scene - Сцена (Stsena)</li>
                            <li>Trailer - Трейлер (Treiler)</li>
                            <li>Soundtrack - Саундтрек (Saundtrek)</li>
                            <li>Genre - Жанр (Zhanr)</li>
                        </ul>
                    <h3>Music</h3>
                        <ul>
                            <li>Music - Музыка (Muzyka)</li>
                            <li>Song - Песня (Pesnya)</li>
                            <li>Singer - Певец (Pevets)</li>
                            <li>Band - Группа (Gruppa)</li>
                            <li>Concert - Концерт (Kontsert)</li>
                        </ul>
                    <h3>Literature</h3>
                        <ul>
                            <li>Book - Книга (Kniga)</li>
                            <li>Author - Автор (Avtor)</li>
                            <li>Novel - Роман (Roman)</li>
                            <li>Poetry - Поэзия (Poeziya)</li>
                            <li>Chapter - Глава (Glava)</li>
                            <li>Plot - Сюжет (Syuzhet)</li>
                            <li>Character - Персонаж (Personazh)</li>
                            <li>Edition - Издание (Izdanie)</li>
                            <li>Publisher - Издатель (Izdatel')</li>
                            <li>Literary critique - Литературная критика (Literaturnaya kritika)</li>
                        </ul>
                    <h3>Cultural Events</h3>
                        <ul>
                            <li>Exhibition - Выставка (Vystavka)</li>
                            <li>Theater - Театр (Teatr)</li>
                            <li>Performance - Спектакль (Spektakl')</li>
                            <li>Festival - Фестиваль (Festival')</li>
                            <li>Gallery - Галерея (Galereya)</li>
                            <li>Art - Искусство (Iskusstvo)</li>
                            <li>Sculpture - Скульптура (Skulptura)</li>
                            <li>Dance - Танец (Tanets)</li>
                            <li>Opera - Опера (Opera)</li>
                            <li>Ballet - Балет (Ballet)</li>
                        </ul>
                <h2>Food Preparation and Cooking</h2>
                <h2>Holidays and Celebrations</h2>
                <h2>Emotions and Relationships</h2>
                <h2>Law and Government</h2>
                <h2>Real Estate and Housing</h2>
                <h2>History and Culture</h2>
        </div>
    )
}

export default IntermediateWordList;