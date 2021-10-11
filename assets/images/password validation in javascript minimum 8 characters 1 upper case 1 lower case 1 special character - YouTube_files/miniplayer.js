(function(g){var window=this;'use strict';var A6=function(a){g.V.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.pe=!1;this.player=a;this.S(a,"minimized",this.Bg);this.S(a,"onStateChange",this.sF)},B6=function(a){g.gN.call(this,a);
this.i=new A6(this.player);this.i.hide();g.XM(this.player,this.i.element,4);a.He()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(A6,g.V);g.k=A6.prototype;
g.k.BD=function(){this.tooltip=new g.FQ(this.player,this);g.J(this,this.tooltip);g.XM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.tc=new g.bO(this.player);g.J(this,this.tc);this.Gg=new g.V({G:"div",L:"ytp-miniplayer-scrim"});g.J(this,this.Gg);this.Gg.Fa(this.element);this.S(this.Gg.element,"click",this.Dz);var a=new g.V({G:"button",Ia:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},T:[g.hL()]});g.J(this,a);a.Fa(this.Gg.element);this.S(a.element,"click",this.Ci);
a=new g.U1(this.player,this);g.J(this,a);a.Fa(this.Gg.element);this.np=new g.V({G:"div",L:"ytp-miniplayer-controls"});g.J(this,this.np);this.np.Fa(this.Gg.element);this.S(this.np.element,"click",this.Dz);var b=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.J(this,b);b.Fa(this.np.element);a=new g.V({G:"div",L:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Fa(this.np.element);var c=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.J(this,c);c.Fa(this.np.element);this.WL=new g.zP(this.player,
this,!1);g.J(this,this.WL);this.WL.Fa(b.element);b=new g.xP(this.player,this);g.J(this,b);b.Fa(a.element);this.nextButton=new g.zP(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Fa(c.element);this.Ig=new g.rQ(this.player,this);g.J(this,this.Ig);this.Ig.Fa(this.Gg.element);this.Nc=new g.FP(this.player,this);g.J(this,this.Nc);g.XM(this.player,this.Nc.element,4);this.pz=new g.V({G:"div",L:"ytp-miniplayer-buttons"});g.J(this,this.pz);g.XM(this.player,this.pz.element,4);a=new g.V({G:"button",
Ia:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},T:[g.hL()]});g.J(this,a);a.Fa(this.pz.element);this.S(a.element,"click",this.Ci);a=new g.V({G:"button",Ia:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Close"},T:[g.mL()]});g.J(this,a);a.Fa(this.pz.element);this.S(a.element,"click",this.PU);this.S(this.player,"presentingplayerstatechange",this.Lc);this.S(this.player,"appresize",this.yb);this.S(this.player,"fullscreentoggled",this.yb);this.yb()};
g.k.show=function(){this.Dd=new g.Eq(this.bq,null,this);this.Dd.start();this.pe||(this.BD(),this.pe=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Nc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Dd&&(this.Dd.dispose(),this.Dd=void 0);g.V.prototype.hide.call(this);this.player.He()||(this.pe&&this.Nc.hide(),this.player.loadModule("annotations_module"))};
g.k.Aa=function(){this.Dd&&(this.Dd.dispose(),this.Dd=void 0);g.V.prototype.Aa.call(this)};
g.k.Ci=function(){this.player.stopVideo();this.player.Na("onCloseMiniplayer")};
g.k.PU=function(){this.player.playVideo()};
g.k.Dz=function(a){if(a.target===this.Gg.element||a.target===this.np.element)this.player.U().experiments.oa("kevlar_miniplayer_play_pause_on_scrim")?g.jK(this.player.wb())?this.player.pauseVideo():this.player.playVideo():this.player.Na("onExpandMiniplayer")};
g.k.Bg=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.He())};
g.k.md=function(){this.Nc.Qb();this.Ig.Qb()};
g.k.bq=function(){this.md();this.Dd&&this.Dd.start()};
g.k.Lc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.yb=function(){g.RP(this.Nc,0,this.player.gb().getPlayerSize().width,!1);g.GP(this.Nc)};
g.k.sF=function(a){this.player.He()&&(0===a?this.hide():this.show())};
g.k.kc=function(){return this.tooltip};
g.k.Qe=function(){return!1};
g.k.qf=function(){return!1};
g.k.wi=function(){return!1};
g.k.jA=function(){};
g.k.Zm=function(){};
g.k.Jr=function(){};
g.k.Cn=function(){return null};
g.k.jj=function(){return new g.Jl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.kq=function(a,b,c,d,e){var f=0,h=d=0,l=g.em(a);if(b){c=g.Oq(b,"ytp-prev-button")||g.Oq(b,"ytp-next-button");var m=g.Oq(b,"ytp-play-button"),n=g.Oq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.cm(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Oq(b,"ytp-miniplayer-button-top-left"),f=g.cm(b,this.element),b=g.em(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.gb().getPlayerSize().width;e=f+(e||0);l=g.Vf(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Wk=function(){};
g.k.yk=function(){return!1};g.w(B6,g.gN);B6.prototype.create=function(){};
B6.prototype.Li=function(){return!1};
B6.prototype.load=function(){this.player.hideControls();this.i.show()};
B6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.rN.miniplayer=B6;})(_yt_player);
