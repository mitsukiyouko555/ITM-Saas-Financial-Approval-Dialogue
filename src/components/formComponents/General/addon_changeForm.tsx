import TheFields from "../fields"

export default function AddOn_Change(props:any){
    return(
        <>
            <TheFields theId="changeRegionBox" theClass="Checkbox addOnOnly" fieldName="Change The Region" type="checkbox" value={props.changeRegionBox == 0?1:0} handleBlur={props.handleBlur}/>
            
            <TheFields theId="add_ITM_UsersBox" theClass="Checkbox addOnOnly" fieldName="Additional ITM Saas Users" type="checkbox" value={props.add_ITM_UsersBox == 0?1:0} handleBlur={props.handleBlur}/>
            
            <TheFields theId="add_Endpoint_UsersBox" theClass="Checkbox addOnOnly" fieldName="Additional Endpoint DLP Users" type="checkbox" value={props.add_Endpoint_UsersBox == 0?1:0} handleBlur={props.handleBlur}/>
            
            <TheFields theId="changeITMRetentionBox" theClass="Checkbox addOnOnly" fieldName="Change The ITM Saas Retention" type="checkbox" value={props.changeITMRetentionBox == 0?1:0} handleBlur={props.handleBlur}/>
            
            <TheFields theId="changeEndpointRetentionBox" theClass="Checkbox addOnOnly" fieldName="Change The Endpoint DLP Retention" type="checkbox" value={props.changeEndpointRetentionBox == 0?1:0} handleBlur={props.handleBlur}/>
            
            <TheFields theId="additionalVisualCaptureBox" theClass="Checkbox addOnOnly" fieldName="Additional Visual Capture" type="checkbox" value={props.additionalVisualCaptureBox == 0?1:0} handleBlur={props.handleBlur}/>
            
            <TheFields theId="additionalMetadataFeedBox" theClass="Checkbox addOnOnly" fieldName="Additional Metadata Feed" type="checkbox" value={props.additionalMetadataFeedBox == 0?1:0} handleBlur={props.handleBlur}/>
        </>
    )
}