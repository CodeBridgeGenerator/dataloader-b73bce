
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
customerid: faker.lorem.sentence(1),
vehicleid: faker.lorem.sentence(1),
servicedate: faker.lorem.sentence(1),
totalamount: faker.lorem.sentence(1),
paymentstatus: faker.lorem.sentence(1),
paymentmethod: faker.lorem.sentence(1),
notes: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
