function hitungVolume() {
    var jenisTangki = document.getElementById('jenisTangki').value;
    var volume;

    if (jenisTangki === 'Silinder') {
        var diameter = parseFloat(document.getElementById('diameter').value);
        var tinggi = parseFloat(document.getElementById('tinggi').value);
        volume = Math.PI * Math.pow(diameter / 2, 2) * tinggi;
    } else if (jenisTangki === 'Persegi Panjang') {
        var panjang = parseFloat(document.getElementById('panjang').value);
        var lebar = parseFloat(document.getElementById('lebar').value);
        var tinggi = parseFloat(document.getElementById('tinggi').value);
        volume = panjang * lebar * tinggi;
    }

    document.getElementById('hasilVolume').innerText = 'Volume: ' + volume + ' m³';
}
