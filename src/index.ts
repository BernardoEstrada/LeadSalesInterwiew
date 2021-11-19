//express basic app
import express from 'express';
import ParkingLot from './parkingLot';

const app = express();
const port = 3000;
app.use(express.json());

let pl = new ParkingLot(5, 10, 4);

app.get('/pl', (req, res) => {
    res.send(pl);
});

app.put('/park', (req, res) => { 
    switch(req.body.vehicle) {
        case 'motorcycle':
            res.send(pl.addVehicle(ParkingLot.defaultVehicles.motorcycle));
            break;
        case 'car':
            res.send(pl.addVehicle(ParkingLot.defaultVehicles.car));
            break;
        case 'van':
            res.send(pl.addVehicle(ParkingLot.defaultVehicles.van));
            break;
        default:
            res.sendStatus(400).send('Invalid vehicle type');
            break;
    }
});

app.get('/available', (req, res) => { 
    switch(req.body.vehicle) {
        case 'motorcycle':
            res.send({ "availableSpaces": pl.findAvailable(ParkingLot.defaultVehicles.motorcycle).length });
            break;
        case 'car':
            res.send({ "availableSpaces": pl.findAvailable(ParkingLot.defaultVehicles.car).length });
            break;
        case 'van':
            res.send({ "availableSpaces": pl.findAvailable(ParkingLot.defaultVehicles.van).length });
            break;
        default:
            res.sendStatus(400).send('Invalid vehicle type');
            break;
    }
});

app.get('/isFull', (req, res) => { 
    res.send({ "isFull": pl.findAvailable(ParkingLot.defaultVehicles.motorcycle).length <= 0 });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});