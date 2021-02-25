# js
some js demo and practice

不积跬步无以至千里

```
// 为对象添加Symbol.iterator属性
const todo = {
    life: ['work', 'sleep'],
    learn: ['codeing'],
    [Symbol.iterator]: function() {
        const all = [...this.life, ...this.learn];
        let index = 0;
        return {
            next: () => ({
                value: all[index],
                done: index++ >= all.length
            })
        }
    }
}

for (const item of todo) {
    console.log(item)
}
```