
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
suppliername: faker.lorem.sentence(1),
contactperson: faker.lorem.sentence(1),
phonenumber: faker.lorem.sentence(1),
email: faker.internet.email(),
address: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
