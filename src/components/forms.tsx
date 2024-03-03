import TheFields from "./fields"
import Dropdowns from "./dropdowns"

//NOTE: use this for itm and endpoint dlp normal, additional, and total users BUT for Enterprise DLP and DPP transform, if the logic gets TOO complicated, you may need to make a special form just for them...(?) But try it here first. most likely you can get it to work with the switch case statements in your handle functions
function Forms() {

  return (
    <>

        {Dropdowns([["new"], ["dealDropdown"], ["New"], ["Deal Type"]], 
        [["renewal"], ["dealDropdown"], ["Renewal"], ["Deal Type"]], 
        [["addon"], ["dealDropdown"], ["Add-On"], ["Deal Type"]])}

        {TheFields("itmUsers", "formItem", "ITM Saas Users")}
        <p className="wip">Additional ITM Saas Users</p>
        <p className="wip">Total ITM Saas Users</p>
        {Dropdowns([["itmDefault"], ["itmDropdown, itmRetention"], ["Select a Retention"], ["ITM Saas Retention"]],
        [["itm30days"], ["itmDropdown, itmRetention"], ["30 Days"], ["ITM Saas Retention"]],
        [["itm90days"], ["itmDropdown, itmRetention"], ["90 days"] , ["ITM Saas Retention"]],
        [["itm120days"], ["itmDropdown, itmRetention"], ["120 days"] , ["ITM Saas Retention"]],
        [["itm180days"], ["itmDropdown, itmRetention"], ["180 days"] , ["ITM Saas Retention"]],
        [["itm366days"], ["itmDropdown, itmRetention"], ["366 days"] , ["ITM Saas Retention"]],)}
        <p className="wip">ITM Visual Capture</p>
        <p className="wip">Additional Visual Capture</p>
        <p className="wip">Total Visual Capture</p>

        <p className="wip">Endpoint DLP Users</p>
        <p className="wip">Additional Endpoint DLP Users</p>
        <p className="wip">Total Endpoint DLP Users</p>
        
        {Dropdowns([["endpointDefault"], ["endpointDropdown, endpointRetention"], ["Select a Retention"], ["Endpoint DLP Retention"]],
        [["endpoint30days"], ["endpointDropdown, endpointRetention"], ["30 Days"], ["Endpoint DLP Retention"]],
        [["endpoint90days"], ["endpointDropdown, endpointRetention"], ["90 days"] , ["Endpoint DLP Retention"]],
        [["endpoint120days"], ["endpointDropdown, endpointRetention"], ["120 days"] , ["Endpoint DLP Retention"]],
        [["endpoint366days"], ["endpointDropdown, endpointRetention"], ["366 days"] , ["Endpoint DLP Retention"]],)}

    </>
  )
}

export default Forms
