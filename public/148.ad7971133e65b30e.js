"use strict";(self.webpackChunksaladejuegos=self.webpackChunksaladejuegos||[]).push([[148],{1148:(Z,f,c)=>{c.r(f),c.d(f,{JuegosModule:()=>O});var u=c(6895),m=c(7001),t=c(4650);let x=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-juegos"]],decls:14,vars:0,consts:[[1,"body"],[1,"background-one"],[1,"link-container"],["routerLink","/juegos/preguntados",1,"link-one"],[1,"background-two","link-container"],["routerLink","/juegos/ahorcado",1,"link-two"],[1,"background-three","link-container"],["routerLink","/juegos/mayormenor",1,"link-three"],[1,"background-fourth","link-container"],["routerLink","/juegos/mijuego",1,"link-fourth"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),t._uU(4,"Preguntados"),t.qZA()()(),t.TgZ(5,"div",4)(6,"a",5),t._uU(7,"Ahorcado"),t.qZA()(),t.TgZ(8,"div",6)(9,"a",7),t._uU(10,"Mayor o menor"),t.qZA()(),t.TgZ(11,"div",8)(12,"a",9),t._uU(13,"Mi juego"),t.qZA()()())},dependencies:[m.rH],styles:['.body[_ngcontent-%COMP%]{margin:0;height:100vh;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:1fr}.background-one[_ngcontent-%COMP%], .background-two[_ngcontent-%COMP%], .background-three[_ngcontent-%COMP%]{background-color:#151515}.link-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;position:relative;z-index:0}a[_ngcontent-%COMP%]{font-family:Bungee,cursive;font-size:2.5em}.link-one[_ngcontent-%COMP%]{color:#53d9d1;transition:color 1s cubic-bezier(.32,0,.67,0);line-height:1em}.link-one[_ngcontent-%COMP%]:hover{color:#111;transition:color 1s cubic-bezier(.33,1,.68,1)}.link-one[_ngcontent-%COMP%]:before{content:"";position:absolute;z-index:-1;width:100%;height:100%;top:0;right:0;background-color:#53d9d1;clip-path:circle(0% at 50% 50%);transition:clip-path 1s cubic-bezier(.65,0,.35,1)}.link-one[_ngcontent-%COMP%]:hover:before{clip-path:circle(100% at 50% 50%)}.link-one[_ngcontent-%COMP%]:after{content:"";position:absolute;z-index:-1;width:100%;height:100%;top:0;right:0;background-color:#151515;clip-path:polygon(40% 0%,60% 0%,60% 0%,40% 0%,40% 100%,60% 100%,60% 100%,40% 100%);transition:clip-path 1s cubic-bezier(.65,0,.35,1)}.link-one[_ngcontent-%COMP%]:hover:after{clip-path:polygon(40% 10%,60% 10%,60% 35%,40% 35%,40% 90%,60% 90%,60% 65%,40% 65%)}.link-two[_ngcontent-%COMP%]{color:#f27b9b;transition:color 1s cubic-bezier(.32,0,.67,0)}.link-two[_ngcontent-%COMP%]:hover{color:#111;transition:color 1s cubic-bezier(.33,1,.68,1)}.link-two[_ngcontent-%COMP%]:before{content:"";position:absolute;z-index:-2;width:100%;height:100%;top:0;right:0;clip-path:polygon(0% -20%,100% -30%,100% -10%,0% 0%,0% 130%,100% 120%,100% 100%,0% 110%);background-color:#f27b9b;transition:clip-path 1s cubic-bezier(.25,1,.5,1)}.link-two[_ngcontent-%COMP%]:hover:before{clip-path:polygon(0% 10%,100% 0%,100% 20%,0% 30%,0% 100%,100% 90%,100% 70%,0% 80%)}.link-two[_ngcontent-%COMP%]:after{content:"";position:absolute;z-index:-1;width:5ch;height:5ch;top:50%;right:50%;transform:translate(50%,-50%) rotate(0) scale(0);transition:transform 1s ease;background-color:#f27b9b}.link-two[_ngcontent-%COMP%]:hover:after{transform:translate(50%,-50%) rotate(135deg) scale(1)}.link-three[_ngcontent-%COMP%]{color:#eb7132}.link-three[_ngcontent-%COMP%]:after{content:"";position:absolute;z-index:2;width:50%;height:100%;top:0%;left:0%;transform:translateY(-50%) scaleY(0);transition:transform 1s ease;mix-blend-mode:difference;clip-path:polygon(20% 60%,100% 60%,100% 40%,20% 40%,20% 0%,60% 0%,60% 20%,20% 20%);background-color:#eb7132}.link-three[_ngcontent-%COMP%]:hover:after{transform:translate(0) scaleY(1)}.link-three[_ngcontent-%COMP%]:before{content:"";position:absolute;z-index:2;width:50%;height:100%;bottom:0%;right:0%;transform:translateY(50%) scaleY(0);transition:transform 1s ease;mix-blend-mode:difference;clip-path:polygon(80% 40%,0% 40%,0% 60%,80% 60%,80% 100%,40% 100%,40% 80%,80% 80%);background-color:#eb7132}.link-three[_ngcontent-%COMP%]:hover:before{transform:translate(0) scaleY(1)}.link-fourth[_ngcontent-%COMP%]{color:#7e56ed;transition:color 1s cubic-bezier(.32,0,.67,0);line-height:1em}.link-fourth[_ngcontent-%COMP%]:hover{color:#111;transition:color 1s cubic-bezier(.33,1,.68,1)}.link-fourth[_ngcontent-%COMP%]:before{content:"";position:absolute;z-index:-1;width:100%;height:100%;top:0;right:0;background-color:#7e56ed;clip-path:circle(0% at 50% 50%);transition:clip-path 1s cubic-bezier(.65,0,.35,1)}.link-fourth[_ngcontent-%COMP%]:hover:before{clip-path:circle(100% at 50% 50%)}.link-fourth[_ngcontent-%COMP%]:after{content:"";position:absolute;z-index:-1;width:100%;height:100%;top:0;right:0;background-color:#151515;clip-path:polygon(50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%);transition:clip-path 1s cubic-bezier(.65,0,.35,1)}.link-fourth[_ngcontent-%COMP%]:hover:after{clip-path:polygon(20% 45%,10% 40%,30% 30%,40% 35%,60% 35%,70% 30%,90% 40%,80% 45%,60% 35%,40% 35%,20% 45%,20% 55%,10% 60%,30% 70%,40% 65%,60% 65%,70% 70%,90% 60%,80% 55%,60% 65%,40% 65%,20% 55%)}']}),i})();var _=c(5861),p=c(4359);function v(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){const r=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.attemptWithLetter(r.letter))}),t._uU(1),t.qZA()}if(2&i){const e=n.$implicit;t.xp6(1),t.hij(" ",e.letter," ")}}let y=(()=>{class i{constructor(e){this.listado=e,this.ALPHABET="ABCDEFGHIJKLMN\xd1OPQRSTUVWXYZ",this.MAX_ATTEMPTS=6,this.MASK_CHAR="_",this.mensaje="",this.displayedWord="",this.letra="",this.palabras=["casa","bebida","gato","perro","elefante","mesa","silla","computadora","typescript","javascript"],this.palabrita="",this.letters=[],this.hiddenWord=[],this.remainingAttempts=0,this.resultado="",this.movimientos=0,this.start="visible",this.palabrita=""}ngOnInit(){}resetGame(){this.resetAttempts(),this.setupKeys(),this.chooseWord(),this.imagePath(),this.displayWord()}checkGameStatus(){if(this.playerWins()){this.mensaje="Ganaste!. La palabra era "+this.getUnhiddenWord(),this.resultado="visible";let e={tiempo:"N/A",resultado:"Gano",clicks:this.movimientos.toString(),juego:"Ahorcado",correctas:"N/A",errores:(this.MAX_ATTEMPTS-this.remainingAttempts).toString()};this.listado.addResultado(e)}if(this.playerLoses()){this.mensaje="Perdiste. La palabra era "+this.getUnhiddenWord(),this.resultado="visible";let e={tiempo:"N/A",resultado:"Perdio",clicks:this.movimientos.toString(),correctas:"N/A",juego:"Ahorcado",errores:(this.MAX_ATTEMPTS-this.remainingAttempts).toString()};this.listado.addResultado(e)}}getUnhiddenWord(){let e="";for(const o of this.hiddenWord)e+=o.letter;return e}playerWins(){for(const e of this.hiddenWord)if(e.hidden)return!1;return!0}playerLoses(){return this.remainingAttempts<=0}imagePath(){this.imagen=`/assets/imagenes/ahorcado/Ahorcado-${this.MAX_ATTEMPTS-this.remainingAttempts}.png`}resetAttempts(){this.displayedWord="",this.movimientos=0,this.remainingAttempts=this.MAX_ATTEMPTS}chooseWord(){var e=this;return(0,_.Z)(function*(){e.palabrita="";let o=e.palabras[Math.floor(Math.random()*e.palabras.length)];e.palabrita=o,console.log("Palabra: "+o),e.prepareWord(o)})()}prepareWord(e){e=e.toUpperCase(),this.hiddenWord=[];for(const o of e)this.hiddenWord.push({letter:o,hidden:!0})}displayWord(){let e="";for(const o of this.hiddenWord)e+=o.hidden?this.MASK_CHAR:o.letter,e+=" ";this.displayedWord=e}setupKeys(){this.letters=[];for(let e=0;e<this.ALPHABET.length;e++)this.letters.push({letter:this.ALPHABET[e],disabled:!1})}letterExistsInWord(e){for(const o of this.hiddenWord)if(o.letter===e)return!0;return!1}discoverLetter(e){for(const o in this.hiddenWord)this.hiddenWord[o].letter===e&&(this.hiddenWord[o].hidden=!1);this.displayWord()}attemptWithLetter(e){this.movimientos+=1,this.letters=this.letters.filter(function o(s){return s.letter!=e}),this.letterExistsInWord(e)?this.discoverLetter(e):(this.remainingAttempts-=1,this.imagePath()),this.checkGameStatus()}clickBoton(){this.start="",this.resultado="",this.letra="",this.resetGame()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.L))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-ahorcado"]],decls:21,vars:12,consts:[[1,"container-fluid"],["id","app",1,"row"],[3,"click"],["id","victory-text",3,"click"],[1,"overlay-text-small"],[1,"col-12","text-center"],[1,"text-success"],[1,"displayed-word"],[1,"h4","text-danger"],["alt","",1,"img-fluid",3,"src"],["class","btn btn-success m-1 btn-lg",3,"click",4,"ngFor","ngForOf"],[1,"btn","btn-success","m-1","btn-lg",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"main",0)(1,"div",1)(2,"div",2),t.NdJ("click",function(){return o.clickBoton()}),t._uU(3," Click para empezar "),t.qZA(),t.TgZ(4,"div",3),t.NdJ("click",function(){return o.clickBoton()}),t.TgZ(5,"span",4),t._uU(6),t.qZA(),t.TgZ(7,"span",4),t._uU(8,"Click para jugar de nuevo"),t.qZA()(),t.TgZ(9,"div",5)(10,"h1",6),t._uU(11,"Ahorcado"),t.qZA(),t.TgZ(12,"h3",7),t._uU(13),t.qZA(),t._uU(14),t.TgZ(15,"p",8),t._uU(16),t.qZA(),t._UZ(17,"br")(18,"img",9),t.qZA(),t.TgZ(19,"div",5),t.YNc(20,v,2,1,"button",10),t.qZA()()()),2&e&&(t.xp6(2),t.Gre("overlay-text ",o.start,""),t.xp6(2),t.Gre("overlay-text ",o.resultado,""),t.xp6(2),t.hij(" ",o.mensaje,""),t.xp6(7),t.hij("Palabra: ",o.displayedWord,""),t.xp6(1),t.hij(" ",o.palabrita," "),t.xp6(2),t.hij("Intentos restantes: ",o.remainingAttempts,""),t.xp6(2),t.s9C("src",o.imagen,t.LSH),t.xp6(2),t.Q6J("ngForOf",o.letters))},dependencies:[u.sg],styles:['@import"https://fonts.googleapis.com/css2?family=Montserrat&display=swap";body[_ngcontent-%COMP%]{padding-bottom:70px;padding-top:70px;font-family:Montserrat,sans-serif}.displayed-word[_ngcontent-%COMP%]{letter-spacing:4px}.img-fluid[_ngcontent-%COMP%]{max-width:20%;margin-bottom:20px}.overlay-text[_ngcontent-%COMP%]{inset:0;z-index:100;display:none;position:fixed;justify-content:center;align-items:center;flex-direction:column;color:#ff6d00;font-family:Creepy,serif;font-size:4em;transition:background-color .5s,font-size .5s}.overlay-text.visible[_ngcontent-%COMP%]{display:flex;animation:_ngcontent-%COMP%_overlay-grow .5s forwards}@keyframes _ngcontent-%COMP%_overlay-grow{0%{background-color:#0000;font-size:0}to{background-color:#000c;font-size:6em}}']}),i})();function k(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div",7)(1,"div",8),t._uU(2),t._UZ(3,"br")(4,"br"),t._uU(5),t._UZ(6,"br")(7,"br"),t.TgZ(8,"div",9),t._uU(9),t._UZ(10,"br")(11,"br"),t.qZA()(),t.TgZ(12,"div",10)(13,"div",11)(14,"div",12)(15,"h2",13),t._uU(16),t.qZA()()(),t.TgZ(17,"div",14)(18,"button",15),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.verificar("mayor"))}),t.TgZ(19,"span",16),t._uU(20,"Mayor"),t.qZA()(),t.TgZ(21,"button",15),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.verificar("menor"))}),t.TgZ(22,"span",16),t._uU(23,"Menor"),t.qZA()()()()()}if(2&i){const e=t.oxw();t.xp6(2),t.hij(" Puntaje: ",e.correctas," "),t.xp6(3),t.hij(" Preguntas erroneas: ",e.incorrectas," "),t.xp6(4),t.hij(" ",e.mensaje," "),t.xp6(7),t.Oqu(e.numeroActual)}}let C=(()=>{class i{constructor(e){this.listado=e,this.numero=0,this.numeroNuevo="?",this.numeroActual=0,this.incorrectas=0,this.correctas=0,this.repondidas=0,this.jugando=!1,this.resultadoText="",this.resultado={},this.victoria="",this.start="visible",this.perdiste="",this.mensaje=""}ngOnInit(){}verificar(e){for("?"===this.numeroNuevo&&(this.numeroNuevo=this.generarnumero()),this.repondidas++,5===this.repondidas&&(this.jugando=!1,this.terminarjugo()),"mayor"===e&&(this.numeroActual>this.numeroNuevo?(this.correctas++,this.mensaje="Correcto "+this.numeroActual+" es mayor que "+this.numeroNuevo):(this.incorrectas++,this.mensaje="Incorrecto "+this.numeroActual+" es menor que "+this.numeroNuevo)),"menor"===e&&(this.numeroActual<this.numeroNuevo?(this.correctas++,this.mensaje="Correcto "+this.numeroActual+" es menor que "+this.numeroNuevo):(this.incorrectas++,this.mensaje="Correcto "+this.numeroActual+" es mayor que "+this.numeroNuevo)),this.numeroActual=this.numeroNuevo,this.numero=this.generarnumero();this.numero===this.numeroActual;)this.numero=this.generarnumero();this.numeroNuevo=this.numero}generarnumero(){return Math.floor(12*Math.random()+1)}terminarjugo(){this.incorrectas>2&&this.jugando?(this.victoria="visible",this.resultadoText="Perdiste"):(this.resultadoText="Ganaste",this.victoria="visible"),this.resultado={tiempo:"N/A",resultado:this.resultadoText,errores:this.incorrectas,clicks:"N/A",correctas:this.correctas,juego:"Mayor o Menor"},this.listado.addResultado(this.resultado),this.numero=0,this.numeroNuevo=0,this.numeroActual=0}clickBoton(){this.jugando=!0,this.numero=0,this.start="",this.numeroNuevo="?",this.numeroActual=0,this.incorrectas=0,this.correctas=0,this.repondidas=0,this.perdiste="",this.resultadoText="",this.resultadoText="",this.victoria="",this.numeroActual=this.generarnumero()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.L))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-mayoromenor"]],decls:13,vars:10,consts:[[1,"juegoContainer"],[1,"juego"],[1,"game"],[3,"click"],["id","victory-text",3,"click"],[1,"overlay-text-small"],["class","bodyJuego",4,"ngIf"],[1,"bodyJuego"],["id","puntaje",1,"puntaje"],[1,"puntaje"],[1,"cards"],[1,"card"],[1,"face","face2"],[1,"faceh2"],[1,"botones"],[1,"fill",3,"click"],[1,"pan"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.NdJ("click",function(){return o.clickBoton()}),t._uU(4," Click para empezar "),t.qZA(),t.TgZ(5,"div",4),t.NdJ("click",function(){return o.clickBoton()}),t._uU(6),t._UZ(7,"br"),t._uU(8),t.TgZ(9,"span",5),t._UZ(10,"br"),t._uU(11,"Click para jugar de nuevo"),t.qZA()(),t.YNc(12,k,24,4,"div",6),t.qZA()()()),2&e&&(t.xp6(3),t.Gre("overlay-text ",o.start,""),t.xp6(2),t.Gre("overlay-text ",o.victoria,""),t.xp6(1),t.AsE(" ",o.resultadoText," tenes ",o.correctas," respuestas correctas "),t.xp6(2),t.hij(" y ",o.incorrectas," incorrectas "),t.xp6(4),t.Q6J("ngIf",o.jugando))},dependencies:[u.O5],styles:['@import"https://fonts.googleapis.com/css2?family=Righteous&display=swap";.bodyJuego[_ngcontent-%COMP%]{padding:0;margin:0;text-align:center;font-family:calibri;font-size:120%;display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;font-family:Creepy,serif}.puntaje[_ngcontent-%COMP%]{padding:10px;color:#075072;font-size:50px}.overlay-text[_ngcontent-%COMP%], .h2l[_ngcontent-%COMP%]{inset:0;z-index:100;display:none;position:fixed;justify-content:center;align-items:center;flex-direction:column;color:#c1ff83;font-family:Creepy,serif;transition:background-color .5s,font-size .5s}.overlay-text-small[_ngcontent-%COMP%]{font-size:.3em}.overlay-text.visible[_ngcontent-%COMP%]{display:flex;animation:_ngcontent-%COMP%_overlay-grow .5s forwards}@keyframes _ngcontent-%COMP%_overlay-grow{0%{background-color:#0000;font-size:0}to{background-color:#000c;font-size:6em}}.fill[_ngcontent-%COMP%]{font-size:20px;font-weight:200;letter-spacing:1px;padding:13px 50px;outline:0;border:1px solid black;cursor:pointer;position:relative;background-color:#0000;margin:20px}.fill[_ngcontent-%COMP%]:after{content:"";background-color:#4cffff;width:100%;z-index:-1;position:absolute;height:100%;top:7px;left:7px;transition:.2s;font-size:10em}.fill[_ngcontent-%COMP%]:hover:after{top:0;left:0}.card[_ngcontent-%COMP%]{position:relative;width:300px;height:400px;margin:0 auto;background:#000;box-shadow:0 15px 60px #00000080;background-image:linear-gradient(40deg,#faf894 0%,#fa99fc 45%,#9dfffd 100%);border-radius:15px}.cards[_ngcontent-%COMP%]{max-width:100vw;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:35px;margin:0 auto}.face[_ngcontent-%COMP%]{bottom:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.faceh2[_ngcontent-%COMP%]{margin:0;padding:0;font-size:10em;color:#fff;transition:.5s;text-shadow:0 2px 5px rgba(0,0,0,.2);z-index:10}.o[_ngcontent-%COMP%]{margin:50px}.botones[_ngcontent-%COMP%]{display:grid}.pan[_ngcontent-%COMP%]{font-size:4em;color:#fff}']}),i})();class l{constructor(n,e){this.x=n,this.y=e}getTopBox(){return 0===this.y?null:new l(this.x,this.y-1)}getRightBox(){return 2===this.x?null:new l(this.x+1,this.y)}getBottomBox(){return 2===this.y?null:new l(this.x,this.y+1)}getLeftBox(){return 0===this.x?null:new l(this.x-1,this.y)}getNextdoorBoxes(){return[this.getTopBox(),this.getRightBox(),this.getBottomBox(),this.getLeftBox()].filter(n=>null!==n)}getRandomNextdoorBox(){const n=this.getNextdoorBoxes();return n[Math.floor(Math.random()*n.length)]}}class d{static swapBoxes(n,e,o){let s=n[e.y][e.x];return n[e.y][e.x]=n[o.y][o.x],n[o.y][o.x]=s,n}static isSolved(n){return 1===n[0][0]&&2===n[0][1]&&3===n[0][2]&&4===n[1][0]&&5===n[1][1]&&6===n[1][2]&&7===n[2][0]&&8===n[2][1]&&0===n[2][2]}static getRandomGrid(){let n=[[1,2,3],[4,5,6],[7,8,0]],e=new l(2,2);for(let o=0;o<1e3;o++){const s=e.getRandomNextdoorBox();d.swapBoxes(n,e,s),e=s}return d.isSolved(n)?this.getRandomGrid():n}}class h{constructor(n,e,o,s){this.move=0,this.time=0,this.status="",this.grid=n,this.move=e,this.time=o,this.status=s}static ready(){return new h([[0,0,0],[0,0,0],[0,0,0]],0,0,"listo")}static start(){return new h(d.getRandomGrid(),0,0,"jugando")}}function M(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"button",3),t.NdJ("click",function(){const r=t.CHM(e).index,a=t.oxw();return t.KtG(a.handleClickBox(r))}),t._uU(1),t.qZA()}if(2&i){const e=n.index,o=t.oxw();t.xp6(1),t.hij(" ",o.contenido[e]," ")}}let P=(()=>{class i{constructor(e){this.listado=e,this.boton="",this.contenido=new Array(9),this.mensaje="",this.victoria="",this.nuevoJuego(h.ready()),this.grupoCajas=[],this.contenido=[,1,2,3,4,5,6,7,8],this.boton="Jugar",this.start="visible"}ngOnInit(){}nuevoJuego(e){this.estado=e,this.tickId=null,this.tick=this.tick.bind(this)}tick(){this.estado.time=this.estado.time+1}setState(e){this.estado=e,this.render()}handleClickBox(e){let o=this.grupoCajas[e],r=o.getNextdoorBoxes().find(a=>0===this.estado.grid[a.y][a.x]);if(r){let a=d.swapBoxes(this.estado.grid,o,r);d.isSolved(a)?(clearInterval(this.tickId),this.setState({grid:a,move:this.estado.move+1,time:this.estado.time,status:"gano"})):this.setState({grid:a,move:this.estado.move+1,time:this.estado.time,status:this.estado.status})}}render(){this.contador=0;for(let e=0;e<3;e++)for(let o=0;o<3;o++){if("jugando"===this.estado.status){let s=new l(o,e);this.grupoCajas.push(s),this.boton="Reiniciar"}this.contenido[this.contador]=0===this.estado.grid[e][o]?"":this.estado.grid[e][o].toString(),this.contador++}"listo"===this.estado.status&&(this.boton="Jugar",this.start="visible"),"jugando"===this.estado.status&&(this.boton="Reiniciar"),"gano"===this.estado.status&&(this.boton="Jugar",this.victoria="visible",this.resultado={tiempo:this.estado.time.toString()+" seg",resultado:"Gano",errores:"N/A",clicks:this.estado.move.toString(),correctas:"N/A",juego:"Rompecabezas"},this.listado.addResultado(this.resultado))}clickBoton(){clearInterval(this.tickId),this.tickId=setInterval(this.tick,1e3),this.setState(h.start()),this.start="",this.victoria="",this.render()}ordenar(){this.setState({grid:[[1,2,3],[4,5,0],[7,8,6]],move:this.estado.move+1,time:this.estado.time,status:this.estado.status})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.L))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-mijuego"]],decls:23,vars:10,consts:[[1,"juegoContainer"],[1,"juego"],[1,"game"],[3,"click"],["id","victory-text",3,"click"],[1,"overlay-text-small"],[1,"grid"],[3,"click",4,"ngFor","ngForOf"],[1,"footer"],["id","move"],[1,"ordenar",3,"click"],["id","time"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.NdJ("click",function(){return o.clickBoton()}),t._uU(4," Click para empezar "),t.qZA(),t.TgZ(5,"div",4),t.NdJ("click",function(){return o.clickBoton()}),t.TgZ(6,"span",5),t._uU(7,"Ganaste!!!"),t.qZA(),t.TgZ(8,"span",5),t._UZ(9,"br"),t._uU(10,"Click para jugar de nuevo"),t.qZA()(),t.TgZ(11,"div",6),t.YNc(12,M,2,1,"button",7),t.qZA(),t.TgZ(13,"div",8)(14,"button",3),t.NdJ("click",function(){return o.clickBoton()}),t._uU(15),t.qZA(),t.TgZ(16,"span",9),t._uU(17),t.qZA()(),t.TgZ(18,"div",8)(19,"button",10),t.NdJ("click",function(){return o.ordenar()}),t._uU(20,"Ordenar para ganar"),t.qZA(),t.TgZ(21,"span",11),t._uU(22),t.qZA()()()()()),2&e&&(t.xp6(3),t.Gre("overlay-text ",o.start,""),t.xp6(2),t.Gre("overlay-text ",o.victoria,""),t.xp6(7),t.Q6J("ngForOf",o.contenido),t.xp6(3),t.Oqu(o.boton),t.xp6(2),t.hij("Movimiento: ",o.estado.move,""),t.xp6(5),t.hij("Tiempo: ",o.estado.time,""))},dependencies:[u.sg],styles:[".juegoContainer[_ngcontent-%COMP%]{margin:0;width:100vw;height:100vh}.juego[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column}.game[_ngcontent-%COMP%]{box-shadow:0 1px 4px #00000080;padding:20px;background-image:linear-gradient(#d6e7b3,#a1e7e7);border-radius:5px}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:106px 106px 106px;grid-template-rows:106px 106px 106px;border:1px solid #550000}.grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:#ccdbe8 3px 3px 6px inset,#ffffff80 -3px -3px 6px 1px inset;background-color:#f5f4c0;color:#033;font-size:24px;font-weight:700;border:1px solid #550000;outline:none;cursor:pointer}.footer[_ngcontent-%COMP%]{margin-top:15px;display:flex;justify-content:space-between}.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;font-size:20px;font-weight:700;border-radius:5px;box-shadow:0 1px 4px #00000080;padding:5px;width:100px;background-color:#d4ee9f;color:#033;outline:none;cursor:pointer}.ordenar[_ngcontent-%COMP%]{border:none;font-size:20px;font-weight:700;border-radius:5px;box-shadow:0 1px 4px #00000080;padding:5px;width:150px;background-color:#d4ee9f;color:#033;outline:none;cursor:pointer;margin-top:15px}.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .ordenar[_ngcontent-%COMP%]:hover{color:#d4ee9f;background-color:#033}.footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1;text-align:center;font-size:20px;color:#14a890;font-weight:700;margin:auto 0}.message[_ngcontent-%COMP%]{color:#aa3939;height:80px}.overlay-text[_ngcontent-%COMP%]{inset:0;z-index:100;display:none;position:fixed;justify-content:center;align-items:center;flex-direction:column;color:#fdbf8c;font-family:Creepy,serif;font-size:4em;transition:background-color .5s,font-size .5s}.overlay-text.visible[_ngcontent-%COMP%]{display:flex;animation:_ngcontent-%COMP%_overlay-grow .5s forwards}@keyframes _ngcontent-%COMP%_overlay-grow{0%{background-color:#0000;font-size:0}to{background-color:#000c;font-size:6em}}"]}),i})();var b=c(529);let A=(()=>{class i{constructor(e){this.http=e}getImg(){return this.http.get("https://pixabay.com/api/?key=21351108-e70e13da005029798b867e59c&q=movies&image_type=photo&category=entretaiment&safesearch=true")}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(b.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const g=function(i){return{"background-color":i}},j=[{path:"",component:x},{path:"ahorcado",component:y},{path:"mayormenor",component:C},{path:"mijuego",component:P},{path:"preguntados",component:(()=>{class i{constructor(e,o,s){this.httpClient=e,this.listado=o,this.svcImg=s,this.npreguntas=[],this.preguntas_hechas=0,this.preguntas_correctas=0,this.suspender_botones=!1,this.yellowd="yellow",this.victoria="",this.start="visible",this.perdiste="",this.opcion="Siguiente",this.resultadoText="",this.resultado={},this.img=[],this.httpClient.get("assets/json/preguntas.json").subscribe(r=>{this.interprete_bp=r}),this.svcImg.getImg().subscribe(r=>{this.im=r,this.getImg(this.im.hits)}),this.imagen="",this.respuesta1="",this.respuesta2="",this.respuesta3="",this.respuesta4="",this.estilo1="",this.estilo2="",this.cantPreguntas=1,this.estilo3="",this.estilo4="",this.pregunta="",this.erradas=0,this.categoria="",this.preguntaActual="",this.numero="",this.estiloImagen="",this.estilos=[this.estilo1,this.estilo2,this.estilo3,this.estilo4],this.posibles_respuestas=[],this.btn_correspondiente=[this.respuesta4,this.respuesta1,this.respuesta2,this.respuesta3],setTimeout(()=>{this.escogerPreguntaAleatoria()},300)}ngOnInit(){}desordenarRespuestas(e){this.posibles_respuestas=[e.respuesta,e.incorrecta1,e.incorrecta2,e.incorrecta3],this.posibles_respuestas.sort(()=>Math.random()-.5),this.respuesta1=this.posibles_respuestas[0],this.respuesta2=this.posibles_respuestas[1],this.respuesta3=this.posibles_respuestas[2],this.respuesta4=this.posibles_respuestas[3]}reiniciar(){this.cantPreguntas++,this.suspender_botones=!1;for(let e=0;e<this.estilos.length;e++)this.estilos[e]="white";this.cantPreguntas>5?this.ckeckJuego():this.escogerPreguntaAleatoria(),this.opcion=5===this.cantPreguntas?"Finalizar":"Siguiente"}escogerPreguntaAleatoria(){let e=Math.floor(Math.random()*this.interprete_bp.length);for(;this.npreguntas.includes(e);)e++,e>=this.interprete_bp.length&&(e=0),this.npreguntas.length===this.interprete_bp.length&&(this.npreguntas=[]);this.npreguntas.push(e),this.preguntas_hechas++,this.escogerPregunta(e)}oprimir_btn(e){if(!this.suspender_botones){this.suspender_botones=!0,this.posibles_respuestas[e]==this.pregunta.respuesta?(this.preguntas_correctas++,this.estilos[e]="lightgreen"):(this.estilos[e]="pink",this.erradas++);for(let o=0;o<4;o++)if(this.posibles_respuestas[o]==this.pregunta.respuesta){this.estilos[o]="lightgreen";break}}}escogerPregunta(e){this.pregunta=this.interprete_bp[e],this.categoria=this.pregunta.categoria,this.preguntaActual=this.pregunta.pregunta,console.log("url "+this.imagen),this.numero=e,this.puntaje=this.preguntas_hechas>1?this.preguntas_correctas+"/"+(this.preguntas_hechas-1):"",this.desordenarRespuestas(this.pregunta),this.pregunta.imagen?(this.imagen=this.pregunta.imagen,this.estiloImagen={height:"200px",width:"100%"}):(this.imagen=this.img[e].largeImageURL,this.estiloImagen={height:"200px",width:"100%"})}ckeckJuego(){this.erradas>2?(this.perdiste="visible",this.resultadoText="Perdiste"):(this.resultadoText="Ganaste",this.victoria="visible"),this.resultado={tiempo:"N/A",resultado:this.resultadoText,errores:this.erradas,clicks:"N/A",correctas:this.preguntas_correctas,juego:"Preguntados"},this.listado.addResultado(this.resultado)}clickBoton(){this.cantPreguntas=0,this.reiniciar(),this.puntaje="",this.numero="",this.erradas=0,this.perdiste="",this.victoria="",this.start=""}getImg(e){var o=this;return(0,_.Z)(function*(){o.img=e})()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(b.eN),t.Y36(p.L),t.Y36(A))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-preguntados"]],decls:40,vars:36,consts:[[1,"juegoContainer"],[1,"juego"],[1,"game"],[3,"click"],["id","victory-text",3,"click"],[1,"overlay-text-small"],[1,"bodyJuego"],["id","puntaje",1,"puntaje"],[1,"encabezado"],["id","categoria",1,"categoria"],["id","numero",1,"numero"],["id","pregunta",1,"pregunta"],["id","imagen",1,"imagen",3,"src","ngStyle"],["id","btn1",1,"btn",3,"ngStyle","click"],["id","btn2",1,"btn",3,"ngStyle","click"],["id","btn3",1,"btn",3,"ngStyle","click"],["id","btn4",1,"btn",3,"ngStyle","click"],[1,"fill",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.NdJ("click",function(){return o.clickBoton()}),t._uU(4," Click para empezar "),t.qZA(),t.TgZ(5,"div",4),t.NdJ("click",function(){return o.clickBoton()}),t._uU(6),t.TgZ(7,"span",5),t._UZ(8,"br")(9,"br")(10,"br")(11,"br"),t._uU(12,"Click para jugar de nuevo"),t.qZA()(),t.TgZ(13,"div",4),t.NdJ("click",function(){return o.clickBoton()}),t._uU(14),t.TgZ(15,"span",5),t._UZ(16,"br"),t._uU(17,"Click para jugar de nuevo"),t.qZA()(),t.TgZ(18,"div",6)(19,"div",7),t._uU(20),t._UZ(21,"br"),t._uU(22),t.qZA(),t.TgZ(23,"div",8)(24,"div",9),t._uU(25),t.qZA(),t._UZ(26,"div",10),t.TgZ(27,"div",11),t._uU(28),t.qZA(),t._UZ(29,"img",12),t.qZA(),t.TgZ(30,"div",13),t.NdJ("click",function(){return o.oprimir_btn(0)}),t._uU(31),t.qZA(),t.TgZ(32,"div",14),t.NdJ("click",function(){return o.oprimir_btn(1)}),t._uU(33),t.qZA(),t.TgZ(34,"div",15),t.NdJ("click",function(){return o.oprimir_btn(2)}),t._uU(35),t.qZA(),t.TgZ(36,"div",16),t.NdJ("click",function(){return o.oprimir_btn(3)}),t._uU(37),t.qZA(),t.TgZ(38,"button",17),t.NdJ("click",function(){return o.reiniciar()}),t._uU(39),t.qZA()()()()()),2&e&&(t.xp6(3),t.Gre("overlay-text ",o.start,""),t.xp6(2),t.Gre("overlay-text ",o.victoria,""),t.xp6(1),t.AsE(" ",o.resultadoText," tenes ",o.preguntas_correctas," respuestas correctas "),t.xp6(7),t.Gre("overlay-text ",o.perdiste,""),t.xp6(1),t.AsE(" ",o.resultadoText," tenes ",o.erradas," erroneas "),t.xp6(6),t.hij(" Puntaje: ",o.preguntas_correctas," "),t.xp6(2),t.hij(" Preguntas erroneas: ",o.erradas," "),t.xp6(3),t.hij("Categoria: ",o.categoria,""),t.xp6(3),t.hij(" ",o.preguntaActual," "),t.xp6(1),t.s9C("src",o.imagen,t.LSH),t.Q6J("ngStyle",o.estiloImagen),t.xp6(1),t.Q6J("ngStyle",t.VKq(28,g,o.estilos[0])),t.xp6(1),t.hij(" ",o.respuesta1," "),t.xp6(1),t.Q6J("ngStyle",t.VKq(30,g,o.estilos[1])),t.xp6(1),t.hij(" ",o.respuesta2," "),t.xp6(1),t.Q6J("ngStyle",t.VKq(32,g,o.estilos[2])),t.xp6(1),t.hij(" ",o.respuesta3," "),t.xp6(1),t.Q6J("ngStyle",t.VKq(34,g,o.estilos[3])),t.xp6(1),t.hij(" ",o.respuesta4," "),t.xp6(2),t.Oqu(o.opcion))},dependencies:[u.PC],styles:['*[_ngcontent-%COMP%]{transition:all .3s}.bodyJuego[_ngcontent-%COMP%]{padding:0;margin:0;text-align:center;font-family:calibri;font-size:120%;display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh}.encabezado[_ngcontent-%COMP%]{position:relative;background:rgb(255,255,255);min-width:300px;width:70%;max-width:600px;padding:10px}.categoria[_ngcontent-%COMP%]{opacity:.3;text-align:left;color:#0e7bad}.pregunta[_ngcontent-%COMP%]{padding:10px;color:#0e7bad}.imagen[_ngcontent-%COMP%]{object-fit:cover;height:0px;width:0px}.btn[_ngcontent-%COMP%]{background:white;width:60%;max-width:550px;padding:10px;margin:5px;cursor:pointer}.btn[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.numero[_ngcontent-%COMP%]{position:absolute;opacity:.3;top:10px;right:10px}.puntaje[_ngcontent-%COMP%]{padding:10px;color:#0e7bad;font-size:large}.overlay-text[_ngcontent-%COMP%]{inset:0;z-index:100;display:none;position:fixed;justify-content:center;align-items:center;flex-direction:column;color:#c1ff83;font-family:Creepy,serif;transition:background-color .5s,font-size .5s}.overlay-text-small[_ngcontent-%COMP%]{font-size:.3em}.overlay-text.visible[_ngcontent-%COMP%]{display:flex;animation:_ngcontent-%COMP%_overlay-grow .5s forwards}@keyframes _ngcontent-%COMP%_overlay-grow{0%{background-color:#0000;font-size:0}to{background-color:#000c;font-size:6em}}.fill[_ngcontent-%COMP%]{font-size:20px;font-weight:200;letter-spacing:1px;padding:13px 50px;outline:0;border:1px solid black;cursor:pointer;position:relative;background-color:#0000;margin:20px}.fill[_ngcontent-%COMP%]:after{content:"";background-color:#4cffff;width:100%;z-index:-1;position:absolute;height:100%;top:7px;left:7px;transition:.2s}.fill[_ngcontent-%COMP%]:hover:after{top:0;left:0}']}),i})()}];let T=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[m.Bz.forChild(j),m.Bz]}),i})(),O=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.ez,T]}),i})()}}]);