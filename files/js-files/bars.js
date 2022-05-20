document.addEventListener("DOMContentLoaded", function (event) {
    fetch('/api/bars')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then(bars => {
            for (let bar of Array.from(bars)) {
                /*
                <div class="row">
                    <div class="col-sm">
                        <section>
                            <h2>Loco</h2>
                            <img src="images/loco.png" alt="LocoBar" height="230px" width="230px">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                    </p>
                    <a href="bar-details.html">Read more...</a><br><br>
                        </section>
                    </div>
    
                    <div class="col-sm">
                        <section>
                            <br><br><p>ADRESSE</p>
                            <p>BEWERTUNGEN</p>
                            <input type="button" value="Like!"></input>
                        </section>
                    </div>
                </div>
                */

                let div = document.createElement('div');
                document.querySelector('main').append(div);
                div.class = 'row';
                
                let div2 = document.createElement('div');
                div.append(div2);
                div2.class = 'col-sm';

                let article = document.createElement('article');
                div2.append(article);

                let h2 = document.createElement('h3');
                article.append(h2);
                h2.innerHTML = bar[1].name;

                let img = document.createElement('img');
                article.append(img);
                //replaced this
                //img.src = bar[1].img_url;
                //with this
                img.src = 'https://www.25hours-hotels.com/images/25h_bikini_stephanlemke_monkey_bar_people_medium_77_175080046444e25d59d72eb3.jpg';
                //to reduce api calls for google api
                img.alt = 'alt';
                img.width = '300';
                img.height = '200';

                let p = document.createElement('p');
                article.append(p);
                p.innerHTML = 'rating (4.8/5 stars), rating count, address, more than 1 photo?, place holder photo?';

                document.querySelector('main').appendChild(div);
            }
        }).catch(err => console.error(`Fetch problem: ${err.message}`));
});