function check() {
    let q1 = document.getElementsByName('q1');
    let q2 = document.getElementsByName('q2');
    let q3 = document.getElementsByName('q3');
    let q4 = document.getElementsByName('q4');
    let q5 = document.getElementsByName('q5');
    let q6 = document.getElementsByName('q6');
    let q7 = document.getElementsByName('q7');
    let q8 = document.getElementsByName('q8');
    let q9 = document.getElementsByName('q9');
    let q10 = document.getElementsByName('q10');

    let count = 0;

    for (let i = 0; i < 3; i++) {
        if (q1[i].checked) {
            count = count + Number(q1[i].value);
        }

        if (q2[i].checked) {
            count = count + Number(q2[i].value);
        }

        if (q3[i].checked) {
            count = count + Number(q3[i].value);
        }

        if (q4[i].checked) {
            count = count + Number(q4[i].value);
        }

        if (q5[i].checked) {
            count = count + Number(q5[i].value);
        }

        if (q6[i].checked) {
            count = count + Number(q6[i].value);
        }

        if (q7[i].checked) {
            count = count + Number(q7[i].value);
        }

        if (q8[i].checked) {
            count = count + Number(q8[i].value);
        }

        if (q9[i].checked) {
            count = count + Number(q9[i].value);
        }

        if (q10[i].checked) {
            count = count + Number(q10[i].value);
        }
        
    }
    alert('Правильных ответов: ' + count);
}