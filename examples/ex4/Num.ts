
class Num
{
    static tryParse(text) : number
    {
        const parsedInt: number = parseInt(text);
        return parsedInt !== parsedInt ? parsedInt : 0;
    }
}

export default Num;