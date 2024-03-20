import TheFields from "../formComponents/fields"
import Dropdowns from "../formComponents/dropdowns"
import { useEffect, useState } from "react"

export default function MainForms(){

//for the box, 0 = unchecked, 1 = checked.. that will be set via useState
// maybe the function will be like "if current state is 0, change it to 1. else change it to 0"

    const [formDeets, setformDeets] = useState({
        itmNoVCBox: 0,
        itmWithVCBox:0,
        endpointDLPBox:0,
        enterpriseDLPBox:0,
        dlpTransformBox:0,
        dealType:"",
        region:"",
        totalEnterpriseDLPUsers:0,
        dlpTransformRegularUsers:0,
        dlpTransformLightUsers:0,
        itmSaasUsers:0,
        additionalITMSaasUsers:0,
        totalITMSaasUsers:0,
        itmRetention:0,
        itmVisualCapture:0,
        additionalITMVisualCapture:0,
        totalITMVisualCapture:0,
        averageDailyRateOfActivities:0,
        endpointDLPUsers:0,
        additionalEndpointDLPUsers:0,
        totalEndpointDLPUsers:0,
        endpointDLPRetention:0,
        metadataFeedCapacity:0,
        term:"",
        endDate:""
    })

    const handleBlur = (e:any) =>{
        const {name, value} = e.target;
        setformDeets((prev) =>{
            return{ ...prev, [name]:value}
        })

    }

    useEffect(()=>{
        handleBlur
        console.log("Use Effect:", formDeets.itmSaasUsers)
    },[formDeets])

    return(
        <>
            {/* <button onClick={handleBlur}>Test</button> */}
            ITM Saas Users:<input name="itmSaasUsers" onBlur={handleBlur}/>
        </>
    )
}