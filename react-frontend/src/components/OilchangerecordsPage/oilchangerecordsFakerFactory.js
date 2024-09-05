
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
vehicleid: faker.lorem.sentence(1),
servicerecordid: faker.lorem.sentence(1),
oiltype: faker.lorem.sentence(1),
mileage: faker.lorem.sentence(1),
technicianid: faker.lorem.sentence(1),
dateofchange: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
