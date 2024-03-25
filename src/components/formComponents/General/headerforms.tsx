import TheFields from "../fields"
export default function HeaderForms(props:any){
    return(
        <>
            <h2>ITM Saas Financial Approval Dialogue</h2>
            <TheFields theId="itmNoVCBox" theClass="Checkbox" fieldName="ITM Saas No Base Visual Capture" type="checkbox" value={props.itmNoVCBox == 0?1:0} handleBlur={props.handleBlur} />
            
            <TheFields theId="itmWithVCBox" theClass="Checkbox" fieldName="ITM Saas With Base Visual Capture" type="checkbox" value={props.itmWithVCBox == 0?1:0} handleBlur={props.handleBlur} />
            
            <TheFields theId="endpointDLPBox" theClass="Checkbox" fieldName="Endpoint DLP" type="checkbox" value={props.endpointDLPBox == 0?1:0} handleBlur={props.handleBlur} />
            
            <TheFields theId="enterpriseDLPBox" theClass="Checkbox" fieldName="Enterprise DLP" type="checkbox" value={props.enterpriseDLPBox == 0?1:0} handleBlur={props.handleBlur} />
            
            <TheFields theId="dlpTransformBox" theClass="Checkbox" fieldName="DLP Transform" type="checkbox" value={props.dlpTransformBox == 0?1:0} handleBlur={props.handleBlur} />
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
        </>
    )
}