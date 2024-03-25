import HeaderForms from "../formComponents/General/headerforms"
import ItmForms from "../formComponents/ITM/itmforms"
import EndpointForms from "../formComponents/Endpoint DLP/endpointforms"
import FooterForms from "../formComponents/General/footerforms"
import MetadataFeedForm from "../formComponents/General/metadataFeed"
export default function Forms(props:any){
    return(
        <>
            <form>
                <HeaderForms handleBlur={props.handleBlur} itmNoVCBox={props.itmNoVCBox} itmWithVCBox={props.itmWithVCBox} endpointDLPBox={props.endpointDLPBox} enterpriseDLPBox={props.enterpriseDLPBox} dlpTransformBox={props.dlpTransformBox}/>
                
                <ItmForms handleBlur={props.handleBlur}/>
                <EndpointForms handleBlur={props.handleBlur}/>
                <MetadataFeedForm handleBlur={props.handleBlur} />
                <FooterForms handleBlur={props.handleBlur} term_date_radio={props.term_date_radio} />
                <button type="submit"> Approve </button>
                <button type="reset"> Reset Form </button>
            </form>
        </>
    )
}