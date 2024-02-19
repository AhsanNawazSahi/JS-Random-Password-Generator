function fun() {
    class Password {
    constructor() {
        this.pass = ""
    }
    password_generator(len) {
        let alphabet = "abcdefghijklmnopqrstuvwxyz"
        let numbers = "1234567890"
        let special_char = ",.<>/?:;'|=-+_~!@#$^&*"
        if (len < 3) {
            alert("Enter number greater than 3")
        } else {

            let i = 0
            while (i < len) {
                this.pass += alphabet[Math.floor(Math.random() * alphabet.length)]
                this.pass += numbers[Math.floor(Math.random() * numbers.length)]
                this.pass += special_char[Math.floor(Math.random() * special_char.length)]
                i += 3
            }
            this.pass = this.pass.substr(0,len)
            return this.pass
        }
    }
}
let p = new Password()
let x = p.password_generator(9)
pass.innerHTML = "<h1>Generated Password is </h1>"+"<br>"+"<br>"+"<br>" + x 
}