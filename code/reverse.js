export default (str) =>{
    //1. 字符串按空格进行分割，保存数组，数组元素的先后顺序就是单词的顺序
    //2. 对数据进行遍历，然后每个元素进行反转
    //" "等价于/\s/g，正则表示方法中\s代表空格
    return str.split(/\s/g).map(item => {
        item.split("").reverse().join("")
    }).join(" ")
}