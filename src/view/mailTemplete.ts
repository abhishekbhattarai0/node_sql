const HTML_templete = (text, message) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Registration Successful!</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
    }
    .container {
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    h1 {
        color: #333;
    }
    p {
        color: #666;
        margin-bottom: 20px;
    }
    .btn {
        display: inline-block;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s;
    }
    .btn:hover {
        background-color: #45a049;
    }
</style>
</head>
<body>
<div class="container">
    <h1>${message}</h1>
    <p>${text}</p>    
    <p>Thank you for registering with us. We're delighted to have you on board!</p>
    <p>Enjoy exploring our website and feel free to contact us if you have any questions.</p>
    <a href="https://www.google.com" class="btn">Start Exploring</a>
</div>
</body>
</html>
`
}

export default HTML_templete