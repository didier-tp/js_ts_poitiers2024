

function test_reflect(){
	
	var obj ={
		id: 1,
		label : "obj1"
	}
	
	let valueOfIdProperty=Reflect.get(obj,"id"); //equivalent à obj["id"]
	console.log("value of Property id = "+valueOfIdProperty);//value of Property id = 1
	console.log("value of Property label = "+Reflect.get(obj,"label"));//value of Property label = obj1
	
	Reflect.set(obj, "label",  "labelXy");
	console.log("modified obj.label = "+obj.label);//modified obj.label = labelXy
	
	console.log("obj="+JSON.stringify(obj));//obj={"id":1,"label":"labelXy"}
	
	let boolRes= Reflect.defineProperty(obj, "name", {value: 'nomQuiVaBien' , 
	                                                  writable : true,
													  enumerable : true, 
													  configurable : true});
	//propertyDesciptor with enumerable=true to see property in loop like for (.. in) or JSON.stringify
	//                       configurable=true to enable changing attribute property (delete it , ...)
	console.log("obj.name="+obj.name); //nomQuiVaBien
	console.log("obj="+JSON.stringify(obj));//obj={"id":1,"label":"labelXy","name":"nomQuiVaBien"}
	Reflect.deleteProperty(obj, "name");
	console.log("obj.name="+obj.name); //undefined
	console.log("obj="+JSON.stringify(obj));obj={"id":1,"label":"labelXy"}
	
	console.log("obj has label property=" + Reflect.has(obj, "label")); //true
	console.log("obj has name property=" + Reflect.has(obj, "name")); //false
	
	var labelPropertyDescriptor = Reflect.getOwnPropertyDescriptor(obj, "label");
    console.log("labelPropertyDescriptor="+JSON.stringify(labelPropertyDescriptor));
	//labelPropertyDescriptor={"value":"labelXy","writable":true,"enumerable":true,"configurable":true}
	
	let arrayOfPropKeys =  Reflect.ownKeys(obj); //may ignoring inheritance in old version
	console.log("arrayOfPropKeys="+arrayOfPropKeys);//arrayOfPropKeys=id,label
	
	
	class Person { 
	    constructor(id=0,name='?'){ this.id=id; this.name=name; }
	}
	class Employee extends Person {
		constructor(id=0, name='emp?' , salary=0) { super(id,name); this.salary=salary; }
	}
	var emp1 = new Employee(1,"employee1",1000);
	console.log("properties of Employee="+Reflect.ownKeys(emp1));//id,name,salary
	//var allPropsIterator = Reflect.enumerate(emp1); is now obsolete : not use it !!!!

	
	function addFct(x, y){
       return x + y;
    }
	console.log("10+20="+Reflect.apply(addFct, null /*thisArg*/, [10, 20]));//10+20=30
	
	function functionForObject(x, y){
       return this.num + x + y;
    }
	let computeObj={
		num:30,
		methXy:functionForObject
	}
    var value = Reflect.apply(functionForObject, computeObj /*thisArg*/, [10, 20]);
    console.log(value +" is equals to " + computeObj.methXy(10,20)); //60  is equals to 60
	
	Reflect.preventExtensions(obj);//cannot add new property
	console.log("obj is extensible after preventExtensions:"+Reflect.isExtensible(obj)); //false
	obj.newAttr="newValue";//no effect
	console.log("obj.newAttr="+obj.newAttr);//undefined
	
	function constructorAB(a, b)
	{
		this.a = a;
		this.b = b;
		this.fctAdd = function(){
			return this.a + this.b;
		}
	}

    var builtObj = Reflect.construct(constructorAB, [10, 20]);

    console.log(builtObj.fctAdd()); //30
	

}


test_reflect();