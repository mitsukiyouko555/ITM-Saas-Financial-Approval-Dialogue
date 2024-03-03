// import { useState } from "react";
import TheFields from "./fields"
import { visualCapture } from "./handleFunctions/handleVC"
import Dropdowns from "./dropdowns"


function Forms() {
  // const [count, setCount] = useState(0)

  return (
    <>
        {TheFields("itmUsers", "formItem", "ITM Saas Users")}
        {Dropdowns([["itm30days"], ["itmDropdown, itmRetention"], ["30 Days"], ["ITM Saas Retention"]],
        [["itm90days"], ["itmDropdown, itmRetention"], ["90 days"] , ["ITM Saas Retention"]],
        [["itm120days"], ["itmDropdown, itmRetention"], ["120 days"] , ["ITM Saas Retention"]],
        [["itm180days"], ["itmDropdown, itmRetention"], ["180 days"] , ["ITM Saas Retention"]],
        [["itm366days"], ["itmDropdown, itmRetention"], ["366 days"] , ["ITM Saas Retention"]],)}

    
    </>
  )
}

export default Forms
