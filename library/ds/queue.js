export class Queue 
{
    collection = [];

    enqueue(value){
        this.collection.push(value);
    }
    dequeue(){
        return this.collection.shift();
    }
}