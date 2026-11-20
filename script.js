const tootevalik = document.querySelector(".tootevalik");

for (const [id, toode] of Object.entries(tooted)) {
    const kaart = document.createElement("article");
    kaart.className = "toode";

    const nimi = document.createElement("h3");
    nimi.textContent = toode.nimi;

    const kirjeldus = document.createElement("p");
    kirjeldus.textContent = toode.kirjeldus;

    const hind = document.createElement("p");
    hind.textContent = (toode.hind / 100)
        .toFixed(2).replace(".", ",") + " €";

    const nupp = document.createElement("button");
    nupp.type = "button";
    nupp.className = "lisa-ostukorvi";
    nupp.dataset.id = id;
    nupp.textContent = "Lisa ostukorvi";

    kaart.append(nimi, kirjeldus, hind, nupp);
    tootevalik.appendChild(kaart);
}
const ostukorv = {};
document.querySelectorAll(".lisa-ostukorvi").forEach(nupp => {
    nupp.addEventListener("click", () => {
        const id = nupp.dataset.id;

        if (!tooted[id]) return;

        ostukorv[id] = (ostukorv[id] || 0) + 1;
        kuvaOstukorv();
    });
});

function kuvaOstukorv() {
    const sisu = document.querySelector("#ostukorv p");
    let summa = 0;
    const read = [];

    for (const id in ostukorv) {
        const toode = tooted[id];
        const kogus = ostukorv[id];

        summa += toode.hind * kogus;
        read.push(`${toode.nimi} × ${kogus}`);
    }

    sisu.textContent = read.join(", ") +
        ` | Kokku: ${(summa / 100).toFixed(2).replace(".", ",")} €`;
}