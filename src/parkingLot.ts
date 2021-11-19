import Spot from "./spot";
import Vehicle from "./vehicle";

class ParkingLot {
    sSpots: number;
    mSpots: number;
    lSpots: number;
    
    spots: Spot[] = [];
    static defaultVehicles = {
        motorcycle: new Vehicle("Motorcycle", Vehicle.SIZE.SMALL),
        car: new Vehicle('Car', Vehicle.SIZE.MEDIUM),
        van: new Vehicle('Van', Vehicle.SIZE.LARGE),
    }
    constructor(sSpots: number, mSpots: number, lSpots: number) {
        this.sSpots = sSpots;
        this.mSpots = mSpots;
        this.lSpots = lSpots;

        for (let i = 0; i < this.sSpots; i++)
            this.addSpot(Spot.SIZE.SMALL);
        for (let i = 0; i < this.mSpots; i++)
            this.addSpot(Spot.SIZE.MEDIUM);
        for (let i = 0; i < this.lSpots; i++)
            this.addSpot(Spot.SIZE.LARGE);
    }

    park(vehicle: Vehicle) {
        // if()
    }

    addSpot(size: number): void {
        this.spots.push(new Spot(this.spots.length + 1, size));
    }

    getSpots(): Spot[] {
        return this.spots;
    }

    findAvailable(vehicle: Vehicle): Spot[] {
        return this.spots.filter(spot => spot.canFit(vehicle));
    }

    addVehicle(vehicle: Vehicle): boolean {
        const availableSpots = this.findAvailable(vehicle);
        return availableSpots[0].park(vehicle);
    }

}

export default ParkingLot;
