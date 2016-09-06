let clientSelected = [];
export default function(state=null,action){  
    switch(action.type){
        case "SELECT_CLIENT":
             console.log('SELECT_CLIENT')
             console.log(action.payload)
             clientSelected.push(action.payload)
             return clientSelected;
             break;
    }

    return state;
} 