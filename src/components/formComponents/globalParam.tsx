export let itmUsers:Number = 0
export let itmRetention:Number  = 0 
export let visualCapture:Number = 0

export function HandleITMRetention(e:any){
    itmRetention = e.target.value
    console.log(itmRetention, Math.round((Number(itmRetention)/60)*2)/2)
}
    
export function VCcalculator(e:any){
    if (e.target.id = "itmUsers"){
        visualCapture = Number(e.target.value) * (Number(itmRetention)/60)
    }
    else{
        visualCapture = Number(itmUsers) * (Number(e.target.value)/60)
    }
    
}

