const media = (arrayOk) => Math.round(arrayOk.reduce((a, b) => a + b) / arrayOk.length);
const average = (a) => (a.length && a.every((e) => typeof e === 'number') ? media(a) : undefined);

module.exports = average;
// Feito junto com o Arytheon da turma 16 tribo B