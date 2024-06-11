function lineupStudents(students) {
  let splited = students.split(" ");
  let newArray = [];

  for (let i = 0; i < splited.length; i++) {
    newArray.push(splited[i]);
    newArray.sort((a, b) => {
      if (a.length !== b.length) {
        return b.length - a.length;
      }
      return b.localeCompare(a);
    });
  }
  return newArray;
}




console.log(lineupStudents("Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi"));