// Notes: 
// 1. Whatever we write in java will be in the form of classes
// 2. Even a file with the extension of .java is a class itself
// Q. What is a class?
// Ans. A class is a named group of properties or functions
// 3. The name of the class should be same as the name of the file. So the class name will be 'main' if the file's name is 'main.java'. So 'main.java' will imply that there is a class "Main" in this file

public class Demo {
    // every code that we will be writing wiil be in this class
    // 4. Every variable that we see in programming, which starts with a capital letter implies that its a class
    // 5. if we don't want a variable to be accessible outside of a class, we can do so by access modifiers
    // 6. Public means that the class can be accessed from anywhere i.e., other classes, files, packages etc.
    // 7. There has to be a main function in this file
    // 8. main function is the entry point in the java program

    public static void main (String[] args) {
        System.out.println(args[1]);
    //     int bottles = 99;
    //     System.out.println(bottles);
    //     while (bottles > 0) {
    //         System.out.println(bottles);
            
    //             System.out.println(bottles + "bottles of beer on the wall," + bottles + "bottles of beer");
    //             bottles = bottles - 1; // To reduce the bottle count
    //             System.out.println("Take one down, pass it around," + bottles + "bottles of beer on the wall.");
    //             if (bottles == 1) {
    //                 System.out.println(bottles + "bottle of beer on the wall," + bottles + "bottle of beer.");
    //                 System.out.println("Take one down, pass it around, no more bottles of beer on the wall.");
    //             }
    //     }
    }

    // 8. This is a method and not a function, because all the functions inside a class are called methods
    // 9. The public class has to be same name as the name of the file
    // 10.Void means that the function is returning nothing
    
}

// 12. Since without the main function the program will not work, so it makes sense to make it available everywhere. Since it is also the entry point of a program so the method has to accessible before even creating an object.
// And since we  require to need to create an object before being able to use any of its variables, it makes sense to make the entry point accessible without even needing to create an object of the class

// 13. What is static?
// Ans > Static keyword allows us to execute the main function without creating an object of the Main class. Static varibales and functions do not depend on the object. We have to run the main function without creating an object of the class Main because it is the first thing that will be executed
// 14. Whenever we put variables and methods in classes, in order to use them we have to create an object of that class
// 15. Void is the return type of the function

// 16. String[] args are known as command line arguments. We can give them in the same way we pass arguments in node.
// 17. Whatever arguments we are giving in the command line will be stored as an array in 'String[] args'
// 18. Note:
// The source code goes in the src file
// The byte code goes in the out folder