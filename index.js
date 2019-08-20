/*
Create a FacebookUser class with one attribute: name.
In a main function use the array below to create an array of FacebookUser objects and console.log that new array.
what do i need?
a class (above the function)
a main function
an array
 */
let myArray = ['Marvin','Ferris','Brynn','Damian','Whitney','Leila','Frances','Keith','Cara','Ainsley','Adrian','Adam','Iona','Akeem','Scarlett','Murphy','Angelica','Georgia','Calvin','Amy','Merrill','Gloria','Charissa','Colorado','Inga','Eden','Carla','Hedley','Thaddeus','Maggie','Kimberly','Ezra','Kane','Candace','Cade','Dante','Scott','Philip','Dieter','Kristen','Nerea','Ivor','Stacey','Tanner','Judith','Emery','Lionel','Josiah','Wesley','Anne','Lane','Kameko','Colleen','Travis','Abdul','Scarlet','Quail','Larissa','Palmer','Irene','Cherokee','Rajah','Maxine','Yen','Bruce','Matthew','Ivan','Georgia','Charissa','Thaddeus','Jack','Dean','Florence','Madonna','Dennis','Zeus','Destiny','Maia','Mara','Florence','Anika','Brenda','Jocelyn','Zia','Kiona','Lars','Molly','Gregory','Felix','William','Dahlia','Gil','Byron','Daria','Nevada','Claudia','Zelenia','Nathan','Judah','Sheila']

//Create a FacebookUser class with one attribute: name.
class FacebookUser {
    constructor (name) {
        this.name_prop = name
    }
}
let otherUser;
emptyArray = [];

// you never created an object(s)


//In a main function use the array below to create an array of FacebookUser objects and console.log that new array.
function main() {
  for(i = 0; i < myArray.length; i++) {
      myArray.push(emptyArray);
      console.log(emptyArray);
  }
}
main();
newString ='h1 style=\'color:blue;background:red;text-shadow: -2px 2px 2px #000000;\'>[OBJECT NAME]</h1>';
newString = document.getElementById("classwork").innerHTML;
console.log(main + newString);





/*
Using the array you created in the problem above,
concatenate(+ something) every element's name(every name in the array) attribute to the [OBJECT NAME] position below.
Make sure each element is no longer an array and concatenating each new string to a new variable.
 */






