import { useState } from "react"
import Forms from "./components/forms/forms"

export default function App() {
  const [formDeets, setformDeets] = useState({
    approval_flag:"",
    itmNoVCBox: 0,
    itmWithVCBox:0,
    endpointDLPBox:0,
    enterpriseDLPBox:0,
    dlpTransformBox:0,
    changeRegionBox:0,
    add_ITM_UsersBox:0,
    add_Endpoint_UsersBox:0,    
    changeITMRetentionBox:0,
    changeEndpointRetentionBox:0,
    additionalVisualCaptureBox:0,
    additionalMetadataFeedBox:0,
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
    term_date_radio:"",
    term:"",
    endDate:"",
    misc:""
})

  return (
    <>
      <Forms formDeets={formDeets} setformDeets={setformDeets} approval_flag={formDeets.approval_flag} itmNoVCBox={formDeets.itmNoVCBox} itmWithVCBox={formDeets.itmWithVCBox} endpointDLPBox={formDeets.endpointDLPBox} enterpriseDLPBox={formDeets.enterpriseDLPBox} dlpTransformBox={formDeets.dlpTransformBox} changeRegionBox={formDeets.changeRegionBox} add_ITM_UsersBox={formDeets.add_ITM_UsersBox} add_Endpoint_UsersBox={formDeets.add_Endpoint_UsersBox} changeITMRetentionBox={formDeets.changeITMRetentionBox} changeEndpointRetentionBox={formDeets.changeEndpointRetentionBox} additionalVisualCaptureBox={formDeets.additionalVisualCaptureBox} additionalMetadataFeedBox={formDeets.additionalMetadataFeedBox} dealType={formDeets.dealType} region={formDeets.region} totalEnterpriseDLPUsers={formDeets.totalEnterpriseDLPUsers} dlpTransformRegularUsers={formDeets.dlpTransformRegularUsers} dlpTransformLightUsers={formDeets.dlpTransformLightUsers} itmSaasUsers={formDeets.itmSaasUsers} additionalITMSaasUsers={formDeets.additionalITMSaasUsers} totalITMSaasUsers={formDeets.totalITMSaasUsers} itmRetention={formDeets.itmRetention} itmVisualCapture={formDeets.itmVisualCapture} additionalITMVisualCapture={formDeets.additionalITMVisualCapture} totalITMVisualCapture={formDeets.totalITMVisualCapture} averageDailyRateOfActivities={formDeets.averageDailyRateOfActivities} endpointDLPUsers={formDeets.endpointDLPUsers} additionalEndpointDLPUsers={formDeets.additionalEndpointDLPUsers} totalEndpointDLPUsers={formDeets.totalEndpointDLPUsers} endpointDLPRetention={formDeets.endpointDLPRetention} metadataFeedQuantity={formDeets.metadataFeedQuantity} metadataFeedCapacity={formDeets.metadataFeedCapacity} term_date_radio={formDeets.term_date_radio} term={formDeets.term} endDate={formDeets.endDate} misc={formDeets.misc}
      />
    </>
  )
}