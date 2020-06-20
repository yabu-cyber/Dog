

$(function() {
        $('button').click(
          function() {
            $.ajax("https://dog.ceo/api/breeds/image/random" ,
              {
                dataType:'json',
                type:'get'
              }
            )
            .done(function(data){
              console.log(data);
              //$("body").append("<img src='"+data.message+"'>");
              $(".dog-image").attr({
                src:data.message
              })
            }

          )}

        );
      });
