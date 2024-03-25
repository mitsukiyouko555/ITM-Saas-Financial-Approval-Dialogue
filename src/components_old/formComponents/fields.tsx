
function TheFields(theId:any, theClass:any, fieldName:any, handleOnBlurFunction?:any, thedefaultValue?:any){

    return(
        <div className="theFields">
            {fieldName}: <input onBlur={handleOnBlurFunction} id={theId} className={theClass} defaultValue={thedefaultValue}/>
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