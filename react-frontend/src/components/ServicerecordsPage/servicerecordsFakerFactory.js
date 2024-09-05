
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
invoiceid: faker.lorem.sentence(1),
serviceid: faker.lorem.sentence(1),
vehicleid: faker.lorem.sentence(1),
technicianid: faker.lorem.sentence(1),
servicedate: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
