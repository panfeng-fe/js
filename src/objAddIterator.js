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
