      const month=2
      const monthw31=[1,3,5,7,8,10,12]
      const  monthw30=[4,6,9,11]
      let maxDay;
        
        

        
         if(month==2){
           maxDay=29
        }
         for(i=0;i<monthw31.length;i++){
         
           if(month== monthw31[i]){
                maxDay=31
            }}
            
            for(i=0;i<monthw30.length;i++){
            
              if(month== monthw30[i]){
                maxDay=30
            }}
            console.log (`this mont has ${maxDay} days`)