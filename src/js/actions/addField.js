export const addField = (field) => {
    console.log('this is from add_field action');
    console.log(field)
    return {
        type:"ADD_FIELD",
        payload:field
    }
}