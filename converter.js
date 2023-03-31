// module.exports = function() {
//     return 'Hello!'
// }


module.exports = function convertToNewTemp(usersInput,from_value,to_value){	

    // Converts everything to kelvin first
        if (from_value == 0){
               usersInput = usersInput + 273.15;
        } else if (from_value == 1){
            usersInput = ((usersInput - 32)/ 1.8) + 273.15;
        } else if (from_value == 2){
            usersInput = usersInput / 1.8;
        } else if (from_value == 3){
               usersInput = (usersInput * 1.25) + 273.15;
        }
    
         if (usersInput < 0){
               // Below absolute zero
               return "Below Absolute Zero";
         }
    
         // Converts kelvin to requested unit
         if (to_value == 0){
               usersInput = usersInput - 273.15;
        } else if (to_value == 1){ //Fahrenheit
               usersInput = (1.8 * (usersInput -273.15)) + 32;
         } else if (to_value == 2){ //Rankine 
               usersInput = usersInput * 1.8;
         } else if (to_value == 3){ //Reaumur
               usersInput = (usersInput - 273.15) / 1.25;
         }
     
         // round off value
         if (Number.prototype.toFixed) {
               usersInput = usersInput.toFixed(7);
               usersInput = parseFloat(usersInput);
         }
         else {
               var leftSide = Math.floor(usersInput);
               var rightSide = usersInput - leftSide;
               usersInput = leftSide + Math.round(rightSide *10000000)/10000000;
         }
    
        return usersInput;
    }