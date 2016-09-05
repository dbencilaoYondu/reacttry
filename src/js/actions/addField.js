export const addField = (field) => {
    console.log('you added a field');
    return {
        type:"ADD_FIELD",
        payload:field
    }
}