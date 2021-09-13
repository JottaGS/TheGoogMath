var xbot=[], ybot=[]
var xret=[], yret=[]

var xcontinuar=280, xvoltar=60
var ycontinuar=400, yvoltar=400

var num1=[], num2=[],num3
var posição=[]
var xcursor,ycursor
xcursor= 155
ycursor= 200

var xiniciar, yiniciar
xiniciar= 165
yiniciar= 260
var larg=190
var altu= 50
var cena= 1


//criando variaveis para o Jogo//
var imgbackg, ImgJogando, imgJheymison, ImgGood, ImgErrou, ImgAcertou
var click, win, victory, gameover

//Criando Vriaveis dos Botões do menu//;

var controle= false



function preload(){
  ImgErrada=loadImage('ImgErrada.jpg.png')
  ImgCerto=loadImage('ImgCerto.png')
  ImgAcertou=loadImage('ImgAcertou.jpg')
  ImgErrou=loadImage('ImgErrou.jpg')
  ImgGood=loadImage('ImgGood.png')
  ImgJogando=loadImage('ImgJogando.jpg')
  imgbackg=loadImage('Imgbackg.jpg')
  imgJheymison=loadImage('ImgJheymison.jpg')
  click=loadSound('Click.wav')
  gameover=loadSound('GameOver.wav')
  victory=loadSound('Victory!.wav')
  win=loadSound('Win sound.wav')
}
function setup() {
  createCanvas(500, 500);
  for(i=0;i<3;i++){
    xbot[i]= 165
    ybot[i]= 200+i*85
  }
  for(i=0;i<4;i++){
    xret[i]= 180
    yret[i]= 160+i*70
    
  }
}

function draw() {
  
   if(cena==1){
  background(imgbackg);
     image(ImgGood, 50, 0)
  textStyle(ITALIC)
  stroke(0,255,255)
  textSize(35)
    //cursor//
  fill(75,0,130);
  rect(xcursor,ycursor,larg,altu,10)
  //desenho botao 1//
  fill(255)
  
  text("Jogar",xbot[0]+40,ybot[0]+35) 
  //desenho botao2//
  text("Créditos",xbot[1]+18,ybot[1]+35);
  //eenhn6 botao 3//
  text("Instruções",xbot[2]+5,ybot[2]+35)
  push()
  textSize(16)
     text("Pressione ENTER para escolher",145,470)
     pop()
  //movendo o cursor//
  if(keyIsPressed == false){
    controle = false
  }
  if(controle==false){
  if(keyIsDown(DOWN_ARROW) && (ycursor<ybot[2] && ycursor>= ybot[0])){
     ycursor+= 85
    controle=true
     }
    
  if(keyIsDown(UP_ARROW) && (ycursor<=ybot[2] && ycursor> ybot[0])){
     ycursor-= 85
    controle=true
     }
  }
   //mudando de cena//
 if(ycursor==ybot[0] && keyCode==ENTER){
   click.play()
   cena=2
 }
    else if(ycursor==ybot[1] && keyCode==ENTER){
      click.play()
      cena=4
    }
    else if(ycursor==ybot[2] && keyCode==ENTER){
     click.play()
     cena=3
    }
}
   //Tela Jogar//
  if(cena==2){
    background(ImgJogando)
         image(ImgGood, 50, 35)
     noFill();
     textStyle(ITALIC)
     stroke(0,255,255)
     textSize(35)
    rect(xiniciar,yiniciar,larg,altu,20)
    push()
    fill(255)
    text("iniciar",xiniciar+50,yiniciar+35)
    pop()
    push()
    stroke(255)
    fill(255)
    textSize(15)
    text("Aperte ESC para voltar ao menu",140,425)
    pop()
    
    if(mouseX>=xiniciar && mouseX<= xiniciar+larg && mouseY>= yiniciar && mouseY <= yiniciar+altu){
      push()
      fill(75,0,130)
      rect(xiniciar,yiniciar,larg,altu,20)
      pop()
      push()
    fill(255)
    text("iniciar",xiniciar+50,yiniciar+35)
    pop()
      if(mouseIsPressed){
        click.play()
        cena=5}
    }
     if(keyIsDown(ESCAPE)){cena=1}
  }
  //Tela Instruções//
   if(cena==3){
    background(ImgJogando)
      push()
     textSize(15)
     stroke(255)
    text("Aperte ESC para voltar ao menu",140,425)
     pop()
     stroke(255)
    fill(255)
    textSize(20)
    text("Instruções",210,80)
    text("Este jogo foi desenvolvido para crianças do",60,110)
    text("ensino fundamental, do 1º ao 3º ano, com ",60,135)
    text("o intuito de praticar as operações básicas",60,160)
    text("de matemática e noções lógicas.",60,185)
    
    text("Como o jogo funciona ?", 120,215 )
    text("Aparecerá uma operação de matemática",60,245)
    text("básica na parte superior da tela, e",60,270)
    text("quatro opções para o resultado no centro da ",60,295)
    text("da tela. Você deverá usar o mouse para",60,320)
    text("escolher a resposta correta .",60,345)

    if(keyIsDown(ESCAPE)){cena=1}
  }
  //Tela Créditos//
  if(cena==4){
    background(ImgJogando)
    push()
    fill(255)
    stroke(255)
     textSize(15)
    text("Aperte ESC para voltar ao menu",140,425)
     pop()
    //texto de créditos)
    {
      
push()
    fill(255) 
    stroke(255)
    textSize(20)
    text("Jheymison Gonçalves dos Santos",95,285)
  
    text("Programador",190,310)
    noFill()
    image(imgJheymison,180,100)
      
    
    pop()
    }
    
    if(keyIsDown(ESCAPE)){cena=1}
  }
  //1 fase//
  if(cena==5){
    background(ImgJogando)
    push()
    fill(255)
    textStyle(ITALIC)
    textSize(25)
    stroke(0,255,255)
    text("FASE 1", 200,80)
    text("23 + 12 =", 190,130)
    pop()
    
    for(i=0;i<4;i++){
      noFill()
      stroke(0,255,255)
      textSize(25)
      rect(xret[i],yret[i],120,40,20)
      fill(255)
      text(13+12+i*4+i,xret[i]+45,yret[i]+30)
    }
    for(i=0;i<4;i++){
     if(mouseX>=xret[i] && mouseX<= xret[i]+120 && mouseY>= yret[i] && mouseY<= yret[i]+40){
    
       push()
       strokeWeight(6)
       noFill()
       stroke(0,255,255)
       rect(xret[i],yret[i],120,40,20)
      pop()
     } 
    if(mouseX>=xret[2] && mouseX<= xret[2]+120 && mouseY>= yret[2] && mouseY<= yret[2]+40){
      if(mouseIsPressed){
        win.play()
        click.play()
        cena=6
      }
    
  }
      if(mouseX>=xret[1] && mouseX<= xret[1]+120 && mouseY>= yret[1] && mouseY<= yret[1]+40 || mouseX>=xret[0] && mouseX<= xret[0]+120 && mouseY>= yret[0] && mouseY<= yret[0]+40 || mouseX>=xret[3] && mouseX<= xret[3]+120 && mouseY>= yret[3] && mouseY<= yret[3]+40 ){
        if(mouseIsPressed){
        click.play()
          gameover.play()
        cena=15
      }
    }
    }
  }
  //Tela acertou//
  if(cena==6){
      background(ImgAcertou)
    image(ImgCerto,xvoltar+138,280);
    textSize(30) 
    text("PARABÉNS, VOCÊ ACERTOU ! ",35,200)
    text("siga em frente ",150,250)
    text("voltar",xvoltar+30,yvoltar+32)
    text("Continuar",xcontinuar+10,ycontinuar+32)
    push()
    noFill()
    strokeWeight(4)
    rect(xvoltar,yvoltar,140,50,20)
    rect(xcontinuar,ycontinuar,150,50,20)
    pop()
    if(mouseX>=xvoltar && mouseX<= xvoltar+140 && mouseY>= yvoltar && mouseY<= yvoltar+50){
      push()
      noFill()
      strokeWeight(4)
      stroke(0,255,255)
      rect(xvoltar,yvoltar,140,50,20)
      pop()
      if(mouseIsPressed){
        click.play()
        cena=1
      stroke(0)
      }
    }
    if(mouseX>=xcontinuar && mouseX<= xcontinuar+150 && mouseY>= ycontinuar && mouseY<= ycontinuar+50){
      push()
      noFill()
      strokeWeight(4)
      stroke(0,255,255)
      rect(xcontinuar,ycontinuar,150,50,20)
      pop()
       if(mouseIsPressed){
         click.play()
        cena=7
          stroke(0)
      }
  }
  }
  //Fase 2//
  if(cena==7){
    background(ImgJogando)
    push()
    fill(255)
    textStyle(ITALIC)
    textSize(25)
    stroke(0,255,255)
    text("FASE 2", 200,80)
    text("36 - 21 =", 190,130)
    pop()
    
    for(i=0;i<4;i++){
      noFill()
      stroke(0,255,255)
      textSize(25)
      rect(xret[i],yret[i],120,40,20)
      fill(255)
      text(36-21+i*4+i,xret[i]+45,yret[i]+30)
    }
    for(i=0;i<4;i++){
     if(mouseX>=xret[i] && mouseX<= xret[i]+120 && mouseY>= yret[i] && mouseY<= yret[i]+40){
    
       push()
       strokeWeight(6)
       noFill()
       stroke(0,255,255)
       rect(xret[i],yret[i],120,40,20)
      pop()
     } 
    if(mouseX>=xret[0] && mouseX<= xret[0]+120 && mouseY>= yret[0] && mouseY<= yret[0]+40){
      if(mouseIsPressed){
        win.play()
        click.play()
        cena=8
      }
    
  }
      if(mouseX>=xret[1] && mouseX<= xret[1]+120 && mouseY>= yret[1] && mouseY<= yret[1]+40 || mouseX>=xret[2] && mouseX<= xret[2]+120 && mouseY>= yret[2] && mouseY<= yret[2]+40 || mouseX>=xret[3] && mouseX<= xret[3]+120 && mouseY>= yret[3] && mouseY<= yret[3]+40 ){
        if(mouseIsPressed){
          gameover.play()
          click.play()
        cena=15
      }
    }
    }
  }
  //tela acertou 2//
  if(cena==8){
  background(ImgAcertou);
     image(ImgCerto,xvoltar+138,280);
    textSize(30) 
    text("PARABÉNS, VOCÊ ACERTOU ! ",35,200)
    text("siga em frente ",150,250)
    text("voltar",xvoltar+30,yvoltar+32)
    text("Continuar",xcontinuar+10,ycontinuar+32)
    push()
    noFill()
    strokeWeight(4)
    rect(xvoltar,yvoltar,140,50,20)
    rect(xcontinuar,ycontinuar,150,50,20)
    pop()
    if(mouseX>=xvoltar && mouseX<= xvoltar+140 && mouseY>= yvoltar && mouseY<= yvoltar+50){
      push()
      noFill()
      strokeWeight(4)
      stroke(0,255,255)
      rect(xvoltar,yvoltar,140,50,20)
      pop()
      if(mouseIsPressed){
        click.play()
        cena=1
      stroke(0)
      }
    }
    if(mouseX>=xcontinuar && mouseX<= xcontinuar+150 && mouseY>= ycontinuar && mouseY<= ycontinuar+50){
      push()
      noFill()
      strokeWeight(4)
      stroke(0,255,255)
      rect(xcontinuar,ycontinuar,150,50,20)
      pop()
       if(mouseIsPressed){
         click.play()
        cena=9
          stroke(0)
      }
  }
  }
//fase 3//
if(cena==9){
    background(ImgJogando)
    push()
    fill(255)
    textStyle(ITALIC)
    textSize(25)
    stroke(0,255,255)
    text("FASE 3", 200,80)
    text("6 x 3 =", 200,130)
    pop()
    
    for(i=0;i<4;i++){
      noFill()
      stroke(0,255,255)
      textSize(25)
      rect(xret[i],yret[i],120,40,20)
      fill(255)
      text(3*3+3*i,xret[i]+45,yret[i]+30)
    }
    for(i=0;i<4;i++){
     if(mouseX>=xret[i] && mouseX<= xret[i]+120 && mouseY>= yret[i] && mouseY<= yret[i]+40){
    
       push()
       strokeWeight(6)
       noFill()
       stroke(0,255,255)
       rect(xret[i],yret[i],120,40,20)
      pop()
     } 
    if(mouseX>=xret[3] && mouseX<= xret[3]+120 && mouseY>= yret[3] && mouseY<= yret[3]+40){
      if(mouseIsPressed){
        win.play()
        click.play()
        cena=10
      }
    
  }
      if(mouseX>=xret[1] && mouseX<= xret[1]+120 && mouseY>= yret[1] && mouseY<= yret[1]+40 || mouseX>=xret[2] && mouseX<= xret[2]+120 && mouseY>= yret[2] && mouseY<= yret[2]+40 || mouseX>=xret[0] && mouseX<= xret[0]+120 && mouseY>= yret[0] && mouseY<= yret[0]+40 ){
        if(mouseIsPressed){
          click.play()
          gameover.play()
        cena=15
      }
    }
    }
}
//tela acertou 3//
   if(cena==10){
  background(ImgAcertou);
      image(ImgCerto,xvoltar+138,280);
    textSize(30) 
    text("PARABÉNS, VOCÊ ACERTOU ! ",35,200)
    text("siga em frente ",150,250)
    text("voltar",xvoltar+30,yvoltar+32)
    text("Continuar",xcontinuar+10,ycontinuar+32)
    push()
    noFill()
    strokeWeight(4)
    rect(xvoltar,yvoltar,140,50,20)
    rect(xcontinuar,ycontinuar,150,50,20)
    pop()
    if(mouseX>=xvoltar && mouseX<= xvoltar+140 && mouseY>= yvoltar && mouseY<= yvoltar+50){
      push()
      noFill()
      strokeWeight(4)
      stroke(0,255,255)
      rect(xvoltar,yvoltar,140,50,20)
      pop()
      if(mouseIsPressed){
        click.play()
        cena=2
      stroke(0)
      }
    }
    if(mouseX>=xcontinuar && mouseX<= xcontinuar+150 && mouseY>= ycontinuar && mouseY<= ycontinuar+50){
      push()
      noFill()
      strokeWeight(4)
      stroke(0,255,255)
      rect(xcontinuar,ycontinuar,150,50,20)
      pop()
       if(mouseIsPressed){
         click.play()
        cena=11
          stroke(0)
      }
  }
  }
  //Fase 4 //
  if(cena==11){
    background(ImgJogando)
    push()
    fill(255)
    textStyle(ITALIC)
    textSize(25)
    stroke(0,255,255)
    text("FASE 4", 200,80)
    text("36 ➗ 6 =", 192,130)
    pop()
    
    for(i=0;i<4;i++){
      noFill()
      stroke(0,255,255)
      textSize(25)
      rect(xret[i],yret[i],120,40,20)
      fill(255)
      text(24/(2+i),xret[i]+45,yret[i]+30)
    }
    for(i=0;i<4;i++){
     if(mouseX>=xret[i] && mouseX<= xret[i]+120 && mouseY>= yret[i] && mouseY<= yret[i]+40){
    
       push()
       strokeWeight(6)
       noFill()
       stroke(0,255,255)
       rect(xret[i],yret[i],120,40,20)
      pop()
     } 
    if(mouseX>=xret[2] && mouseX<= xret[2]+120 && mouseY>= yret[2] && mouseY<= yret[2]+40){
      if(mouseIsPressed){
        win.play()
        click.play()
        cena=12
      }
    
  }
      if(mouseX>=xret[1] && mouseX<= xret[1]+120 && mouseY>= yret[1] && mouseY<= yret[1]+40 || mouseX>=xret[3] && mouseX<= xret[3]+120 && mouseY>= yret[3] && mouseY<= yret[3]+40 || mouseX>=xret[0] && mouseX<= xret[0]+120 && mouseY>= yret[0] && mouseY<= yret[0]+40 ){
        if(mouseIsPressed){
          click.play()
          gameover.play()
        cena=15
      }
    }
    }
}
  //tela acertou 4//
   if(cena==12){
  background(ImgAcertou);
      image(ImgCerto,xvoltar+138,280);
    textSize(30) 
    text("PARABÉNS, VOCÊ ACERTOU ! ",35,200)
    text("siga em frente ",150,250)
    text("voltar",xvoltar+30,yvoltar+32)
    text("Continuar",xcontinuar+10,ycontinuar+32)
    push()
    noFill()
    strokeWeight(4)
    rect(xvoltar,yvoltar,140,50,20)
    rect(xcontinuar,ycontinuar,150,50,20)
    pop()
    if(mouseX>=xvoltar && mouseX<= xvoltar+140 && mouseY>= yvoltar && mouseY<= yvoltar+50){
      push()
      noFill()
      strokeWeight(4)
      stroke(0,255,255)
      rect(xvoltar,yvoltar,140,50,20)
      pop()
      if(mouseIsPressed){
        click.play()
        cena=1
      stroke(0)
      }
    }
    if(mouseX>=xcontinuar && mouseX<= xcontinuar+150 && mouseY>= ycontinuar && mouseY<= ycontinuar+50){
      push()
      noFill()
      strokeWeight(4)
      stroke(0,255,255)
      rect(xcontinuar,ycontinuar,150,50,20)
      pop()
       if(mouseIsPressed){
         click.play()
        cena=13
          stroke(0)
      }
  }
  }
  //Fase 5 //
  if(cena==13){
    background(ImgJogando)
    push()
    fill(255)
    textStyle(ITALIC)
    textSize(25)
    stroke(0,255,255)
    text("FASE FINAL", 165,80)
    text("(12+5)x2 =", 175,130)
    pop()
    
    for(i=0;i<4;i++){
      noFill()
      stroke(0,255,255)
      textSize(25)
      rect(xret[i],yret[i],120,40,20)
      fill(255)
      text((15+2)*i,xret[i]+45,yret[i]+30)
    }
    for(i=0;i<4;i++){
     if(mouseX>=xret[i] && mouseX<= xret[i]+120 && mouseY>= yret[i] && mouseY<= yret[i]+40){
    
       push()
       strokeWeight(6)
       noFill()
       stroke(0,255,255)
       rect(xret[i],yret[i],120,40,20)
      pop()
     } 
    if(mouseX>=xret[2] && mouseX<= xret[2]+120 && mouseY>= yret[2] && mouseY<= yret[2]+40){
      if(mouseIsPressed){
        click.play()
        victory.play()
        cena=14
      }
    
  }
      if(mouseX>=xret[3] && mouseX<= xret[3]+120 && mouseY>= yret[3] && mouseY<= yret[3]+40 || mouseX>=xret[1] && mouseX<= xret[1]+120 && mouseY>= yret[1] && mouseY<= yret[1]+40 || mouseX>=xret[0] && mouseX<= xret[0]+120 && mouseY>= yret[0] && mouseY<= yret[0]+40 ){
        if(mouseIsPressed){
          gameover.play()
          click.play()
        cena=15
      }
    }
    }
}
   //tela acertou 5//
   if(cena==14){
  background(ImgAcertou);
      image(ImgCerto,xvoltar+138,280);
    textSize(30) 
    text("PARABÉNS, VOCÊ GANHOU ! ",35,200)
    text("novo mestre da matemática. ",60,250)
    text("voltar ao menu",xvoltar+90,yvoltar+32)
    push()
    noFill()
    strokeWeight(4)
    rect(xvoltar+80,yvoltar,220,50,20)
    pop()
    if(mouseX>=xvoltar+80 && mouseX<= xvoltar+300 && mouseY>= yvoltar && mouseY<= yvoltar+50){
      push()
      noFill()
      strokeWeight(4)
      stroke(0,255,255)
      rect(xvoltar+80,yvoltar,220,50,20)
      pop()
      if(mouseIsPressed){
        click.play()
        cena=1
      stroke(0)
      }
    }
  }
  // Tela Errou //
  if(cena==15){
   background(ImgErrou);
      textSize(30) 
    image(ImgErrada,xvoltar+138,280)
    text("QUE PENA, VOCÊ PERDEU ! ",35,200)
    text("tente novamente. ",130,250)
    text("voltar ao menu",xvoltar+90,yvoltar+32)
    push()
    noFill()
    strokeWeight(4)
    rect(xvoltar+80,yvoltar,220,50,20)
    pop()
    if(mouseX>=xvoltar+80 && mouseX<= xvoltar+320 && mouseY>= yvoltar && mouseY<= yvoltar+50){
      push()
      noFill()
      strokeWeight(4)
      stroke(0,255,255)
      rect(xvoltar+80,yvoltar,220,50,20)
      pop()
      if(mouseIsPressed){
        click.play()
        cena=1
      stroke(0)
      }
    }  
    if(keyIsDown(ESCAPE)){cena=1}
  } 
}
