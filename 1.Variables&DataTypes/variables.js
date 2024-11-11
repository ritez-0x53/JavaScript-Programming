
// let vs var vs const 

// block scoped, cannot redeclare , value can be changed
let fullName = "john doe";
fullName = "Nicola Tesla";

// function and global scoped, can be redeclare , value can be changed
var favouriteNum = 34;
var favouriteNum = "Thirtyfour"

// block scoped, neither can redeclare nor value change 
const isConst = true;
// isConst = false; // not possible like let