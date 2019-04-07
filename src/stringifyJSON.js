// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



 var stringifyJSON =function(obj) {

var str = "" ;


 ////// ///////// check if it is number or boolean or null

	if(typeof obj==="number" || obj===null || obj===false || obj===true || typeof obj === "string")
	{
      str=str+obj;
	}
	     /////////////////

	  else if(Array.isArray(obj)) /////// array check 
	  {
			str=str+"[";
     
	    for(var i=0 ; i<obj.length;i++) 
	       {

			str=str+stringifyJSON(obj[i]);	
							
				if(i!==obj.length-1)
			        str+=",";
			}

			str = str + "]";
		} 
		 ////////// end of array check 
      else if(typeof obj==="object")
        {
          str=str+"{";
          for(var key in obj)
          {
          	str=str+key+":"+stringifyJSON(obj[key]);
          	if(!(Object.keys(obj)[Object.keys(obj).length-1]===key))
          		str+=",";
          }
          	
		  str=str+"}" 
        }
      
    return str ;
	}

     
     



   