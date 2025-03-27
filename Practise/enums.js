"use strict";
var Roles;
(function (Roles) {
    Roles[Roles["user"] = 0] = "user";
    Roles[Roles["admin"] = 1] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    email: "tanyam@gmail.com",
    password: "12rt",
    role: Roles.admin
};
const user2 = {
    email: "mikhu@gmail.com",
    password: "89yu",
    role: Roles.user
};
const isAdmin = (user) => {
    const { name, email, role } = user;
    return role === Roles.admin
        ? `${email} is allowed to edit the website`
        : `${name || "This user"} is not allowed to edit the website`;
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
