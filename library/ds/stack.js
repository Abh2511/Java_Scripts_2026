export class Stack
{
    data ={};
    length = 0;
    pop(){
        this.length--;
        var value = this.data[this.length];
        return value;
        
    }
    push(value)
    {
        this.data[this.length]=value;
        this.length++;
    }
    peek()
    {
        this.length--;
        return this.data[this.length];
    }
    size(){
        return this.length;
    }
} 