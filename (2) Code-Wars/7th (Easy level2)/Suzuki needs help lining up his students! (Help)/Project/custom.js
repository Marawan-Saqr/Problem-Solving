function lineupStudents(students) {
  let splited = students.split(" ");

  for (let i = 0; i < splited.length; i++) {
    splited.sort((a, b) => {
      if (a.length !== b.length) {
        return b.length - a.length;
      }
      return b.localeCompare(a);
    });
  }
  return splited;
}


console.log(lineupStudents("Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi"));