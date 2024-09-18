export interface DataUser{
    name : string
    age : number
    address : Array<Address>
}

interface Address{
    zipcode? : number
    district : string
    city : string
    provinces : string
}

export interface addUser{
    name: string
    email: string
}