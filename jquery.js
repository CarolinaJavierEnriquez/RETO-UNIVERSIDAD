$(document).ready(function() {
	$(".text-contenido-caja3").click(function(event){
		event.preventDefault();
		$(".text-icon").toggleClass("hidden");
		$(".text-hidden").toggleClass("hidden");
	});
	$(".texto-col6").click(function(event){
		event.preventDefault();
		$(".text-icon-misrecursos").toggleClass("hidden");
		$(".text-miscursos").toggleClass("hidden");
	});
});