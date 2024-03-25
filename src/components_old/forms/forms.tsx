import ItmForms from "../../components/formComponents/ITM/itmforms"
import EndpointForms from "./endpointforms"
import TheFields from "../formComponents/fields"
import Dropdowns from "../formComponents/dropdowns"
import CheckboxForm from "./checkboxform"

function Forms() {



  function handleSubmission(){
    // Remember to Prevent Default to make it not refresh the page.
    //collect and render input like so: https://www.youtube.com/watch?v=NxVCq4p0Kb0
  }

  return (
    <form>
        <CheckboxForm/>
        {Dropdowns([["new"], ["dealDropdown"], ["New"], ["Deal Type"]], 
        [["renewal"], ["dealDropdown"], ["Renewal"], ["Deal Type"]], 
        [["addon"], ["dealDropdown"], ["Add-On"], ["Deal Type"]])}
        
        <ItmForms/>
        <EndpointForms/>

        <p className="wip">Metadata Feed Capacity per 30 Days in GBs:</p>
        <p className="wip">Term or License Through Date:</p>
        <p className="wip">Misc Comments:</p>

        <button type="submit" onClick={handleSubmission}>Approve</button>
        <button type="reset"> Clear Form</button>
    </form>
  )
}

export default Forms
