import TheFields from "../formComponents/fields"
import Dropdowns from "../formComponents/dropdowns"
import handleITMSaas from "../handleFunctions/handleITMSaas"
import ReturnVC from "../formComponents/globalParam"
//NOTE: use this for itm and endpoint dlp normal, additional, and total users BUT for Enterprise DLP and DPP transform, if the logic gets TOO complicated, you may need to make a special form just for them...(?) But try it here first. most likely you can get it to work with the switch case statements in your handle functions
function ItmForms() {

  return (
    <>
        {TheFields("itmUsers", "formItem, itmUserCount", "ITM Saas Users", handleITMSaas, 0)}
        {/* <p className="wip">Additional ITM Saas Users:</p>
        <p className="wip">Total ITM Saas Users:</p> */}
        {Dropdowns([["itmDefault"], ["itmDropdown, itmRetention"], ["Select a Retention"], ["ITM Saas Retention"], [null]],
        [["itm30days"], ["itmDropdown, itmRetention"], ["30 Days"], ["ITM Saas Retention"], [30]],
        [["itm90days"], ["itmDropdown, itmRetention"], ["90 Days"] , ["ITM Saas Retention"], [90]],
        [["itm120days"], ["itmDropdown, itmRetention"], ["120 Days"] , ["ITM Saas Retention"], [120]],
        [["itm180days"], ["itmDropdown, itmRetention"], ["180 Days"] , ["ITM Saas Retention"], [180]],
        [["itm366days"], ["itmDropdown, itmRetention"], ["366 Days"] , ["ITM Saas Retention"], [366]],)}

        {/* {TheFields("itmVisualCapture", "formItem, itmVisualCapture", "ITM Saas Visual Capture", null, vc)} */}
        <ReturnVC/>
        {/* <p>ITM Visual Capture: {visualCapture}</p> */}
        <p className="wip">Additional Visual Capture QTY:</p>
        <p className="wip">Additional Visual Capture GBs:</p>
        
        <p className="wip">Total Visual Capture: (This should be a hardcoded, calculated Value)</p>
    </>
  )
}

export default ItmForms
