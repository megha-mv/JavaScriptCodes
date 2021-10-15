function btnClick() {
  var sel = document.getElementById("selectbox");
  document.write(`<h1 style = "color : red ">you have choosen</h1>`);
  //sel variable is used to get element from selectbox
  var selecteditem = sel.options[sel.selectedIndex].value;
  document.write(`<h1>` + selecteditem + `</h1>`);
  //check conditions to print examples
  if (selecteditem === "jsObject")
    document.write(
      `<h2> Example of JS Object is : <hr></h2>` +
        `<p> Everything in JS is object </p>` +
        `<h3> For example <br> </h3>` +
        `<h4>let a = 4;<br> Here a can have single value but Js objects
         can have mulitple values and are mutable.<br> </h4>` +
        `<h4> let name ="John Doe" <br>
         Here name is string but this also will be counted as one value <br>
         let person = {<br> fname:"john Doe,<br> lname : "Doe"<br> age:30 <br> Here there are mulitple values<br>
         This will now be treated as collection of multiple values <br><br>
         JavaScript objects can also be defined as <br>
         let person = new Object(); <br>
         person.name ="john"; <br>
         person.lname = "Doe";<br>
         person.age = 30; <br> </h4>`
    );
  else if (selecteditem === "prototypeInheritence")
    document.write(
      `<h2> Example of Prototype Inheritence in JavaScript is : <hr></h2>` +
        `<p> All JavaScript objects inherit properties and methods from a prototype </p>` +
        `<h3> For example <br> </h3>` +
        `<h4>Date objects inherit from Date.prototype;<br>Array objects inherits from Array.prototype<br>
        </h4>` +
        `<h4> The Object.Prototype is on the top of Prototype Inheritence chain <br>
        The JavaScript prototype property allows to add new properties and new methods to the object constructors<br>
        JavaScript objects can also be defined as <br>
        funtion Person(fname,lname,age){ <br>
        this.firstname =fname; <br>
        this.lastname = lname;<br>
        this.page = age; }<br>Here Person is Object Constructor (this Keyword is used here - Read whole concept of This Keyword in new tab)<br>
        const myFather = new Person("John","Doe",50); <br>
        const myMother = new Person("Sally","Roy",48);<br>
        But here if i want to add some new property sat phone number then I can't do Person.phone = "123456789" <br> 
        So here we can use of prototypes to add new properties <br>
        Person.prototype.phone = "123456789"</h4>`
    );
  else if (selecteditem === "scopeJs")
    document.write(
      `<h2> Example of Scope in JavaScript is : <hr></h2>` +
        `<p>Scope determines the accessibity (visibility) of the variables </p>` +
        `<h3> JavaScript has 3 types of Scopes: <br> 1. Block Scope <br> 2. Function Scope <br> 3. Global Scope </h3>` +
        `<h4>ES6 only has Global and Function Scope but then ES6 introduced the concept of "let" and "const" <br>
        </h4>` +
        `<h4> The Object.Prototype is on the top of Prototype Inheritence chain <br>
        And these two keywords provide Block Scope<br>
        Variables declared inside a { } block cannot be accessed from outside the block<br>
        {<br> let x = 2; <br> } <br>
        // x can not be used outside the block<br>
        {<br> var x = 2; <br> } <br>
        // x can be used outside the block<br>
        </h4>` +
        `<h3> Local Scope </h3>` +
        `<h4>//Program showing local scope <br><br> let a = "hello"; <br>
        <br> function greet(){<br> let b ="World" <br> console.log(a+b);<br>}<br> greet() <br>console.log(a+b) //give error
        <br> Here the error will occur because variable a  is global but b is local variable</h4>` +
        `<h3> Let is Blocked Scoped</h3>` +
        `<h4> //Program to show block-scoped variables 
        <br> //global variable a <br>
        let a = "Hello";
        <br>
        <br> function greet(){<br>
            //local variable <br>
            let b ="world"; <br>
            console.log (a+' ' +'b);<br>
            If(b === 'World'){<br> let c = "Lets learn JS" <br>
        console.log(a+' '+b+' ' +c)<br>}<br>
        console.log(a+' '+b+' ' +c)<br>}<br> greet(); <br>
        //Here there will be error because of c because 'c' is blocked-scope
            </h4>`
    );
  else if (selecteditem === "Hoisting")
    document.write(
      `<h2> Example of Hoisting in JavaScript is : <hr></h2>` +
        `<p> Hoisting is JavaScript default behaviour of moving all declarations to the top of the current scope </p>` +
        `<h3> For example <br> </h3>` +
        `<h4> When you execute a piece of JavaScript Code,the javascript engine creates the Global Execution Context<br>
        </h4>` +
        `<h4>During the creation phase,the Javascript engine moves the variable and function declarations to the top of your code.</h4>` +
        `<h3>This feature is known as Hoisting in Javascript.</h3>` +
        `<h4>There are two different types of hoisting <br></h4>` +
        `<h3>Variable Hoisting<br></h3>` +
        `<h4>Variable hoisting means the JavaScript engine moves the declarations to the top of the script</h4>` +
        `<h4>Lets see an example :<br>
        <br> console.log(counter); <br>
        var counter = 1; <br>
        Here the error will not occurred because Technically, the code looks like the following in the execution phase:<br>
        <br> var counter; <br> console.log(counter); <br> counter =1;<br> </h4>` +
        `<h3> The Let keyword </h3>` +
        `<h4>Lets see another example : <br>
        console.log(counter);<br>
        let counter = 1;
        <br> The Javascript issues the following error : <br>
        "ReferenceError : Cannot access 'counter' before initialization"<br>
        The error message explains that the counter variable is already in the heap memory.However,it hasn't initialized.</h4>` +
        `<h3> Function Hoisting</h3>` +
        `<h4> Like Variables JavaScript also hoists the function declarations.It moves the function declarations to the top of the script</h4>` +
        `<h4><br>Lets see an example <br>
        let x = 20; <br>
        y =10;<br>
        let result = add(x,y);<br>
        console.log(result)<br>
        function add(a,b){<br>
            return a + b;<br>}</h4>`
    );
  else if (selecteditem === "Closures")
    document.write(
      `<h2> Example of Closures in JavaScript is : <hr></h2>` +
        `<p>JavaScript variables can belong to the Local or Global scope 
        <br> Global variables can be made local (private) with <b>Closures<b>In a web page, global variables belong to the window object
        <br>Global and local variables with the same  name are different variables <br>
        Variables created without a declaration are always global,even when they are created inside a function</p>` +
        `<h3> For example <br> 
        function makeAdder(x) { <br>
            return function(y) { <br>
                return x+y; <br>};<br> }
                <br> 
            var add5 = makeAdder(5);<br>
            var add10 = makeAdder(10);<br>
                <br>
            console.log(add5(2));    //7<br>
            console.log(add10(2));   //12</h3>`
    );
  else if (selecteditem === "This")
    document.write(
      `<h2> Example of This in JavaScript is : <hr></h2>` +
        `<p> The Javascript <i>This </i> Keyword refers to the object it belongs to.</p>` +
        `<h4>funtion Person(fname,lname,age){ <br>
                this.firstname =fname; <br>
                this.lastname = lname;<br>
                this.page = age; }<br>Here Person is Object Constructor (this Keyword is used here and this is the Person object)<br>
                const myFather = new Person("John","Doe",50); <br>
                const myMother = new Person("Sally","Roy",48);<br> </h4>` +
        `<h4><br>
                The <i>This </i> references the Object of which the function is a property.</h4>`
    );
  else if (selecteditem === "applycallbind")
    document.write(
      `<h2> Example of Apply (),Call(),Bind() in JavaScript is : <hr></h2>` +
        `<p>Call(),Apply(),Bind() are very important methods in javaScript.<br>
        They help keep code clean and also they are extremely powerful tools in JavaScript <br>
        They have relationship with the <b>This</b> Keyword and they can be applied in concepts such as function currying,function borrowing and function binding. </p>` +
        `<h4>call,apply and bind are built-in methods in all the JavaScript functions </h4>` +
        `<h4><br>Lets see an example :<br>
           function greet(){<br>
            return 'Hello $` +
        `{` +
        `this.name}'<br>}
            <br> const person ={ <br>
                name : "John Wick" <br>}; <br><br> 
                greet.call(person);         //returns Hello John wick 
                <br>greet.apply(person);    //returns Hello John Wick<br><br>
                const greet2 = greet.bind(person)    //returns a new copy of greet with this binding <br> greet2()      //Hello John wick</h4>` +
        `<h4>
                <br> One of the challenges with using call,apply and bind lies in knowing their difference and when to use them.<br>
                 1. The Limitation of call() is in case when we don't know the amount of argument a function would take<br>
                 2.apply() can be used in such places  as it takes array as arguments<br>
                 3. bind() is used in future when we invoke the returned function or in simple words when we have to create a reference for a function. </h4>`
    );
  else if (selecteditem === "polyfills")
    document.write(
      `<h2> Example of Polyfills in JavaScript is : <hr></h2>` +
        `<p>Due to rapid changes in versions of JavaScript ,there are many browsers that either do not support new features,So it is not good apporach to only use Old features
        <br> There are two primiary Techcniques that a developer can use to bring the new features of JavaScript to Older browsers are called as <b>Polyfilling </b> and <b>Transpilling</b> </p>` +
        `<h4>Polyfills are backup code written to enable cross-browser functionality </h4>` +
        `<h4>
        <br> Suppose there are some browser that doesnot support ES6 map function then we have to write our map to support the functionality
        <br>let newArray = givenArray.map((ele) => { <br>
            return ele <br>})
        <br> <br>
        Array.prototype.customMap = function(processFunc){<br>
            let newArray =[];<br>
            for(let index =0; index <this.length;index++){<br>
                const curEle = processFunc(this[index],index);<br>
                if(curEle){<br>
                    newArray.push(curEle)<br>}<br>} return newArray <br> }
                    </h4>` +
        `<h4><br> Here in the example we are creating a CustomMap and attach it to array prototype
                    <br>and then pass a function as an argument to this customMap to process over each index.<br>
                    Map returns a new array and then loop through each element of an array using <i>This</i> and just push element into a new array.</h4>`
    );
  else alert("Bye");
}
