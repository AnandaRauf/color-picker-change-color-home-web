function ChangeColor() {
         #mengambil element tag html dengan nama id tag html
        let color = document.getElementById("colorpicks").value;
        #Fungsi untuk mengubah warna background, untuk ganti warna background menu ul li, cukup ganti body dengan nama id footer,  ul li atau buat tag div id diatas footer tag dan menu ul li
        document.body.style.backgroundColor = color;
    }