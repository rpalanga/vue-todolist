
/*

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una ":x:": cliccando su di essa,
il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante
, il testo digitato viene letto e utilizzato per creare un nuovo todo,
 che quindi viene aggiunto alla lista dei todo esistenti.


Bonus:
1- oltre al click sul pulsante per la aggiunta del task,
 intercettare anche il tasto ENTER per aggiungere il todo alla lista

2- cliccando sul testo dell'item, invertire il valore della proprietà
done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

*/

const { createApp } = Vue;

createApp({

    data() {

        return {

            tasks: [
                {
                    text : "comprare i tovaglioli",
                    done : false,
                },
                {
                    text : "andare in palestra",
                    done : false,
                },
                {
                    text : "Salutare la nonna",
                    done : false,
                },
                {
                    text : "Leggere 50 pagine",
                    done : true,
                },
                {
                    text : "Fare 30 flessioni",
                    done : true,
                }
                

             ],
            
        }

    }, methods: {

        deleteTask(index){

            this.tasks.splice(index, 1);

        }

    }
    
}).mount(`#app`);
