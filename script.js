var jam_int, terlambat_int, bonus, hadiah, pendapatan
    jam = document.getElementById('jam'),
    terlambat = document.getElementById('terlambat'),
    btn = document.getElementById('btn'),
    hasil = document.getElementById('Hasil');

const gaji = 4000000;

document.getElementById('Catatan').hidden = true;
document.getElementById('Catatan2').hidden = true;
document.getElementById('Catatan3').hidden = true;


function HitungGaji() {
    jam_int = jam.value;
    terlambat_int = terlambat.value;

    bonus = (jam_int - 40) * 25000;
    hadiah = gaji + (gaji / 10);

    if (jam_int > 40) {
        if (terlambat_int == 0) {
            pendapatan = hadiah + bonus;
            document.getElementById('Catatan2').hidden = false;
        } else {
            pendapatan = gaji + bonus;
            document.getElementById('Catatan2').hidden = true;
        }
        document.getElementById('Catatan').hidden = false;
        document.getElementById('Catatan3').hidden = true;
    } else if(jam_int == 40){
        pendapatan = gaji;
        document.getElementById('Catatan').hidden = true;
        document.getElementById('Catatan2').hidden = true;
        document.getElementById('Catatan3').hidden = true;
    } else {
        pendapatan = gaji - (40 - jam_int)*50000 ;
        document.getElementById('Catatan3').hidden =false;
    }
    
    hasil.innerHTML =  "Gaji Bulan ini adalah Rp " + pendapatan;
    hasil.hidden = false;
}

function Reset(){
    hasil.hidden = true
    document.getElementById('Catatan').hidden = true;
    document.getElementById('Catatan2').hidden = true;
    document.getElementById('Catatan3').hidden = true;
}