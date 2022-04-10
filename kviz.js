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

// Dále budeš potřebovat další proměnné - jaké?
let poradi = document.getElementById('poradi');
let otazka = document.getElementById('otazka');
let obrazek = document.getElementById('obrazek');
let odpovedi = document.createElement('ul');
let prvniMoznost = document.createElement('li');
let druhaMoznost = document.createElement('li');
let tretiMoznost = document.createElement('li');
let ctvrtaMoznost = document.createElement('li');
let i = 0;
let kviz = document.querySelector('.kviz');
let hodnoceni = document.getElementById('hodnoceni');
let vysledek = document.querySelector('.vysledek');
let vysledekPrvniOtazka = document.createElement('h3');
let vysledekDruhaOtazka = document.createElement('h3');
let vysledekTretiOtazka = document.createElement('h3');
let a = 0;

odpovedi.setAttribute('id', 'odpovedi');

prvniMoznost.dataset.odpoved = 0;
druhaMoznost.dataset.odpoved = 1;
tretiMoznost.dataset.odpoved = 2;
ctvrtaMoznost.dataset.odpoved = 3;

// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení
function zobrazOtazku() {

    poradi.textContent = otazky[i].poradi;
    otazka.textContent = otazky[i].otazka;
    obrazek.src = otazky[i].foto;

    prvniMoznost.textContent = otazky[i].odpovedi[0];
    druhaMoznost.textContent = otazky[i].odpovedi[1];
    tretiMoznost.textContent = otazky[i].odpovedi[2];
    ctvrtaMoznost.textContent = otazky[i].odpovedi[3];

    prvniMoznost.onclick = klikNaOdpoved;
    druhaMoznost.onclick = klikNaOdpoved;
    tretiMoznost.onclick = klikNaOdpoved;
    ctvrtaMoznost.onclick = klikNaOdpoved;

    if (otazky[i].odpovedi.length === 2) {
        odpovedi.appendChild(prvniMoznost);
        odpovedi.appendChild(druhaMoznost);
    }
    if (otazky[i].odpovedi.length === 3) {
        odpovedi.appendChild(prvniMoznost);
        odpovedi.appendChild(druhaMoznost);
        odpovedi.appendChild(tretiMoznost);
    }
    if (otazky[i].odpovedi.length === 4) {
        odpovedi.appendChild(prvniMoznost);
        odpovedi.appendChild(druhaMoznost);
        odpovedi.appendChild(tretiMoznost);
        odpovedi.appendChild(ctvrtaMoznost);
    }

    let moznosti = document.querySelector('#moznosti');
    moznosti.appendChild(odpovedi);
}

zobrazOtazku();

// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())
function klikNaOdpoved() {
    if (i < otazky.length - 1) {
        i++
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

    for (let a = 0; a < otazky.length; a++) {
        const hodnoceniOtazky = document.createElement('div');
        hodnoceniOtazky.classList.add('hodnoceni-otazky');

        const shrnutiOtazky = document.createElement('h3');
        shrnutiOtazky.classList.add('shrnuti-otazky');
        shrnutiOtazky.textContent = otazky[a].index + '. ' + otazky[a].otazka;

        const tvojeOdpoved = document.createElement('p');
        tvojeOdpoved.classList.add('tvoje-odpoved');
        tvojeOdpoved.textContent = 'Tvoje odpověď:';

        const vyhodnoceniOtazky = document.createElement('p');
        vyhodnoceniOtazky.classList.add('vyhodnoceni-otazky');
        vyhodnoceniOtazky.textContent = 'Správná odpověď:';

        hodnoceniOtazky.appendChild(shrnutiOtazky);
        hodnoceniOtazky.appendChild(tvojeOdpoved);
        hodnoceniOtazky.appendChild(vyhodnoceniOtazky);

        hodnoceni.appendChild(hodnoceniOtazky);
    }
}
