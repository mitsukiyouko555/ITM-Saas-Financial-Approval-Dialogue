export let itmUsers:Number = 0
export let itmRetention:Number  = 0 
// export let visualCapture:Number = 0
export let retMultiplier:Number = 0

export class itmvisualCapture{
    _visualCapture:Number;
    constructor(){
        this._visualCapture = 0
    }

    get getvisualCapture():Number{
        return this._visualCapture
    }

    set setvisualCapture(value:any){
        this._visualCapture = value
    }
    
}

export const vc = new itmvisualCapture()

export function HandleITMVisualCapture(e:any){
    
    if (e.target.className.includes("itmUserCount")){
        itmUsers = e.target.value
        vc.setvisualCapture = Number(itmUsers) * Number(retMultiplier)
        console.log("Visual Capture: ", vc.getvisualCapture)
    } 
    else if (e.target.className.includes("itmRetention")){
        itmRetention = e.target.value
        retMultiplier = Math.round((Number(itmRetention)/60)*2)/2
        vc.setvisualCapture = Number(itmUsers) * Number(retMultiplier)
        console.log("Visual Capture: ", vc.getvisualCapture)
    }
    else{
        console.log("Passing Through without doing anything")
    } 
    
}

function ReturnVC(){
    return(
        String(vc.getvisualCapture)
    )
}
export default ReturnVC