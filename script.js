

export const asyncAddition = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a == 0 || b == 0) {
            reject('some number is zero')
        }
        resolve(a + b);
    })
}

export const asyncPower = (a) => {
    return new Promise((resolve, reject) => {
        const pow = a ** 2;
        if (pow > 100) reject('power is greater than 100')
        resolve(a ** 2)
    })
}


export const powerAddition = async (a,b) => {
    try {

        const add = await asyncAddition(a, b);
        const pow = await asyncPower(add);
        console.log(pow)
    } catch (error) {
        console.error('Error:', error);
    }

}

powerAddition(6,0);