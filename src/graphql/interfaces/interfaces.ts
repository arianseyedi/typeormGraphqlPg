interface cardInput {
    title: String;
    description: String | null;
    done: Boolean | null;
}

interface Carrier {
    name: String;
    email: String;
    address: String;
}

interface Customer {
    name: String;
    email: String;
    address: String;
    todo: cardInput;
}

interface customerInput {
    name: String;
    email: String;
    address: String;
    todo: cardInput;
    assignedCarrier: Carrier;
}

interface carrierInput {
    name: String;
    email: String;
    address: String;
    assignedCustomer: Customer
}

