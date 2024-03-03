import * as React from "react";
import handleITMSaas from "./handleFunctions/handleITMSaas";

function TheFields(theId:any, theClass:any, fieldName:any, thedefaultValue?:any){



    function handleOnBlur(e:any){
        // test3(e, fieldName)
        //now that test3.tsx works perfectly, all i need to do is to make different handle functions for different classses and do a case statement that goes: if theID = itmSaasUsers, call the function from that other page that correlates to that!
        // console.log(fieldName, ":", e.target.value)
        
        theId == "itmUsers" ? handleITMSaas(e, fieldName, theId): console.log("not ITM Saas Users")
        // PERFECT!!! this works! Now i just gotta put it in a case statement so that each thing will call its own function from another page... something like case theId == "itmUsers" : setITMSaasUsersAndVC()
        //base visual capture should not be updatable. Only Additional VC should be. Total = base + Additional.

    }

    return(
        <div>
            {fieldName}: <input onBlur={handleOnBlur} id={theId} className={theClass} defaultValue={thedefaultValue}/>
        </div>
    )
}

export default TheFields
//What do I need?
//id
//class?
//type:any?
//fieldName
//Value will need to be a global state somewhere.... then it can be tied to the onBlur function maybe use useReducer to revert the value back to default?
//onBlur function but that's not part of the field function creation.