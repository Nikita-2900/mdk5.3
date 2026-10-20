let cargoHold = ['Топливо', 'Кислород', 'Провизия', 'Кристаллы', 'Инструменты'];

cargoHold.forEach(x => {
    console.log(`Внимание: груз ${x} проверен`)
    if (x == 'Кристаллы')
    {
        console.log("⚠️ Внимание! Обнаружен ценный груз!")
    }
});

const a = cargoHold.pop();
console.log(`Разгружен последний отсек: ${a}`);

let scienceCargo = cargoHold.slice(1,4);
console.log(scienceCargo)
console.log(cargoHold)

cargoHold.splice(1, 2);
console.log(cargoHold)

cargoHold.splice(1, 0, 'Золото', 'Детектор лжи')
console.log(cargoHold)