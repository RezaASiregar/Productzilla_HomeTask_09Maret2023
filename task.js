let starting = ['Nunez', 'Gakpo', 'Salah', 'Firmino', 'Diaz','Gerrard', 'Thiago', 'Henderson', 'Elliot', 'Fabinho','VDJ', 'Robertson', 'TAA', 'Konate', 'Tsimikas']

function Liverpool11(inti) {
    starting = inti
}

function ambil() {
    console.log('========= LIVERPOOL FC =========')
    console.log(starting[0]);
    console.log(starting[1]);
    console.log(starting[2]);
    console.log(starting[3]);
    console.log(starting[4]);
    console.log(starting[5]);
    console.log(starting[6]);
    console.log(starting[7]);
    console.log(starting[8]);
    console.log(starting[9]);
    console.log(starting[10]);
    console.log(starting[11]);
    console.log(starting[12]);
    console.log(starting[13]);
    console.log(starting[14]);
    return starting
}

function ganti() {
    console.log('============ MENGGANTI NILAI =============')
    starting[0] = 'Kuyt'
    starting[1] = 'Suarez'
    starting[2] = 'Owen'
    return starting
}

ambil()
console.log((ganti()))