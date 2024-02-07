import { normalize, schema } from 'normalizr';

const courseSchema = new schema.Entity('courses');

function coursesNormalizer(data) {
    const normalizedData = normalize(data, [courseSchema]);
    return normalizedData.entities.courses;
}

export default coursesNormalizer;
