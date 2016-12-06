## promise

```js
var promise = new Promise(function(resolve, reject){
    resolve("step1");
});
promise
    .then(function(){
        console.log(arguments);
        return new Promise(function(resolve,reject){
            resolve('step2');
        })
        },function(){
            
    })
    .then(function(){
        console.log(arguments);
    });

```