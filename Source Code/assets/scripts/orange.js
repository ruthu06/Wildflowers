$(document).ready(function () {
  $("#plantDetails").hide();
  $("#us-map1").hide();
  $(".mapspace").hide();

  var zoneArr = [];
  zoneArr.push("Foothills");
  localStorage.setItem("zone", JSON.stringify(zoneArr));
  // Tableau
  var divElement = document.getElementById('viz1686092431215');
  var vizElement = divElement.getElementsByTagName('object')[0];
  vizElement.style.height = '850px';

  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);

  const orangedata = [
    {
      "ID": 1,
      "Name": " Agoseris aurantiaca",
      "Type": " Herb",
      "Color": " Orange  Red",
      "Zone": " Foothills",
      "Habitat": " Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1agau2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 2,
      "Name": " Asclepias tuberosainterior",
      "Type": " Herb",
      "Color": " Orange  Yellow  Red",
      "Zone": " Semi-Desert",
      "Habitat": " Rocky  Disturbed  Openings  Woodlands  Shrublands",
      "Flowering": " May-Aug",
      "Leaf": " Alternate",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1astu.jpg",
      "Family": "Dogbane Family",
      "state": "AZ CO ID KS MO NM NV OK TX UT WY"
    },
    {
      "ID": 3,
      "Name": " Castilleja chromosa",
      "Type": " Herb",
      "Color": " Red  Orange  Green",
      "Zone": " Semi-Desert",
      "Habitat": " Woodlands  Shrublands  Rocky  Openings",
      "Flowering": " Mar-Jun",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1cach7.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 4,
      "Name": " Castilleja miniataminiata",
      "Type": " Herb",
      "Color": " Red  Orange  Green",
      "Zone": " Montane",
      "Habitat": " Openings",
      "Flowering": " Jun-Oct",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1cami12.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM  "
    },
    {
      "ID": 5,
      "Name": " Epipactis gigantea",
      "Type": " Herb",
      "Color": " Red  Orange  Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Wetlands",
      "Flowering": " Apr-Aug",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1epgi.jpg",
      "Family": "Orchid Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 6,
      "Name": " Erysimum capitatum",
      "Type": " Herb",
      "Color": " Yellow  Blue  Red  Orange",
      "Zone": " Semi-Desert",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Apr-Sep",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1erca14.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 7,
      "Name": " Hymenoxys hoopesii",
      "Type": " Herb",
      "Color": " Yellow  Orange",
      "Zone": " Subalpine",
      "Habitat": " Openings",
      "Flowering": " Jun-Oct",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1duho.jpg",
      "Family": "Sunflower Family",
      "state": "CO NM  "
    },
    {
      "ID": 8,
      "Name": " Ipomopsis ramosa",
      "Type": " Herb",
      "Color": " Red  White  Orange",
      "Zone": " Montane",
      "Habitat": " Openings  Woodlands",
      "Flowering": " Jun-Oct",
      "Leaf": " Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1ipra.jpg",
      "Family": "Phlox Family",
      "state": "AZ CO ID MT NM TX UT WY  "
    },
    {
      "ID": 9,
      "Name": " Lilium philadelphicumandinum",
      "Type": " Herb",
      "Color": " Orange",
      "Zone": " Montane",
      "Habitat": " Wetlands",
      "Flowering": " Jun-Aug",
      "Leaf": " Whorled or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1liph.jpg",
      "Family": "Lily Family",
      "state": "AZ CO NM NV UT WY  "
    },
    {
      "ID": 10,
      "Name": " Linaria dalmatica",
      "Type": " Herb",
      "Color": " Yellow  Orange",
      "Zone": " Foothills",
      "Habitat": " Disturbed   Openings",
      "Flowering": " May-Sep",
      "Leaf": " Alternate or  Opposite or  Whorled  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1lige.jpg",
      "Family": "Plantain Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 11,
      "Name": " Linaria vulgaris",
      "Type": " Herb",
      "Color": " Yellow  Orange",
      "Zone": " Foothills",
      "Habitat": " Disturbed   Openings",
      "Flowering": " May-Sep",
      "Leaf": " Alternate or  Opposite or  Whorled  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1livu2.jpg",
      "Family": "Plantain Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 12,
      "Name": " Linum puberulum",
      "Type": " Herb",
      "Color": " Yellow  Orange",
      "Zone": " Semi-Desert",
      "Habitat": " Woodlands  Shrublands  Openings",
      "Flowering": " Apr-Oct",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1mepu9.jpg",
      "Family": "Flax Family",
      "state": "AZ CA CO NE NM NV TX UT WY  "
    },
    {
      "ID": 13,
      "Name": " Packera crocata",
      "Type": " Herb",
      "Color": " Orange",
      "Zone": " Montane",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Alternate or  Basal  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1pacr5.jpg",
      "Family": "Sunflower Family",
      "state": "CO UT WY  "
    },
    {
      "ID": 14,
      "Name": " Persicaria lapathifolia",
      "Type": " Herb",
      "Color": " White  Orange  Red",
      "Zone": " Foothills",
      "Habitat": " Wetlands  Ponds  Disturbed",
      "Flowering": " Jun-Sep",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1pela22.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CO ID MT NM UT WY  "
    },
    {
      "ID": 15,
      "Name": " Portulaca oleracea",
      "Type": " Herb",
      "Color": " Yellow  Orange  Red",
      "Zone": " Foothills",
      "Habitat": " Openings  Disturbed",
      "Flowering": " May-Oct",
      "Leaf": " Alternate or  Opposite  Simple  Entire  Round or  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1pool.jpg",
      "Family": "Portulaca Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 16,
      "Name": " Sphaeralcea coccinea",
      "Type": " Herb",
      "Color": " Red  Orange",
      "Zone": " Semi-Desert",
      "Habitat": " Woodlands  Openings",
      "Flowering": " May-Aug",
      "Leaf": " Alternate  Simple  Uneven  Round or  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Pink Enlarged Photos/3spco.jpg",
      "Family": "Mallow Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 17,
      "Name": " Sphaeralcea fendleri",
      "Type": " Herb",
      "Color": " Red  Orange",
      "Zone": " Semi-Desert",
      "Habitat": " Woodlands  Openings  Disturbed",
      "Flowering": " May-Sep",
      "Leaf": " Alternate  Simple  Uneven  Round or  Long",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1spfe.jpg",
      "Family": "Mallow Family",
      "state": "AZ CO KS MA NM TX  "
    },
    {
      "ID": 18,
      "Name": " Sphaeralcea grossulariifolia",
      "Type": " Herb",
      "Color": " Red  Orange",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Openings",
      "Flowering": " Apr-Sep",
      "Leaf": " Alternate  Simple  Uneven  Round or  Long",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1spgr2.jpg",
      "Family": "Mallow Family",
      "state": "AZ CA CO ID NM NV OR UT WA  "
    },
    {
      "ID": 19,
      "Name": " Sphaeralcea leptophylla",
      "Type": " Herb",
      "Color": " Red  Orange",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Rocky  Openings",
      "Flowering": " Apr-Jul",
      "Leaf": " Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1sple.jpg",
      "Family": "Mallow Family",
      "state": "AZ CO NM NV TX UT  "
    },
    {
      "ID": 20,
      "Name": " Sphaeralcea parvifolia",
      "Type": " Herb",
      "Color": " Red  Orange",
      "Zone": " Semi-Desert",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Apr-Aug",
      "Leaf": " Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1sppa.jpg",
      "Family": "Mallow Family",
      "state": "AZ CA CO NM NV UT  "
    },
    {
      "ID": 21,
      "Name": " Verbascum thapsus",
      "Type": " Herb",
      "Color": " Yellow  Orange",
      "Zone": " Foothills",
      "Habitat": " Disturbed  Openings",
      "Flowering": " Jun-Oct",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1veth.jpg",
      "Family": "Snapdragon Family",
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
      return rows.map(function (row) {
        console.log(row[key]);
        return row[key];
      });
    }

    var data = [{
      type: 'choropleth',
      locationmode: 'USA-states',
      locations: unpack(rows, 'State'),
      z: unpack(rows, 'Orange'),
      text: unpack(rows, 'State'),
      zmin: 0,
      zmax: 300,
      colorscale: [
        [0, 'rgb(255, 191, 169)'], [0, 'rgb(255, 159, 126)'],
        [0.4, 'rgb(255, 128, 84)'], [0.6, 'rgb(255, 96, 41)'],
        [0.8, 'rgb(253, 65, 0)'], [1, 'rgb(218, 56, 0)']
      ]
    }];
    var layout = {
      title: '<b>Distribution of <i>Orange</i> flowers</b>',
      color: "orange",
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
  displayFlowers.push(orangedata[0].Image);
  displayName.push(orangedata[0].Name);
  chosenFamily.push(orangedata[0].Family);
  displayIdArr.push(orangedata[0].ID);

  // Push other flower images from different families
  for (var i = 1; i < orangedata.length; i++) {
    if (!chosenFamily.includes(orangedata[i].Family)) {
      displayFlowers.push(orangedata[i].Image);
      displayName.push(orangedata[i].Name);
      chosenFamily.push(orangedata[i].Family);
      displayIdArr.push(orangedata[i].ID);
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
    var familyName = orangedata[id - 1].Family;
    var zone = orangedata[id - 1].Zone;
    var image = orangedata[id - 1].Image.split(" ").join("%20");
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
      $(".map-header").html(`<h4>Distribution of <i>${orangedata[id - 1].Name}</i></h4>`);
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
    stateArr = orangedata[id - 1].state.split(" ");
    for (var i = 0; i < stateArr.length; i++) {
      if (stateArr[i].length == 2) {
        console.log(stateArr[i]);
        $("#" + stateArr[i]).css({
          "fill": "rgb(255, 96, 41)"
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
        <h6>${orangedata[id - 1].Name}</h6>
        <div class="fw-bold" id="name"><h4>Zone: </h4></div>
        <h6>${orangedata[id - 1].Zone}</h6>
        <div class="fw-bold" id="name"><h4>Family: </h4></div>
        <h6>${orangedata[id - 1].Family}</h6>
        <img src=${image} width ="150px" height "150px"/>
      </div>
    </li>
  </ol>`);

    var rankObj = [];

    for (var i = 0; i < orangedata.length; i++) {
      // Same zone, leaf type and family
      if ((i !== id - 1 && orangedata[i].Zone == zone && orangedata[i].Leaf == orangedata[id - 1].Leaf && orangedata[i].Family == familyName) || orangedata[i].Zone === previousZone) {
        if (!displayFlowers1.includes(orangedata[i].Image)) {
          rankObj.push({
            "rank": 1,
            "id": orangedata[i].ID,
            "image": orangedata[i].Image,
            "name": orangedata[i].Name
          })
        }
      } else if ((i !== id - 1 && orangedata[i].Zone == zone && orangedata[i].Leaf == orangedata[id - 1].Leaf) || (i !== id - 1 && orangedata[i].Zone == zone && orangedata[i].Family == orangedata[id - 1].Family)) {
        // same zone and leaf or same zone and family
        if (!displayFlowers1.includes(orangedata[i].Image)) {
          rankObj.push({
            "rank": 2,
            "id": orangedata[i].ID,
            "image": orangedata[i].Image,
            "name": orangedata[i].Name
          })
        }
      } else if ((i !== id - 1 && orangedata[i].Zone == previousZoneArr[i]) || (i !== id - 1 && orangedata[i].Zone == previousZoneArr[i])) {
        //  least recommended - same zone alone
        if (!displayFlowers1.includes(orangedata[i].Image)) {
          rankObj.push({
            "rank": 3,
            "id": orangedata[i].ID,
            "image": orangedata[i].Image,
            "name": orangedata[i].Name
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