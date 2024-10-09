import inquirer from 'inquirer';


const mainQuestion = [
    {
      type: 'list',
      message: 'What is your favorite music genre?',
      name: 'userAction',
      choices: ['Rock', 'Country', 'Rap', 'Jazz', 'Classical', 'Disco', 'EDM',]
    },
  ]
  
// Switch function used based on selection of favorite music genre. Basically running an inquirer prompt with 'mainQuestion' packed into one variable. 
// Then by using/operating with the answers of those questions, we have a switch function.

  const mainFunction = () => {
    inquirer.prompt(mainQuestion).then(answers => {
  
        // answers.userAction references the name or identity of the list of questions where it is defined as 'userAction'
      switch (answers.userAction) {
          case 'Rock':
              rockFunction()
              break;
          case 'Country':
              countryFunction()
              break;
          case 'Rap':
              rapFunction()
              break;
          case 'Jazz':
              jazzFunction()
              break;
          case 'Classical':
              classicalFunction()
              break;
          case 'Disco':
              discoFunction()
              break;
          case 'EDM':
              edmFunction()
              break;
        case 'Quit':

           break;
        default:
          console.log('Invalid choice');
      }
  
    })
  }

  const rockFunction = () => {
    console.log('Your favorite genre is rock music')
  }
  const countryFunction = () => {
    console.log('Your favorite genre is country music')
  }
  const rapFunction = () => {
    console.log('Your favorite genre is rap music')
  }
  const jazzFunction = () => {
    console.log('Your favorite genre is jazz music')
  }
  const classicalFunction = () => {
    console.log('Your favorite genre is classical music')
  }
  const discoFunction = () => {
    console.log('Your favorite genre is disco music')
  }
  const edmFunction = () => {
    console.log('Your favorite genre is edm music')
  }

  mainFunction()