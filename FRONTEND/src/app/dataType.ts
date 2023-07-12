export interface SignUp{
    user: String,
    email: String,
    password: String
}

export interface LogIn{
    email: String,
    password: String
}

export interface UserReg{
    fName: String,
    mName: String,
    lName: String,
    email: String,
    password: String,
    cPassword: String,
    gender: String,
    degignation: String,
    address: String,
    adminId: String
}