for (let somya = 0; somya < 18; ++somya) { 
    // variable value (++somya) gets its effect post all code is executed inside the loop though it is pre-incremented
    if (somya > 15) {
        console.log("Gift from papa, iphone this year")
    } else {
        console.log("No Gift, iphone only barbie doll")
    }
}
