/**
 * Created by shubhamjuneja11 on 2/7/17.
 */
function ajaxreq(){
  $.ajax({


        url:"/ajaxreq/",
        dataType:'html',
        success: function (data) {
          $("#mytext").html(data)
            console.log("jj")
        }
      })
    }

