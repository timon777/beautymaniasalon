<link rel="stylesheet" href="css/style.css?v6">

<?php
header('Refresh: 5; url=/');
//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "5774188351:AAFmYH2oVDnZuo4xznLRL4Z39VfIRMW5xOs";

//Сюда вставляем chat_id
$chat_id = "-976289995";

//Определяем переменные для передачи данных из нашей формы
if ($_GET['act'] == 'order') {
    $name = ($_GET['name']);
    $phone = ($_GET['phone']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя:' => $name,
        'Телефон:' => $phone
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
		echo "<center class='about__title'>".$_GET['name']." Спасибо! Ваша заявка принята. <br>Мы свяжемся с вами в ближайшее время.</center>";
       
    }

//А здесь сообщение об ошибке при отправке
    else {
        echo $_GET['name']." Что-то пошло не так. ПОпробуйте отправить форму ещё раз.";
    }
}

?>