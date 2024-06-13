function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (dadYearsOld < (sonYearsOld + sonYearsOld)) {
    return (sonYearsOld + sonYearsOld) - dadYearsOld;
  } else {
    return dadYearsOld - (sonYearsOld + sonYearsOld);
  }
}

console.log(twiceAsOld(36, 7));