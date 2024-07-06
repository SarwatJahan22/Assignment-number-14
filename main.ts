//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.

// let guestArr : string [] = ["Zuhaib", "Zayan", "Ayesha"];

// guestArr.map((items) => ( console.log(`Dear ${items}, You are invited to the dinner.`)));

//Q15 Solution:Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.



let guestArr : string[] = ["Sarwat", "Zuhaib", "Zayan", "Ayesha"];
let canNotAttend : string = "Sarwat"

//console.log(canNotAttend + " " "can not attend the dinner.")

let newGuest  : string  = "Zahra";

guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

// console.log(guestArr);

guestArr.map((guestArr));
console.log(`Dear ${guestArr}, You are invited to the dinner,`);









