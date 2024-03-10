import TheFields from "../formComponents/fields"
import Dropdowns from "../formComponents/dropdowns"

//NOTE: use this for itm and endpoint dlp normal, additional, and total users BUT for Enterprise DLP and DPP transform, if the logic gets TOO complicated, you may need to make a special form just for them...(?) But try it here first. most likely you can get it to work with the switch case statements in your handle functions
function EndpointForms() {

  return (
    <>
        <p className="wip">Endpoint DLP Users:</p>

        {Dropdowns([["endpointDefault"], ["endpointDropdown, endpointRetention"], ["Select a Retention"], ["Endpoint DLP Retention"], [null]],
        [["endpoint30days"], ["endpointDropdown, endpointRetention"], ["30 Days"], ["Endpoint DLP Retention"], [30]],
        [["endpoint90days"], ["endpointDropdown, endpointRetention"], ["90 Days"] , ["Endpoint DLP Retention"], [90]],
        [["endpoint120days"], ["endpointDropdown, endpointRetention"], ["120 Days"] , ["Endpoint DLP Retention"], [120]],
        [["endpoint366days"], ["endpointDropdown, endpointRetention"], ["366 Days"] , ["Endpoint DLP Retention"], [366]],)}

    </>
  )
}

export default EndpointForms
