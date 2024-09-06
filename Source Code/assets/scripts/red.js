$(document).ready(function () {
  $("#plantDetails").hide();
  $("#us-map1").hide();
  $(".mapspace").hide();

  var zoneArr = [];
  zoneArr.push("Foothills");
  localStorage.setItem("zone", JSON.stringify(zoneArr));
  // Tableau
  var divElement = document.getElementById('viz1686081324686');
  var vizElement = divElement.getElementsByTagName('object')[0];
  vizElement.style.height = '850px';

  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
  // Dataset
  const reddata = [
    {
      "ID": 1,
      "Name": " Alhagi maurorum",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1alhag.jpg",
      "Family": "Pea Family",
      "state": "AZ   CA   CO   ID   NM   NV   TX   UT   WA  "
    },
    {
      "ID": 2,
      "Name": " Aliciella formosa",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1alfo3.jpg",
      "Family": "Phlox Family",
      "state": "NM   NN  "
    },
    {
      "ID": 3,
      "Name": " Aliciella haydeniicrandallii",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1giha2.jpg",
      "Family": "Phlox Family",
      "state": "NM   NN  "
    },
    {
      "ID": 4,
      "Name": " Aliciella haydeniihaydenii",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Pink Enlarged Photos/6giha2.jpg",
      "Family": "Phlox Family",
      "state": "NM   NN  "
    },
    {
      "ID": 5,
      "Name": " Aliciella subnuda",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1gisu.jpg",
      "Family": "Phlox Family",
      "state": "AZ   CO   UT  "
    },
    {
      "ID": 6,
      "Name": " Allionia incarnata",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1alin.jpg",
      "Family": "Four O'Clock Family",
      "state": "AZ   CA   CO   NM   NN   NV   OK   TX   UT  "
    },
    {
      "ID": 7,
      "Name": " Allium acuminatum",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1alac4.jpg",
      "Family": "Amaryllis Family",
      "state": "AZ   CA   CO   NM   NN   NV   OK   TX   UT  "
    },
    {
      "ID": 8,
      "Name": " Allium cernuum",
      "Color": " Red  White  Blue",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1alce2.jpg",
      "Family": "Amaryllis Family",
      "state": "AZ   CA   CO   NM   NN   NV   OK   TX   UT  "
    },
    {
      "ID": 9,
      "Name": " Allium geyerigeyeri",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1alge.jpg",
      "Family": "Amaryllis Family",
      "state": "AZ   CA   CO   NM   NN   NV   OK   TX   UT  "
    },
    {
      "ID": 10,
      "Name": " Anemone multifidamultifida",
      "Color": " Red  Yellow  Blue  White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1anmu.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 11,
      "Name": " Antennaria rosea",
      "Color": " Red  White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1anro2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 12,
      "Name": " Aphyllon fasciculatum",
      "Color": " Red  Yellow  Blue",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1apfa.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 13,
      "Name": " Aphyllon uniflorum",
      "Color": " Red  Blue  White  Yellow",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1apun2.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 14,
      "Name": " Aquilegia coerulea x elegantula",
      "Color": " Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1aqcoxel.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 15,
      "Name": " Aquilegia elegantula",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1aqel.jpg",
      "Family": "Buttercup Family",
      "state": "AZ   CO   NM   UT  "
    },
    {
      "ID": 16,
      "Name": " Arctostaphylos uva-ursi",
      "Color": " Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1aruv.jpg",
      "Family": "Heath Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 17,
      "Name": " Asclepias speciosa",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1assp.jpg",
      "Family": "Dogbane Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 18,
      "Name": " Astragalus amphioxys",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1asam5.jpg",
      "Family": "Pea Family",
      "state": "AZ   CO   NM   NV   TX   UT  "
    },
    {
      "ID": 19,
      "Name": " Astragalus chamaeleuce",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Pink Enlarged Photos/3asch4.jpg",
      "Family": "Pea Family",
      "state": "CO   MT   UT   WY  "
    },
    {
      "ID": 20,
      "Name": " Astragalus coltoniimoabensis",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1ascom2.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 21,
      "Name": " Astragalus cronquistii",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1ascr4.jpg",
      "Family": "Pea Family",
      "state": "CO   NN   UT  "
    },
    {
      "ID": 22,
      "Name": " Astragalus desperatus",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1asde3.jpg",
      "Family": "Pea Family",
      "state": "AZ   CO   NM   NN   UT  "
    },
    {
      "ID": 23,
      "Name": " Astragalus eastwoodiae",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1asea2.jpg",
      "Family": "Pea Family",
      "state": "CO   UT  "
    },
    {
      "ID": 24,
      "Name": " Astragalus humillimus",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1ashu.jpg",
      "Family": "Pea Family",
      "state": "CO   NM   NN  "
    },
    {
      "ID": 25,
      "Name": " Astragalus lentiginosuspalans",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1aslep.jpg",
      "Family": "Pea Family",
      "state": "CO   NM   NN  "
    },
    {
      "ID": 26,
      "Name": " Astragalus missouriensis",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1asmi.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 27,
      "Name": " Astragalus mollissimusthompsoniae",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1asmo7.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 28,
      "Name": " Astragalus monumentaliscottamii",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1asco18.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 29,
      "Name": " Astragalus multiflorus",
      "Color": " Red  Blue",
      "Zone": "Foothills",
      "Image": "https://pnwwildflowers2.appspot.com.storage.googleapis.com/img/Astragalus_multiflorus.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 30,
      "Name": " Astragalus naturitensis",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1asna.jpg",
      "Family": "Pea Family",
      "state": "CO   NM   NN   UT  "
    },
    {
      "ID": 31,
      "Name": " Astragalus newberryinewberryi",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1asne6.jpg",
      "Family": "Pea Family",
      "state": "CO   NM   NN   UT  "
    },
    {
      "ID": 32,
      "Name": " Astragalus nuttallianusmicranthiformis",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1asnu4.jpg",
      "Family": "Pea Family",
      "state": "CO   NM   NN   UT  "
    },
    {
      "ID": 33,
      "Name": " Astragalus preussii",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1aspr6.jpg",
      "Family": "Pea Family",
      "state": "AZ   CA   NN   NV   UT  "
    },
    {
      "ID": 34,
      "Name": " Astragalus proximus",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Pink Enlarged Photos/4aspr8.jpg",
      "Family": "Pea Family",
      "state": "CO   NM  "
    },
    {
      "ID": 35,
      "Name": " Boechera lemmonii",
      "Color": " Red",
      "Zone": "Alpine",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Boechera-lemmonii.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 36,
      "Name": " Calypso bulbosaamericana",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1cabu.jpg",
      "Family": "Orchid Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 37,
      "Name": " Carduus nutans",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1canu4.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 38,
      "Name": " Castilleja chromosa",
      "Color": " Red  Orange  Green",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1cach7.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 39,
      "Name": " Castilleja haydenii",
      "Color": " Red  Green",
      "Zone": "Alpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1caha16.jpg",
      "Family": "Broomrape Family",
      "state": "CO   NM  "
    },
    {
      "ID": 40,
      "Name": " Castilleja integra",
      "Color": " Red  Green",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1cain14.jpg",
      "Family": "Broomrape Family",
      "state": "AZ   CO   NM   TX  "
    },
    {
      "ID": 41,
      "Name": " Castilleja linariifolia",
      "Color": " Red  Green",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1cali4.jpg",
      "Family": "Broomrape Family",
      "state": "AZ   CA   CO   ID   MT   NM   NV   OR   UT   WY  "
    },
    {
      "ID": 42,
      "Name": " Castilleja miniataminiata",
      "Color": " Red  Orange  Green",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1cami12.jpg",
      "Family": "Broomrape Family",
      "state": "AZ   CO   NM  "
    },
    {
      "ID": 43,
      "Name": " Castilleja rhexiifolia",
      "Color": " Red  Green",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1carh.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 44,
      "Name": " Castilleja scabrida",
      "Color": " Red  Green",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1cascs4.jpg",
      "Family": "Broomrape Family",
      "state": "CO   NV   UT  "
    },
    {
      "ID": 45,
      "Name": " Chamaenerion angustifoliumcircumvagum",
      "Color": " Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1chda2.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ   CO   ID   NM   UT   WY  "
    },
    {
      "ID": 46,
      "Name": " Chamaenerion latifolium",
      "Color": " Red",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1chsu11.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ   CO   ID   NM   UT   WY  "
    },
    {
      "ID": 47,
      "Name": " Cirsium arizonicumbipinnatum",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1cica10.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 48,
      "Name": " Cirsium arvense",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1brar.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 49,
      "Name": " Cirsium scopulorum",
      "Color": " Red  White  Blue",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1cieahe.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CO   NM  "
    },
    {
      "ID": 50,
      "Name": " Cirsium vulgare",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1civu.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 51,
      "Name": " Cleomella serrulata",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1clse.jpg",
      "Family": "Cleome Family",
      "state": "AZ   CO   NM   UT  "
    },
    {
      "ID": 52,
      "Name": " Clinopodium vulgare",
      "Color": " Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1clvu.jpg",
      "Family": "Mint Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 53,
      "Name": " Collomia linearis",
      "Color": " Red  Blue  White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1coli2.jpg",
      "Family": "Phlox Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 54,
      "Name": " Cylindropuntia imbricata",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1cyim2.jpg",
      "Family": "Cactus Family",
      "state": "AZ   CA   CO   ID   NM   NV   OR   TX   UT   WA  "
    },
    {
      "ID": 55,
      "Name": " Dodecatheon pulchellum",
      "Color": " Red  Yellow",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1dopu.jpg",
      "Family": "Primrose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 56,
      "Name": " Dracocephalum parviflorum",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1drpa2.jpg",
      "Family": "Mint Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 57,
      "Name": " Echinocereus fendlerifendleri",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1ecfe.jpg",
      "Family": "Cactus Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 58,
      "Name": " Echinocereus mojavensis",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1ectr.jpg",
      "Family": "Cactus Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 59,
      "Name": " Epilobium anagallidifolium",
      "Color": " Red  White  Blue",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1epan4.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 60,
      "Name": " Epilobium brachycarpum",
      "Color": " Red  White  Blue",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1epbr3.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 61,
      "Name": " Epilobium ciliatum",
      "Color": " Red  White  Blue",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1epci.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 62,
      "Name": " Epilobium hornemanniihornemannii",
      "Color": " Red  White  Blue",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1epho.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 63,
      "Name": " Epipactis gigantea",
      "Color": " Red  Orange  Yellow",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1epgi.jpg",
      "Family": "Orchid Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 64,
      "Name": " Erigeron ursinus",
      "Color": " Red  Blue  White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1erur2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CO   ID   MT   NM   NV   UT   WY  "
    },
    {
      "ID": 65,
      "Name": " Erodium cicutarium",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1erci.jpg",
      "Family": "Geranium Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 66,
      "Name": " Erythranthe eastwoodiae",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1miea.jpg",
      "Family": "Lopseed Family",
      "state": "AZ   CO   NN   UT  "
    },
    {
      "ID": 67,
      "Name": " Escobaria viviparavivipara",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1covi9.jpg",
      "Family": "Cactus Family",
      "state": "AR   AZ   CO   IA   ID   KS   LA   MN   MT   ND   NE   NM   NN   OK   SD   TX   UT   WY  "
    },
    {
      "ID": 68,
      "Name": " Eucephalus engelmannii",
      "Color": " Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1asfo.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 69,
      "Name": " Geranium caespitosum",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1geca3.jpg",
      "Family": "Geranium Family",
      "state": "AZ   CO   NM   NV   TX   WY  "
    },
    {
      "ID": 70,
      "Name": " Geranium viscosissimum",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1gevi2.jpg",
      "Family": "Geranium Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 71,
      "Name": " Geum triflorum",
      "Color": " Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1ertr19.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 72,
      "Name": " Glandularia wrightii",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Glandularia-bipinnatifida.jpg",
      "Family": "Verbena Family",
      "state": "TX  "
    },
    {
      "ID": 73,
      "Name": " Hedysarum borealeboreale",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1hebo.jpg",
      "Family": "Pea Family",
      "state": "AL   AR   AZ   CA   CO   KS   MN   MS   MT   ND   NE   NM   NV   OK   SD   TX   UT   WY  "
    },
    {
      "ID": 74,
      "Name": " Hedysarum occidentaleoccidentale",
      "Color": " Red  White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1heoc.jpg",
      "Family": "Pea Family",
      "state": "AL   AR   AZ   CA   CO   KS   MN   MS   MT   ND   NE   NM   NV   OK   SD   TX   UT   WY  "
    },
    {
      "ID": 75,
      "Name": " Ipomopsis aggregata",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1ipag.jpg",
      "Family": "Phlox Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 76,
      "Name": " Ipomopsis ramosa",
      "Color": " Red  White  Orange",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1ipra.jpg",
      "Family": "Phlox Family",
      "state": "AZ   CO   ID   MT   NM   TX   UT   WY  "
    },
    {
      "ID": 77,
      "Name": " Ipomopsis tenuituba",
      "Color": " Red  Blue  White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1ipte4.jpg",
      "Family": "Phlox Family",
      "state": "AZ   CA   CO   ID   NM   NV   OR   UT   WY  "
    },
    {
      "ID": 78,
      "Name": " Lathyrus pauciflorus",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1lapa5.jpg",
      "Family": "Pea Family",
      "state": "AZ   CO   ID   OR   UT   WA  "
    },
    {
      "ID": 79,
      "Name": " Lewisia pygmaea",
      "Color": " Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1orpy2.jpg",
      "Family": "Miner's Lettuce Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 80,
      "Name": " Linnaea borealisamericana",
      "Color": " Red  White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1libo3.jpg",
      "Family": "Honeysuckle Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 81,
      "Name": " Lygodesmia arizonica",
      "Color": " Red  White  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1lygr2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CO   NM   UT  "
    },
    {
      "ID": 82,
      "Name": " Lygodesmia doloresensis",
      "Color": " Red  White  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1lydo.jpg",
      "Family": "Sunflower Family",
      "state": "CO  "
    },
    {
      "ID": 83,
      "Name": " Lygodesmia entrada",
      "Color": " Red  White  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1lygre.jpg",
      "Family": "Sunflower Family",
      "state": "UT  "
    },
    {
      "ID": 84,
      "Name": " Lygodesmia grandiflora",
      "Color": " Red  White  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1lygrg.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CO   ID   NM   UT   WY  "
    },
    {
      "ID": 85,
      "Name": " Lygodesmia juncea",
      "Color": " Red  White  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1lyju.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 86,
      "Name": " Malva neglecta",
      "Color": " Red  White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1mane.jpg",
      "Family": "Mallow Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 87,
      "Name": " Mirabilis linearislinearis",
      "Color": " Red  White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1oxli.jpg",
      "Family": "Four O'Clock Family",
      "state": "AZ   CO   ID   MT   NM   NV   UT   WY  "
    },
    {
      "ID": 88,
      "Name": " Mirabilis multiflora",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1migl.jpg",
      "Family": "Four O'Clock Family",
      "state": "AZ   CA   CO   NM   NV   TX   UT  "
    },
    {
      "ID": 89,
      "Name": " Mirabilis oxybaphoides",
      "Color": " Red  White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1miox.jpg",
      "Family": "Four O'Clock Family",
      "state": "AZ   CO   NM   NV   OK   TX   UT  "
    },
    {
      "ID": 90,
      "Name": " Monardella odoratissimaglauca",
      "Color": " Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1mood.jpg",
      "Family": "Mint Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 91,
      "Name": " Monolepis nuttalliana",
      "Color": " Red  Yellow",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1monu.jpg",
      "Family": "Amaranth Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 92,
      "Name": " Nama retrorsa",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1nare.jpg",
      "Family": "Fiddleleaf Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 93,
      "Name": " Oenothera curtiflora",
      "Color": "Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1oecu2.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ   CO   KS   NE   NM   SD   UT   WY  "
    },
    {
      "ID": 94,
      "Name": " Onobrychis viciifolia",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1onvi.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 95,
      "Name": " Oxyria digyna",
      "Color": " Red  Green  Yellow",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1oxdi3.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 96,
      "Name": " Oxytropis lambertiibigelovii",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1oxtr3.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 97,
      "Name": " Paxistima myrsinites",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1pamy.jpg",
      "Family": "Staff-tree Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 98,
      "Name": " Pedicularis centranthera",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1pece.jpg",
      "Family": "Broomrape Family",
      "state": "AZ   CA   CO   NM   NV   OR   UT  "
    },
    {
      "ID": 99,
      "Name": " Pedicularis groenlandica",
      "Color": " Red  White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1pegr2.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 100,
      "Name": " Pedicularis scopulorum",
      "Color": " Red",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1pesus2.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 101,
      "Name": " Penstemon barbatustorreyi",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1pebat2.jpg",
      "Family": "Plantain Family",
      "state": "AZ   CO   KS   MT   ND   NE   NM   OK   SD   UT   WY  "
    },
    {
      "ID": 102,
      "Name": " Penstemon barbatustrichander",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Pink Enlarged Photos/3pebat2.jpg",
      "Family": "Plantain Family",
      "state": "AZ   CO   KS   MT   ND   NE   NM   OK   SD   UT   WY  "
    },
    {
      "ID": 103,
      "Name": " Penstemon eatonii",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1peea.jpg",
      "Family": "Plantain Family",
      "state": "AZ   CA   CO   NM   NV   UT   WY  "
    },
    {
      "ID": 104,
      "Name": " Penstemon rostriflorus",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1pero10.jpg",
      "Family": "Plantain Family",
      "state": "AZ   CA   CO   NM   NV   UT  "
    },
    {
      "ID": 105,
      "Name": " Penstemon utahensis",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1peut.jpg",
      "Family": "Plantain Family",
      "state": "AZ   CA   CO   NV   UT  "
    },
    {
      "ID": 106,
      "Name": " Persicaria amphibia",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1peam.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ   CO   ID   MT   NM   UT   WY  "
    },
    {
      "ID": 107,
      "Name": " Persicaria maculosa",
      "Color": " Red  White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1pema17.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 108,
      "Name": " Phemeranthus brevifolius",
      "Color": " Red  White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1tabr.jpg",
      "Family": "Miner's Lettuce Family",
      "state": "AZ   NM   UT  "
    },
    {
      "ID": 109,
      "Name": " Poterium sanguisorba",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1posa.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 110,
      "Name": " Primula parryi",
      "Color": " Red",
      "Zone": "Alpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1prpa.jpg",
      "Family": "Primrose Family",
      "state": "AZ   CO   ID   MT   NM   NV   UT   WY  "
    },
    {
      "ID": 111,
      "Name": " Primula specuicola",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1prsp2.jpg",
      "Family": "Primrose Family",
      "state": "AZ   CO   NN   UT  "
    },
    {
      "ID": 112,
      "Name": " Pterospora andromedea",
      "Color": " Red  Yellow  Green",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/../Brown Green Enlarged Photos/5ptan2.jpg",
      "Family": "Heath Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 113,
      "Name": " Pyrola asarifoliaasarifolia",
      "Color": " Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1pyro.jpg",
      "Family": "Heath Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 114,
      "Name": " Rhaponticum repens",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Rhaponticum-repens.jpg",
      "Family": "Sunflower Family",
      "state": "CO   NM  "
    },
    {
      "ID": 115,
      "Name": " Rhinotropis subspinosa",
      "Color": " Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1posu2.jpg",
      "Family": "Milkwort Family",
      "state": "CO   NM  "
    },
    {
      "ID": 116,
      "Name": " Rhodiola integrifoliaintegrifolia",
      "Color": " Red",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1rhin11.jpg",
      "Family": "Stonecrop Family",
      "state": "CO   NM  "
    },
    {
      "ID": 117,
      "Name": " Rhodiola rhodantha",
      "Color": " Red",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1clrh2.jpg",
      "Family": "Stonecrop Family",
      "state": "AZ   CO   MT   NM   UT   WY  "
    },
    {
      "ID": 118,
      "Name": " Rosa nutkana",
      "Color": " Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1ronu.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 119,
      "Name": " Rosa woodsii",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1rowo.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 120,
      "Name": " Salix nivalis",
      "Color": " Red  Yellow",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1sani8.jpg",
      "Family": "Willow Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 121,
      "Name": " Salix petrophila",
      "Color": " Red  Yellow",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1sape18.jpg",
      "Family": "Willow Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 122,
      "Name": " Sclerocactus glaucus",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1scgl.jpg",
      "Family": "Cactus Family",
      "state": "CO  "
    },
    {
      "ID": 123,
      "Name": " Sclerocactus mesae-verdae",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1scme4.jpg",
      "Family": "Cactus Family",
      "state": "CO   NM   NN  "
    },
    {
      "ID": 124,
      "Name": " Scrophularia lanceolata",
      "Color": " Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1scla.jpg",
      "Family": "Snapdragon Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 125,
      "Name": " Sidalcea neomexicananeomexicana",
      "Color": " Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/../Pink Enlarged Photos/9sine3.jpg",
      "Family": "Mallow Family",
      "state": "CO   NM   NN   NV   UT   WY  "
    },
    {
      "ID": 126,
      "Name": " Silene acaulissubacaulescens",
      "Color": " Red",
      "Zone": "Alpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1siac.jpg",
      "Family": "Pink Family",
      "state": "CO   NM   NN   NV   UT   WY  "
    },
    {
      "ID": 127,
      "Name": " Silene antirrhina",
      "Color": " Red  White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1sian2.jpg",
      "Family": "Pink Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 128,
      "Name": " Smelowskia americana",
      "Color": " Red  White",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1smca.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 129,
      "Name": " Spergularia rubra",
      "Color": " Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1spru.jpg",
      "Family": "Pink Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 130,
      "Name": " Sphaeralcea coccinea",
      "Color": " Red  Orange",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Pink Enlarged Photos/3spco.jpg",
      "Family": "Mallow Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 131,
      "Name": " Sphaeralcea fendleri",
      "Color": " Red  Orange",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1spfe.jpg",
      "Family": "Mallow Family",
      "state": "AZ   CO   KS   MA   NM   TX  "
    },
    {
      "ID": 132,
      "Name": " Sphaeralcea grossulariifolia",
      "Color": " Red  Orange",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1spgr2.jpg",
      "Family": "Mallow Family",
      "state": "AZ   CA   CO   ID   NM   NV   OR   UT   WA  "
    },
    {
      "ID": 133,
      "Name": " Sphaeralcea leptophylla",
      "Color": " Red  Orange",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1sple.jpg",
      "Family": "Mallow Family",
      "state": "AZ   CO   NM   NV   TX   UT  "
    },
    {
      "ID": 134,
      "Name": " Sphaeralcea parvifolia",
      "Color": " Red  Orange",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1sppa.jpg",
      "Family": "Mallow Family",
      "state": "AZ   CA   CO   NM   NV   UT  "
    },
    {
      "ID": 135,
      "Name": " Stephanomeria exiguaexigua",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Stephanomeria-exigua.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CO   MT   NM   NV   UT   WY  "
    },
    {
      "ID": 136,
      "Name": " Stephanomeria pauciflora",
      "Color": " Red  White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1stpa.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CA   CO   KS   NM   NV   OK   TX   UT   WY  "
    },
    {
      "ID": 137,
      "Name": " Stephanomeria tenuifolia",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Stephanomeria-tenuifolia.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CA   CO   KS   NM   NV   OK   TX   UT   WY  "
    },
    {
      "ID": 138,
      "Name": " Strigosella africana",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1maaf.jpg",
      "Family": "Mustard Family",
      "state": "AZ   CA   CO   KS   NM   NV   OK   TX   UT   WY  "
    },
    {
      "ID": 139,
      "Name": " Tiquilia latior",
      "Color": " Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1tila6.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ   NM   NV   UT  "
    },
    {
      "ID": 140,
      "Name": " Townsendia rothrockii",
      "Color": " Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1toro.jpg",
      "Family": "Sunflower Family",
      "state": "CO  "
    },
    {
      "ID": 141,
      "Name": " Trifolium attenuatum",
      "Color": " Red",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1trat.jpg",
      "Family": "Pea Family",
      "state": "CO   NM  "
    },
    {
      "ID": 142,
      "Name": " Trifolium brandegeei",
      "Color": " Red",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1trbr2.jpg",
      "Family": "Pea Family",
      "state": "CO   NM  "
    },
    {
      "ID": 143,
      "Name": " Trifolium dasyphyllum",
      "Color": " Red",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1trda2.jpg",
      "Family": "Pea Family",
      "state": "AZ   CO   MT   NM   UT   WY  "
    },
    {
      "ID": 144,
      "Name": " Trifolium hybridum",
      "Color": " Red  White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1trhy.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 145,
      "Name": " Trifolium longipes",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1trlo.jpg",
      "Family": "Pea Family",
      "state": "AZ   CA   CO   ID   MT   NM   NV   OR   UT   WA   WY  "
    },
    {
      "ID": 146,
      "Name": " Trifolium nanum",
      "Color": " Red  White  Yellow",
      "Zone": "Alpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1trna2.jpg",
      "Family": "Pea Family",
      "state": "CO   MT   NM   UT   WY  "
    },
    {
      "ID": 147,
      "Name": " Trifolium parryiparryi",
      "Color": " Red",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1trpa.jpg",
      "Family": "Pea Family",
      "state": "CO   MT   NM   UT   WY  "
    },
    {
      "ID": 148,
      "Name": " Trifolium pratense",
      "Color": " Red  Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1trpr2.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 149,
      "Name": " Vesper bulbosus",
      "Color": " Red  White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1cybu.jpg",
      "Family": "Parsley Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 150,
      "Name": " Vesper constancei",
      "Color": " Red  White  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1cyco22.jpg",
      "Family": "Parsley Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 151,
      "Name": " Vicia americana",
      "Color": " Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1viam.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 152,
      "Name": " Xanthisma coloradoense",
      "Color": " Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1maco13.jpg",
      "Family": "Sunflower Family",
      "state": "CO   WY  "
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
      return rows.map(function (row) { return row[key]; });
    }

    var data = [{
      type: 'choropleth',
      showlegend: false,
      locationmode: 'USA-states',
      locations: unpack(rows, 'State'),
      z: unpack(rows, 'Red'),
      text: unpack(rows, 'State'),
      zmin: 0,
      zmax: 300,
      colorscale: [
        [0, 'rgb(252,152,177)'], [0, 'rgb(251,117,151)'],
        [0.4, 'rgb(250,90,131)'], [0.6, 'rgb(249,62,110)'],
        [0.8, 'rgb(245,35,89)'], [1, 'rgb(253, 186, 203)']
      ],
      autocolorscale: false,
      reversescale: true
    }];


    var layout = {
      title: '<b>Distribution of <i>Red</i> flowers</b>',
      paper_bgcolor: "#86C6F4",
      plot_bgcolor: "#86C6F4",
      geo: {
        scope: 'usa'
      }
    };

    Plotly.newPlot("myDiv", data, layout, { showLink: false });
  });
  // d3.csv('https://raw.githubusercontent.com/Mahi-Mani/projectdv/main/Color_State_data.csv', function (err, rows) {
  //   function unpack(rows, key) {
  //     console.log(rows);
  //     return rows.map(function (row) { return row[key]; });
  //   }

  //   var data = [{
  //     type: 'choropleth',
  //     locationmode: 'USA-states',
  //     locations: unpack(rows, 'State'),
  //     z: unpack(rows, 'Red'),
  //     text: unpack(rows, 'State'),
  //     zmin: 0,
  //     zmax: 300,
  //     colorscale: [
  //       [0, 'rgb(252,152,177)'], [0, 'rgb(251,117,151)'],
  //       [0.4, 'rgb(250,90,131)'], [0.6, 'rgb(249,62,110)'],
  //       [0.8, 'rgb(245,35,89)'], [1, 'rgb(253, 186, 203)']
  //     ]
  //   }];
  //   var layout = {
  //     title: "<b>Distribution of <i>Red</i> flowers</b>",
  //     color: "red",
  //     paper_bgcolor: "rgba(0,0,0,0)",
  //     // plot_bgcolor: "lightblue",
  //     geo: {
  //       scope: 'usa'
  //     },
  //     font: 'red',
  //     color: "white"
  //   };

  //   Plotly.newPlot("myDiv", data, layout, { showLink: false });
  // });

  var displayFlowers = [];
  var chosenFamily = [];
  var displayName = [];
  var displayIdArr = [];
  var stateArr = [];
  displayFlowers.push(reddata[0].Image);
  displayName.push(reddata[0].Name);
  chosenFamily.push(reddata[0].Family);
  displayIdArr.push(reddata[0].ID);

  // Push other flower images from different families
  for (var i = 1; i < reddata.length; i++) {
    if (!chosenFamily.includes(reddata[i].Family)) {
      displayFlowers.push(reddata[i].Image);
      displayName.push(reddata[i].Name);
      chosenFamily.push(reddata[i].Family);
      displayIdArr.push(reddata[i].ID);
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
    var familyName = reddata[id - 1].Family;
    var zone = reddata[id - 1].Zone;
    var image = reddata[id - 1].Image.split(" ").join("%20");
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
      $(".map-header").html(`<h4>Distribution of <i>${reddata[id - 1].Name}</i></h4>`);
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
    stateArr = reddata[id - 1].state.split(" ");
    for (var i = 0; i < stateArr.length; i++) {
      if (stateArr[i].length == 2) {
        console.log(stateArr[i]);
        $("#" + stateArr[i]).css({
          "fill": "#FF033E"
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
        <h6>${reddata[id - 1].Name}</h6>
        <div class="fw-bold" id="name"><h4>Zone: </h4></div>
        <h6>${reddata[id - 1].Zone}</h6>
        <div class="fw-bold" id="name"><h4>Family: </h4></div>
        <h6>${reddata[id - 1].Family}</h6>
        <img src=${image} width ="150px" height "150px"/>
      </div>
    </li>
  </ol>`);

    var rankObj = [];

    for (var i = 0; i < reddata.length; i++) {
      // Same zone, leaf type and family
      if ((i !== id - 1 && reddata[i].Zone == zone && reddata[i].Leaf == reddata[id - 1].Leaf && reddata[i].Family == familyName) || reddata[i].Zone === previousZone) {
        if (!displayFlowers1.includes(reddata[i].Image)) {
          rankObj.push({
            "rank": 1,
            "id": reddata[i].ID,
            "image": reddata[i].Image,
            "name": reddata[i].Name
          })
        }
      } else if ((i !== id - 1 && reddata[i].Zone == zone && reddata[i].Leaf == reddata[id - 1].Leaf) || (i !== id - 1 && reddata[i].Zone == zone && reddata[i].Family == reddata[id - 1].Family)) {
        // same zone and leaf or same zone and family
        if (!displayFlowers1.includes(reddata[i].Image)) {
          rankObj.push({
            "rank": 2,
            "id": reddata[i].ID,
            "image": reddata[i].Image,
            "name": reddata[i].Name
          })
        }
      } else if ((i !== id - 1 && reddata[i].Zone == previousZoneArr[i]) || (i !== id - 1 && reddata[i].Zone == previousZoneArr[i])) {
        //  least recommended - same zone alone
        if (!displayFlowers1.includes(reddata[i].Image)) {
          rankObj.push({
            "rank": 3,
            "id": reddata[i].ID,
            "image": reddata[i].Image,
            "name": reddata[i].Name
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