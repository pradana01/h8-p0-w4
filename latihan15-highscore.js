function highestScore(students) {
  var newObj = {};
  for (var i = 0; i < students.length; i++) {
    var student = {
      name: students[i].name,
      score: students[i].score
    }   
    if (newObj[students[i].class]) {
      if(student.score > newObj[students[i].class].score){
        newObj[students[i].class] = student;
      }
    }else{
      newObj[students[i].class] = student;
    
    }
  }
  return newObj;
}

console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  