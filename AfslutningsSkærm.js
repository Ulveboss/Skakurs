class SlutSkærm {
  constructor(){
    this.knapSpil = new ButtonCircle(width/2, height/2, 150, color(loser), color(100));
  }
  run() {
    background(220);
    let padding = 10;
    push()
    fill(0)
    textAlign(CENTER)
    text(`The game is finished, ${loser} ran out of time`, padding , height/4, width - padding*2)
    pop()
    this.knapSpil.draw();
    if(loser === 'white')
      fill(0)
    else fill(255)
    text('MENU',width/2,height/2+10);
  }
  musKlikket(){
    manager.skiftGameState('menu')
  }
}