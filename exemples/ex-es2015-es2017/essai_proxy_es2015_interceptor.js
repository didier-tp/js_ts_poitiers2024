function test_basicObjectInterceptor(){

const targetObject = {
	prenom: 'Jean',
	nom: 'Bon',
	taille: 1.75
};

const interceptorUpperCaseHandler = {
    get(target, propKey, receiver) {
		let val = target[propKey];
		// NO let val = receiver[propKey]; ==> STACK-OVERFLOW / get interceptor calling get , ...
        console.log('intercept get ' + propKey);
		if(typeof val=='string' && val!=null)
			val=val.toUpperCase();
        return val;
    }
};

const validateNumberHandler = {
  set (target, key, value) {
    if (key === 'age' || key === 'taille') {
      if (typeof value !== 'number' || Number.isNaN(value)) {
        throw new TypeError(key +' must be a number')
      }
      if (value <= 0) {
        throw new TypeError(key +' must be a positive number')
      }
    }
	target[key]=value; //default behavior
    return true; //indicate success
  }
}

var mixedHandler = Object.assign(interceptorUpperCaseHandler,validateNumberHandler);

const proxyObject = new Proxy(targetObject, interceptorUpperCaseHandler);
const proxyValidObject = new Proxy(targetObject, /*validateNumberHandler*/ mixedHandler);
//proxyValidObject.taille="abc"; --> TypeError : taille must be a number
//proxyValidObject.taille=-56; //--> TypeError: taille must be a positive number
proxyValidObject.taille=1.80;
console.log("nouvelle taille=" + proxyValidObject.taille);

console.log(JSON.stringify(proxyObject));


}


function test_proxies(){
	
// Proxying a function object
var targetRepeatWordFct = function (n , word) { 
  return word.repeat(n); //NB: String.repeat(n) est une nouvelle méthode de es2015
 };
 
var fctHandler = {
  apply(targetFct, thisArg, argsList) {
	let res=targetFct.apply(thisArg, argsList);
    return res.toUpperCase();
  }
};


var proxyFct = new Proxy(targetRepeatWordFct, fctHandler);
console.log( targetRepeatWordFct(3,"ha"));
console.log( proxyFct(3,"ha"));
	
// Proxying a normal object
var targetObj = {
	id : 1 ,
	label : "obj1",
	idAndLabel(){ return ""+this.id+","+this.label; }
};
var objectDefaultValueHandler = {
  get (target, propertyName /* , receiver */) {
	/*
	let val = target[propertyName];
	if(val==undefined)
       return `interceptor default value for property ${propertyName}`;
    else 
	   return val;
   */
   if((typeof target[propertyName])== "function"){
	   //console.log("internal javascript : method call = get function from methodName="+propertyName+" + functionCall");
	   return function(...args){
		    /*
			let origMethod = target[propertyName];
		    let result = origMethod.apply(this, args);
            if(typeof result == 'string')
                result=result.toUpperCase();				
            return result;
			*/
			var proxyMethodFct = new Proxy(target[propertyName], fctHandler);
			return proxyMethodFct.apply(this, args);
	   }
   }
   /*else*/
   return propertyName in target ? target[propertyName] : `interceptor default value for property ${propertyName}`;
  }
};

var p = new Proxy(targetObj, objectDefaultValueHandler);
console.log("p.id="+p.id); // 1
console.log("p.label="+p.label); // o1
console.log("p.p3="+p.p3); // interceptor default value for property p3
console.log("p.p4="+p.p4); // interceptor default value for property p4
console.log("p.idAndLabel()="+p.idAndLabel());



var proxyObjWithMethod=new Proxy(targetObj,objectDefaultValueHandler);
console.log(proxyObjWithMethod.idAndLabel());


}

test_basicObjectInterceptor();
test_proxies();