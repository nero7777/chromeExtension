fetch("https://type.fit/api/quotes")
    .then(data => data.json())
    .then(quoteData => {
        const randomNumber = Math.floor((Math.random() * 100) + 1)
        const quoteText = quoteData[randomNumber].text;
        const quoteElement = document.getElementById("quoteElement")
        quoteElement.innerHTML = quoteText;
    })
