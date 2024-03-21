export default function Test5({blurFunction}:{blurFunction:any}){
    return(
        <>
            <div>
            ITM Saas Users:<input name="itmSaasUsers" onBlur={blurFunction}/>
            </div>
        </>
    )
}