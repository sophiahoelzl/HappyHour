document.addEventListener("DOMContentLoaded", function (event) {
    fetch('/api/cocktails')
        .then(response => response.json())
        .then(cocktails => {
            let cnt = 0;
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
                if (cnt == 0 || cnt % 4 == 0){
                    document.querySelector('main').append(div);
                }
                div.className = 'row rowClass';

                let divs = document.getElementsByClassName("rowClass");
                let div2 = document.createElement('div');

                if (cnt < 4){
                    divs[0].append(div2);
                } else if (cnt < 8){
                    divs[1].append(div2);
                } else if (cnt < 12){
                    divs[2].append(div2);
                } else if (cnt < 16){
                    divs[3].append(div2);
                } else if (cnt < 20){
                    divs[4].append(div2);
                } else if (cnt < 24){
                    divs[5].append(div2);
                } else if (cnt < 28){
                    divs[6].append(div2);
                } else {
                    divs[0].append(div2);
                }
                //div.append(div2);
                div2.className = 'col text-center';

                let article = document.createElement("article");
                div2.append(article);
                article.className = "divsCocktails";

                let h2 = document.createElement('h2');
                article.append(h2);
                h2.innerHTML = cocktail[1].strDrink;
                h2.className = "h2Cocktails";
                
                let div3 = document.createElement("div");
                div3.className="row";
                article.append(div3);

                let div4 = document.createElement("div");
                div3.append(div4);
                div4.className = "col"

                let img = document.createElement('img');
                div4.append(img)
                img.src = cocktail[1].strDrinkThumb;
                img.alt = 'alt';
                img.width = '200';
                img.height = '200';
                img.className = "imgCocktails";

                let div5 = document.createElement("div");
                div5.className = "row";
                article.append(div5);

                let div6 = document.createElement("div");
                div6.className = "col text-right";
                div5.append(div6);

                let a = document.createElement('a');
                div6.append(a);
                a.innerHTML = 'Recipe';

                let div7 = document.createElement("div");
                div5.append(div7);
                div7.className = "col text-left";

                let input = document.createElement('input');
                div7.append(input);
                input.type = 'button';
                input.value = 'Like!';

                //document.querySelector('main').appendChild(div);
                cnt = cnt +1;
            }
        });
});