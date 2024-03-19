//parameter 1/[0] is the id
//parameter 2/[1] is the class(es)
//parameter3/[2] is the optionName
//Parameter 4/[3] is the FIELD Name (goes in the label ONLY)
// import HandleITMVisualCapture from "./globalParam"
import HandleITMSaas from "../handleFunctions/handleITMSaas"
function Dropdowns(...params:any[]){
    // NOTE: the ... makes it so that you can put any number of params!! doesnt have to be the same for each component which is super awesome!!

    function handleDropdowns(e:any){

        console.log(e.target.value)
        if (e.target.className.includes("itmRetention")){
            // console.log("itmret")
            HandleITMSaas(e)
        } 
        else{
            console.log("no itm ret.")
        }

    }

    return(
        <div className="dropdowns">
            <label>{params[0][3]}: </label>
            <select className={params[0][1]} name={params[0][3]} onChange={handleDropdowns}>
                {params.map((i) => <option key={i[0]} className={i[1]} id={i[0]} value={i[4]}> {i[2]} </option>)}
            </select>
        </div>
    )

}
export default Dropdowns