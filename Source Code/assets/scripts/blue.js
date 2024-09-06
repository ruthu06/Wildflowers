$(document).ready(function () {
  $("#plantDetails").hide();
  $("#us-map1").hide();
  $(".mapspace").hide();

  var zoneArr = [];
  zoneArr.push("Foothills");
  localStorage.setItem("zone", JSON.stringify(zoneArr));
  // Tableau
  var divElement = document.getElementById('viz1686091724442');
  var vizElement = divElement.getElementsByTagName('object')[0];
  vizElement.style.height = '850px';

  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; 
  vizElement.parentNode.insertBefore(scriptElement, vizElement);

  const bluedata = [
    {
      "ID": 1,
      "Name": " Aconitum columbianumcolumbianum",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1acco4.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 2,
      "Name": " Aliciella pinnatifida",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1alpi2.jpg",
      "Family": "Phlox Family",
      "state": "CO   KS   NE   NM   UT   WY  "
    },
    {
      "ID": 3,
      "Name": " Amsonia eastwoodiana",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Blue Purple Enlarged Photos/3amto2.jpg",
      "Family": "Dogbane Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 4,
      "Name": " Aphyllon arizonicum",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1orco4.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 5,
      "Name": " Aquilegia coeruleacoerulea",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1aqco.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 6,
      "Name": " Aquilegia coeruleadaileyae",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1aqcod.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 7,
      "Name": " Astragalus agrestis",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1asag2.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 8,
      "Name": " Astragalus alpinusalpinus",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1asal.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 9,
      "Name": " Astragalus calycosus",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1asca9.jpg",
      "Family": "Pea Family",
      "state": "AZ   CA   CO   ID   NM   NV   OR   UT   WY  "
    },
    {
      "ID": 10,
      "Name": " Astragalus ceramicusceramicus",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Blue Purple Enlarged Photos/6ascec.jpg",
      "Family": "Pea Family",
      "state": "AZ   CA   CO   ID   NM   NV   OR   UT   WY  "
    },
    {
      "ID": 11,
      "Name": " Astragalus wingatanus",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1aswi2.jpg",
      "Family": "Pea Family",
      "state": "AZ   CO   NM   NN   UT  "
    },
    {
      "ID": 12,
      "Name": " Campanula parryiparryi",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1capa.jpg",
      "Family": "Bellflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 13,
      "Name": " Campanula rotundifolia",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1caro.jpg",
      "Family": "Bellflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 14,
      "Name": " Chorispora tenella",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1chte2.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 15,
      "Name": " Cichorium intybus",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1ciin.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 16,
      "Name": " Clematis hirsutissimahirsutissima",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1cohi5.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 17,
      "Name": " Clematis occidentalisgrosseserrata",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1atoc.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 18,
      "Name": " Collinsia parviflora",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1copa3.jpg",
      "Family": "Plantain Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 19,
      "Name": " Commelina dianthifolia",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Commelina-dianthifolia.jpg",
      "Family": "Spiderwort Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 20,
      "Name": " Cynoglossum officinale",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1cyof.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 21,
      "Name": " Delphinium barbeyi",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1deba.jpg",
      "Family": "Buttercup Family",
      "state": "AZ   CO   NM   UT   WY  "
    },
    {
      "ID": 22,
      "Name": " Delphinium nuttallianum",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1denu2.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 23,
      "Name": " Delphinium robustum",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1dero.jpg",
      "Family": "Buttercup Family",
      "state": "CO   NM  "
    },
    {
      "ID": 24,
      "Name": " Delphinium scaposumscaposum",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1desc.jpg",
      "Family": "Buttercup Family",
      "state": "CO   NM  "
    },
    {
      "ID": 25,
      "Name": " Dieteria bigeloviibigelovii",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Blue Purple Enlarged Photos/7mabi.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 26,
      "Name": " Dieteria canescens",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1maca2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 27,
      "Name": " Eriastrum sparsiflorum",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1ersp3.jpg",
      "Family": "Phlox Family",
      "state": "CA   ID   NV   OR   UT  "
    },
    {
      "ID": 28,
      "Name": " Erigeron abajoensis",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1erab3.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CO   NM   UT  "
    },
    {
      "ID": 29,
      "Name": " Erigeron argentatus",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1erar.jpg",
      "Family": "Sunflower Family",
      "state": "CA   CO   NV   UT  "
    },
    {
      "ID": 30,
      "Name": " Erigeron compositus",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1erco4.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 31,
      "Name": " Erigeron divergens",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1erdi4.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 32,
      "Name": " Erigeron elatior",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1erel9.jpg",
      "Family": "Sunflower Family",
      "state": "CO   NM   UT   WY  "
    },
    {
      "ID": 33,
      "Name": " Erigeron eximius",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1erex4.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CO   NM   TX   UT   WY  "
    },
    {
      "ID": 34,
      "Name": " Erigeron flagellaris",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1erfl.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 35,
      "Name": " Erigeron formosissimus",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1erfo3.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CO   MT   NM   SD   UT   WY  "
    },
    {
      "ID": 36,
      "Name": " Erigeron glacialisglacialis",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1erpe3.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CO   MT   NM   SD   UT   WY  "
    },
    {
      "ID": 37,
      "Name": " Erigeron grandiflorus",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1ergr3.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 38,
      "Name": " Erigeron leiomerus",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1erle6.jpg",
      "Family": "Sunflower Family",
      "state": "CO   ID   MT   NM   NV   UT   WY  "
    },
    {
      "ID": 39,
      "Name": " Erigeron pinnatisectus",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1erpi6.jpg",
      "Family": "Sunflower Family",
      "state": "CO   NM   WY  "
    },
    {
      "ID": 40,
      "Name": " Erigeron speciosus",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1ersp.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 41,
      "Name": " Erigeron subtrinervis",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1ersu2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 42,
      "Name": " Erigeron utahensis",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1erut.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CA   CO   NM   UT  "
    },
    {
      "ID": 43,
      "Name": " Erigeron vetensis",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1erve2.jpg",
      "Family": "Sunflower Family",
      "state": "CO   NE   NM   WY  "
    },
    {
      "ID": 44,
      "Name": " Gentiana affinis",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/../Blue Purple Enlarged Photos/3pnaf.jpg",
      "Family": "Gentian Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 45,
      "Name": " Gentiana parryi",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Gentiana-parryi.jpg",
      "Family": "Gentian Family",
      "state": "AZ   CO   ID   NM   UT   WA   WY  "
    },
    {
      "ID": 46,
      "Name": " Gentiana prostrata",
      "Zone": "Alpine",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1chpr.jpg",
      "Family": "Gentian Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 47,
      "Name": " Gentianella amarellaacuta",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/../Blue Purple Thumbnail Photos/1gehe4.jpg",
      "Family": "Gentian Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 48,
      "Name": " Gentianella amarellaheterosepala",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/../Blue Purple Enlarged Photos/3gehe4.jpg",
      "Family": "Gentian Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 49,
      "Name": " Gentianopsis barbellata",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1geba2.jpg",
      "Family": "Gentian Family",
      "state": "AZ   CO   NM   UT   WY  "
    },
    {
      "ID": 50,
      "Name": " Gentianopsis thermalis",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1geth.jpg",
      "Family": "Gentian Family",
      "state": "AZ   CO   ID   MT   NM   UT   WY  "
    },
    {
      "ID": 51,
      "Name": " Hackelia floribunda",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1hafl2.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 52,
      "Name": " Hedeoma drummondii",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1hedr.jpg",
      "Family": "Mint Family",
      "state": "AL   AR   AZ   CA   CO   KS   MN   MS   MT   ND   NE   NM   NV   OK   SD   TX   UT   WY  "
    },
    {
      "ID": 53,
      "Name": " Herrickia glaucaglauca",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1eugl13.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 54,
      "Name": " Ipomopsis polyantha",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1ippo.jpg",
      "Family": "Phlox Family",
      "state": "CO  "
    },
    {
      "ID": 55,
      "Name": " Ipomopsis pumila",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1ippu4.jpg",
      "Family": "Phlox Family",
      "state": "AZ   CO   ID   MT   NM   TX   UT   WY  "
    },
    {
      "ID": 56,
      "Name": " Iris missouriensis",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1irmi.jpg",
      "Family": "Iris Family",
      "state": "AZ   CA   CO   ID   NM   NV   OR   UT   WY  "
    },
    {
      "ID": 57,
      "Name": " Lappula redowskii",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Blue Purple Enlarged Photos/3lama9.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ   CO   NM  "
    },
    {
      "ID": 58,
      "Name": " Linum lewisiilewisii",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1adle.jpg",
      "Family": "Flax Family",
      "state": "AZ   CO   NM   TX   UT  "
    },
    {
      "ID": 59,
      "Name": " Lupinus argenteus",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1luar3.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 60,
      "Name": " Lupinus brevicaulis",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1lubr2.jpg",
      "Family": "Pea Family",
      "state": "AZ   CA   CO   NM   NV   OR   UT  "
    },
    {
      "ID": 61,
      "Name": " Lupinus caespitosus",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1luca3.jpg",
      "Family": "Pea Family",
      "state": "CA   CO   ID   MT   NV   OR   UT   WA   WY  "
    },
    {
      "ID": 62,
      "Name": " Lupinus kingiikingii",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1luki.jpg",
      "Family": "Pea Family",
      "state": "CA   CO   ID   MT   NV   OR   UT   WA   WY  "
    },
    {
      "ID": 63,
      "Name": " Lupinus prunophilus",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1lupop5.jpg",
      "Family": "Pea Family",
      "state": "CA   CO   ID   MT   NV   OR   UT   WA   WY  "
    },
    {
      "ID": 64,
      "Name": " Lupinus pusillus",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1lupu.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 65,
      "Name": " Medicago sativa",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Blue Purple Enlarged Photos/2mesa.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 66,
      "Name": " Mentha arvensis",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1mear4.jpg",
      "Family": "Mint Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 67,
      "Name": " Mertensia ciliataciliata",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1meci.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 68,
      "Name": " Mertensia franciscana",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1mefr2.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ   CA   CO   NM   NV   UT  "
    },
    {
      "ID": 69,
      "Name": " Mertensia fusiformis",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Mertensia-fusiformis.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "CO   UT   WY  "
    },
    {
      "ID": 70,
      "Name": " Mertensia lanceolata",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1mela3.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 71,
      "Name": " Oxalis metcalfei",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1oxvi.jpg",
      "Family": "Wood Sorrel Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 72,
      "Name": " Oxytropis deflexafoliolosa",
      "Zone": "Alpine",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1oxdef.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 73,
      "Name": " Oxytropis deflexasericea",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1oxdes.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 74,
      "Name": " Oxytropis parryi",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1oxpa2.jpg",
      "Family": "Pea Family",
      "state": "CA   CO   ID   MT   NM   NV   UT   WY  "
    },
    {
      "ID": 75,
      "Name": " Pediomelum tenuiflorum",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1pete.jpg",
      "Family": "Pea Family",
      "state": "AZ   CO   ID   MT   NM   NV   SD   UT   WY  "
    },
    {
      "ID": 76,
      "Name": " Penstemon angustifolius",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1pean4.jpg",
      "Family": "Plantain Family",
      "state": "AZ   CO   KS   MT   ND   NE   NM   OK   SD   UT   WY  "
    },
    {
      "ID": 77,
      "Name": " Penstemon breviculus",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1pebr9.jpg",
      "Family": "Plantain Family",
      "state": "AZ   CO   NM   UT  "
    },
    {
      "ID": 78,
      "Name": " Penstemon comarrhenus",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1peco5.jpg",
      "Family": "Plantain Family",
      "state": "AZ   CO   NM   NV   UT  "
    },
    {
      "ID": 79,
      "Name": " Penstemon crandallii",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1peca4.jpg",
      "Family": "Plantain Family",
      "state": "CO   NM   UT   WY  "
    },
    {
      "ID": 80,
      "Name": " Penstemon cyanocaulis",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1pecy4.jpg",
      "Family": "Plantain Family",
      "state": "CO   UT  "
    },
    {
      "ID": 81,
      "Name": " Penstemon hallii",
      "Zone": "Alpine",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1peha9.jpg",
      "Family": "Plantain Family",
      "state": "CO  "
    },
    {
      "ID": 82,
      "Name": " Penstemon harbourii",
      "Zone": "Alpine",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1peha.jpg",
      "Family": "Plantain Family",
      "state": "CO  "
    },
    {
      "ID": 83,
      "Name": " Penstemon lentus variety lentus",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1pelel2.jpg",
      "Family": "Plantain Family",
      "state": "CO  "
    },
    {
      "ID": 84,
      "Name": " Penstemon linarioidescoloradoensis",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1peli.jpg",
      "Family": "Plantain Family",
      "state": "CO  "
    },
    {
      "ID": 85,
      "Name": " Penstemon mensarum",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1peme2.jpg",
      "Family": "Plantain Family",
      "state": "CO  "
    },
    {
      "ID": 86,
      "Name": " Penstemon ophianthus",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1peop.jpg",
      "Family": "Plantain Family",
      "state": "AZ   CO   NM   UT  "
    },
    {
      "ID": 87,
      "Name": " Penstemon rydbergii",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1pery.jpg",
      "Family": "Plantain Family",
      "state": "AZ   CA   CO   ID   MT   NM   NV   OR   UT   WA   WY  "
    },
    {
      "ID": 88,
      "Name": " Penstemon strictus",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1pest2.jpg",
      "Family": "Plantain Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 89,
      "Name": " Penstemon venustus",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1peve2.jpg",
      "Family": "Plantain Family",
      "state": "CA   ID   OR   UT   WA  "
    },
    {
      "ID": 90,
      "Name": " Penstemon whippleanus",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1pewh.jpg",
      "Family": "Plantain Family",
      "state": "AZ   CO   ID   MT   NM   UT   WY  "
    },
    {
      "ID": 91,
      "Name": " Phacelia bakeri",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1phba3.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "CO   ID   NM   UT  "
    },
    {
      "ID": 92,
      "Name": " Phacelia bakeri",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1phba3.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "CO   ID   NM   UT  "
    },
    {
      "ID": 93,
      "Name": " Phacelia crenulata",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1phcr.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ   CA   CO   NM   NV   TX   UT  "
    },
    {
      "ID": 94,
      "Name": " Phacelia crenulata",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1phcr.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ   CA   CO   NM   NV   TX   UT  "
    },
    {
      "ID": 95,
      "Name": " Phacelia glandulosaglandulosa",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1phgl3.jpg",
      "Family": "Waterleaf Family",
      "state": "AZ   CA   CO   NM   NV   TX   UT  "
    },
    {
      "ID": 96,
      "Name": " Phacelia howelliana",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1phho2.jpg",
      "Family": "Waterleaf Family",
      "state": "AZ   NN   UT  "
    },
    {
      "ID": 97,
      "Name": " Phacelia sericea",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1phse.jpg",
      "Family": "Waterleaf Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 98,
      "Name": " Polemonium confertum",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1poco26.jpg",
      "Family": "Phlox Family",
      "state": "CO  "
    },
    {
      "ID": 99,
      "Name": " Polemonium foliosissimum",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1pofo.jpg",
      "Family": "Phlox Family",
      "state": "AZ   CO   ID   NM   NV   UT   WY  "
    },
    {
      "ID": 100,
      "Name": " Polemonium pulcherrimumdelicatum",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1popu3.jpg",
      "Family": "Phlox Family",
      "state": "AZ   CO   ID   NM   NV   UT   WY  "
    },
    {
      "ID": 101,
      "Name": " Polemonium viscosum",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1povi.jpg",
      "Family": "Phlox Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 102,
      "Name": " Poliomintha incana",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1poin3.jpg",
      "Family": "Mint Family",
      "state": "AZ   CA   CO   NM   TX   UT  "
    },
    {
      "ID": 103,
      "Name": " Prunella vulgaris",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1prvu.jpg",
      "Family": "Mint Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 104,
      "Name": " Pulsatilla nuttalliana",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1pupa5.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 105,
      "Name": " Sclerocactus cloveriaebrackii",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1sccl.jpg",
      "Family": "Cactus Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 106,
      "Name": " Sclerocactus parviflorus",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Pink Enlarged Photos/2scwh.jpg",
      "Family": "Cactus Family",
      "state": "AZ   CO   NM   NN   UT  "
    },
    {
      "ID": 107,
      "Name": " Scutellaria galericulata",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1scga.jpg",
      "Family": "Mint Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 108,
      "Name": " Sisyrinchium montanummontanum",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/../Blue Purple Enlarged Photos/4simo.jpg",
      "Family": "Iris Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 109,
      "Name": " Sophora nuttalliana",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1sonu.jpg",
      "Family": "Pea Family",
      "state": "AZ   CO   KS   NE   NM   OK   SD   TX   UT   WY  "
    },
    {
      "ID": 110,
      "Name": " Sophora stenophylla",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1sost4.jpg",
      "Family": "Pea Family",
      "state": "AZ   NM   NN   UT  "
    },
    {
      "ID": 111,
      "Name": " Swertia perennis",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1swpe.jpg",
      "Family": "Gentian Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 112,
      "Name": " Symphyotrichum ascendens",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1syas3.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 113,
      "Name": " Symphyotrichum foliaceumapricum",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/../Blue Purple Enlarged Photos/4syfoa.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 114,
      "Name": " Symphyotrichum foliaceumcanbyi",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../Blue Purple Enlarged Photos/4asfo.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 115,
      "Name": " Symphyotrichum foliaceumparryi",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/../Blue Purple Enlarged Photos/6asfo.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 116,
      "Name": " Symphyotrichum spathulatumspathulatum",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1assp16.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 117,
      "Name": " Thelypodium integrifolium",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1thin.jpg",
      "Family": "Mustard Family",
      "state": "AZ   CA   CO   ID   MT   ND   NE   NM   NV   OR   SD   UT   WA   WY  "
    },
    {
      "ID": 118,
      "Name": " Thelypodium laxiflorum",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1thla4.jpg",
      "Family": "Mustard Family",
      "state": "AZ   CO   NN   NV   UT  "
    },
    {
      "ID": 119,
      "Name": " Tradescantia occidentalis",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1troc.jpg",
      "Family": "Spiderwort Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 120,
      "Name": " Tragopogon porrifolius",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1trpo.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 121,
      "Name": " Triteleia grandiflora",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1trgr7.jpg",
      "Family": "Asparagus Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 122,
      "Name": " Veronica americana",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1veam2.jpg",
      "Family": "Plantain Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 123,
      "Name": " Veronica anagallis-aquatica",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1veca7.jpg",
      "Family": "Plantain Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 124,
      "Name": " Veronica besseya",
      "Zone": "Alpine",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1beap.jpg",
      "Family": "Plantain Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 125,
      "Name": " Veronica serpyllifoliahumifusa",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1vese3.jpg",
      "Family": "Plantain Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 126,
      "Name": " Veronica wormskjoldiinutans",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1venu2.jpg",
      "Family": "Plantain Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 127,
      "Name": " Viola nephrophylla",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1viso.jpg",
      "Family": "Violet Family",
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
      z: unpack(rows, 'Blue'),
      text: unpack(rows, 'State'),
      zmin: 0,
      zmax: 300,
      colorscale: [
        [0, 'rgb(170, 183, 254)'], [0, 'rgb(142, 159, 254)'],
        [0.4, 'rgb(113, 135, 254)'], [0.6, 'rgb(85, 111, 254)'],
        [0.8, 'rgb(56, 87, 253)'], [1, 'rgb(34, 68, 253)']
      ]
    }];
    var layout = {
      title: '<b>Distribution of <i>Blue</i> flowers</b>',
      color: "red",
      paper_bgcolor: "rgba(0,0,0,0)",
      // plot_bgcolor: "lightblue",
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
  displayFlowers.push(bluedata[0].Image);
  displayName.push(bluedata[0].Name);
  chosenFamily.push(bluedata[0].Family);
  displayIdArr.push(bluedata[0].ID);

  // Push other flower images from different families
  for (var i = 1; i < bluedata.length; i++) {
    if (!chosenFamily.includes(bluedata[i].Family)) {
      displayFlowers.push(bluedata[i].Image);
      displayName.push(bluedata[i].Name);
      chosenFamily.push(bluedata[i].Family);
      displayIdArr.push(bluedata[i].ID);
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
    var familyName = bluedata[id - 1].Family;
    var zone = bluedata[id - 1].Zone;
    var image = bluedata[id - 1].Image.split(" ").join("%20");
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
      $(".map-header").html(`<h4>Distribution of <i>${bluedata[id - 1].Name}</i></h4>`);
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
    stateArr = bluedata[id - 1].state.split(" ");
    for (var i = 0; i < stateArr.length; i++) {
      if (stateArr[i].length == 2) {
        console.log(stateArr[i]);
        $("#" + stateArr[i]).css({
          "fill": "#00308F"
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
        <h6>${bluedata[id - 1].Name}</h6>
        <div class="fw-bold" id="name"><h4>Zone: </h4></div>
        <h6>${bluedata[id - 1].Zone}</h6>
        <div class="fw-bold" id="name"><h4>Family: </h4></div>
        <h6>${bluedata[id - 1].Family}</h6>
        <img src=${image} width ="150px" height "150px"/>
      </div>
    </li>
  </ol>`);

    var rankObj = [];

    for (var i = 0; i < bluedata.length; i++) {
      // Same zone, leaf type and family
      if ((i !== id - 1 && bluedata[i].Zone == zone && bluedata[i].Leaf == bluedata[id - 1].Leaf && bluedata[i].Family == familyName) || bluedata[i].Zone === previousZone) {
        if (!displayFlowers1.includes(bluedata[i].Image)) {
          rankObj.push({
            "rank": 1,
            "id": bluedata[i].ID,
            "image": bluedata[i].Image,
            "name": bluedata[i].Name
          })
        }
      } else if ((i !== id - 1 && bluedata[i].Zone == zone && bluedata[i].Leaf == bluedata[id - 1].Leaf) || (i !== id - 1 && bluedata[i].Zone == zone && bluedata[i].Family == bluedata[id - 1].Family)) {
        // same zone and leaf or same zone and family
        if (!displayFlowers1.includes(bluedata[i].Image)) {
          rankObj.push({
            "rank": 2,
            "id": bluedata[i].ID,
            "image": bluedata[i].Image,
            "name": bluedata[i].Name
          })
        }
      } else if ((i !== id - 1 && bluedata[i].Zone == previousZoneArr[i]) || (i !== id - 1 && bluedata[i].Zone == previousZoneArr[i])) {
        //  least recommended - same zone alone
        if (!displayFlowers1.includes(bluedata[i].Image)) {
          rankObj.push({
            "rank": 3,
            "id": bluedata[i].ID,
            "image": bluedata[i].Image,
            "name": bluedata[i].Name
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