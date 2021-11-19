import Vehicle from "./vehicle";
class Spot {
    size: number;
    number: number;

    vehicles: Vehicle[] = [];

    static SIZE = {
        SMALL: 1,
        MEDIUM: 2,
        LARGE: 4
    }

    constructor(number: number, size: number) {
        this.size = size;
        this.number = number;
    }

    addVehicle(vehicle: Vehicle) {
        this.vehicles.push(vehicle);
    }

    removeVehicle(vehicle: Vehicle) {
        this.vehicles = this.vehicles.filter(v => v !== vehicle);
    }

    checkAvailability(): number {
        return this.size - this.vehicles.reduce((prev, curr) => prev + curr.size, 0);
    }

    canFit(vehicle: Vehicle): boolean {
        return this.checkAvailability() >= vehicle.size;
    }

    park(vehicle: Vehicle): boolean {
        if (this.canFit(vehicle)) {
            this.addVehicle(vehicle);
            return true;
        }
        return false;
    }
}

export default Spot;