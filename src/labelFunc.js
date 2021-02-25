// // 标签函数
// const fn = (firstParams, ...secondParams) => {
//     console.log(firstParams)
//     console.log(secondParams)
//     let index, output = '';
//     for (index = 0; index <= firstParams.length; index++) {
//         output += firstParams[index] + secondParams[index]
//     }
//     output += firstParams[index]
//     return output;
// }


// const name = 'pf';
// const age = 12;
// const res = fn`name: ${name}, age: ${age}`;
// console.log(res)

const enUS = {
	'Welcome to': 'Welcome to',
	'you are visitor number': 'you are visitor number'
}
const zhCN = {
	'Welcome to': '你好',
	'you are visitor number': '你的访问号码'
}

function i18nInit(language, zhCNResource, enUSResource) {
    return (literals, ...values) => {
        let output = "";
        let index;
        let resource;
        switch (language) {    // 根据当前语言获得语言包
        case 'zh-CN':
            resource = zhCNResource;
            break;
        case 'en-US':
            resource = enUSResource;
            break;
        }
        for (index = 0; index < values.length; index++) {
        output += (resource[literals[index].trim()] || literals[index].trim()) + values[index]; // 把字面量作为键得到语言包中对应的翻译
        }
        output += resource[literals[index]] || literals[index]
        return output;
    }
}

let currentLanguage = 'zh-CN';
const siteName = 'pf';
const visitorNumber = 12;
const i18n = i18nInit(currentLanguage, zhCN, enUS );
const res = i18n`Welcome to ${siteName} you are visitor number ${visitorNumber}!`

console.log(res)