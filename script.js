const tooted = {
    jaatis: { nimi: "Jäätisekokteili küünal", hind: 2490 },
    latte: { nimi: "Piparkoogi-latte küünal", hind: 2990 },
    roos: { nimi: "Roos klaasis", hind: 1990 }
};

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