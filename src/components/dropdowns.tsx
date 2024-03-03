//parameter 1/[0] is the id
//parameter 2/[1] is the class(es)
//parameter3/[2] is the optionName
//Parameter 4/[3] is the FIELD Name (goes in the label ONLY)

function Dropdowns(...params:any[]){
    // NOTE: the ... makes it so that you can put any number of params!! doesnt have to be the same for each component which is super awesome!!


    return(
        <div className="dropdowns">

            <label>{params[0][3]}: </label>
            <select name={params[0][3]}>
                {params.map((i) => <option key={i[0]} className={i[1]} id={i[0]}> {i[2]} </option>)}
            </select>

        </div>
    )

}
export default Dropdowns