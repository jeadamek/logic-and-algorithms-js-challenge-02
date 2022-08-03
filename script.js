const students =  [
  {
    name: "Jonas",
    gradeOne: 7.5,
    gradeTwo: 8, 
  },
  {
    name: "Alice",
    gradeOne: 9,
    gradeTwo: 5, 
  },
  {
    name: "Thomas",
    gradeOne: 7,
    gradeTwo: 4, 
  },
  {
    name: "Rachel",
    gradeOne: 10,
    gradeTwo: 8, 
  },
  {
    name: "Micaela",
    gradeOne: 5,
    gradeTwo: 8, 
  },
]


function calcAverage (averageOne, averageTwo) {
  let average = (averageOne + averageTwo) / 2
  return average
}

function replyMessage (student, average){
  if(average >= 7){
    return `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`
  } else{
    return `Não foi dessa vez, ${student.name}! Tente novamente!`
  }
}

for (let student of students){
  let average = calcAverage(student.gradeOne, student.gradeTwo)
  let message = replyMessage(student, average)

  alert(`A média do(a) aluno(a) ${student.name} é: ${average} \n${message}`)
}