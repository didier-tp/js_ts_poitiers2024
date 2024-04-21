//es6/es2015 : no abstract , no interface , no implements keyworks


/*abstract in typescript*/ class Fig2D {
  constructor(lineColor  = "black",
              lineWidth  = 1,
              fillColor  = null){
	this.lineColor = lineColor;
	this.lineWidth = lineWidth;
	this.fillColor = fillColor;
  }
/*abstract in typescript*/  performVisit(visitor){}
}

class Line  extends Fig2D{
  constructor(x1= 0 ,  y1= 0 ,
              x2= 0 ,  y2= 0,
              lineColor  = "black",
              lineWidth  = 1){
                 super(lineColor,lineWidth);
				 this.x1=x1; this.y1=y1; this.x2=x2; this.y2=y2;
  }
  performVisit(visitor){
     visitor.doActionForLine(this);
   }
}

class Circle  extends Fig2D{
  constructor(xC = 0 ,
              yC = 0  ,
              r = 0,
              lineColor  = "black",
              lineWidth  = 1,
              fillColor = null){
                 super(lineColor,lineWidth,fillColor);
				 this.xC = xC; this.yC=yC; this.r=r;
  }
  performVisit(visitor) {
    visitor.doActionForCircle(this);
  }
}

class Rectangle  extends Fig2D{
  constructor(x1 = 0 ,
              y1 = 0 ,
              width = 0 ,
              height = 0,
              lineColor = "black",
              lineWidth = 1,
              fillColor = null){
                 super(lineColor,lineWidth,fillColor);
				 this.x1=x1; this.y1=y1; this.width=width; this.height=height;
  }
  performVisit(visitor) {
    visitor.doActionForRectangle(this);
  }
}

/*interface in typescript*/ class FigVisitor {
  doActionForCircle(c){}
  doActionForLine(l){}
  doActionForRectangle(r){}
}

class JsonVisitor  /*implements*/ extends FigVisitor{
  
  constructor(){
	  super();
	  console.log("JsonVisitor");
  }
  doActionForCircle(c){
     console.log("{circle: " + JSON.stringify(c) +"}");
  }
  doActionForLine(l) {
     console.log("{line: " + JSON.stringify(l) +"}"); 
  }

  doActionForRectangle(r) {
    console.log("{rectangle:" + JSON.stringify(r) +"}");
  }
}

class SvgGenVisitor  /*implements*/ extends FigVisitor{
  constructor(){
	 super();
     this._svgHeader =
     '<svg width="500" height="400" '
     +' xmlns="http://www.w3.org/2000/svg">';
     this._svgContent = "";
  }

  getAllSvgFileContent(){
    return  this._svgHeader + this._svgContent
         + "</svg>";
  }

  doActionForCircle( c ) {
     this._svgContent += ' <circle cx="'+c.xC+'" cy="'+c.yC
                                  +'" r="'+c.r+'" stroke="'+c.lineColor
                                  +  '" stroke-width="'+c.lineWidth
                                     +'" fill="'+c.fillColor+'" />';
  }
  doActionForLine( l )  {
   this._svgContent += ' <line x1="'+l.x1
                            +'" y1="'+l.y1
                            +'" x2="'+l.x2
                            +'" y2="'+l.y2+
                            '" style="stroke:'+l.lineColor
                                   +';stroke-width:'+l.lineWidth+'" />';
  }

  doActionForRectangle( r )  {
   this._svgContent += ' <rect x="'+r.x1+'" y="'+r.y1+
                               '" width="'+r.width+
                               '" height="'+r.height+
                               '" style="fill:'+r.fillColor+
                                       ';stroke-width:'+r.lineWidth+
                                       ';stroke:'+r.lineColor+'" />';
 }
}


function my_test(){
    var tabFig = new Array();
    tabFig.push(new Line(20,20,180,200,"red"));
    tabFig.push(new Circle(100,100,50,"blue", 2,"orange"));
    tabFig.push(new Circle(250,200,50,"black",1,"blue"));
    tabFig.push(new Rectangle(200,100,50,60,"green",4));
    tabFig.push(new Rectangle(20,100,50,60,"black",1,"green"));
    var visitor = null;
	//visitor = new  JsonVisitor();
	visitor = new  SvgGenVisitor();
    for( let f  of tabFig){
      f.performVisit(visitor);
    }
	console.log(visitor.getAllSvgFileContent());
}

my_test();