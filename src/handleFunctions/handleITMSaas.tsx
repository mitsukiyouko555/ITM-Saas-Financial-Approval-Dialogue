
//Visual capture is not calculating correctly as it can't see the user count cant see the retention and vice versa.... it used to work at some point... hmmmmmmm


export default function HandleITMSaas(e?:any){
    let itmUsers = (e.target.className.includes("itmUserCount")? e.target.value:0)

    let itmRetention = (e.target.className.includes("itmRetention")?(document.querySelectorAll("itmRetention")).values:0)

    let retMultiplier:Number = (e.target.className.includes("itmRetention")? Math.round((Number(e.target.value)/60)*2)/2 : 0)

    let visualCapture:any = 
    ((e.target.className.includes("itmUserCount")?Number(e.target.value) * Number(retMultiplier) : 
    (e.target.className.includes("itmRetention")? Number(itmUsers) * Number(retMultiplier):0)))
    

    if ((e.target.className.includes("itmUserCount")) || (e.target.className.includes("itmRetention"))){

        console.log("ITMUsers:", itmUsers, "ITM Retention:", itmRetention, "RetMultiplier:", retMultiplier, "Visual Capture:", visualCapture)
        
    } 
    // else if (e.target.className.includes("itmRetention")){
    //     visualCapture = Number(itmUsers) * Number(retMultiplier)
    //     console.log("ITM Users:", itmUsers, "ITM Retention:", e.target.value, itmRetention, "RetMultiplier:", retMultiplier, "Visual Capture:", visualCapture)
    // }
    else{
        console.log("Passing Through without doing anything")
    } 

}
