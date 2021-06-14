(function($) {

    var $event = $.event,
        $special,
        dummy = {_:0},
        frame = 0,
        wasResized, animRunning;
    
    $special = $event.special.throttledresize = {
        setup: function() {
            $( this ).on( "resize", $special.handler );
        },
        teardown: function() {
            $( this ).off( "resize", $special.handler );
        },
        handler: function( event, execAsap ) {
            // Save the context
            var context = this,
                args = arguments;
    
            wasResized = true;
    
            if ( !animRunning ) {
                setInterval(function(){
                    frame++;
    
                    if ( frame > $special.threshold && wasResized || execAsap ) {
                        // set correct event type
                        event.type = "throttledresize";
                        $event.dispatch.apply( context, args );
                        wasResized = false;
                        frame = 0;
                    }
                    if ( frame > 9 ) {
                        $(dummy).stop();
                        animRunning = false;
                        frame = 0;
                    }
                }, 30);
                animRunning = true;
            }
        },
        threshold: 0
    };
    
    })(jQuery);
    document.getElementById("closeButton").addEventListener("click", clickFunction);
    function clickFunction() {
        console.log('click')
        document.getElementById("mainvideo").style.display = "";
        document.getElementById("videoBox").style.display = "";
    

        
 

      }
      function mobileFunction(event) {
        console.log(event)
       
      }
     const elements= document.getElementsByClassName("mobile-item")
      for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', mobileFunction, false);
    }
    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawChart);
    
          function drawChart() {
            var vids = {
                'Wetlands': 'https://www.youtube.com/embed/rdTSAWTW1n4' ,
                'SpoilIslands': 'https://www.youtube.com/embed/BgkExppNgME' ,
                'LandConservation': 'https://www.youtube.com/embed/8zVdbJQvL08' ,
                'ConnectedWaters': 'https://www.youtube.com/embed/3-zkTMwEmVY' ,
                'Biodiversity': 'https://www.youtube.com/embed/-1KJHpKpflE' ,
                'SpeciesofConcern': 'https://www.youtube.com/embed/66E1loM1lao' ,
                'Exotic&Invasive': 'https://www.youtube.com/embed/SkMIMqdy2KI' ,
                'ForageFishes': 'https://www.youtube.com/embed/upq14AWVekM' ,
                'Fisheries': 'https://www.youtube.com/embed/14n_a9cXvmU' ,
                'HarmfulAlgalBlooms': 'https://www.youtube.com/embed/8_7g4fP73uQ' ,
                'ClimateReadyEstuaries': 'https://www.youtube.com/embed/NzbNEa9ubkA' ,
                'TrashFreeWaters': 'https://www.youtube.com/embed/oDMIh3J3Ie4' ,
                'Marinas&Boating': 'https://www.youtube.com/embed/WF36SRZBLZY' ,
                'DistinctiveLagoonCommunities': 'https://www.youtube.com/embed/vHumVE3RXes' ,
                '21stCenturyCoastalCommunities': 'https://www.youtube.com/embed/tJ22FayPQ_8' ,
                'EmergencyResponse': 'https://www.youtube.com/embed/XbSdKBP98AY' ,
                'CitizenEngagement': 'https://www.youtube.com/embed/vnVENtVW0Gc' ,
                'PolicyConsiderations': 'https://www.youtube.com/embed/AET-GobdRz0' ,
                'Science&TechnologyInnovation': 'https://www.youtube.com/embed/UesUFKRXOaU' ,
                'Monitoring&Data': 'https://www.youtube.com/embed/pysPZyWeppg' ,
                'StateoftheLagoon': 'https://www.youtube.com/embed/zN-RFeq_GjE' ,
                'CCMPImplementation&Financing': 'https://www.youtube.com/embed/Pf-HexxSnb8' ,
                'Contaminants': 'https://www.youtube.com/embed/veURmVHO4-s' ,
                'AtmosphericDeposition': 'https://www.youtube.com/embed/rtWu9lrrL5A' ,
                'LegacyLoads': 'https://www.youtube.com/embed/IrVnB2SH9o' ,
                'Hydrology': 'https://www.youtube.com/embed/e0YtrhFHzIA' ,
                'Stormwater': 'https://www.youtube.com/embed/ZD5M7gHxibM' ,
                'Wastewater': 'https://www.youtube.com/embed/DmpMBqJSPCM' ,
                'ImpairedWaters': 'https://www.youtube.com/embed/GQuoi9blgrE' ,
                'Seagrasses': 'https://www.youtube.com/embed/KgL94MKUi-s' ,
                'FilterFeeders': 'https://www.youtube.com/embed/kncvYB6lDUk' ,
                'LivingShorelines': 'https://www.youtube.com/embed/0LGJkqghVYw' ,

            }




            var data = google.visualization.arrayToDataTable([
              ['Task', 'Hours per Day'],
              ['Wetlands',1],
              ['Spoil Islands',1],
              ['Land Conservation',1],
              ['Connected Waters',1],
              ['Biodiversity',1],
              ['Species of Concern',1],
              ['Exotic & Invasive',1],
              ['Forage Fishes',1],
              ['Fisheries',1],
              ['Harmful Algal Blooms',1],
              ['Climate Ready Estuaries',1],
              ['Trash Free Waters',1],
              ['Marinas & Boating',1],
              ['Distinctive Lagoon Communities',1],
              ['21st Century Coastal Communities',1],
              ['Emergency Response',1],
              ['Citizen Engagement',1],
              ['Policy Considerations',1],
              ['Science & Technology Innovation',1],
              ['Monitoring & Data',1],
              ['State of the Lagoon',1],
              ['CCMP Implementation & Financing',1],
              ['Contaminants',1],
       
              
              ['Atmospheric Deposition',1],
              ['Legacy Loads',1],
              ['Hydrology',1],
              ['Stormwater',1],
              ['Wastewater',1],
              ['Impaired Waters',1],
              ['Seagrasses',1],
              ['Filter Feeders',1],
              ['Living Shorelines',1],
            ]);
    
            var options = {
              pieHole: 0.4,
             legend: {position: 'none'}
    
            };
    
            var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    
            chart.draw(data, options);
             google.visualization.events.addListener(chart, 'select', selectHandler);
            function selectHandler(e) {
            
            var selection = chart.getSelection();
            console.log(selection);     
            if (selection.length>0)   
            {
                console.log(data.getValue(selection[0].row,0));    
                var beforeparse= data.getValue(selection[0].row,0);   
                var tb = document.getElementById("videoBox");
                var title = document.getElementById("title");
    
                var iframe = document.getElementById("mainvideo");
                const sentenceRemoveWhiteSpace = beforeparse.replace(/\s/g, "")
                console.log(sentenceRemoveWhiteSpace)
                /*changeSrc.onclick = function(){*/
                    iframe.src = vids[sentenceRemoveWhiteSpace];
                    iframe.style.display = "block";
                    iframe.style.position = "absolute";
                    iframe.style.zIndex = "3";
    
                    title.innerText=beforeparse
        
                /*};*/

            }
            else{
                document.getElementById("mainvideo").style.display = "block";
                document.getElementById("videoBox").style.display = "block";
            }

            }
          }
    
          
    
    $(window).on("throttledresize", function (event) {
        var options = {
            width: '100%',
            height: '100%'
        };
    
        var data = google.visualization.arrayToDataTable([]);
        drawChart(data, options);
    });