const GIFormula = (stat: number, totalStat: number, grade: number): number => {
  return Math.floor(((stat - 40) / (totalStat - 200)) * grade);
};

export const calculateGI = (
  con: number,
  pow: number,
  eye: number,
  speed: number,
  field: number,
  grade: number
) => {
  const totalStat = con + pow + eye + speed + field;
  const conGI = GIFormula(con, totalStat, grade);
  const powGI = GIFormula(pow, totalStat, grade);
  const eyeGI = GIFormula(eye, totalStat, grade);
  const speedGI = GIFormula(speed, totalStat, grade);
  const fieldGI = GIFormula(field, totalStat, grade);

  const GITotal = conGI + powGI + eyeGI + speedGI + fieldGI;
  const leftoverGI = grade - GITotal;

  const baseStatObject: any = {
    con: con,
    pow: pow,
    eye: eye,
    speed: speed,
    field: field,
  };

  const GIStatObject: any = {
    con: conGI,
    pow: powGI,
    eye: eyeGI,
    speed: speedGI,
    field: fieldGI,
  };

  for (let i = 0; i < leftoverGI; i++) {
    const currMaxKey = Object.keys(baseStatObject).reduce((a, b) =>
      baseStatObject[a] > baseStatObject[b] ? a : b
    );

    GIStatObject[currMaxKey] += 1;
    delete baseStatObject[currMaxKey];
  }

  return GIStatObject;
};
