import TheFields from "../fields"
import AddOn_Change from "./addon_changeForm"

export default function HeaderForms(props:any){

    return(
        <>
            <h2>ITM Saas Financial Approval Dialogue</h2>
            <TheFields
            fieldName="Approval Flag"
            handleBlur={props.handleBlur} 
            theClass="Form" 
            theId="approval_flag"
            type="dropdown" 
            options={
            [[["default"],["approval_flag"],[""],["null"]],
            [["approved"],["approval_flag"],["Approved"],["Approved"]], 
            [["pre-provision"],["approval_flag"],["Pre-Provision"],["Pre-Provision"]], 
            [["on-hold"],["approval_flag"],["On Hold"],["On Hold"]],
            [["denied"],["approval_flag"],["Denied"],["Denied"]]]} />
            
            <TheFields
            fieldName="Deal Type"
            handleBlur={props.handleBlur} 
            theClass="Form" 
            theId="dealType"
            type="dropdown" 
            options={
            [[["default"],["dealtype"],["Select a Deal Type"],["null"]],
            [["new"],["dealtype"],["New"],["new"]], 
            [["renewal"],["dealtype"],["Renewal"],["renewal"]], 
            [["add-on"],["dealtype"],["Add-On"],["add-on"]]]} 
            />

            <TheFields theId="itmNoVCBox" theClass="Checkbox" fieldName="ITM Saas No Base Visual Capture" type="checkbox" value={props.itmNoVCBox == 0?1:0} handleBlur={props.handleBlur} />
            <TheFields theId="itmWithVCBox" theClass="Checkbox" fieldName="ITM Saas With Base Visual Capture" type="checkbox" value={props.itmWithVCBox == 0?1:0} handleBlur={props.handleBlur} />
            <TheFields theId="endpointDLPBox" theClass="Checkbox" fieldName="Endpoint DLP" type="checkbox" value={props.endpointDLPBox == 0?1:0} handleBlur={props.handleBlur} />
            <TheFields theId="enterpriseDLPBox" theClass="Checkbox" fieldName="Enterprise DLP" type="checkbox" value={props.enterpriseDLPBox == 0?1:0} handleBlur={props.handleBlur} />
            <TheFields theId="dlpTransformBox" theClass="Checkbox" fieldName="DLP Transform" type="checkbox" value={props.dlpTransformBox == 0?1:0} handleBlur={props.handleBlur} />
            
            <AddOn_Change handleBlur={props.handleBlur} itmNoVCBox={props.itmNoVCBox} itmWithVCBox={props.itmWithVCBox} endpointDLPBox={props.endpointDLPBox} enterpriseDLPBox={props.enterpriseDLPBox} dlpTransformBox={props.dlpTransformBox} changeRegionBox={props.changeRegionBox} add_ITM_UsersBox={props.add_ITM_UsersBox} add_Endpoint_UsersBox={props.add_Endpoint_UsersBox} changeITMRetentionBox={props.changeITMRetentionBox} changeEndpointRetentionBox={props.changeEndpointRetentionBox} additionalVisualCaptureBox={props.additionalVisualCaptureBox} additionalMetadataFeedBox={props.additionalMetadataFeedBox} />
        </>
    )
}