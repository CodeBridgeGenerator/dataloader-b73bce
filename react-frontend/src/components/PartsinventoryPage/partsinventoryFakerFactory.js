
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
partname: faker.lorem.sentence(1),
description: faker.lorem.sentence(1),
quantityinstock: faker.lorem.sentence(1),
price: faker.lorem.sentence(1),
supplierid: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
