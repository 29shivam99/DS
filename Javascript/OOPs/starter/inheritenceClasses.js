// ES6 classes (sugar coating)
console.log('ES6 classes (sugar coating)');

class Vehicle {
  constructor(model, type) {
    // instance members
    this.model = model;
    this.type = type;
    this.color = 'black'; //we can add properties even if it is not in parameter of the constructor
  }
  //!remember that the functions in classes are added to the prototype property and the variables u defined above will be added to the instance of class
  getModel() {
    return this.model;
  }
}

class Bike extends Vehicle {
  // we need to add a constructor only if we need to have a extra parameter in child which doest not exists in parent. This is bcoz for initialising a extra parameter in child class we need 'this' keyword in child class and 'this' keyword can only be created via 'super' call to parent class. So if child does not need a extra parameter then u can omit writing a constructor here.
  constructor(model, type, topSpeed) {
    // this line must be the first line in child's constructor (this is reponsible for the creation of this keyword in the subclass)
    super(model, type);
    this.topSpeed = topSpeed;
  }
  getTopSpeed() {
    console.log('Top speed ' + this.topSpeed);
  }
}

let apache = new Bike('apache 350', '2 wheeler', 180);
console.log(apache);

apache.getTopSpeed();
console.log(apache.getModel());
console.log(apache);
console.log(apache.__proto__, apache.__proto__ === Bike); 
console.log(apache.__proto__.__proto__, apache.__proto__.__proto__ === Vehicle);
console.log(
  apache.__proto__ === Bike.prototype,
  apache.__proto__ === Vehicle.prototype
); 
console.log(
  apache.__proto__.__proto__ === Vehicle.prototype,
  apache.__proto__.__proto__ === Bike.prototype
); 
console.log(apache instanceof Bike); 
console.log(apache instanceof Vehicle); 

//! remember that if u add a method in child that is also in the parent then child ka object call krega wo method to child wala hi call hoga, so basically one which comes first in protype chain that one will be used.
