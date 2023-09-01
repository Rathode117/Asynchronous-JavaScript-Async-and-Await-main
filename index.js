var box1 = document.getElementById("mybox");
var box2 = document.getElementById("asyncblock");
var box3 = document.getElementById("finallybox");





setTimeout(()=>{                              // <- A Simple Asynchronous code.
  box1.innerText = "I am the change that happened after 4 seconds because of a simple async function called setTimeout";
  box2.innerText = "Now we wait for 5 seconds for the Promise";
},4000);                         




const fun = async ()=>{                      //The Async keyword makes a function Asynchronous.
    
 const mypromise = new Promise(                       //Promises that make a function return something could be "what we want" or an error.
  (resolve,reject)=>{ 
                                              //Resolve and Rejects are two arguments passed to the Promise constructor function.
  setTimeout(()=>{                           //With Resolve we return "what we want" and with Reject we get errors.
      let j = 0;                             
      if(j==0){                              //Now here if we have the value of j==0 we will resolve meaning our code ran successfully.
        resolve("successful");
      }
      else{                                  //else we will reject meaning the code encountered some error
        reject("rejected");                 
      }
                                            //NOTE - we are using setTimeout function only to create a delay                 
                                             //mimicing the actual fetch operation from a remote server
    },9000)
  }
  );

  try{                                        
    let Whatwewanted = await mypromise;                        //Now the await keyword can only be used inside of an Async function
    box2.innerText =  `The Promise was ${Whatwewanted}`;                         //what it does is that it stops the code at that point until a resolve or reject is      
                                            //returned by the promise. 
  }                                         //Note - ONLY the remaining code inside that Async function is made to wait outside the
  catch(error){                             //outside the async function everything works as they are a part of the main stack.
    box2.innerText =  `The Promise was ${error}`;
  }
  finally{
    box3.innerText ="The Async Block ended";
  }
    

}

fun();

