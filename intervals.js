document.getElementById("form_interval").style.display = "none"
document.getElementById("form_notes").style.display = "none"
function rad_notes(){
    document.getElementById("form_interval").style.display = "none"
    document.getElementById("form_notes").style.display = "block"
}
function rad_interval(){
    document.getElementById("form_notes").style.display = "none"
    document.getElementById("form_interval").style.display = "block"
}
/*Form1*/
function Find_Note(){
    if (document.getElementById("C_1").selected == true){
        if (document.getElementById("flat_1").selected == true){
            return("Error")
        }
        else if (document.getElementById("normal_1").selected == true){
            return(1)
        }
        else if (document.getElementById("sharp_1").selected == true){
            return(2)
        }
    }
    else if (document.getElementById("D_1").selected == true){
        if (document.getElementById("flat_1").selected == true){
            return(2)
        }
        else if (document.getElementById("normal_1").selected == true){
            return(3)
        }
        else if (document.getElementById("sharp_1").selected == true){
            return(4)
        }
    }
    else if (document.getElementById("E_1").selected == true){
        if (document.getElementById("flat_1").selected == true){
            return(4)
        }
        else if (document.getElementById("normal_1").selected == true){
            return(5)
        }
        else if (document.getElementById("sharp_1").selected == true){
            return("Error")
        }
    }
    else if (document.getElementById("F_1").selected == true){
        if (document.getElementById("flat_1").selected == true){
            return("Error")
        }
        else if (document.getElementById("normal_1").selected == true){
            return(6)
        }
        else if (document.getElementById("sharp_1").selected == true){
            return(7)
        }
    }
    else if (document.getElementById("G_1").selected == true){
        if (document.getElementById("flat_1").selected == true){
            return(7)
        }
        else if (document.getElementById("normal_1").selected == true){
            return(8)
        }
        else if (document.getElementById("sharp_1").selected == true){
            return(9)
        }
    }
    else if (document.getElementById("A_1").selected == true){
        if (document.getElementById("flat_1").selected == true){
            return(9)
        }
        else if (document.getElementById("normal_1").selected == true){
            return(10)
        }
        else if (document.getElementById("sharp_1").selected == true){
            return(11)
        }
    }
    else if (document.getElementById("B_1").selected == true){
        if (document.getElementById("flat_1").selected == true){
            return(11)
        }
        else if (document.getElementById("normal_1").selected == true){
            return(12)
        }
        else if (document.getElementById("sharp_1").selected == true){
            return("Error")
        }
    }
}
function Find_Steps(){
    if (document.getElementById("P1").selected == true){
        return(0)
    }
    else if (document.getElementById("m2").selected == true){
        return(1)
    }
    else if (document.getElementById("M2").selected == true){
        return(2)
    }
    else if (document.getElementById("m3").selected == true){
        return(3)
    }
    else if (document.getElementById("M3").selected == true){
        return(4)
    }
    else if (document.getElementById("P4").selected == true){
        return(5)
    }
    else if (document.getElementById("A4").selected == true || document.getElementById("d5").selected == true) {
        return(6)
    }
    else if (document.getElementById("P5").selected == true){
        return(7)
    }
    else if (document.getElementById("m6").selected == true){
        return(8)
    }
    else if (document.getElementById("M6").selected == true){
        return(9)
    }
    else if (document.getElementById("m7").selected == true){
        return(10)
    }
    else if (document.getElementById("M7").selected == true){
        return(11)
    }
    else if (document.getElementById("P8").selected == true){
        return(12)
    }
    else if (document.getElementById("m9").selected == true){
        return(13)
    }
    else if (document.getElementById("M9").selected == true){
        return(14)
    }
    else if (document.getElementById("m10").selected == true){
        return(15)
    }
    else if (document.getElementById("M10").selected == true){
        return(16)
    }
    else if (document.getElementById("P11").selected == true){
        return(17)
    }
    else if (document.getElementById("A11").selected == true || document.getElementById("d12").selected == true){
        return(18)
    }
    else if (document.getElementById("P12").selected == true){
        return(19)
    }
    else if (document.getElementById("m13").selected == true){
        return(20)
    }
    else if (document.getElementById("M13").selected == true){
        return(21)
    }
    else if (document.getElementById("m14").selected == true){
        return(22)
    }
    else if (document.getElementById("M14").selected == true){
        return(23)
    }
    else if (document.getElementById("P15").selected == true){
        return(24)
    }
}
function Calc_note(note){
    if (note<=12){
        return(note)
    }
    else{
        if (note % 12 == 0){
            return (12)
        }
        else{
            return(note -((Math.floor(note/12))*12))
        }
    }
}
function Calc_number(number){
    if (number<=12){
        return(0)
    }
    else{
        if (number % 12 == 0){
            return ((number / 12)-1)
        }
        else{
            return(Math.floor(number/12))
        }
    }
}
function Result(nt,nb){
    if (nt == 1){
        return("C"+nb)
    }
    else if (nt == 2){
        return("C♯" + nb + " or " + "D♭" + nb)
    }
    else if (nt == 3){
        return("D" + nb)
    }
    else if (nt == 4){
        return("D♯" + nb + " or " + "E♭" + nb)
    }
    else if (nt == 5){
        return("E" + nb)
    }
    else if (nt == 6){
        return("F" + nb)
    }
    else if (nt == 7){
        return("F♯" + nb + " or " + "G♭" + nb)
    }
    else if (nt == 8){
        return("G" + nb)
    }
    else if (nt == 9){
        return("G♯" + nb + " or " + "A♭" + nb)
    }
    else if (nt == 10){
        return("A" + nb)
    }
    else if (nt == 11){
        return("A♯" + nb + " or " + "B♭" + nb)
    }
    else if (nt == 12){
        return("B" + nb)
    }
}
function BtnForm1(){
    try {
        let note = Find_Note()
        let steps = Find_Steps()
        let number = document.getElementById("number_note1").value
        if (number == ""){
            alert("Error")
            document.getElementById("number_note1").value = ""
        }
        else{
            if (note == "Error"){
                alert("Error")
                document.getElementById("number_note1").value = ""
            }
            else{
                number = parseInt(number)
                let check_NaN = isNaN(number)
                if (check_NaN == true){
                    alert("Error")
                    document.getElementById("number_note1").value = ""
                }
                else{
                    let calc_note = note + steps
                    let calc_number = Calc_number(calc_note)
                    calc_note = Calc_note(calc_note)
                    calc_number = (calc_number + number)
                    let result = Result(calc_note,calc_number)
                    alert(result)
                    document.getElementById("number_note1").value = ""
                }
            }
        }
    }
    catch (error){
        alert("Error")
    }
}
/*Form2*/
function Find_Note2(){
    if (document.getElementById("C_2").selected == true){
        if (document.getElementById("flat_2").selected == true){
            return("Error")
        }
        else if (document.getElementById("normal_2").selected == true){
            return(1)
        }
        else if (document.getElementById("sharp_2").selected == true){
            return(2)
        }
    }
    else if (document.getElementById("D_2").selected == true){
        if (document.getElementById("flat_2").selected == true){
            return(2)
        }
        else if (document.getElementById("normal_2").selected == true){
            return(3)
        }
        else if (document.getElementById("sharp_2").selected == true){
            return(4)
        }
    }
    else if (document.getElementById("E_2").selected == true){
        if (document.getElementById("flat_2").selected == true){
            return(4)
        }
        else if (document.getElementById("normal_2").selected == true){
            return(5)
        }
        else if (document.getElementById("sharp_2").selected == true){
            return("Error")
        }
    }
    else if (document.getElementById("F_2").selected == true){
        if (document.getElementById("flat_2").selected == true){
            return("Error")
        }
        else if (document.getElementById("normal_2").selected == true){
            return(6)
        }
        else if (document.getElementById("sharp_2").selected == true){
            return(7)
        }
    }
    else if (document.getElementById("G_2").selected == true){
        if (document.getElementById("flat_2").selected == true){
            return(7)
        }
        else if (document.getElementById("normal_2").selected == true){
            return(8)
        }
        else if (document.getElementById("sharp_2").selected == true){
            return(9)
        }
    }
    else if (document.getElementById("A_2").selected == true){
        if (document.getElementById("flat_2").selected == true){
            return(9)
        }
        else if (document.getElementById("normal_2").selected == true){
            return(10)
        }
        else if (document.getElementById("sharp_2").selected == true){
            return(11)
        }
    }
    else if (document.getElementById("B_2").selected == true){
        if (document.getElementById("flat_2").selected == true){
            return(11)
        }
        else if (document.getElementById("normal_2").selected == true){
            return(12)
        }
        else if (document.getElementById("sharp_2").selected == true){
            return("Error")
        }
    }
}
function Find_Note3(){
    if (document.getElementById("C_3").selected == true){
        if (document.getElementById("flat_3").selected == true){
            return("Error")
        }
        else if (document.getElementById("normal_3").selected == true){
            return(1)
        }
        else if (document.getElementById("sharp_3").selected == true){
            return(2)
        }
    }
    else if (document.getElementById("D_3").selected == true){
        if (document.getElementById("flat_3").selected == true){
            return(2)
        }
        else if (document.getElementById("normal_3").selected == true){
            return(3)
        }
        else if (document.getElementById("sharp_3").selected == true){
            return(4)
        }
    }
    else if (document.getElementById("E_3").selected == true){
        if (document.getElementById("flat_3").selected == true){
            return(4)
        }
        else if (document.getElementById("normal_3").selected == true){
            return(5)
        }
        else if (document.getElementById("sharp_3").selected == true){
            return("Error")
        }
    }
    else if (document.getElementById("F_3").selected == true){
        if (document.getElementById("flat_3").selected == true){
            return("Error")
        }
        else if (document.getElementById("normal_3").selected == true){
            return(6)
        }
        else if (document.getElementById("sharp_3").selected == true){
            return(7)
        }
    }
    else if (document.getElementById("G_3").selected == true){
        if (document.getElementById("flat_3").selected == true){
            return(7)
        }
        else if (document.getElementById("normal_3").selected == true){
            return(8)
        }
        else if (document.getElementById("sharp_3").selected == true){
            return(9)
        }
    }
    else if (document.getElementById("A_3").selected == true){
        if (document.getElementById("flat_3").selected == true){
            return(9)
        }
        else if (document.getElementById("normal_3").selected == true){
            return(10)
        }
        else if (document.getElementById("sharp_3").selected == true){
            return(11)
        }
    }
    else if (document.getElementById("B_3").selected == true){
        if (document.getElementById("flat_3").selected == true){
            return(11)
        }
        else if (document.getElementById("normal_3").selected == true){
            return(12)
        }
        else if (document.getElementById("sharp_3").selected == true){
            return("Error")
        }
    }
}
function Find_Result(i_n){
    if (i_n == 0){
        return("Perfect Unison (P1)")
    }
    else if (i_n == 1){
        return("Minor Second (m2)")
    }
    else if (i_n == 2){
        return("Major Second (M2)")
    }
    else if (i_n == 3){
        return("Minor Third (m3)")
    }
    else if (i_n == 4){
        return("Major Third (M3)")
    }
    else if (i_n == 5){
        return("Perfect Fourth (P4)")
    }
    else if (i_n == 6) {
        return("Augmented Fourth (A4) or Diminished Fifth (d5)")
    }
    else if (i_n == 7){
        return("Perfect Fifth (P5)")
    }
    else if (i_n == 8){
        return("Minor Sixth (m6)")
    }
    else if (i_n == 9){
        return("Major Sixth (M6)")
    }
    else if (i_n == 10){
        return("Minor Seventh (m7)")
    }
    else if (i_n == 11){
        return("Major Seventh (M7)")
    }
    else if (i_n == 12){
        return("Perfect Octave (P8)")
    }
    else if (i_n == 13){
        return("Minor Ninth (m9)")
    }
    else if (i_n == 14){
        return("Major Ninth (M9)")
    }
    else if (i_n == 15){
        return("Minor Tenth (m10)")
    }
    else if (i_n == 16){
        return("Major Tenth (M10)")
    }
    else if (i_n == 17){
        return("Perfect Eleventh (P11)")
    }
    else if (i_n == 18){
        return("Augmented Eleventh (A11) or Diminished Twelfth (d12)")
    }
    else if (i_n == 19){
        return("Perfect Twelfth (P12)")
    }
    else if (i_n == 20){
        return("Minor Thirteenth (m13)")
    }
    else if (i_n == 21){
        return("Major Thirteenth (M13)")
    }
    else if (i_n == 22){
        return("Minor Fourteenth (m14)")
    }
    else if (i_n == 23){
        return("Major Fourteenth (M14)")
    }
    else if (i_n == 24){
        return("Perfect Fifteenth (P15)")
    }
}
function BtnForm2(){
    try {
        let start_number = document.getElementById("number_note2").value
        let second_number = document.getElementById("number_note3").value
        let start_note = Find_Note2()
        let second_note = Find_Note3()
        let note_number = second_number - start_number
        let interval_num
        let result
        if (note_number == 0){
            interval_num = second_note - start_note
            result = Find_Result(interval_num)
            alert(result)
            document.getElementById("number_note2").value = ""
            document.getElementById("number_note3").value = ""
        }
        else if (note_number == 1){
            interval_num = (second_note + 12) - start_note
            result = Find_Result(interval_num)
            alert(result)
            document.getElementById("number_note2").value = ""
            document.getElementById("number_note3").value = ""
        }
        else if (note_number == 2){
            interval_num = (second_note + 24) - start_note
            result = Find_Result(interval_num)
            alert(result)
            document.getElementById("number_note2").value = ""
            document.getElementById("number_note3").value = ""
        }
        else if (note_number > 2){
            alert("out of the range that we can find")
            document.getElementById("number_note2").value = ""
            document.getElementById("number_note3").value = ""
        }
        else{
            alert("Error")
            document.getElementById("number_note2").value = ""
            document.getElementById("number_note3").value = ""
        }
    } catch (error) {
        alert("Error")
        document.getElementById("number_note2").value = ""
        document.getElementById("number_note3").value = ""
    }
}