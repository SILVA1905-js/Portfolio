
function downloadFile() {
  // URL do arquivo a ser baixado
  var fileUrl = 'https://drive.google.com/uc?export=download&id=1sZ1_nv_DfJbsBu5DNfylwMJn4ZfQoBZ1';

  // Criar um elemento de link
  var link = document.createElement('a');
  link.href = fileUrl;
 
  // Definir o nome do arquivo
  link.download = 'Alessandro_Rocha_Web_Developer_Front_end.pdf';

  window.location.href = fileUrl;
  // Simular um clique no link para iniciar o download
  link.click();
}
