class Hero{
    constructor(image,top,left,size){
      this.Image=image;
      this.top  =top  ;
      this.left =left ;
      this.size =size ;
    }
    getHeroimage(top){
     return '<img width="'+ this.size + '"' +
     ' height="'+ this.size + '"' +
     ' src="' + this.Image +'"' +
     ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
    getmovieImage(){
      this.left += 140 ;
      console.log("qua phải"+ this.left);
    }
  }

 let hero = new Hero('duyen.png',20,30,250);
 function play(){
   if(hero.left < window.innerWidth){
   hero.getmovieImage();
 }
 
 document.getElementById('game').innerHTML=hero.getHeroimage();
 setTimeout(play, 500)
   
 }
 play();