class Rover {
   constructor (position){
     this.position =position;
     this.mode = 'NORMAL';
     this.generatorWatts = 110;
   }
   receiveMessage(message){
     let response = {
        message: "",
        results:  []
      };
      response.message = message.name;
      for (let i=0; i< (message.commands).length; i++){
      //  result.push(message.commands[i])
       
        if (message.commands[i].commandType == "MOVE"){
          
          if (this.mode == "LOW_POWER"){
            this.mode = "LOW_POWER";
            this.position = this.position;
            response.results.push({completed: 'false'});
          }else {
            this.mode = "Normal";
            this.position = message.commands[i].value;
            response.results.push({completed: 'true'});
          }
        }else if (message.commands[i].commandType == "MODE_CHANGE"){
             response.results.push ({completed: 'true'});
             this.mode = message.commands[i].value;
           
           } else if (message.commands[i].commandType == "STATUS_CHECK"){
             response.results.push ({completed: 'true', roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}});
          }
        }
          return response;
       }
      };

 
module.exports = Rover;