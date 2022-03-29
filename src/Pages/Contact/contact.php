<?php
    //Dados do usuario
    $nome = addslashes($_POST["name"]);
    $email = addslashes($_POST["email"]);
    $telefone = addslashes($_POST["cellphone"]);
    $mensagem = addslashes($_POST["message"]);


    //
    $to = "atendimento@raylanasoares.com.br"; //E-mail adm, que recebe o contato
    $subject = "Contato site";
    $body = "Nome: ".$nome."\n".
            "E-mail: ".$email."\n".
            "Telefone: ".$telefone."\n".
            "Mensagem: ".$mensagem;
    $header = "From:contatosite@raylanasoares.com.br"."\r\n"."Reply-To:".$email."\r\n"."X=Mailer:PHP/".phpversion();
    //echo "mail($to,$subject,$body,$header)";
    if(mail($to,$subject,$body,$header)){
        echo("Email enviado com sucesso!");
    }else{
        echo("Email, n達o pode ser enviado =(");
    }
?>