
function pred(){
    $('.dynm').empty();
    input=$('#inp').val();
    console.log(input);

    var url="https://cricapi.com/api/playerFinder?apikey=TbydAtPpoMafXejytXslahvLLBw2&name="+input;
    fetch(url).then(Response=>{return Response.json();}).then(data=>{console.log(data);
        
        slct=document.createElement('select');
        list=data["data"];
        for(var i=0;i<list.length;i++){
            // const opt=document.createElement('option');
            // opt.appendChild(list[i]['pid']);
            // slct.appendChild(opt);
            var option = new Option(list[i]['fullName']); 
            slct.append(option);
            console.log(list[i]['pid']);
        }
        $('.dynm').append(slct);
        var newbtn=$('<br><br><p><input type="button" id="ntbn" value="Submit"/></p>');
        $('.dynm').append(newbtn);
        var tab= document.createElement('table');
        newbtn.on('click',function(){
            // tab.remove();
            console.log(slct.value);
            inp2=slct.value;
            var url2="https://cricapi.com/api/playerFinder?apikey=TbydAtPpoMafXejytXslahvLLBw2&name="+inp2;
            fetch(url2).then(Response=>{return Response.json();}).then(data=>{console.log(data);
                var pid=data["data"][0].pid;
                console.log(pid);
                var url3="https://cricapi.com/api/playerStats?apikey=TbydAtPpoMafXejytXslahvLLBw2&pid="+pid;
                fetch(url3).then(Response=>{return Response.json();}).then(data=>{console.log(data); 
                
                const thead=document.createElement('thead');
                const th1=document.createElement('th');
                const th2=document.createElement('th');
                const th3=document.createElement('th');
                // th1.innerHTML="<h2>Batting Style</h2>";
                // th2.innerHTML="<h2>Bowling Style</h2>";
                // th3.innerHTML="<h2>Image</h2>";
                th1.style.color="White";th2.style.color="White";th3.style.color="White";
                thead.append(th1);
                thead.append(th2);
                thead.append(th3);
                // tab.append(thead);
                // tab.style.backgroundColor="blur";
                $('.dynm').append(tab);
                const tbody=document.createElement('tbody');
                const tr1=document.createElement('tr');
                const td1=document.createElement('td');
                const td2=document.createElement('td');
                const td3=document.createElement('td');
                td1.innerHTML="<p>"+data['battingStyle']+"</p>";
                td2.innerHTML="<p>"+data['bowlingStyle']+"</p>";
                td3.innerHTML="<p><img src="+data['imageURL']+"></p>";
                td1.classList.add('common');
                td2.classList.add('common');
                td3.classList.add('common');
                tr1.append(td1);tr1.append(td2);tr1.append(td3);
                tbody.append(tr1);
                tab.append(tbody);
                tab.style.background="10px solid black";
                // tab.append(tr1);
                })

                
            })



        })
        
        })

}