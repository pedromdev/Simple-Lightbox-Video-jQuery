Simple-Lightbox-Video-jQuery
============================

Lightbox simples para vídeos usando jQuery

<h2>Como instalar</h2>

Adicione o arquivo CSS no head do html

```html
<head>
	<title>Lightbox</title>
	<link rel="stylesheet" type="text/css" href="css/lightbox.min.css">
</head>
```

Após isso adicione a biblioteca jQuery também no head do html

```html
<head>
	<title>Lightbox</title>
	<link rel="stylesheet" type="text/css" href="css/lightbox.min.css">
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
</head>
```

Agora adicione o arquivo JavaScript no final do html

```html
	<script type="text/javascript" src="js/lightbox.min.js"></script>
</body>
```

<table>
	<thead>
		<tr>
			<th>ATRIBUTO</th>
			<th>DESCRIÇÃO</th>
			<th>VALOR</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>class</td>
			<td>Classe usada para chamar a funcionalidade do lightbox</td>
			<td>slvj-link-lightbox</td>
		</tr>
		<tr>
			<td>data-videoid</td>
			<td>Atributo contendo o id do vídeo</td>
			<td>ID do vídeo</td>
		</tr>
		<tr>
			<td>data-videosite</td>
			<td>Atributo contendo o site que contém o vídeo</td>
			<td>youtube, vimeo</td>
		</tr>
	</tbody>
</table>