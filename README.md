# JS-MultiMethod
STILL IN PROGESS - DO NOT USE IN CURRENT STATE!!!
</br>
TODO:
</br>
Allow custom dispatching functions
Allow multiple arguments
</br></br>
Simple implementation of Clojure inspired multi methods in Javascript.
</br>
Allows a function to accept different parameters and execute a different function depending on the parameters passed.

## Usage

Define a new multi-method
````
let b = new MultiMethod();
````

Add methods
````
b.addCase('lion', (name) => {console.log('Roar! His Name is: ' + name)}); // optionally accepts arguments
b.addCase('duck', () => {console.log('Quack!')});
````


Call the function
````
b('lion', 'Peter') // Roar! His Name Is: Peter
b('duck') // Quack!
b('beast') // console.warn no method
````

Accepts a special default case that will be called if no methods are found

````
let c = new MultiMethod();
c.addCase('bow', () => {console.log('shoot')});
c.addCase('default', () => {console.log('nothing to do')}) // Special default case

c('bow') // shoot
c('axe') // nothing to do
````
