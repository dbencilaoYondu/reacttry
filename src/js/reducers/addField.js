
let fields = []
export default function(state=null,action){

    switch(action.type){
        case "ADD_FIELD":
            console.log('this is from add field reducer')
            fields.push(action.payload)
            return fields
            break;
    }
    return state
}