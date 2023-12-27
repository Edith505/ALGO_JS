function inversion(str){
    return (str.split('').reverse().join(''))
}

function palindrome(mots){
    let strMin = mots.toLowerCase()
    if(inversion(strMin) === strMin){
        console.log(`${mots} est un palindrome`)
    }
    else{
        console.log(`${mots} n'est pas un palindrome`)
    }
}

palindrome('Elle')