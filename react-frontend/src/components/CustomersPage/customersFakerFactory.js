
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
firstname: faker.lorem.sentence(1),
lastname: faker.lorem.sentence(1),
email: faker.internet.email(),
phonenumber: faker.lorem.sentence(1),
address: faker.lorem.sentence(1),
joindate: faker.lorem.sentence(1),
loyaltypoints: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
