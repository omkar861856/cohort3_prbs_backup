function FileCleaner(str){
    let cleanedStr = str.replace(/\s+/g, ' ');
    return cleanedStr;

}

const exchange = FileCleaner(
    "hello     this is getting written from the        op key board"
)

console.log(exchange)