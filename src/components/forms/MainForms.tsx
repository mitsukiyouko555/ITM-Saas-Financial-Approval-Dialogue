import { useEffect, useState } from "react"
import Forms from "./forms"
export default function MainForms(){

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
        metadataFeedQuantity:0,
        metadataFeedCapacity:0,
        term_date_radio:"",
        term:"",
        endDate:"",
        misc:""
    })

    function handleBlur(e:any){
        setformDeets((prev) =>{
            return{ ...prev, [e.target.name]:e.target.value}
        })
    }

    useEffect(()=>{
        handleBlur
        console.log("Use Effect:", formDeets)
    },[formDeets])

    return(
        <>
            <Forms handleBlur={handleBlur} itmNoVCBox={formDeets.itmNoVCBox} itmWithVCBox={formDeets.itmWithVCBox} endpointDLPBox={formDeets.endpointDLPBox} enterpriseDLPBox={formDeets.enterpriseDLPBox} dlpTransformBox={formDeets.dlpTransformBox} term_date_radio={formDeets.term_date_radio}/>
        </>
    )
}