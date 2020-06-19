$('#pcparts').on('change', function() {
  if (this.value === 'cpu') {
    $('.product-info').html('<div class="details"><p class="info">CPU product info</p><button class="purchase">Purchase</button><div>')
  } else if (this.value === 'cpucooler') {
    $('.product-info').html('<div class="details"><p class="info">CPU Cooler product info</p><button class="purchase">Purchase</button><div>')
  }
	else if (this.value === 'mobo') {
    $('.product-info').html('<div class="details"><p class="info">Motherboard info</p><button class="purchase">Purchase mobo</button><div>')
  }
//add more if else
});