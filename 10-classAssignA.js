

// ================== Part 1: Vehicle Class ==================
class Vehicle {
  constructor(name, model, color, price, fuelType) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.price = price;
    this.fuelType = fuelType;
  }

  // Method to log details of vehicle
  showDetails() {
console.log(`Vehical Details: ${this.name}, Model: ${this.model}, Color: ${this.color}, Price: ${this.price}, Fuel Type: ${this.fuelType}`);
  }
}

// Create 5 objects of Vehicle class
const vehicle1 = new Vehicle("Range Rover", "SV", "Black", "₹2,50,00,000", "Petrol");
const vehicle2 = new Vehicle("Land Cruiser", "LC300", "White", "₹3,00,00,000", "Diesel");
const vehicle3 = new Vehicle("Tucson", "XRT", "White", "₹36,50,000", "Petrol");
const vehicle4 = new Vehicle("Pajero", "SFX", "Black", "₹29,00,000", "Diesel");
const vehicle5 = new Vehicle("Fortuner", "Neo Drive", "White", "₹36,00,000", "Diesel");

// Log vehicle details
console.log("------------------------------------------------------------------------------------------------------------");
vehicle1.showDetails();
console.log(vehicle1);
vehicle2.showDetails();
console.log(vehicle2);
vehicle3.showDetails();
console.log(vehicle3);
vehicle4.showDetails();
console.log(vehicle4);
vehicle5.showDetails();
console.log(vehicle5);
// ================== Part 2: College Class ==================
class College {
  constructor( Collegename, city, university, Grade) {
    this.Collegename = Collegename;
    this.city = city;
    this.university = university;
    this.Grade = Grade;
  }

  // Method to log complete details
  display() {
    console.log(`College Name: ${this.Collegename}, City: ${this.city}, University: ${this.university}, Grade: ${this.Grade}`);
  }
}

// Create 4 objects of College class
const college1 = new College("Garware College ", "Sangli", "Kolhapur University", "A");
const college2 = new College("Bharti Vidyapeeth", "Sangli", "Mumbai University", "A+");
const college3 = new College("D.Y.Patil college", "Pimpari Chichwad", "Pune University", "A++");
const college4 = new College("MIT College", "Pune", "Pune University", "A+");

// Log college details
console.log("------------------------------------------------------------------------------------------------------------");
console.log(" College Details:");

college1.display();
college2.display();
college3.display();
college4.display();