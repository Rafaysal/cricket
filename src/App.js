import React from 'react';
import './App.css';
import bg from '/Users/rafaysalahuddin/Portfolio/cricket/src/images/bground.jpeg';
import q1 from '/Users/rafaysalahuddin/Portfolio/cricket/src/images/q1.jpg'
import yawn from '/Users/rafaysalahuddin/Portfolio/cricket/src/images/yawn.png'
import player from '/Users/rafaysalahuddin/Portfolio/cricket/src/images/player.png'
import player2 from '/Users/rafaysalahuddin/Portfolio/cricket/src/images/player2.png'
import tick from '/Users/rafaysalahuddin/Portfolio/cricket/src/images/tick.mp3'
import buzz from '/Users/rafaysalahuddin/Portfolio/cricket/src/images/buzz.mp3'
import win from '/Users/rafaysalahuddin/Portfolio/cricket/src/images/win.mp3'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      question: [["Who has the highest ODI average?", "Younis Khan", "Mohd. Yousuf", "Inzamam-ul-Haq","Mohd. Hafeez", "Mohd. Yousuf",1,0,3],
      ["Who was the man of the series in the 2009 T20 World Cup?", "Shahid Afridi", "Dilshan", "Umar Gul","Jaques Kallis", "Dilshan",1,2,3],
      ["Who has batted at all positions in ODIs", "Shoaib Malik", "Shahid Afridi","Abdul Razzaq", "Azhar Mehmood", "Abdul Razzaq",2,1,3],
      ["Who captained Pakistan in the 1996 world cup?","Wasim Akram", "Aamer Sohail", "Saeed Anwar", "Javed Miandad","Wasim Akram",0,1,2],
      ["Who has played the most ODI matches for Pakistan?","Inzamam-ul-Haq", "Wasim Akram", "Shahid Afridi", "Shoaib Malik", "Shahid Afridi",2,1,3],
      ["Who has the most wicket-keeper dismissals?","Sarfaraz Ahmed", "Kamran Akmal", "Rashid Latif", "Moin Khan", "Moin Khan",3,0,1],
      ["Who has never won a man of the match award in ODIs?","Saeed Ajmal", "Sarfaraz Ahmed", "Misbah-ul-Haq", "Mohammed Hafeez", "Saeed Ajmal",0,2,3],
      ["Who scored the winning runs in the 2009 T20 World Cup?","Shahid Afridi", "Shoaib Malik", "Wide", "Leg-bye","Leg-bye",3,1,2]],
      number: 0,
      answered: 0,
      score: 0,
      timeLeft: 11,
      pause: false,
      clicked: false,
      complete: false,
      fifties: 2
    }
    this.checkAnswer=this.checkAnswer.bind(this);
    this.changeQuestion=this.changeQuestion.bind(this);
    this.fifty=this.fifty.bind(this);
  }

  off(e){
    e.target.style.background = 'linear-gradient(to right, #021B79, #0575E6)';
  }

  hover(e){
    e.target.style.background = "linear-gradient(to right, #f12711, #f5af19)";
  }

  restart(){
    document.location.reload()
  }

  fifty(){
    let one = document.getElementById('one')
    let two = document.getElementById('two')
    let three = document.getElementById('three')
    let four = document.getElementById('four')
    if(!this.state.clicked){
    if(this.state.question[this.state.number][7]===0||this.state.question[this.state.number][8]===0){
      one.style.visibility = "hidden"
    }
    if(this.state.question[this.state.number][7]===1||this.state.question[this.state.number][8]===1){
      two.style.visibility = "hidden"
  } if(this.state.question[this.state.number][7]===2||this.state.question[this.state.number][8]===2){
    three.style.visibility = "hidden"
  } if(this.state.question[this.state.number][7]===3||this.state.question[this.state.number][8]===3){
      four.style.visibility = "hidden"
    }
  }
  }

  changeQuestion(){
    let newNumber = this.state.number + 1;
    
    let option1 = document.getElementsByClassName('option')[0];
    let option2 = document.getElementsByClassName('option')[1];
    let option3 = document.getElementsByClassName('option')[2];
    let option4 = document.getElementsByClassName('option')[3];

      option1.style.background = 'linear-gradient(to right, #021B79, #0575E6)';
      option2.style.background = 'linear-gradient(to right, #021B79, #0575E6)';
      option3.style.background = 'linear-gradient(to right, #021B79, #0575E6)';
      option4.style.background = 'linear-gradient(to right, #021B79, #0575E6)';

      option1.style.visibility = "visible";
      option2.style.visibility = "visible";
      option3.style.visibility = "visible";
      option4.style.visibility = "visible";


      this.setState({timeLeft: 10, pause: false, number: newNumber, clicked: false })

      if(this.state.answered>=8){
        this.setState({complete: true})
      }
  }

  checkAnswer(e){

    let newScore     
    let newAnswered 
    
    
    if(this.state.question[this.state.number][5]===e.target.value && !this.state.clicked){
        newScore = this.state.score + 1; 
        newAnswered = this.state.answered + 1;
        new Audio(win).play()
        e.target.style.background = 'linear-gradient(to right, #11998e, #38ef7d)';     
        this.setState({score: newScore})
        this.setState({clicked: true});
        this.setState({answered:newAnswered});
    }
    else if(!this.state.clicked){
      newAnswered = this.state.answered + 1;
      new Audio(buzz).play()
      e.target.style.background = 'linear-gradient(to right, #93291E, #ED213A)';
      this.setState({clicked: true});
      this.setState({answered:newAnswered});
    }
 

   
    this.setState({pause: true})
  }

  componentDidMount(){

  let newTime;
  let newQuestion;
    
    setInterval(()=>{
      if(!this.state.pause){
      newTime = this.state.timeLeft - 1;
      newQuestion = this.state.number + 1;
      console.log(newQuestion)
      this.setState({timeLeft: newTime})

      let ticker = new Audio(tick);
      ticker.play()

      if(this.state.timeLeft === 0){
        let newAnswer = this.state.answered + 1;
        this.setState({answered:newAnswer, clicked: true});
        this.setState({pause: true})
        new Audio(buzz).play()
      }
      }
    }, 1000)
  }
    
  render(){
    
  return (<div className = "container">
    <div>
    <img className = "back" src = {bg}/>
    

    <img className = 'player' src = {player}/>
    <img className = 'player2' src = {player2}/>
   



    <br/><br></br><br/><br/>
    {!this.state.complete?(<div>
    <h1>{this.state.question[this.state.number][0]}</h1>
    <br/>
      {this.state.number===0?<h2>Begin</h2>:<h2>Score: <span>{this.state.score}/{this.state.answered}</span> | 50/50's remaining: <span>{this.state.fifties}</span></h2>}
    <br/>
    

    <div className = "flexer">
      <h2>Time left: <span>{this.state.timeLeft}</span></h2>
      <button onClick = {this.fifty} className = "fifty">50/50</button>
    </div>
    <div className = "options">
      <br/>
     <input id = "one" className = "option" type = "button" onClick = {this.checkAnswer} onMouseOver = {this.hover} onMouseLeave = {this.off} value = {this.state.question[this.state.number][1]}></input>
     <input id = "two" className = "option" type = "button" onClick = {this.checkAnswer} onMouseOver = {this.hover} onMouseLeave = {this.off} value = {this.state.question[this.state.number][2]}></input>
     <input id = "three" className= "option" type = "button" onClick = {this.checkAnswer} onMouseOver = {this.hover} onMouseLeave = {this.off} value = {this.state.question[this.state.number][3]}></input>
     <input id = "four" className = "option" type = "button" onClick = {this.checkAnswer} onMouseOver = {this.hover} onMouseLeave = {this.off} value = {this.state.question[this.state.number][4]}></input>
     {this.state.pause?<button className = "btn" onClick = {this.changeQuestion}> Next</button>:undefined}
    </div>
    </div>):(<div>
      <h1>Congrats you scored: {this.state.score}/{this.state.answered}</h1>
    <button onClick = {this.restart} className="restart">Restart</button></div>)}
    </div>
    </div>
  );
}
}
export default App;
