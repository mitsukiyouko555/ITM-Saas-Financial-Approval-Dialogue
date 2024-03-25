import TheFields from "../fields";
import AdditionalITMSaasUsers from "./additionalITMUsers";
import AdditionalITMSaasVisualCapture from "./additionalVisualCapture";

export default function ItmForms(props:any) {

  return (
    <>
      <TheFields theId="itmSaasUsers" theClass="ITMForm" fieldName="ITM Saas Users" handleBlur={props.handleBlur} type="text"/>
      <AdditionalITMSaasUsers handleBlur={props.handleBlur}/>
      <TheFields
            fieldName="ITM Saas Retention"
            handleBlur={props.handleBlur} 
            theClass="itmRetention, dropdown" 
            theId="itmRetention"
            type="dropdown" 
            options={
            [[["itmretDefault"],["itmDropdown, itmRetention"],["Select a Retention"],[0]],
              [["itmret30days"],["itmDropdown, itmRetention"],["30 Days"],[30]],
              [["itmret90days"],["itmDropdown, itmRetention"],["90 Days"],[90]],
              [["itmret120days"],["itmDropdown, itmRetention"],["120 Days"],[120]],
              [["itmret180days"],["itmDropdown, itmRetention"],["180 Days"],[180]],
              [["date"],["itmDropdown, itmRetention"],["366 Days"],[366]]
            ]}
      />
      <TheFields theId="itmVisualCapture" theClass="ITMForm" fieldName="Visual Capture" handleBlur={props.handleBlur} type="text" />
      <AdditionalITMSaasVisualCapture  handleBlur={props.handleBlur}/>
      <TheFields theId="averageDailyRateOfActivities" theClass="ITMForm" fieldName="Average Daily Rate of Activities Per User" handleBlur={props.handleBlur} type="text"/>
    </>
  )
}

