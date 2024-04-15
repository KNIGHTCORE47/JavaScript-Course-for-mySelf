## JavaScript and Classes

## OOP

- in JavaScript OOP is a programming paradigme means the ways of thinking about how programs are represented and processed

## Objects
- collection of properties and methods
- toLoweCase etc.

## Parts of OOP
OBJECT Literals 

- CONSTRUCTOR functions
- Prototypes
- Classes
- Instances (new, this)

## 4 Pillars of OOP

### `Abstraction` 
In JavaScript, abstraction refers to the concept of hiding the implementation details of a piece of code and exposing only the essential functionality to the user. It allows you to focus on what the code does, rather than how it does it.

Here are some key aspects of abstraction in JS:

**1. Functions:** Functions are a fundamental way to achieve abstraction. You define the function's name, parameters (inputs), and return value (output), essentially creating a "black box" that performs a specific task. The user of the function doesn't need to know how the function works internally, just what it can do.

**2. Classes (Objects):** Classes (or objects) can encapsulate data (properties) and functionality (methods). By defining public and private members within a class, you control which aspects are directly accessible to the outside world, promoting data protection and preventing unintended modifications.

**3. Modules:** Modules allow you to group related functions and variables into a single unit. This helps organize your code and prevents naming conflicts between different parts of your program. You can export only the necessary functionality from a module, promoting modularity and reusable code.

**Benefits of Abstraction:**

- **Readability and Maintainability:** Abstraction makes code easier to understand and maintain by hiding complexity.
- **Reusability:** Well-abstracted code can be easily reused in different parts of your application.
- **Modular Design:** Abstraction allows for modular code organization, improving structure and manageability.
- **Error Prevention:** By hiding internal implementation details, abstraction can prevent accidental errors or modifications to core functionality.

By using abstraction effectively in JavaScript, you can write cleaner, more maintainable, and reusable code.

### `Encapsulation`

Encapsulation in JavaScript refers to the practice of bundling data (properties) and the functions that operate on that data (methods) together within a single unit, typically a function or a class. This concept aims to:

- **Hide implementation details:** The internal workings of how the data is manipulated are hidden from the outside world, protecting it from unintended modifications.
- **Control access:** You can define which parts of the data and functionality are publicly accessible (through methods) and which are private (only accessible within the unit).

**Common Approaches to Encapsulation in JS:**

1. **Function Scoping:** While not as strong as other methods, using function scope creates a level of encapsulation. Variables declared within a function are only accessible within that function.

2. **Closures:** Closures allow you to create private variables that are accessible even after the function has returned. This provides a way to encapsulate data and methods within a function.

3. **Classes (Modern Approach):** Classes are the most common way to achieve encapsulation in modern JavaScript. Within a class, you can define properties (data) and methods (functions) that operate on the data. You can use access modifiers like `public`, `private`, and `protected` to control access to these members.

**Benefits of Encapsulation:**

- **Data Protection:** Prevents accidental or unintended changes to sensitive data by controlling access.
- **Modular Design:** Promotes code organization by keeping related data and functionality together.
- **Code Reusability:** Makes it easier to create reusable components with well-defined interfaces.
- **Maintainability:** Encapsulated code becomes easier to understand, maintain, and modify later.

**Key Points:**

- Encapsulation is about bundling data and functionality together.
- It controls access to internal details, protecting data and promoting modularity.
- Functions, closures, and classes (modern approach) are common tools for achieving encapsulation.

By effectively using encapsulation, you can write more robust, secure, and maintainable JavaScript code. 

### `Inheritance`

In JavaScript, inheritance refers to the mechanism where a new object (child) can inherit properties and methods from an existing object (parent). This allows you to create a hierarchy of related objects, where the child object inherits the functionality of the parent and can optionally add its own specific behavior.

Here are some key aspects of inheritance in JS:

**Prototypal Inheritance:**

- JavaScript doesn't have classical inheritance like Java or C++. Instead, it uses a prototypal approach.
- Every object in JavaScript has a hidden internal property called `[[Prototype]]` (often abbreviated to `proto`) that links it to another object, its prototype.
- When you try to access a property or method on an object, JavaScript first checks if it exists on the object itself. If not, it looks for it on the object's prototype, and then on the prototype's prototype, and so on, until it finds the property or reaches the end of the prototype chain (usually the built-in `Object.prototype`).

**Creating a Child Object:**

- There are different ways to create a child object that inherits from a parent object. Common methods include:
    - **Object.create(parentObject):** Creates a new object with the specified parent object in its prototype chain.
    - **Constructor Functions:** You can define a constructor function for the parent object and use it as a blueprint for creating child objects. The child object inherits properties and methods from the parent's prototype.

**Benefits of Inheritance:**

- **Code Reusability:** Inheritance allows you to create new objects that share common functionality with existing objects, reducing code duplication.
- **Code Organization:** It helps structure your code by creating a hierarchy of related objects, improving maintainability.
- **Polymorphism:** Inheritance enables polymorphism, where different objects can respond differently to the same method call, based on their specific implementations.

**Limitations and Alternatives:**

- While inheritance can be useful, it can sometimes lead to complex inheritance hierarchies that become difficult to manage.
- In modern JavaScript, consider using techniques like composition (mixing functionalities from different objects) as an alternative to relying solely on inheritance for code reusability.

By understanding inheritance, you can create well-structured JavaScript applications that leverage the benefits of code reuse and organization.

### `Polymorphism` 

Polymorphism in JavaScript refers to the ability for objects of different types to respond differently to the same method call. It allows for flexible and dynamic behavior in your code.

Here's how polymorphism works in JS:

**Prototypal Inheritance:**

- Remember that JavaScript uses prototypal inheritance, where objects inherit properties and methods from their prototypes.
- When you call a method on an object, JavaScript searches the prototype chain to find the method definition.

**Method Overriding:**

- When a child object inherits a method from a parent object, it can optionally re-define (override) that method to provide its own specific implementation.
- This allows objects of different types to behave differently when the same method is called.

**Example:**

```javascript
function Shape() {
  this.getArea = function() {
    throw new Error("Abstract method: getArea not implemented");
  };
}

function Square(side) {
  this.side = side;
  this.getArea = function() {
    return this.side * this.side;
  };
}

Square.prototype = Object.create(Shape.prototype); // Inherit from Shape

function Circle(radius) {
  this.radius = radius;
  this.getArea = function() {
    return Math.PI * this.radius * this.radius;
  };
}

Circle.prototype = Object.create(Shape.prototype); // Inherit from Shape

const square = new Square(5);
const circle = new Circle(3);

console.log(square.getArea()); // 25
console.log(circle.getArea()); // ~28.27 (depending on PI value)
```

**Benefits of Polymorphism:**

- **Flexibility:** Code becomes more adaptable as objects can handle the same method call with their own logic.
- **Code Reusability:** You can write generic methods that work with different object types, promoting code reuse.
- **Maintainability:** Polymorphism can improve maintainability by separating core functionality (in the parent) from specific implementations (in child objects).

**Important Note:**

- While polymorphism offers advantages, it's essential to design proper object hierarchies and relationships to prevent overly complex code structures.

By understanding polymorphism, you can write more flexible and adaptable JavaScript code, allowing objects of different types to interact effectively.