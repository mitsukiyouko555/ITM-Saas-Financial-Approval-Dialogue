import HeaderForms from "../formComponents/General/headerforms"
import ItmForms from "../formComponents/ITM/itmforms"
import EndpointForms from "../formComponents/Endpoint DLP/endpointforms"
import FooterForms from "../formComponents/General/footerforms"
import MetadataFeedForm from "../formComponents/General/metadataFeed"
import Regions from "../formComponents/General/regions"
import { useEffect } from "react"
export default function Forms(props:any){
    
    function handleBlur(e:any){
        props.setformDeets((prev:any) =>{
            return{ ...prev, [e.target.name]:e.target.value}
        })
    }

    useEffect(()=>{
        handleBlur
        console.log("Use Effect:", props.formDeets)
    },[props.formDeets])

    return(
        <>
            <form>
                <HeaderForms handleBlur={handleBlur} itmNoVCBox={props.itmNoVCBox} itmWithVCBox={props.itmWithVCBox} endpointDLPBox={props.endpointDLPBox} enterpriseDLPBox={props.enterpriseDLPBox} dlpTransformBox={props.dlpTransformBox} changeRegionBox={props.changeRegionBox} add_ITM_UsersBox={props.add_ITM_UsersBox} add_Endpoint_UsersBox={props.add_Endpoint_UsersBox} changeITMRetentionBox={props.changeITMRetentionBox} changeEndpointRetentionBox={props.changeEndpointRetentionBox} additionalVisualCaptureBox={props.additionalVisualCaptureBox} additionalMetadataFeedBox={props.additionalMetadataFeedBox}/>
                <Regions handleBlur={handleBlur}/>
                <ItmForms handleBlur={handleBlur}/>
                <EndpointForms handleBlur={handleBlur}/>
                <MetadataFeedForm handleBlur={handleBlur} />
                <FooterForms handleBlur={handleBlur} term_date_radio={props.term_date_radio} />
                <button type="submit"> Approve </button>
            </form>
        </>
    )
}