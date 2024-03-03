import TheFields from "../formComponents/fields"
import Dropdowns from "../formComponents/dropdowns"

//NOTE: use this for itm and endpoint dlp normal, additional, and total users BUT for Enterprise DLP and DPP transform, if the logic gets TOO complicated, you may need to make a special form just for them...(?) But try it here first. most likely you can get it to work with the switch case statements in your handle functions
function ItmForms() {

  return (
    <>
        {Dropdowns([["new"], ["dealDropdown"], ["New"], ["Deal Type"]], 
        [["renewal"], ["dealDropdown"], ["Renewal"], ["Deal Type"]], 
        [["addon"], ["dealDropdown"], ["Add-On"], ["Deal Type"]])}
        {TheFields("itmUsers", "formItem", "ITM Saas Users")}
        <p className="wip">Additional ITM Saas Users:</p>
        <p className="wip">Total ITM Saas Users:</p>
        {Dropdowns([["itmDefault"], ["itmDropdown, itmRetention"], ["Select a Retention"], ["ITM Saas Retention"]],
        [["itm30days"], ["itmDropdown, itmRetention"], ["30 Days"], ["ITM Saas Retention"]],
        [["itm90days"], ["itmDropdown, itmRetention"], ["90 days"] , ["ITM Saas Retention"]],
        [["itm120days"], ["itmDropdown, itmRetention"], ["120 days"] , ["ITM Saas Retention"]],
        [["itm180days"], ["itmDropdown, itmRetention"], ["180 days"] , ["ITM Saas Retention"]],
        [["itm366days"], ["itmDropdown, itmRetention"], ["366 days"] , ["ITM Saas Retention"]],)}
        <p className="wip">ITM Visual Capture:</p>
        <p className="wip">Additional Visual Capture:</p>
        <p className="wip">Total Visual Capture:</p>
    </>
  )
}

export default ItmForms
