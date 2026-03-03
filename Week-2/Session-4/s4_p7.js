/*
2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends

*/
console.log("OTP sent Successfully")
let seconds =10;
 let id = setInterval(() => {
        seconds--;
        console.log(`otp can resend after ${seconds} secs`)

        if(seconds==0){
                console.log("resend otp");
                 clearInterval(id)
        }
        
        
}, 1000);
