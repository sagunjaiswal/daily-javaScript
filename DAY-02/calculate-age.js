function calculateAge(dob) {
  /*The getTime() method returns the number of milliseconds between 
    midnight of January 1, 1970 and the specified date.*/
  var differecems = Date.now() - dob.getTime(); //gives the difference of millisecs from dob till now

  /*With no arguments, the Date() constructor creates a Date object set
   to the current date and time.

  milliseconds − When one numeric argument is passed, it is taken as the 
  internal numeric representation of the date in milliseconds, as returned 
  by the getTime() method. For example, passing the argument 5000 creates 
  a date that represents five seconds past midnight on 1/1/70.
  
  so, basically it gives us the date =  1/1/70 + ourage*/
  var ageDate = new Date(differecems);
  /*The getUTCFullYear() method returns the year (four digits for dates 
    between year 1000 and 9999) of the specified date, according to 
    universal time.

The UTC methods calculate their date assuming that the date object is of 
local time and date.

The Universal Coordinated Time (UTC) is the time set by the World 
Time Standard.

using getFullYear() wouldnt give wrong result, but using getUTCFullYear 
Sometimes it's convenient to have the date and time in the local timezone,
and sometimes it's convenient to have the date and time in a timezone that's
 independent of the computer's local timezone.

There are ways to convert between timezones in JavaScript, but they're 
cumbersome.

So,it's just for convenience.*/

  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
var dob = prompt("Enter your birthdate(yyyy,mm,dd):");

document.write("Your age is:");
document.write(calculateAge(new Date(dob)));
