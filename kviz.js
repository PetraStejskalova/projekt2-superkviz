// Nejdříve si vytvoř objekt, který bude držet tvoje super otázky :-)

const otazky = [
    {
        poradi: 'Otázka 1 / 3',
        otazka: 'Co je ikonická hračka z 80. let?',
        foto: 'obrazky/moncicak.jpg',
        odpovedi: ['Kočičák', 'Mončičák', 'Opičák'],
        index: 1
    },
    {
        poradi: 'Otázka 2 / 3',
        otazka: 'Jaké je Matějovo nejoblíbenější ovoce?',
        foto: 'obrazky/ovoce.jpg',
        odpovedi: ['Kokos ', 'Melounek', 'Jahoda', 'Ani jedna z možností'],
        index: 1
    }, {
        poradi: 'Otázka 3 / 3',
        otazka: 'Pro úspěšné absolvování kurzu je potřeba?',
        foto: 'obrazky/pivo.jpg',
        odpovedi: ['Umět JavaScript', 'Chodit po kurzu do hospody'],
        index: 0
    },
];

// Dále budeš potřebovat další proměnné - jaké?
for (let i = 2; i < 3; i++) {
    let poradi = document.getElementById('poradi');
    poradi.textContent = otazky[i].poradi;

    let otazka = document.getElementById('otazka');
    otazka.textContent = otazky[i].otazka;

    let obrazek = document.createElement('img');
    obrazek.setAttribute('id', 'obrazek');
    obrazek.src = otazky[i].foto;
    obrazek.alt = 'Ilustrační obrázek';

    let foto = document.querySelector('.foto');
    foto.appendChild(obrazek);

    let odpovedi = document.createElement('ul');
    odpovedi.setAttribute('id', 'odpovedi');

    let prvniMoznost = document.createElement('li');
    prvniMoznost.dataset.odpoved = 0;
    prvniMoznost.textContent = otazky[i].odpovedi[0];

    let druhaMoznost = document.createElement('li');
    druhaMoznost.dataset.odpoved = 1;
    druhaMoznost.textContent = otazky[i].odpovedi[1];

    let tretiMoznost = document.createElement('li');
    tretiMoznost.dataset.odpoved = 2;
    tretiMoznost.textContent = otazky[i].odpovedi[2];

    let ctvrtaMoznost = document.createElement('li');
    ctvrtaMoznost.dataset.odpoved = 3;
    ctvrtaMoznost.textContent = otazky[i].odpovedi[3];

    odpovedi.appendChild(prvniMoznost);
    odpovedi.appendChild(druhaMoznost);
    odpovedi.appendChild(tretiMoznost);
    odpovedi.appendChild(ctvrtaMoznost);

    let moznosti = document.querySelector('#moznosti');
    moznosti.appendChild(odpovedi);
}

// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení
function zobrazOtazku() { }

// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())
function klikNaOdpoved() { }

// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
function zobrazVyhodnoceni() { }