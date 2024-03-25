//For props.options:
//parameter 1/[0] is the id
//parameter 2/[1] is the class(es)
//parameter3/[2] is the fieldName
//Parameter 4/[3] is the Value (for a 90 day retention, that's 90)
export default function Dropdowns(props:any){
    return(
        <div className="dropdowns">
            <label>{props.fieldName}: </label>
            <select className={props.theClass} name={props.theId} onChange={props.handleBlur}>
                {props.options.map((i:any) => <option key={i[0]} className={i[1]} id={i[0]} value={i[3]}> {i[2]} </option>)}
            </select>
        </div>
    )
}