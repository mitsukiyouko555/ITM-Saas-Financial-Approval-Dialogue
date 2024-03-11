import { HandleITMVisualCapture } from "../formComponents/globalParam"

function handleITMSaas(e:any){
    console.log(e.target.value)

    if (e.target.className.includes("itmUserCount")){
        // console.log("itmret")
        HandleITMVisualCapture(e)
    } 
    else{
        console.log("no itm ret.")
    }  

}

export default handleITMSaas