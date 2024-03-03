import TheFields from "../formComponents/fields"
import Dropdowns from "../formComponents/dropdowns"

//NOTE: use this for itm and endpoint dlp normal, additional, and total users BUT for Enterprise DLP and DPP transform, if the logic gets TOO complicated, you may need to make a special form just for them...(?) But try it here first. most likely you can get it to work with the switch case statements in your handle functions
function EndpointForms() {

  return (
    <>
        <p className="wip">Endpoint DLP Users:</p>
        {/* <p className="wip">Additional Endpoint DLP Users:</p>
        <p className="wip">Total Endpoint DLP Users:</p>
         These should go in the enterprise dlp and dlp transform forms.*/}
        {Dropdowns([["endpointDefault"], ["endpointDropdown, endpointRetention"], ["Select a Retention"], ["Endpoint DLP Retention"]],
        [["endpoint30days"], ["endpointDropdown, endpointRetention"], ["30 Days"], ["Endpoint DLP Retention"]],
        [["endpoint90days"], ["endpointDropdown, endpointRetention"], ["90 days"] , ["Endpoint DLP Retention"]],
        [["endpoint120days"], ["endpointDropdown, endpointRetention"], ["120 days"] , ["Endpoint DLP Retention"]],
        [["endpoint366days"], ["endpointDropdown, endpointRetention"], ["366 days"] , ["Endpoint DLP Retention"]],)}

    </>
  )
}

export default EndpointForms
