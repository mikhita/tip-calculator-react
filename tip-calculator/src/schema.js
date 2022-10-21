import * as yup from 'yup';

const schema = yup.object().shape({
    billInput: yup.number().min(1, "can't be less than 1")
    .max(100000, "can't be more than 100000").required("can't be empty"),
    percent: yup.number().min(1, "can't be less that one")
    .max(100, "can't be more than 100").required("can't be empty"),
    numOfPeople:yup.number().min(1, "can't be less that one")
    .max(1000, "can't be more than 1000").integer("must be integer").transform((v) => (isNaN(v) ? undefined : v)).required("can't be empty")
})

export default schema