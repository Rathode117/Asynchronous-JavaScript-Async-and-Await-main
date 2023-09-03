# Asynchronous-JavaScript-Async-and-Await-main
This is a code snippet of Asynchronous JavaScript, it explains everything thing that you need to know about Async and Await.

->Functions running in parallel with other functions are called asynchronous.

->Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able
to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task
has finished, your program is presented with the result.

->Note JavaScript is a Single Thread language, hence two functions can't run at once.
So to tackle this problem JavaScript uses two Data Structures,. i.e, The Call Stack and The CallBack Queue.
The Synchrnonous functions are put in the Call Stack, where they are executed in sequence, whereas the ASynchronous functions are put in the CallBack Queue where they take their time
to finish, meanwhile, a loop(Event loop) continously keeps on checking for the functions that have finished in the CallBack queue, and then puts that into the Call Stack.
This way there's no blocking.
