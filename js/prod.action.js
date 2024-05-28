// Le constructeur de serverXmlHttp recoit les parametres de la requete:
//url - URL du serveur
//contentType - type de contenu de la requete
//type - type de requete (par default GET)
//data - parametres de la requete optionnels
//sync - indicateur de la requete asychrone (par default true)
//showErrors - affichage des erreurs
//complte - function de rappel invoquee lorsque la requete est ternimee
// Autor: Cosysoft Digital Solutions

/**********************************************************************
*  Gestionario de verificaçao quando o documento esta carregado       *
**********************************************************************/ 
$(document).ready(function() {	
  // Criar o objeto request contact
  ioViewer = new ImgPhotos(); 
  // Atribuir as propriedades dos elementos do documento
  ioViewer.iniDomElements();
  // Criar o objeto de controlo de image Viewer
  viewer = new PhotoViewer();
  /*********************************************
  * Parametros de configuração de Photo Viewer *
  *********************************************/
   viewer.setBackgroundColor('#ffffff');
   viewer.setBorderWidth(2);
   viewer.setFontSize(13); 
   viewer.setShadeColor('#222222');
   viewer.disableToolbar();
   viewer.disableEmailLink();
   viewer.disablePhotoLink();  
});

/* Declare la classe Request.contact pour traiter les 
   fonctionalites de demande d'informations de clientes depuis la pageX   
   Pedido de contact.php
*/
function ImgPhotos(){

  // Funcao chamado no gestionario de verificacao de inicio do documento
  this.iniDomElements = function()
  {
	/******************************************
	* Gestionario click sobre image product   *
	******************************************/
	$('a#ProdImg').click(function(){
	  // Recuperar e formatar o id superior do elemento selecionado
	  var MainTag = $(this).attr('data');
	  const elem = document.getElementById(MainTag);
	  const list = elem.getElementsByTagName("img");
      // chamar a funcao para gerir e carregar as imagens no viewer
	  ioViewer.showProductPhotoViewer(list);
	});

    /*******************************************
    * Gestionario hover sobre as imagens skyni *
    *******************************************/
	$('a#d1').mouseover(function(){
	  // Recuperar e formatar o id superior do elemento selecionado
	  var MainTag = $(this).attr('data');
	  // Recueprar a imagem a carregar
	  var chargeImg = $(this).find('img').attr('src');
	  // Recuperar o objeto a da imagem grande deste objeto
	  var aImg = $('#'+MainTag).find('#ProdImg').find('img').attr('src',chargeImg);
	});
	
  };
  
  /********************************************************************
  * Função para mostar a Photo Viewer e elemento product selectionado  *
  *********************************************************************/
  this.showProductPhotoViewer = function(list)
  {
	// Criar o objeto de controlo de image Viewer
    viewer = new PhotoViewer();
    /*********************************************
    * Parametros de configuração de Photo Viewer *
    *********************************************/
    viewer.setBackgroundColor('#ffffff');
    viewer.setBorderWidth(2);
    viewer.setFontSize(13); 
    viewer.setShadeColor('#222222');
    //viewer.disableToolbar();
	viewer.disableToolbar();
	viewer.enableToolbarAnimator();
    viewer.disableEmailLink();
    viewer.disablePhotoLink();
	viewer.enableFading();
	viewer.enablePanning();
	viewer.enablePhotoFading();
	viewer.enableAutoPlay();
	// Verificar se a tabela da lista de imagens tem algo
	if(list.length){
      // Varer a tabela de products até ao numero final
      for(i=0; i < list.length; i++)
	  {// Recuperar o link da imagem
		var imgLink = list[i].src;
        // Adicionar o endereço de imagem
	    viewer.add(imgLink);
	  }		
	}// Mostar a photo no viewer
    viewer.show(0);
  };
  
  /*************************************************************
  * Função para mostar a Photo Viewer e elemento selectionado  *
  *************************************************************/
  this.showPhotoViewer = function(obj)
  {// Recuperar o rrl da imagem
    var img = $(obj).find('img').attr('src');  
    // Criar o objeto de controlo de image Viewer
    viewer = new PhotoViewer();
    /*********************************************
    * Parametros de configuração de Photo Viewer *
    *********************************************/
    viewer.setBackgroundColor('#ffffff');
    viewer.setBorderWidth(2);
    viewer.setFontSize(13); 
    viewer.setShadeColor('#222222');
    viewer.disableToolbar();
    viewer.disableEmailLink();
    viewer.disablePhotoLink();
	// Adicionar o endereço de imagem
	viewer.add(img);
	// Mostar a photo no viewer
    viewer.show(0);
  };

}