const soma  = require ('./soma')

test(" A Soma de 1 + 2 é 3", () =>{ 
   
    expect (soma(1,2)).toBe(3); 
});