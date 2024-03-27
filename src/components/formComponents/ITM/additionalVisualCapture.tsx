import TheFields from "../fields"
export default function AdditionalITMSaasVisualCapture(props:any){
    //show if itm Saas (both with or without vc), enterprise dlp, or dlp transform is checked
    return(
        <>
            <TheFields handleBlur={props.handleBlur} theId="additionalITMVisualCapture" theClass="ITMForm" fieldName="Additional Visual Capture" type="text"/>

            <TheFields handleBlur={props.handleBlur} theId="totalITMVisualCapture" theClass="ITMForm" fieldName="Total Visual Capture" type="text"/>
        </>
    )
}