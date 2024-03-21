import { useEffect, useState } from "react"
import Test5 from "./test5"
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
        metadataFeedQuantity:0,
        metadataFeedCapacity:0,
        term:"",
        endDate:""
    })

    const handleBlur = (e:any) =>{
        const {name, value} = e.target;
        setformDeets((prev) =>{
            return{ ...prev, [name]:value}
        })
        if (e.target.name == "itmSaasUsers"){
            console.log("ITM Saas User count is being updated! Any functions that need to run for itm users specifically goes here!")
        }
        else{
            console.log("Just passing through for now...")
        }
    }

    useEffect(()=>{
        handleBlur
        console.log("Use Effect:", formDeets)
    },[formDeets])

    return(
        <>
            <input name="itmNoVCBox" type="checkbox" onClick={handleBlur} value={formDeets.itmNoVCBox ==0?1:0}/> itmNoVCBox
            {/*Whoo hoo!! these both work!!*/}
            <Test5 blurFunction={handleBlur}/>
            {/* <button onClick={handleBlur}>Test</button> */}
            {/* ITM Saas Users:<input name="itmSaasUsers" onBlur={handleBlur}/> */}
        </>
    )
}