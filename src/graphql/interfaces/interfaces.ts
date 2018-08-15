//########################################### Entities

interface ITruck {
    id: string;
    created_at: Date;
    updated_at: Date;
    model: string;
    purchaseYear: number;
    carrier: ICarrier;
}

interface ICustomer {
    id: string;
    created_at: Date;
    updated_at: Date;
    name: String;
    email: String;
    address: String;
    todo: ICard;
}

interface ICarrier {
    id: string;
    created_at: Date;
    updated_at: Date;
    name: String;
    email: String;
    address: String;
    trucks: ITruck[];
}

interface ICard {
    id: string;
    created_at: Date;
    updated_at: Date;
    title: String;
    description: String;
    done: String;
    customer: ICustomer;
}

//########################################### Input Types

interface ICardInput {
    title: String;
    description?: String | null;
    done: Boolean | null;
    customer: ICustomerInput
}

interface ICustomerInput {
    name: String;
    email: String;
    address: String;
    todo: ICardInput;
}

interface ICarrierInput {
    name: String;
    email: String;
    address: String;
    trucks: ITruckInput[]
}

interface ITruckInput {
    model: String;
    purchaseYear: String;
    carrier: ICarrierInput[];
}

