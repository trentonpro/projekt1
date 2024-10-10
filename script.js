async function fetchMessages() {
    const url = "https://api.breakingbadquotes.xyz/v1/quotes/20";
    const response = await fetch(url);
    const json = await response.json();
    console.log(json); 

    const element = document.querySelector('.box div');
    element.innerHTML = ''; 

    
    const quotesToDisplay = json.slice(0, 10);

    for (const message of quotesToDisplay) {
        const quote = message.quote; 
        const author = message.author;
        element.innerHTML += `<p>"${quote}" - ${author}</p>`;
}

fetchMessages();
