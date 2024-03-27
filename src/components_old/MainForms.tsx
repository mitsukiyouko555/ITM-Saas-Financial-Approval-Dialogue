// import { useEffect} from "react"
// import Forms from "./forms"
// export default function MainForms(props:any){

//     function handleBlur(e:any){
//         props.setformDeets((prev:any) =>{
//             return{ ...prev, [e.target.name]:e.target.value}
//         })
//     }

//     useEffect(()=>{
//         handleBlur
//         console.log("Use Effect:", props.formDeets)
//     },[props.formDeets])

//     return(
//         <>
//             <Forms handleBlur={handleBlur} itmNoVCBox={props.itmNoVCBox} itmWithVCBox={props.itmWithVCBox} endpointDLPBox={props.endpointDLPBox} enterpriseDLPBox={props.enterpriseDLPBox} dlpTransformBox={props.dlpTransformBox} term_date_radio={props.term_date_radio}changeRegionBox={props.changeRegionBox} add_ITM_UsersBox={props.add_ITM_UsersBox} add_Endpoint_UsersBox={props.add_Endpoint_UsersBox} changeITMRetentionBox={props.changeITMRetentionBox} changeEndpointRetentionBox={props.changeEndpointRetentionBox} additionalVisualCaptureBox={props.additionalVisualCaptureBox} additionalMetadataFeedBox={props.additionalMetadataFeedBox}/>
//         </>
//     )
// }