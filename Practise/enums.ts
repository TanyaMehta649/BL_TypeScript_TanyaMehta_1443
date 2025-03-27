
enum Roles {
    user,
    admin
}

type LoginDetails = {
    name?: string;
    email: string;
    password: string;
    role: Roles;
};

const user1: LoginDetails = {
    email: "tanyam@gmail.com",
    password: "12rt",
    role: Roles.admin
};

const user2: LoginDetails = {
    email: "mikhu@gmail.com",
    password: "89yu",
    role: Roles.user
};

const isAdmin = (user: LoginDetails): string => {
    const { name, email, role } = user;
    return role === Roles.admin
        ? `${email} is allowed to edit the website`
        : `${name || "This user"} is not allowed to edit the website`;
};

console.log(isAdmin(user1)); 
console.log(isAdmin(user2)); 
