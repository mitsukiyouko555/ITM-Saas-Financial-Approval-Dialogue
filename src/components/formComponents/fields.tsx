export default function TheFields(props:any){

    if((props.type=="text") || (props.type=="number")){
        return(
            <div className={props.theClass}>
                {props.fieldName}: <input key={props.theId} id={props.theId} type={props.type} name={props.theId} value={props.value} className={props.theClass} onBlur={props.handleBlur}/>
            </div>
        )}
    else if (props.type=="checkbox"){
        return(
            <div className={props.theClass}>
                <input type={props.type} value={props.value} key={props.theId} id={props.theId} name={props.theId} onChange={props.handleBlur} /> {props.fieldName}
            </div>
        )}
    else if (props.type=="dropdown"){
        return(
            <div className={props.theClass}>
                <label>{props.fieldName}: </label>
                <select className={props.theClass} name={props.theId} onChange={props.handleBlur}>
                    {props.options.map((i:any) => <option key={i[0]} className={i[1]} id={i[0]} value={i[3]}> {i[2]} </option>)}
                </select>
            </div>
        )}
    else if (props.type=="radio"){
        return(
            <div className={props.theClass}>
                {props.fieldName}:{" "}
                {props.options.map((i:any) =>
                    <span key={i[3]}>
                    <label key={i[2]} htmlFor={i[0]}>{i[2]}:</label>
                    <input key={i[0]} id={i[0]} type={props.type} name={props.theId} value={i[3]} className={i[1]} onClick={props.handleBlur}/>
                    </span>
                )}
            </div>
        )}
    else if((props.type=="date")){
        return(
            <div className={props.theClass}>
                {props.fieldName}: <input key={props.theId} id={props.theId} type={props.type} name={props.theId} value={props.value} className={props.theClass} onChange={props.handleBlur}/>
            </div>
        )}
    else{
        return(
            <p>Put in a supported "Type" Prop (text, number, checkbox, dropdown, date, or radio.) If it needs useState tracking, put it in the formDeets useState found in MainForms.tsx OR manually create an input compoment if more customization is needed.</p>
        )}
}