import {faker} from "@faker-js/faker";
import {ITodo, ITodoFetch} from "../components/TodoItem/TodoItem.types";


export const generateData = (data:ITodoFetch):ITodo => {
    const dates = faker.date.betweens({from: '2023-01-01T00:00:00.000Z', to: '2024-01-01T00:00:00.000Z', count: 2}) as [Date, Date]
    const description = faker.lorem.paragraphs()
    const tags = [faker.lorem.words(1), faker.lorem.words(1)]

    return {
        ...data,
        dates,
        description,
        tags
    }
}