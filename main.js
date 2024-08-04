let show = document.querySelector('.show');
let messageInput = document.querySelector('.message');
let btn_crypt = document.querySelector('.btn_crypt');
let btn_decrypt = document.querySelector('.btn_decrypt');

show.onclick = function() {
    const text = this.textContent;
    messageInput.value =text 
    navigator.clipboard.writeText(text)
      
};

const Alphabet = {
    a: "£", b: "8", c: "2", d: "µ", e: "6", f: "b", g: "t", h: "c", 
    i: "#", j: "$", k: "~", l: "_", m: "q", n: ";", o: "é", p: "&", 
    q: ")", r: "z", s: "%", t: "ç", u: "4", v: "²", w: "¨", x: "0", 
    y: "5", z: ">", 
    // Uppercase letters 
    A: "(", B: "n", C: "M", D: "V", E: "3", F: "X", G: "Z", H: "B", 
    I: "K", J: "Y", K: "D", L: "T", M: "R", N: "E", O: "L", P: "S", 
    Q: "A", R: "J", S: "U", T: "I", U: "s", V: "r", W: "O", X: "W", 
    Y: "P", Z: "F" ,
    // 
    1:"?", 2:"." , 3:"/" ,4:"§",5:"!",6:"<",7:"",8:"@",9:"+",
    '?' :"k",'.' :"u",'@' :"i",'!' :"+" ,
    // arbic
    'ا': "à" , 'ئ': "=" ,  'ة': "}" , 'ى': "°" ,
    'أ': "ف" ,'ب': "ط" ,'ت':"ي",'م': "ك" ,'ج': "ض" ,'ح':"ق",'خ': "ش" ,
    'د': "ع" ,'ذ': "ص" ,'ر':"أ",'ز': "ث" ,'س': "ج" ,'ش':"ه",'ص': "د" ,
    'ض': "ن" ,'ط': "ح" ,'ظ':"ل",'ع': "و" ,'غ': "ر" ,'ف':"خ",'ق': "ذ" ,
    'ك': "غ" ,'ل': "س" ,'م':"ز",'ن': "ظ" ,'ه': "ك" ,'و':"ت",'ي': "ب" ,
    


};

btn_crypt.onclick = () => {
    let str = messageInput.value; 
    let output = ""; 

    for (let item of str) {
        if (item in Alphabet) {
            output += Alphabet[item];
        } else if (item === " ") {
            output += "o"; 
        } 
    }

    show.textContent = output; 
};

const DecryptAlphabet = Object.fromEntries(
    Object.entries(Alphabet).map(([key, value]) => [value, key])
);

btn_decrypt.onclick = () => {
    let str = messageInput.value ; 
    let output = ""; 

    for (let item of str) {
        if (item in DecryptAlphabet) {
            output += DecryptAlphabet[item];
        } else if (item === "o") {
            output += " "; 
        } 
    }

    show.textContent = output; 
};