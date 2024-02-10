import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

const hry = document.querySelectorAll('.hra');

hry.forEach((hra) => {
  const policko = hra.querySelectorAll('.policko');
  const hraciPolicka = Array.from(policko);
  let hraciPole = [];
  hraciPolicka.map((pole) => {
    if (pole.classList.contains('kolecko')) {
      hraciPole.push('o');
    } else if (pole.classList.contains('krizek')) {
      hraciPole.push('x');
    } else {
      hraciPole.push('_');
    }

    return hraciPole;
  });

  const vitez = findWinner(hraciPole);
  const vysledek = hra.querySelector('.vysledek');

  if (vitez === 'o') vysledek.textContent = `Vyhrálo kolečko!`;
  if (vitez === 'x') vysledek.textContent = `Vyhrálo křížek!`;
  if (vitez === 'tie') vysledek.textContent = `Remíza!`;
  if (vitez === 'null') vysledek.textContent = `Hra ještě probíhá`;
});
