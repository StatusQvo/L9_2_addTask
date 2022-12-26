const showSuccessMessage = (message)=>{
    console.log(message)
}

const showErrorMessage = (message)=>{
        console.error(message)
}
const text = "Привет! Как дела! Давно мы с тобой не виделись.";

const checkTextOnErrorSymbol = (text,errorSymbol,successCallback,errorCallback) => {
let myArr = [...text]
let counterError = 0;

    myArr.filter((value,i)=>{
        if (value=== errorSymbol && errorCallback){
            counterError++
            errorCallback(`Найден запрещенный символ ${errorSymbol} под индексом ${i}`)
        }
       })

    if (!counterError && successCallback) successCallback("В данном тексте нет запрещенных символов")
}

checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage);