/**
 * Created by atama on 14.5.2017 г..
 */
function binaryToDecimal(input) {
    let binary = Number(input[0]);
    let decimal = parseInt(binary, 2);

    console.log(decimal);
}
binaryToDecimal(['00001001']);
binaryToDecimal(['11110000']);