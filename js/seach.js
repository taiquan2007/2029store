$(document).ready(function(){
  $('#searchInput').click(function(event){
      event.stopPropagation(); // Ngăn chặn sự kiện click trên #searchInput lan sang body
  });

  $('#searchInput').on('input', function(){
      var searchText = $(this).val().toLowerCase();
      var found = false;
      $('#productList a').each(function(){
          var productText = $(this).text().toLowerCase();
          if(productText.startsWith(searchText)){
              $(this).show();
              found = true;
          } else {
              $(this).hide();
          }
      });
      if (found) {
          $('#productList').show(); // Hiển thị danh sách sản phẩm khi có kết quả tìm kiếm
      } else {
          $('#productList').hide(); // Ẩn danh sách nếu không có kết quả
      }
  });

  $('body').click(function(){
      $('#productList').hide();
  });
});
