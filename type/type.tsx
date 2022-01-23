

export type Person={
    name:string,
    img:string,
    subscriber:number
    verified:boolean
    story?:{
        watched:boolean
    }
}


export type Video={
    title:string,
    views:number,
    like:number,
    uploadedAt:string,
    desc:string,
    person:Person
    comment?:VideoComment[],
    thumb:{
        img:string,
        baseColor?:string;
    },
    length:string
}

export type VideoComment={
    comment:string,
    person:Person;
}











