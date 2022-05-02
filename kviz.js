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
        index: 2
    }, {
        poradi: 'Otázka 3 / 3',
        otazka: 'Pro úspěšné absolvování kurzu je potřeba?',
        foto: 'obrazky/pivo.jpg',
        odpovedi: ['Umět JavaScript', 'Chodit po kurzu do hospody'],
        index: 3
    }
];

const spravneOdpovedi = ['Mončičák', 'Jahoda', 'Umět JavaScript'];

// Dále budeš potřebovat další proměnné - jaké?
let poradi = document.getElementById('poradi');
let otazka = document.getElementById('otazka');
let obrazek = document.getElementById('obrazek');
let moznosti = document.querySelector('#moznosti');

let kviz = document.querySelector('.kviz');
let hodnoceni = document.getElementById('hodnoceni');
let vysledek = document.querySelector('.vysledek');

let tvojeOdpovedi = [];

let aktualniOtazka = 0;

let spravne = 0;

zobrazOtazku();

// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení
function zobrazOtazku() {
    poradi.textContent = 'Otázka ' + (aktualniOtazka + 1) + ' / ' + otazky.length;
    otazka.textContent = otazky[aktualniOtazka].otazka;
    obrazek.src = otazky[aktualniOtazka].foto;

    let odpovedi = otazky[aktualniOtazka].odpovedi;

    let seznam = document.createElement('ul');
    seznam.setAttribute('id', 'odpovedi');

    for (let i = 0; i < odpovedi.length; i++) {
        let polozka = document.createElement('li');
        polozka.dataset.odpoved = i;
        polozka.textContent = odpovedi[i];
        polozka.onclick = klikNaOdpoved;
        seznam.appendChild(polozka);
    }

    moznosti.appendChild(seznam);
}

// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())
function klikNaOdpoved() {
    let odpoved = event.target.dataset.odpoved;

    tvojeOdpovedi.push(odpoved);

    aktualniOtazka = aktualniOtazka + 1;

    if (aktualniOtazka < otazky.length) {
        document.querySelector('#odpovedi').remove();
        zobrazOtazku();
    } else {
        zobrazVyhodnoceni();
    }
}

// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
function zobrazVyhodnoceni() {
    kviz.style.display = 'none';
    vysledek.style.display = 'block';

    for (let i = 0; i < otazky.length; i++) {
        const hodnoceniOtazky = document.createElement('div');
        hodnoceniOtazky.classList.add('hodnoceni-otazky');

        const shrnutiOtazky = document.createElement('h3');
        shrnutiOtazky.classList.add('shrnuti-otazky');
        shrnutiOtazky.textContent = otazky[i].index + '. ' + otazky[i].otazka;

        const tvojeOdpoved = document.createElement('p');
        tvojeOdpoved.classList.add('tvoje-odpoved');
        tvojeOdpoved.textContent = 'Tvoje odpověď: ' + otazky[i].odpovedi[tvojeOdpovedi[i]];

        const vyhodnoceniOtazky = document.createElement('p');
        vyhodnoceniOtazky.classList.add('vyhodnoceni-otazky');

        if (otazky[i].odpovedi[tvojeOdpovedi[i]] === spravneOdpovedi[i]) {
            vyhodnoceniOtazky.textContent = 'To je SPRÁVNĚ';
            spravne++;
        } else {
            vyhodnoceniOtazky.textContent = 'Správná odpověď: ' + spravneOdpovedi[i];
        }

        hodnoceniOtazky.appendChild(shrnutiOtazky);
        hodnoceniOtazky.appendChild(tvojeOdpoved);
        hodnoceniOtazky.appendChild(vyhodnoceniOtazky);

        hodnoceni.appendChild(hodnoceniOtazky);
    }
    zaverecneHodnoceni();
}

function zaverecneHodnoceni() {
    let procenta = Math.floor((spravne * 100) / otazky.length);

    let uspesnost = document.getElementById('uspesnost');
    uspesnost.textContent = 'správně ' + spravne + ' ze ' + otazky.length + ' otázek. úspěšnost ' + procenta + ' %.';
}
