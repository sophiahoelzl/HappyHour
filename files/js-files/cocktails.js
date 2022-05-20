document.addEventListener("DOMContentLoaded", function (event) {
    fetch('/api/cocktails')
        .then(response => response.json())
        .then(cocktails => {
            for (let cocktail of Array.from(cocktails)) {
            /*    <div class="row">
            <div class="col-sm">
                <!-- Top 10 Rezepte über API laden -->
                <h2>Mojito</h2>
                <img src="images/mojito.png" alt="Mojito Bild"><br>
                <a href="cocktail-details.html">Recipe</a><br>
                <input type="button" value="Like!"></input>
            </div>
        </div>*/
                let div = document.createElement('div');
                document.querySelector('main').append(div);
                div.class = 'row';

                let div2 = document.createElement('div');
                div.append(div2);
                div2.class = 'col-sm';

                let h2 = document.createElement('h2');
                div2.append(h2);
                h2.innerHTML = cocktail[1].strDrink;

                let img = document.createElement('img');
                div2.append(img)
                img.src = cocktail[1].strDrinkThumb;
                img.alt = 'alt';
                img.width = '200';
                img.height = '200';

                let a = document.createElement('a');
                div2.append(a);
                a.innerHTML = 'Recipe';

                let input = document.createElement('input');
                div2.append(input);
                input.type = 'button';
                input.value = 'Like!';

                document.querySelector('main').appendChild(div);
            }
        });
});