export default function Checkboxes(props:any){

    return(
        <div>
            <input type="checkbox" id={props.theId} name={props.theId} onClick={props.handleBlur} />{props.fieldName}
        </div>
    )
}