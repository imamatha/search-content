// On-view-load initialization
function init() {
   
    $("#search").click(search);
    gadgets.window.adjustHeight();
   
}
 /* function getISOStrict(date) {
   
   if (Date.prototype.toISOString) {
        return date.toISOString().replace(/Z$/, "+0000");
    }

    function pad(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    }

    return date.getUTCDate();
       + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCFullYear() );
        + 'T' + pad( date.getUTCHours() )
       + ':' + pad( date.getUTCMinutes() )
       + ':' + pad( date.getUTCSeconds() )
       + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
       + '+0000'; 
} */

// Perform a search and display the results
function search() {
    
    $("search-results").html("");
    gadgets.window.adjustHeight();
   /* var types = [];
    $("input:checked").each(function() {
        types.push(this.id);
    });*/
    var params = {
        //limit : $("#limit").val(),
        query : $("#query").val(),
        //sort : $("#sort-type").val(),
       // sortOrder : $("#sort-order").val()
        
        
    };

   
   /* if (types.length > 0) {
        params.type = types;
    }*/
    console.log("searching for " + JSON.stringify(params));
    osapi.jive.core.searches.searchContent(params).execute(function(response) {
       console.log("searching response is " + JSON.stringify(response));
       
        if (response.error) {
            alert(response.error.message);
        }
        else {
            var html = "";
          
            var rows = response.data;
            var url="";
            var subject="";
            var contentSummary="";
            var author="";
            var avatar="";
            var modifiedDate="";
            var likeCount="";
            var type="";
            var username="";
            
            
            $.each(rows, function(index, row) {   
               if(row.type=="blog")
               {
                     url=row.resources.html.ref;
                     subject=row.subject;
                      contentSummary=row.contentSummary;
                      author=row.author.name;
                      modifiedDate=row.modificationDate;
                     likeCount=row.likeCount;
                     type=row.type;
                     avatar=row.author.avatarURL;
                     username=row.author.username;
                   html +="<ul>";
                     html +="<li>"+type+"</li>";
                     html +="<li><a href="+url+">"+subject+"</a></li>";
                     html +="</ul>";
                     html +="<ul>";
                     html +="<li>&nbsp;</li>";
                      html +="<li>"+subject+"</li>";
                      html +="</ul>";
                      html +="<ul>";
                     html +="<li><img src='"+ avatar + "' width='25px' height='25px' border='0'/></li>";
                      html +="<li><a href=https://apps-onprem.jivesoftware.com/people/"+username+">"+author+"</a></li>";
                       html +="<li>"+likeCount+"</li>";
                       html +="<li>"+modifiedDate+"</li>";
                      html +="</ul>";
                  
               }
            });
            
            html +="<hr>";
            $.each(rows, function(index, row) {   
               if(row.type=="discussion")
               {
                     url=row.resources.html.ref;
                     subject=row.subject;
                      contentSummary=row.contentSummary;
                      author=row.author.name;
                      modifiedDate=row.modificationDate;
                      //var date = getISOStrict(modifiedDate);
                     likeCount=row.likeCount;
                     type=row.type;
                     avatar=row.author.avatarURL;
                     username=row.author.username;
                    html +='<ul>';
                     html +='<li class="discussion"/>';
                     html +='<li><a href="'+url+'">'+subject+'</a></li>';
                     html +='</ul>';
                     html +='<ul>';
                     html +='<li>&nbsp;</li>';
                      html +='<li>'+contentSummary+'</li>';
                      html +='</ul>';
                      html +='<ul>';
                     html +='<li><img src="'+ avatar + '" width=\'25px\' height=\'25px\' border=\'0\'/></li>';
                      html +='<li><a href=https://apps-onprem.jivesoftware.com/people/'+username+'>'+author+'</a></li>';
                       html +='<li>'+likeCount+'</li>';
                       html +='<li>'+modifiedDate+'</li>';
                      html +='</ul>';
                  
               }
            });
            
            html +="<hr>";
            $.each(rows, function(index, row) {
               if(row.type=="document")
               {
                  url=row.resources.html.ref;
                     subject=row.subject;
                      contentSummary=row.contentSummary;
                      author=row.author.name;
                      modifiedDate=row.modificationDate;
                     likeCount=row.likeCount;
                     type=row.type;
                    avatar=row.author.avatarURL;
                     username=row.author.username;
                     type=row.type;
                     html +="<ul>";
                     html +="<li>"+type+"</li>";
                     html +="<li><a href="+url+">"+subject+"</a></li>";
                     html +="</ul>";
                     html +="<ul>";
                     html +="<li>&nbsp;</li>";
                      html +="<li>"+subject+"</li>";
                      html +="</ul>";
                      html +="<ul>";
                     html +="<li><img src="+ avatar + "width='25px' height='25px' border='0'/></li>";
                      html +="<li><a href=https://apps-onprem.jivesoftware.com/people/"+username+">"+author+"</a></li>";
                       html +="<li>"+likeCount+"</li>";
                       html +="<li>"+modifiedDate+"</li>";
                      html +="</ul>";
               }
            });
            html +="<hr>";
            $.each(rows, function(index, row) {
               if(row.type=="update")
               {
                  url=row.resources.html.ref;
                     subject=row.subject;
                      contentSummary=row.contentSummary;
                      author=row.author.name;
                      modifiedDate=row.modificationDate;
                     likeCount=row.likeCount;
                     type=row.type;
                    avatar=row.author.avatarURL;
                     username=row.author.username;
                     type=row.type;
                     html +="<ul>";
                     html +="<li>"+type+"</li>";
                     html +="<li><a href="+url+">"+subject+"</a></li>";
                     html +="</ul>";
                     html +="<ul>";
                     html +="<li>&nbsp;</li>";
                      html +="<li>"+subject+"</li>";
                      html +="</ul>";
                      html +="<ul>";
                     html +="<li><img src="+ avatar + "width='25px' height='25px' border='0'/></li>";
                      html +="<li><a href=https://apps-onprem.jivesoftware.com/people/"+username+">"+author+"</a></li>";
                       html +="<li>"+likeCount+"</li>";
                       html +="<li>"+modifiedDate+"</li>";
                      html +="</ul>";
               }
            });
            html +="<hr>";
            $.each(rows, function(index, row) {
               if(row.type=="post")
               {
                  url=row.resources.html.ref;
                     subject=row.subject;
                      contentSummary=row.contentSummary;
                      author=row.author.name;
                      modifiedDate=row.modificationDate;
                     likeCount=row.likeCount;
                     type=row.type;
                   avatar=row.author.avatarURL;
                     username=row.author.username;
                     type=row.type;
                     html +="<ul>";
                     html +="<li>"+type+"</li>";
                     html +="<li><a href="+url+">"+subject+"</a></li>";
                     html +="</ul>";
                     html +="<ul>";
                     html +="<li>&nbsp;</li>";
                      html +="<li>"+subject+"</li>";
                      html +="</ul>";
                      html +="<ul>";
                     html +="<li><img src="+ avatar + "width='25px' height='25px' border='0'/></li>";
                      html +="<li><a href=https://apps-onprem.jivesoftware.com/people/"+username+">"+author+"</a></li>";
                       html +="<li>"+likeCount+"</li>";
                       html +="<li>"+modifiedDate+"</li>";
                      html +="</ul>";
               }
            });
            html +="<hr>";
             console.log(html);
            $("#search-results").html(html);
            $("#search-info").show();
            gadgets.window.adjustHeight();
        }
    });
}
    


// Register our on-view-load handler
gadgets.util.registerOnLoadHandler(init);
