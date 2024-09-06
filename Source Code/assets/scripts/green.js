$(document).ready(function () {
  $("#plantDetails").hide();
  $("#us-map1").hide();
  $(".mapspace").hide();

  var zoneArr = [];
  zoneArr.push("Foothills");
  localStorage.setItem("zone", JSON.stringify(zoneArr));
  // Tableau
  var divElement = document.getElementById('viz1686092270701');
  var vizElement = divElement.getElementsByTagName('object')[0];
  vizElement.style.height = '850px';

  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);

  const greendata = [
    {
      "ID": 1,
      "Name": " Adoxa moschatellina",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Brown Green Thumbnail Photos/1admo.jpg",
      "Family": "Arrow-Wood Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 2,
      "Name": " Amaranthus powellii",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Brown Green Thumbnail Photos/1ampo2.jpg",
      "Family": "Amaranth Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 3,
      "Name": " Angelica ampla",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1anam.jpg",
      "Family": "Parsley Family",
      "state": "CO   NM   WY  "
    },
    {
      "ID": 4,
      "Name": " Angelica grayi",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1angr3.jpg",
      "Family": "Parsley Family",
      "state": "CO   NM   WY  "
    },
    {
      "ID": 5,
      "Name": " Asclepias asperula",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Brown%20Green%20Thumbnail%20Photos/1asas.jpg",
      "Family": "Dogbane Family",
      "state": "AZ   CA   CO   ID   KS   NE   NM   NV   OK   TX   UT  "
    },
    {
      "ID": 6,
      "Name": " Castilleja versicolor sp. nov.",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink Enlarged Photos/7carh4.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 7,
      "Name": " Chenopodium album",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Brown Green Thumbnail Photos/1chal7.jpg",
      "Family": "Amaranth Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 8,
      "Name": " Chenopodium pratericola",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Brown Green Thumbnail Photos/1chpr5.jpg",
      "Family": "Amaranth Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 9,
      "Name": " Dactylorhiza viridis",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Brown Green Thumbnail Photos/1covi6.jpg",
      "Family": "Orchid Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 10,
      "Name": " Frasera albomarginata",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Brown Green Thumbnail Photos/1fral5.jpg",
      "Family": "Gentian Family",
      "state": "AZ   CA   CO   NV   UT  "
    },
    {
      "ID": 11,
      "Name": " Frasera paniculata",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Brown%20Green%20Thumbnail%20Photos/1frpa2.jpg",
      "Family": "Gentian Family",
      "state": "AZ   CO   NM   UT  "
    },
    {
      "ID": 12,
      "Name": " Frasera speciosa",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Brown Green Thumbnail Photos/1frsp2.jpg",
      "Family": "Gentian Family",
      "state": "AZ   CA   CO   ID   MN   MT   NM   NV   OR   SD   TX   UT   WA   WY  "
    },
    {
      "ID": 13,
      "Name": " Fritillaria atropurpurea",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Brown%20Green%20Thumbnail%20Photos/1frat.jpg",
      "Family": "Lily Family",
      "state": "AZ   CA   CO   ID   MN   MT   NM   NV   OR   SD   TX   UT   WA   WY  "
    },
    {
      "ID": 14,
      "Name": " Hippuris vulgaris",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Brown Green Thumbnail Photos/1hivu2.jpg",
      "Family": "Plantain Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 15,
      "Name": " Neokochia americana",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Neokochia-americana.jpg",
      "Family": "Amaranth Family",
      "state": "AZ   CA   CO   ID   NV   OR   UT   WA   WY  "
    },
    {
      "ID": 16,
      "Name": " Neottia cordata",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Brown%20Green%20Thumbnail%20Photos/1lico6.jpg",
      "Family": "Orchid Family",
      "state": "AZ   CA   CO   ID   NV   OR   UT   WA   WY  "
    },
    {
      "ID": 17,
      "Name": " Pectiantia pentandra",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Brown%20Green%20Thumbnail%20Photos/1mipe.jpg",
      "Family": "Saxifrage Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 18,
      "Name": " Platanthera aquilonis",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Brown Green Thumbnail Photos/1lisa5.jpg",
      "Family": "Orchid Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 19,
      "Name": " Platanthera huronensis",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Brown Green Thumbnail Photos/1lihy.jpg",
      "Family": "Orchid Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 20,
      "Name": " Polygonum douglasii",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Brown Green Thumbnail Photos/1podo4.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 21,
      "Name": " Pyrola chlorantha",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Brown%20Green%20Thumbnail%20Photos/1pych.jpg",
      "Family": "Heath Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 22,
      "Name": " Pyrola picta",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Brown%20Green%20Thumbnail%20Photos/1pypi2.jpg",
      "Family": "Heath Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 23,
      "Name": " Rumex crispuscrispus",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Brown Green Thumbnail Photos/1rucr.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 24,
      "Name": " Rumex densiflorus",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Brown Green Thumbnail Photos/1rude2.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ   CO   ID   NM   UT   WY  "
    },
    {
      "ID": 25,
      "Name": " Rumex hymenosepalus",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Brown Green Thumbnail Photos/1ruhy.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ   CA   CO   MT   NM   NV   OK   TX   UT   WY  "
    },
    {
      "ID": 26,
      "Name": " Stellaria irrigua",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Brown%20Green%20Thumbnail%20Photos/1stum.jpg",
      "Family": "Pink Family",
      "state": "CO   NM  "
    },
    {
      "ID": 27,
      "Name": " Triglochin maritima",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Brown Green Thumbnail Photos/1trma4.jpg",
      "Family": "Arrowgrass Family",
      "state": "AZ CO NM UT"
    }
  ]

  // Map details
  var detailsBox = document.getElementById('details-box');

  document.addEventListener('mouseover', function (e) {
    if (e.target.tagName == 'path') {
      var content = e.target.dataset.name;
      detailsBox.innerHTML = content;
      detailsBox.style.opacity = "100%";
    }
    else {
      detailsBox.style.opacity = "0%";
    }
  });

  window.onmousemove = function (e) {
    var x = e.clientX,
      y = e.clientY;
    detailsBox.style.top = (y + 20) + 'px';
    detailsBox.style.left = (x) + 'px';
  };

  // Choropleth map code
  d3.csv('https://raw.githubusercontent.com/Mahi-Mani/projectdv/main/Color_State_data.csv', function (err, rows) {
    function unpack(rows, key) {
      console.log(rows);
      return rows.map(function (row) { return row[key]; });
    }

    var data = [{
      type: 'choropleth',
      locationmode: 'USA-states',
      locations: unpack(rows, 'State'),
      z: unpack(rows, 'Green'),
      text: unpack(rows, 'State'),
      zmin: 0,
      zmax: 300,
      colorscale: [
        [0, 'rgb(198, 231, 199)'], [0, 'rgb(170, 219, 172)'],
        [0.4, 'rgb(141, 207, 144)'], [0.6, 'rgb(113, 195, 116)'],
        [0.8, 'rgb(84, 183, 88)'], [1, 'rgb(69, 165, 73)']
      ]
    }];
    var layout = {
      title: '<b>Distribution of <i>Green</i> flowers</b>',
      color: "Green",
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "lightblue",
      geo: {
        scope: 'usa'
      },
      font: 'rgb(0,0,0,0)'
    };

    Plotly.newPlot("myDiv", data, layout, { showLink: false });
  });

  var displayFlowers = [];
  var chosenFamily = [];
  var displayName = [];
  var displayIdArr = [];
  var stateArr = [];
  displayFlowers.push(greendata[0].Image);
  displayName.push(greendata[0].Name);
  chosenFamily.push(greendata[0].Family);
  displayIdArr.push(greendata[0].ID);

  // Push other flower images from different families
  for (var i = 1; i < greendata.length; i++) {
    if (!chosenFamily.includes(greendata[i].Family)) {
      displayFlowers.push(greendata[i].Image);
      displayName.push(greendata[i].Name);
      chosenFamily.push(greendata[i].Family);
      displayIdArr.push(greendata[i].ID);
    }
  }

  $(".ex-flower").each(function (i, obj) {
    $(obj).attr("src", displayFlowers[i]);
    $(obj).attr("id", displayIdArr[i]);
  })

  $(".text").each(function (i, obj) {
    $(obj).text(displayName[i]);
    $(obj).attr("id", displayIdArr[i]);
  })

  // Grab unique ID of flower upon clicking
  $(".ex-flower").on("click", function (event) {
    event.preventDefault();
    // console.log(this.id);
    recommend(this.id);
  });

  // Recommend few other flowers
  function recommend(id) {
    console.log(id);
    var familyName = greendata[id - 1].Family;
    var zone = greendata[id - 1].Zone;
    var image = greendata[id - 1].Image.split(" ").join("%20");
    var displayFlowers1 = [];
    var displayName1 = [];
    var displayIdArr = [];

    $(".dashboard-map").hide();
    $(".tableauViz").css("display", "none");
    $(".svg-container").hide();
    // $(".usmap").show();
    $(".mapspace").show();
    $("#details-box").show();
    $("#us-map1").show();
    // $(".tableauPlaceholder1").show();
    var isUsmap = $("#us-map1").is(":visible");
    if (isUsmap) {
      $(".map-header").html(`<h4>Distribution of <i>${greendata[id - 1].Name}</i></h4>`);
      $(".mapspace").css("height", "50%");
      $(".mapspace").css("width", "70%");
      $("#us-map1").css("height", "75%");
      // $(".text_display").css("top","-2000px");
      $(".content").removeAttr("style");
      // $(".ex-flower").removeAttr("style");
      $(".content").css("margin-top", "7%");
      $(".picture").css("margin-top", "0%");
      $(".headtext").css("margin-top", "0%");
      $(".headtext").css("top", "375%");
    }

    $("path").removeAttr("style");
    $("path").css({
      "stroke-width": 0.97063118000000004,
      "fill": "#f9f9f9"
    })

    // Fill color for us state only for chosen plant
    stateArr = greendata[id - 1].state.split(" ");
    for (var i = 0; i < stateArr.length; i++) {
      if (stateArr[i].length == 2) {
        console.log(stateArr[i]);
        $("#" + stateArr[i]).css({
          "fill": "#32de84"
        });
      }
    }

    var previousZone = localStorage.getItem("zone");
    var previousZoneArr = JSON.parse(previousZone);
    zoneArr.push(zone);
    localStorage.setItem("zone", JSON.stringify(zoneArr));
    $(".headtext").text(`More wildflowers for you!`);
    $("#plantDetails").show();
    $("#plantDetails").empty();
    $("#plantDetails").append(`<ol class="list-group list-group-numbered">
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold" id="name"><h4>Name: </h4></div>
        <h6>${greendata[id - 1].Name}</h6>
        <div class="fw-bold" id="name"><h4>Zone: </h4></div>
        <h6>${greendata[id - 1].Zone}</h6>
        <div class="fw-bold" id="name"><h4>Family: </h4></div>
        <h6>${greendata[id - 1].Family}</h6>
        <img src=${image} width ="150px" height "150px"/>
      </div>
    </li>
  </ol>`);

    var rankObj = [];

    for (var i = 0; i < greendata.length; i++) {
      // Same zone, leaf type and family
      if ((i !== id - 1 && greendata[i].Zone == zone && greendata[i].Leaf == greendata[id - 1].Leaf && greendata[i].Family == familyName) || greendata[i].Zone === previousZone) {
        if (!displayFlowers1.includes(greendata[i].Image)) {
          rankObj.push({
            "rank": 1,
            "id": greendata[i].ID,
            "image": greendata[i].Image,
            "name": greendata[i].Name
          })
        }
      } else if ((i !== id - 1 && greendata[i].Zone == zone && greendata[i].Leaf == greendata[id - 1].Leaf) || (i !== id - 1 && greendata[i].Zone == zone && greendata[i].Family == greendata[id - 1].Family)) {
        // same zone and leaf or same zone and family
        if (!displayFlowers1.includes(greendata[i].Image)) {
          rankObj.push({
            "rank": 2,
            "id": greendata[i].ID,
            "image": greendata[i].Image,
            "name": greendata[i].Name
          })
        }
      } else if ((i !== id - 1 && greendata[i].Zone == previousZoneArr[i]) || (i !== id - 1 && greendata[i].Zone == previousZoneArr[i])) {
        //  least recommended - same zone alone
        if (!displayFlowers1.includes(greendata[i].Image)) {
          rankObj.push({
            "rank": 3,
            "id": greendata[i].ID,
            "image": greendata[i].Image,
            "name": greendata[i].Name
          })
        }
      }
    }
    // Sort object based on ranking
    console.log(rankObj);
    function compare(a, b) {
      if (a.rank < b.rank) {
        return -1;
      }
      if (a.rank > b.rank) {
        return 1;
      }
      return 0;
    }
    rankObj.sort(compare);
    console.log(rankObj);
    {
      $(".ex-flower").each(function (i, obj) {
        if (rankObj[i].name != undefined) {
          $(obj).attr("src", rankObj[i].image);
          $(obj).attr("id", rankObj[i].id);
        }
      })

      $(".text").each(function (i, obj) {
        $(obj).text(rankObj[i].name);
        $(obj).attr("id", rankObj[i].id);
      })
    }
  }
});