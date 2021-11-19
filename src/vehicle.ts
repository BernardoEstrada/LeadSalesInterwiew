class Vehicle {
    type: string;
    size: number;
    name: string;

    static SIZE = {
        SMALL: 1,
        MEDIUM: 2,
        LARGE: 4
    }

    constructor(type: string, size: number, name?: string) {
        this.type = type;
        this.size = size;
        this.name = name;
    } 
}

export default Vehicle;