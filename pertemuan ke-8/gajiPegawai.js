let namaPegawai = "Budiman";
let masuk = 2020;
let jamKerja = 5	;
let upahPerJam = 20000;
let upahLembur = 0;
let lamaLembur = 0;

if(jamKerja > 8){
	lamaLembur = jamKerja - 8
	upahLembur = lamaLembur * (2 * upahPerJam);
}
	
let lamaKerja = 2024 - masuk;
let gajiPerhari = (jamKerja - lamaLembur) * upahPerJam;
let gajiTotal = gajiPerhari + upahLembur

document.write("<h1>Program Gaji Pegawai</h1>", "<hr><br>")
document.write("-------------", "<br>")
document.write("Nama Pegawai: ", namaPegawai, "<br>")
document.write("Tahun Masuk: ", masuk, "<br>")
document.write("Jam Kerja: ", jamKerja, "<br>")
document.write("Upah per jam: ", upahPerJam, "<br>")
document.write("-------------", "<br>")
document.write("Lama Kerja: ", lamaKerja, " Tahun	 <br>")
document.write("Gaji Perhari: ", gajiPerhari, "<br>",)
document.write("Upah Lembur: ", upahLembur, "<br>",)
document.write("-------------", "<br>")
document.write("Gaji Total: ", gajiTotal, "<br>",)


