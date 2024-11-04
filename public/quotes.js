    const quotes = [
        "It is only with the heart that one can see rightly; what is essential is invisible to the eye. — Antoine de Saint-Exupéry 'The Little Prince'",
        "All animals are equal, but some animals are more equal than others. — George Orwell 'Animal Farm'",
        "It does not do to dwell on dreams and forget to live. — J.K. Rowling 'Harry Potter and the Sorcerer's Stone'",
        "All we have to decide is what to do with the time that is given us. — J.R.R. Tolkien 'The Fellowship of the Ring'",
        "The truth is rarely pure and never simple. — Oscar Wilde 'The Importance of Being Earnest'",
        "And so we beat on, boats against the current, borne back ceaselessly into the past. — F. Scott Fitzgerald 'The Great Gatsby'",
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. — Jane Austen 'Pride and Prejudice'",
        "I am no bird; and no net ensnares me. — Charlotte Brontë 'Jane Eyre'",
        "To kill a mockingbird is a sin. — Harper Lee 'To Kill a Mockingbird'",
        "We accept the love we think we deserve. — Stephen Chbosky 'The Perks of Being a Wallflower'",
        "I am not afraid of storms, for I am learning how to sail my ship. — Louisa May Alcott 'Little Women'",
        "We are all in search of miracles. — Leo Tolstoy 'War and Peace'",
        "We are all in time, like a feather in the air. — Fyodor Dostoevsky 'The Brothers Karamazov'",
        "Man is what he eats. — Friedrich Nietzsche, 'The Antichrist'",
        "Reading books, we gain life and death. — Gabriel Garcia Marquez 'One Hundred Years of Solitude'",
        "When you look at the world with love, the world responds in kind. — Paulo Coelho 'The Alchemist'",
        "Everyone has their own path to happiness. — Haruki Murakami 'Norwegian Forest'",
        "Sleep is a step into the unknown. — Haruki Murakami '1Q84'",
        "Everything that doesn't kill us makes us stronger. — Friedrich Nietzsche 'The Radiance of Truth'",
        "A novel is a mirror that wanders along the road. — Stendhal 'Red and Black'",
        "The legends of smiles and tears are nothing but a story about us. — John Green 'In Search of Alaska'",
        "There is a new beginning at every end. — J. R. R. Tolkien 'The Hobbit'",
        "Words can create bridges between souls. — Mark Twain 'The Adventures of Tom Sawyer'",
        "Happiness is not what you have, but what you do. — Virginia Woolf 'Mrs. Dalloway'",
        "Books are treasures that open up worlds. — Leo Tolstoy 'Anna Karenina'",
        "We are one spirit in one life. — Ernest Hemingway 'The Old Man and the Sea'",
        "Words are our dreams until we say them. — Salman Rushdie 'Satanic Verses'",
        "History is a philosophy that teaches through examples. — Plato 'The State'",
        "Our dreams are hints of the future. — Dan Brown 'The Da Vinci Codes'",
        "Every day is a new opportunity to become a better person. — Daniel Keyes 'Flowers for Algernon'",
        "Truth is a holy weapon. — Leo Tolstoy 'Resurrection'",
        "Your own limitations are just an illusion. — Neil Gaiman 'American Gods'",
        "The strong in spirit will always find a way out. — George Martin 'A Song of Ice and Fire'",
        "Everyone should leave a mark on this world. — Stephen King 'The Shining'"
    ];

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayQuote() {
        const quoteElement = document.getElementById('quote');
        quoteElement.textContent = getRandomQuote();
    }

    document.getElementById('newQuoteBtn').addEventListener('click', displayQuote);

    // Показываем цитату при загрузке страницы
    displayQuote();

    