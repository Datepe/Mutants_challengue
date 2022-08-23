
const {saveDNAMutants, existsDNA} = require("./connectionDB")

module.exports = class mutantsRepository {
    constructor (){
      this.isMutants = this.isMutants.bind(this)
      this.horizontal = this.horizontal.bind(this)
      this.vertical = this.vertical.bind(this)
      this.oblicua = this.oblicua.bind(this)
    }
    
    horizontal(dna){
    let isMutant = false;
    let countX = 0;   
    for(let x of dna ){
        // console.log(x)
         let countY= 0;
         
         for(let y of x){        
             if(y == x[countY + 1] && y == x[countY + 2] && y == x[countY + 3] ){
                isMutant = true;
             }
             countY++;
         }
         countX++;
        }
    return isMutant;
}

    vertical(dna){
    let isMutant = false;
    let countX = 0;   
    for(let x of dna ){
         let countY = 0;         
         for(let y of x){      
            if(countX <= ((dna.length - 1) - 3)  ){
                if(y == dna[countX + 1][countY] && y == dna[countX + 2][countY] && y == dna[countX + 3][countY]){
                    isMutant = true;
                 }
            }             
             countY++;
         }
         countX++;
        }
    return isMutant;
}

    oblicua(dna){
    let isMutant = false;
    let countX = 0;   
    for(let x of dna ){
         let countY = 0;         
         for(let y of x){      
            if(countX <= ((dna.length - 1) - 3)  ){
                if(y == dna[countX + 1][countY + 1] && y == dna[countX + 2][countY + 2] && y == dna[countX + 3][countY + 3]){
                    isMutant = true;
                }
                if(y == dna[countX + 1][countY - 1] && y == dna[countX + 2][countY - 2] && y == dna[countX + 3][countY - 3]){
                   isMutant = true;
                }
            }             
             countY++;
         }
         countX++;
        }
    return isMutant;
} 

    async isMutants(dna){
        try{
            
         if(this.horizontal(dna) || this.vertical(dna) || this.oblicua(dna)){
             const existsADN = await existsDNA(dna);
             if(existsADN.length == 0){
               const response = await saveDNAMutants(dna,1);
               return {status: 200 , desc: "it's mutant"};   
             }else{
               return {status: 403 , desc: "the DNA has already been processed"};     
             }
         }else{
             const existsADN = await existsDNA(dna);
             if(existsADN.length == 0){
              const response = await saveDNAMutants(dna,0);
              return {status: 403 , desc: "it's not mutant"};   
             }else{
              return {status: 403 , desc: "the DNA has already been processed"};
             }
         }
        }catch(error){
           return {status: 500 , desc: 'internal server error'};
        }
    }
}