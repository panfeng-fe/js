// import { ref, watchEffect } from 'vue';


// const pain = ref(1);

// watchEffect(() => {
//     console.log('do something')
//     console.log(pain.value)
// })


// setTimeout(() => {
//     pain.value++
// }, 1000)

function log(test: number) {
    return (target: any) => {
        console.log(target, test);
    }
}
@log(1)
class Pain {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const pf = new Pain('pf', 11)
// console.log(pf)


@log(1)
function test() {
    console.log('test')
}

// function addAge(constructor: Function) {
//   constructor.prototype.age = 18;
// }
// ​
// function method(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//    console.log(target);
//    console.log("prop " + propertyKey);
//    console.log("desc " + JSON.stringify(descriptor) + "\n\n");
// };
// ​
// @addAge
// class Hello{
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     console.log('hello');
//       this.name = name;
//       this.age = age;
//   }
// ​
//   @method
//   hello(){
//     return 'instance method';
//   }
// ​
//   @method
//   static shello(){
//     return 'static method';
//   }
// }
