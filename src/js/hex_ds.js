// ----------------------------------------------------------------------------------
// -- Data structures.
// ----------------------------------------------------------------------------------

var LinkedList = function()
{
    this.first = false;
    this.last = false;
    this.data = [];
};

LinkedList.prototype.insert_first = function(val)
{
    var tmp = { value: val, next: false };

    if (!this.data.length)
    {
        this.first = tmp;
        this.last = tmp;
    }
    else
    {
        this.first.next = tmp;
        this.first = tmp;
    }

    this.data.push(tmp);
};

LinkedList.prototype.insert_last = function(val)
{
    var tmp = { value: val, next: false };

    if (!this.data.length)
    {
        this.first = tmp;
        this.last = tmp;
    }
    else
    {
        tmp.next = this.last;
        this.last = tmp;
    }

    this.data.push(tmp);
};

export { LinkedList };