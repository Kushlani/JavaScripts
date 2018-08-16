/*
 * Library = Generic(common) term to indicate some programming code written for the purpose of reuse.
 *			 When someone write a library, others can reuse it for their programmes.
 *			 Upul knows how to make biriyani best, So he writes the library so the others can 
 *			 just use the library he wrote to make biriyani, others dont have to learn themselves the
 *			 process of making biriyani. (For others to use)
 *
 *
 * Module = Component = (Sub) Part = (functions in JS context)
 *
 * 			 Module is a generic term.
 *
 * 			 Can be considered as a section of the program, or a sub part. or a component.
 * 			 Also serves the purpose of reusing the programming code but within the application,software.
 * 			 A class/object of a function CAN BE CONSIDERED as a module.
 *
 * 			 Lets say you are writing a cooking meal programme. Cutting vegetables are a function which 
 * 			 needs to happen again and again (for the vegis required for the meal), so we can create a 
 * 			 cutting vegetable as a module and call it whenever we need to cut vegetables.
 *
 *
 * Both libraries and modules try to reuse code, but basically modules resuse within a programm where as libraries are
 * commonly available for ppl to use for their programms.
 *
 * 	API = are libraries, some of them are frameworks. 
 * 	APIs basically represents the interaction between the library and your programme.
 * 	(In JS it shows what are the objects and methods in the library that you can call to get things done..)
 */

/*
 * Library Demo....
 * 
 * Consider this as a programme you are writing,
 * 
 * 	MyCookingMeal {
 *  	//I am using the biriyani library.
 * 		using biriyani_library;
 *
 *
 * 		makeBiriyani(); //Here i am calling a method on the library to make a biriyani.
 *   }
 */

/*
 * Module Demo....
 * 
 * Consider this as a program you are writing,
 * 
 * 	MyCookingDifferentMeal {
 * 		cutOnions();
 * 		cutGreenChillies();
 * 		cutGarlics();
 * 		cutKale();
 * 		cutCarrots();
 *  }
 *  
 *  MyCookingDifferentMeal {
 * 		
 * 		cutVegis(x){}
 *
 *		cutVegis(onions);
 *		cutVegis(greenChillies);
 *		cutVegis(garlics);
 *		cutVegis(kale);
 *		cutVegis(carrots);
 *  }
 *
 * API
 * 		
 *
 * 
 */

