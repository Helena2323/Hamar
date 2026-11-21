const tootevalik = document.querySelector(".tootevalik");
const ostukorv = loeOstukorv();

function loeOstukorv() {
    const korv = {};

    try {
        const salvestatud = JSON.parse(
            localStorage.getItem("hamar-ostukorv") || "{}"
        );

        for (const [id, kogus] of Object.entries(salvestatud || {})) {
            if (Object.hasOwn(tooted, id) &&
                Number.isSafeInteger(kogus) && kogus > 0) {
                korv[id] = kogus;
            }
        }
    } catch {
        return {};
    }

    return korv;
}

function vormindaHind(hind) {
    return (hind / 100).toFixed(2).replace(".", ",") + " €";
}

for (const [id, toode] of Object.entries(tooted)) {
    const kaart = document.createElement("article");
    kaart.className = "toode";

    const nimi = document.createElement("h3");
    nimi.textContent = toode.nimi;

    const kirjeldus = document.createElement("p");
    kirjeldus.textContent = toode.kirjeldus;

    const hind = document.createElement("p");
    hind.textContent = vormindaHind(toode.hind);

    const nupp = document.createElement("button");
    nupp.type = "button";
    nupp.className = "lisa-ostukorvi";
    nupp.dataset.id = id;
    nupp.textContent = "Lisa ostukorvi";

    nupp.addEventListener("click", () => {
        muudaKogust(id, 1);
    });

    kaart.append(nimi, kirjeldus, hind, nupp);
    tootevalik.appendChild(kaart);
}

function muudaKogust(id, muutus) {
    const kogus = (ostukorv[id] || 0) + muutus;

    if (kogus <= 0) {
        delete ostukorv[id];
    } else {
        ostukorv[id] = kogus;
    }

    kuvaOstukorv();
}

function kuvaOstukorv() {
        try {
        localStorage.setItem(
            "hamar-ostukorv",
            JSON.stringify(ostukorv)
        );
    } catch {
        console.warn("Ostukorvi salvestamine ebaõnnestus.");
    }
    const sisu = document.querySelector("#ostukorv p");
    sisu.replaceChildren();

    let summa = 0;

    if (Object.keys(ostukorv).length === 0) {
        sisu.textContent = "Sinu ostukorv on tühi.";
        return;
    }

    for (const [id, kogus] of Object.entries(ostukorv)) {
        const toode = tooted[id];
        summa += toode.hind * kogus;

        const rida = document.createElement("span");
        rida.textContent = `${toode.nimi} × ${kogus} — ${vormindaHind(toode.hind * kogus)} `;

        const miinus = document.createElement("button");
        miinus.type = "button";
        miinus.textContent = "−";
        miinus.addEventListener("click", () => {
            muudaKogust(id, -1);
        });

        const pluss = document.createElement("button");
        pluss.type = "button";
        pluss.textContent = "+";
        pluss.addEventListener("click", () => {
            muudaKogust(id, 1);
        });

        const eemalda = document.createElement("button");
        eemalda.type = "button";
        eemalda.textContent = "Eemalda";
        eemalda.addEventListener("click", () => {
            delete ostukorv[id];
            kuvaOstukorv();
        });

        sisu.append(rida, miinus, pluss, eemalda,
            document.createElement("br"));
    }

    const kokku = document.createElement("strong");
    kokku.textContent = "Kokku: " + vormindaHind(summa);
    sisu.appendChild(kokku);
}

kuvaOstukorv();