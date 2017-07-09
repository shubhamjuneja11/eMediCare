



    function startload(){
      document.getElementById("loader").style.visibility="visible";
    }
    function stopload(){
      document.getElementById("loader").style.visibility="hidden";
    }

    function myajaxreq(){
      startload();

      $.ajax({


            url:"/ajaxreq/",
            dataType:'html',
            success: function (data) {
              $("#mytext").html(data);
              stopload();
            }
          })
        }

        function myfun(){

         startload();
           var msex = $('input[name=gender]:checked', '#form').val()
           // var msex = $('gender').val();
            var mage = $('#quantity').val();

            if ( !( mage >=1 && mage<=150 ) ){

                    alert("The age must be a number between 1 and 150");
                    stopload();
                    return false;
            }

           var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();

         $.ajax({

               data:{sex:msex, age:mage},
               url:"/basicsymptoms/",
               dataType:'html',
               type: "GET",
               success: function (data) {
                 $("#mytext").html(data);
                   stopload();
               }

             })
           }

        function  ajaxreq2() {
               //var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
               var but=$('#searcharea').val();//trim().length;
               var size= (but.trim());
                if(size<=0)
                {
                  alert("Please enter in search area");
                  return false;
                }
     startload();
               var dataz=$("#myform").serialize();
               console.log(dataz);
     console.log("pppppppppppppppppppppppp");
           $.ajax({

           url:"search1",
               dataType
           :
           'html',
               type
           :
           "POST",
               data:dataz ,
               success
           :
           function (data) {
               $("#mytext").html(data)
               stopload();
           }

       })

       }




       function  ajaxreq3() {
         startload();
              //var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
              var dataz=$("#myform").serialize();


          $.ajax({

          url:"quest",
              dataType
          :
          'html',
              type
          :
          "POST",
              data:dataz ,
              success
          :
          function (data) {
              $("#mytext").html(data)
              stopload();
          }

      })

      }

      function  newques() {
        startload();
             //var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
             var dataz=$("#myform").serialize();
             console.log(dataz);

         $.ajax({

         url:"question",
             dataType
         :
         'html',
             type
         :
         "POST",
             data:dataz ,
             success
         :
         function (data) {
             $("#mytext").html(data)
             stopload();
         }


      })

      }

      function getdoctors(){
        //var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
        var dataz=$("#myform").serialize();
        console.log(dataz);

    $.ajax({

    url:"doctors",
        dataType
    :
    'html',
        type
    :
    "POST",
        data:dataz ,
        success
    :
    function (data) {
        $("#mytext").html(data)
        stopload();
    }


 })
      }
