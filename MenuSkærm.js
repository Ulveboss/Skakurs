class MenuSkærm{
  
  constructor(){
  this.knapSpil = new ButtonCircle(width/2, height/3, 100, color(175, 0, 0), color(100, 0, 0));
  this.knapTid = new ButtonCircle(width/2, height/1.5, 100, color(255), color(100));
    this.knapTidMinus = new ButtonCircle(width/2.7, height/1.2, 80, color(240), color(100))
    this.knapTidPlus = new ButtonCircle(width/1.6, height/1.2, 80, color(240), color(100));
  this.minutter = 5;
  }
  
  run(){
    background(220);
    this.knapSpil.draw();
    this.knapTid.draw();
    this.knapTidMinus.draw();
    this.knapTidPlus.draw();
    fill(200, 100, 100);
    textSize(24);
    text("MENU", width/2, height/8);
    fill(0);
    text("SKAK", width/2, height/3+5);
    text('-', width/2.7, height/1.2+10);
    text('+',width/1.6, height/1.2+10);
    text(this.minutter, width/2, height/1.5 + 10);
  }
  
  musKlikket(){
    if (this.knapSpil.overCircle()){
      let s = manager.skærme.spil;
      s.sætTid(this.minutter);
      manager.skiftGameState("spil");
    }
   // else if (this.knapTid.overCircle()){
     // this.minutter++;
    //}
    else if (this.knapTidMinus.overCircle()){
      if(this.minutter > 1)
      this.minutter--
    } 
    else if (this.knapTidPlus.overCircle()){
      this.minutter++
    }
  }
}