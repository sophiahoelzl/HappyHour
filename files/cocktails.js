document.addEventListener("DOMContentLoaded", function (event) {
    fetch('/api/cocktails')
        .then(response => response.json())
        .then(cocktails => {
            for (let cocktail of Array.from(cocktails)) {
                let pic = document.createElement('img');
                pic.src = cocktail[1].strDrinkThumb;
                pic.alt = 'alt';

                document.querySelector('main').appendChild(pic);
            }
        });
});