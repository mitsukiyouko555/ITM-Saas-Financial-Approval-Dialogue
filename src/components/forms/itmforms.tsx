import TheFields from "../formComponents/fields"
import Dropdowns from "../formComponents/dropdowns"
import { useEffect, useState } from "react"

//NOTE: use this for itm and endpoint dlp normal, additional, and total users BUT for Enterprise DLP and DPP transform, if the logic gets TOO complicated, you may need to make a special form just for them...(?) But try it here first. most likely you can get it to work with the switch case statements in your handle functions
function ItmForms() {
  const [itmUsers, setITMUsers] = useState<any>(0)

  function handleITMUsers(e:any){
    setITMUsers(Number(e.target.value))
  }
  useEffect(()=> {
    handleITMUsers
    console.log("Use Effect", itmUsers)
  },[itmUsers])

  return (
    <>
        {/* <div className="theFields">
            ITM Saas Users: <input onBlur={handleITMUsers} id={"itmUsers"} 
              className="formItem itmUserCount" 
              defaultValue={0}/>
        </div> */}

        {TheFields("itmUsers", "formItem itmUserCount", "ITM Saas Users", handleITMUsers, 0)}
        <p className="wip">Additional ITM Saas Users:</p>
        <p className="wip">Total ITM Saas Users:</p>
        {/* {Dropdowns([["itmretDefault"], ["itmDropdown, itmRetention"], ["Select a Retention"], ["ITM Saas Retention"], [0]],
        [["itmret30days"], ["itmDropdown, itmRetention"], ["30 Days"], ["ITM Saas Retention"], [30]],
        [["itmret90days"], ["itmDropdown, itmRetention"], ["90 Days"] , ["ITM Saas Retention"], [90]],
        [["itmret120days"], ["itmDropdown, itmRetention"], ["120 Days"] , ["ITM Saas Retention"], [120]],
        [["itmret180days"], ["itmDropdown, itmRetention"], ["180 Days"] , ["ITM Saas Retention"], [180]],
        [["itmret366days"], ["itmDropdown, itmRetention"], ["366 Days"] , ["ITM Saas Retention"], [366]])} */}

        {/* <input id="itmVisualCapture" defaultValue={0}/> */}

        
        {/* <p>ITM Visual Capture: {visualCapture}</p> */}
        <p className="wip">Additional Visual Capture QTY:</p>
        <p className="wip">Additional Visual Capture GBs:</p>
        
        <p className="wip">Total Visual Capture: (This should be a hardcoded, calculated Value)</p>
    </>
  )
}

export default ItmForms
