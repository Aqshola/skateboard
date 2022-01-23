const SYMBOL=["", "k", "M", "G", "T", "P", "E"];

export default function numberReadable(num:number):string{
    const tier= Math.log10(Math.abs(num))/3 | 0
    if(tier==0) return num.toString()

    const suffix=SYMBOL[tier]

    const scale=Math.pow(10,tier*3);
    const scaled= num/scale;

    
    return scaled.toFixed(0)+suffix;
}