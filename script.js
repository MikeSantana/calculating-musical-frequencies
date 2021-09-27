function geraFrequenciaNota(semitons) {
    var a = 440; 
    var resultado = a * Math.pow(2 , semitons/12);
  
  
    if ( resultado % 1 == 0){
        var valorFrequencia = resultado;
    } else {
      var valorFrequencia = resultado.toFixed(4);
    }
    
    if  (Math.sign(semitons) == 1 | Math.sign(semitons) == +0) {
        var arrayDeNotasPositivas = [
            [valorFrequencia.toString() , "C"],
            [valorFrequencia.toString() , "C#"],
            [valorFrequencia.toString() , "D"],
            [valorFrequencia.toString() , "D#"],
            [valorFrequencia.toString() , "E"],
            [valorFrequencia.toString() , "F"],
            [valorFrequencia.toString() , "F#"],
            [valorFrequencia.toString() , "G"],
            [valorFrequencia.toString() , "G#"],
            [valorFrequencia.toString() , "A"],
            [valorFrequencia.toString() , "A#"],
            [valorFrequencia.toString() , "B"]
          ]
            
            if (semitons <= 2){
              
               var resultadoArray =  arrayDeNotasPositivas[semitons+9];
            } else if (semitons >= 3 & semitons <= 14 ){
                         var resultadoArray =  arrayDeNotasPositivas[semitons+(-3)];
                       } else if (semitons >= 15 & semitons <= 26){
                            var resultadoArray =  arrayDeNotasPositivas[semitons+(-15)];
                         }
        } else if (Math.sign(semitons) == -1){
          var arrayDeNotasNegativas = [
            [valorFrequencia.toString() , "C"],
            [valorFrequencia.toString() , "Db"],
            [valorFrequencia.toString() , "D"],
            [valorFrequencia.toString() , "Eb"],
            [valorFrequencia.toString() , "E"],
            [valorFrequencia.toString() , "F"],
            [valorFrequencia.toString() , "Gb"],
            [valorFrequencia.toString() , "G"],
            [valorFrequencia.toString() , "Ab"],
            [valorFrequencia.toString() ,  "A"],
            [valorFrequencia.toString() , "Bb"],
            [valorFrequencia.toString() , "B"],
          ]
          
          if (semitons < 0 & semitons >= -9 ){
               var resultadoArray =  arrayDeNotasNegativas[ 9 - Math.abs(semitons) ]
              } else if (semitons <= -10 & semitons >= -21) {
                var resultadoArray =  arrayDeNotasNegativas[21 - Math.abs(semitons)]
              } else if (semitons <= -11 & semitons >= -33) {
                var resultadoArray =  arrayDeNotasNegativas[33 - Math.abs(semitons)]
              }
        }
    return resultadoArray;
  }