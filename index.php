<?php require 'server.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Ajax</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="script.js"></script>
</head>
<body>
    <div class="wrapper">
        
        <form class="comment_form">
            <div>
                <label for="name">Name</label>
                <input type="text" name="name" id="name">
            </div>    
            <div>
                <label for="comment">Tweet</label>
                <textarea name="comment" id="comment" cols="30" rows="5"></textarea>
            </div>

            <button type="button" id="submit_button" >POST</button>
            <button type="button" id="update_button"    >UPDATE</button>
        </form>

    <?php echo $comments; ?>
    </div>

</body>
</htmlfasdfdasf
