export var visualCapture:Number = 0
function handleVC(e?:any, theId?:any){


    //calculates the VC
    if (theId == "itmUsers"){

        visualCapture = (Number(e.target.value) * 0.5)
        console.log("Visual Capture calculated via ITM Users: ", visualCapture)
        return visualCapture

    }
    else if (theId == "itmRetention"){
        console.log("Visual Capture calculated via ITM Retention")

    }
    else{
        console.log("Passing through the CalculateVC")
    }


}

export default handleVC