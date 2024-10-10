async function fetchMessages() {
    const url = "https://api.breakingbadquotes.xyz/v1/quotes/20"; // Fetch more quotes
    const response = await fetch(url);
    const json = await response.json();
    console.log(json); // Log the entire JSON response for debugging

    const element = document.querySelector('.box div');
    element.innerHTML = ''; // Clear existing content

    // Use the first 10 quotes (or fewer if less than 10 are available)
    const quotesToDisplay = json.slice(0, 10);

    for (const message of quotesToDisplay) {
        const quote = message.quote; // Access the quote property
        const author = message.author; // Access the author property
        element.innerHTML += `<p>"${quote}" - ${author}</p>`; // Display the quote and author
    }
}

fetchMessages();
