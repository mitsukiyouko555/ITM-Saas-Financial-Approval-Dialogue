import TheFields from "../fields"

export default function Regions(props:any){
    
    return(
        <>
            <TheFields
            fieldName="Region"
            handleBlur={props.handleBlur} 
            theClass="Form" 
            theId="region"
            type="dropdown" 
            options={
            [[["default"],["dealtype"],["Select a Region"],["null"]],
            [["us"],["dealtype"],["US"],["US"]], 
            [["global"],["dealtype"],["Global"],["Global"]]]} 
            />
        </>
    )
}