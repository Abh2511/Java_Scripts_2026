export class Product2
{
    Details = " ";
    Name = " ";
    Price = 0;
    Qty = 0;
    Total(){
        return this.Qty * this.Price;
    }
    Print()
    {
       return document.write(`Name=${this.Name}<br>Price=${this.Price}<br>Total=${this.Total()}`);
    }
}