import AdditionalEndpointDLPUsers from "./additionalEndpointUsers";
import TheFields from "../fields";
export default function EndpointForms(props:any){
    return(
        <>
            <TheFields theId="endpointDLPUsers" theClass="endpointForm" fieldName="Endpoint DLP Users" handleBlur={props.handleBlur} type="text"/>
        
            <AdditionalEndpointDLPUsers handleBlur={props.handleBlur}/>

            <TheFields
            fieldName="Endpoint DLP Retention"
            handleBlur={props.handleBlur} 
            theClass="endpointRetention, dropdown, endpointForm" 
            theId="endpointDLPRetention"
            type="dropdown" 
            options={
            [[["itmretDefault"],["endpointDropdown, endpointRetention"],["Select a Retention"],[0]],
              [["itmret30days"],["endpointDropdown, endpointRetention"],["30 Days"],[30]],
              [["itmret90days"],["endpointDropdown, endpointRetention"],["90 Days"],[90]],
              [["itmret120days"],["endpointDropdown, endpointRetention"],["120 Days"],[120]],
              [["date"],["endpointDropdown, endpointRetention"],["366 Days"],[366]]
            ]}
            />
        </>
    )
}