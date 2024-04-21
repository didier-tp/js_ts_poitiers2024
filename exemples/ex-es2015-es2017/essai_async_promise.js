function strDateTime() {
	return (new Date()).toLocaleString();
}

const affDiffere = () => {
	setTimeout (()=> {console.log("after 2000 ms " + strDateTime());} , 2000);
};

const getUserInCb = 
  (cbWithName) => {
	setTimeout (()=> { cbWithName({ name : "toto" });} , 2000);
  };
  
function getUserFromIdAsPromise(id){
	//new Promise(resolve, reject) since es6
  return new Promise (
  (resolveCbWithName,rejectCb) => {
	setTimeout (()=> { if(id) resolveCbWithName({ name : "toto" });
	                    else rejectCb("id should not be null!");
	                 } 
	           , 2000);
  });  
}

const getAddressFromNameInCb = 
 (name , cbWithAddress)  => {
	setTimeout (()=> { cbWithAddress({ adr : "75000 Paris for name="+name });} , 1500);
  };
  
function getAddressFromNameAsPromise(name){
	//new Promise(resolve, reject) since es6
  return new Promise (
  (resolveCbWithAddress) => {
	setTimeout (()=> { resolveCbWithAddress({ adr : "75000 Paris for name="+name });} , 1500);
  });  
}  
  

console.log("debut :" + strDateTime()  );
affDiffere();

/*
getUserInCb(
   (user) => { 
   console.log("username=" + user.name); 
   getAddressFromNameInCb(user.name, 
       (address) => { console.log("address=" + address.adr );  }
	   );
   }
   );
*/

getUserFromIdAsPromise(1)
//getUserFromIdAsPromise(null)
   .then( (user) => {   console.log("username=" + user.name);
						//returning new Promise for next then() :
                        return getAddressFromNameAsPromise(user.name);   
					})
   .then( (address) => { console.log("address=" + address.adr ); } )
   .catch(error => { console.log("error:" + error); } );
   

   
console.log("suite :" + strDateTime()  );


function getUppercaseDataAfterDelay(data, delay){
  return new Promise (
  (resolve) => {
	setTimeout (()=> { resolve(data.toUpperCase());}, delay);
  });  
}

Promise.all( [ getUppercaseDataAfterDelay("abc",2000) , getUppercaseDataAfterDelay("def",1500)  ] )
       .then ( ([ res1 , res2 ]) => { console.log(">>"+res1+"--"+res2+"<<" ); });
	   
Promise.race( [ getUppercaseDataAfterDelay("abc",2000) , getUppercaseDataAfterDelay("def",1500)  ] )
       .then ( (firstResult) => { console.log(">>>"+firstResult+"<<<" ); } );	   
	   
	  

