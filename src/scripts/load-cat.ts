window.onload = () => {
    const cat = `
    _                        
    \\\`*-.                    
     )  _\`-.                 
    .  : \`. .                
    : _   '  \               
    ; *\` _.   \`*-._          
    \`-.-'          \`-.       
      ;       \`       \`.     
      :.       .        \    
      . \  .   :   .-'   .   
      '  \`+.;  ;  '      :   
      :  '  |    ;       ;-. 
      ; '   : :\`-:     _.\`* ;
[bug] .*' /  .*' ; .*\`- +'  \`*' 
   \`*-*   \`*-*  \`*-*' 
    `;
    const catCarrier = document.getElementById("cat-carrier");

    catCarrier!.innerHTML = cat;
    console.log(cat);
}