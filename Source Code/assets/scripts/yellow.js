$(document).ready(function () {
  $("#plantDetails").hide();
  $("#us-map1").hide();
  $(".mapspace").hide();

  var zoneArr = [];
  zoneArr.push("Foothills");
  localStorage.setItem("zone", JSON.stringify(zoneArr));
  // Tableau
  var divElement = document.getElementById('viz1686081480557');
  var vizElement = divElement.getElementsByTagName('object')[0];
  vizElement.style.height = '850px';

  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);

  const yellowdata = [
    {
      "ID": 1,
      "Name": " Acmispon wrightii",
      "Type": " Herb",
      "Color": " Yellow  Red",
      "Zone": " Foothills  Montane",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1lowr.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT MN MT  "
    },
    {
      "ID": 2,
      "Name": " Agoseris glauca",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine  Alpine",
      "Habitat": " Openings",
      "Flowering": " May-Oct",
      "Leaf": " Basal  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1aggl.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 3,
      "Name": " Agoseris parviflora",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Openings  Shrublands  Woodlands",
      "Flowering": " May-Jun",
      "Leaf": " Basal  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1agpa14.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 4,
      "Name": " Alloberberis fremontii",
      "Type": " Shrub  Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Shrublands  Woodlands  Openings",
      "Flowering": " Mar-Jun",
      "Leaf": " Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1mafr.jpg",
      "Family": "Barberry Family",
      "state": "AZ CA CO NM NN NV OK TX UT  "
    },
    {
      "ID": 5,
      "Name": " Alyssum simplex",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills",
      "Habitat": " Disturbed  Openings",
      "Flowering": " Apr-Jun",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Yellow Enlarged Photos/4alpa7.jpg",
      "Family": "Mustard Family",
      "state": "AZ CA CO NM NN NV OK TX UT  "
    },
    {
      "ID": 6,
      "Name": " Amauriopsis dissecta",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Disturbed  Openings",
      "Flowering": " Jul-Oct",
      "Leaf": " Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1badi.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 7,
      "Name": " Arceuthobium vaginatumcryptopodum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane",
      "Habitat": " Woodlands",
      "Flowering": " May-Jul",
      "Leaf": " Opposite or  Absent  Simple  Entire  Round",
      "Image": "https://www.swcoloradowildflowers.com/../Tree Enlarged Photos/10pipo.jpg",
      "Family": "Sandalwood Family",
      "state": "AZ CO NM UT  "
    },
    {
      "ID": 8,
      "Name": " Arnica chamissonis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Openings  Woodlands  Wetlands",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Opposite  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1arch3.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 9,
      "Name": " Arnica cordifolia",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Jun-Oct",
      "Leaf": " Opposite or  Basal  Simple  Entire or  Uneven  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1arco9.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 10,
      "Name": " Arnica latifolia",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Woodlands  Openings  Rocky",
      "Flowering": " Jun-Aug",
      "Leaf": " Opposite  Simple  Entire or  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1arla8.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 11,
      "Name": " Arnica mollis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Woodlands  Openings Rocky",
      "Flowering": " Jul-Sep",
      "Leaf": " Opposite  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1armo4.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 12,
      "Name": " Arnica parryi",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Opposite  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1arpa13.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 13,
      "Name": " Arnica rydbergii",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Openings  Rocky",
      "Flowering": " Jun-Sep",
      "Leaf": " Opposite  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1arry.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 14,
      "Name": " Artemisia borealis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Openings  Rocky",
      "Flowering": " Jun-Sep",
      "Leaf": " Alternate  Simple  Uneven or  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1arbo4.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 15,
      "Name": " Artemisia carruthii",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Shrublands  Openings  Woodlands",
      "Flowering": " Jun-Sep",
      "Leaf": " Alternate  Simple or  Compound  Uneven or  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1arca14.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO IN KS MI MO NE NM NV NY OK RI TX UT  "
    },
    {
      "ID": 16,
      "Name": " Artemisia dracunculus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Rocky  Openings  Disturbed",
      "Flowering": " Jun-Oct",
      "Leaf": " Alternate  Simple  Uneven or  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1oldr.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 17,
      "Name": " Artemisia filifolia",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Shrublands  Openings",
      "Flowering": " Jul-Oct",
      "Leaf": " Alternate  Simple  Uneven or  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1arfi2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO CT KS NE NM NV NY OK SD TX UT WY  "
    },
    {
      "ID": 18,
      "Name": " Artemisia franserioides",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Rocky  Woodlands  Openings",
      "Flowering": " Jul-Oct",
      "Leaf": " Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1arfr3.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM  "
    },
    {
      "ID": 19,
      "Name": " Artemisia frigida",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Openings  Shrublands",
      "Flowering": " Jun-Sep",
      "Leaf": " Alternate  Simple  Uneven or  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1arfr.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 20,
      "Name": " Artemisia ludoviciana",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Openings  Woodlands",
      "Flowering": " Jun-Oct",
      "Leaf": " Alternate  Simple or  Compound  Uneven or  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1arlu.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 21,
      "Name": " Artemisia scopulorum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Rocky  Openings",
      "Flowering": " Jul-Sep",
      "Leaf": " Alternate  Simple or  Compound  Uneven or  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1arsc.jpg",
      "Family": "Sunflower Family",
      "state": "CO MT NM NV UT WY  "
    },
    {
      "ID": 22,
      "Name": " Asclepias cryptoceras",
      "Type": " Herb",
      "Color": " Yellow  Red",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Shrublands  Openings  Woodlands",
      "Flowering": " Apr-Jun",
      "Leaf": " Opposite  Simple  Entire  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1ascr.jpg",
      "Family": "Dogbane Family",
      "state": "AZ CA CO ID NV OR UT WA WY  "
    },
    {
      "ID": 23,
      "Name": " Asclepias macrosperma",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Openings  Woodlands",
      "Flowering": " Apr-Jun",
      "Leaf": " Opposite  Simple  Entire  Round",
      "Image": "https://pnwwildflowers2.appspot.com.storage.googleapis.com/img/Asclepias_involucrata.jpg",
      "Family": "Dogbane Family",
      "state": "AZ CO NM UT  "
    },
    {
      "ID": 24,
      "Name": " Astragalus deterior",
      "Type": " Herb",
      "Color": " Yellow  Blue  Red",
      "Zone": " Foothills",
      "Habitat": " Openings",
      "Flowering": " Apr-Jun",
      "Leaf": " Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1asde4.jpg",
      "Family": "Pea Family",
      "state": "CO  "
    },
    {
      "ID": 25,
      "Name": " Astragalus lonchocarpus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Woodlands Shrublands  Openings",
      "Flowering": " May-Jul",
      "Leaf": " Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1aslo3.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM NV UT  "
    },
    {
      "ID": 26,
      "Name": " Astragalus praelongus",
      "Type": " Herb",
      "Color": " Yellow  White",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Openings",
      "Flowering": " Apr-Jul",
      "Leaf": " Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1aspr5.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM NV TX UT  "
    },
    {
      "ID": 27,
      "Name": " Balsamorhiza sagittata",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Woodlands  Openings  Shrublands",
      "Flowering": " Apr-Jun",
      "Leaf": " Basal or  Alternate or  Opposite  Simple  Entire  Long or  Round",
      "Image": "https://www.gardenia.net/storage/app/public/uploads/images/detail/AdXT2HoKol4Dirb4DcREwJuxJcyVEu9G6seb3Row.webp",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 28,
      "Name": " Bidens cernua",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Openings  Disturbed  Wetlands",
      "Flowering": " Jul-Oct",
      "Leaf": " Opposite  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1bice.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 29,
      "Name": " Boechera sp.",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Shrublands  Woodlands",
      "Flowering": " Mar-Aug",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1bosp.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT  "
    },
    {
      "ID": 30,
      "Name": " Brickellia grandiflora",
      "Type": " Shrub  Herb",
      "Color": " Yellow  White",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Rocky  Openings",
      "Flowering": " Jul-Oct",
      "Leaf": " Alternate or  Opposite  Simple  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1brgr.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 31,
      "Name": " Brickellia oblongifolialinifolia",
      "Type": " Shrub  Herb",
      "Color": " Yellow  White  Red  Green  Blue",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Rocky  Openings",
      "Flowering": " May-Jul",
      "Leaf": "Alternate Simple Uneven Long",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Brickellia-oblongifolia.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 32,
      "Name": " Camelina microcarpa",
      "Type": " Herb",
      "Color": " Yellow  White",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Openings  Disturbed",
      "Flowering": " Apr-Jul",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1cami2.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 33,
      "Name": " Castilleja lineata",
      "Type": " Herb",
      "Color": " Yellow  Green",
      "Zone": " Montane",
      "Habitat": " Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1cali5.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM  "
    },
    {
      "ID": 34,
      "Name": " Castilleja occidentalis",
      "Type": " Herb",
      "Color": " Yellow  White  Green",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Rocky  Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://pnwwildflowers2.appspot.com.storage.googleapis.com/img/Castilleja_occidentalis.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 35,
      "Name": " Castilleja septentrionalis",
      "Type": " Herb",
      "Color": " Yellow  White  Green",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1casu12.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 36,
      "Name": " Ceratocephala testiculata",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings  Woodlands  Shrublands  Disturbed",
      "Flowering": " Mar-May",
      "Leaf": " Basal  Compound  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1ceor.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 37,
      "Name": " Chaenactis douglasiidouglasii",
      "Type": " Herb",
      "Color": " Yellow  White",
      "Zone": " Foothills",
      "Habitat": " Woodlands  Openings",
      "Flowering": " May-Aug",
      "Leaf": " Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1chdo.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 38,
      "Name": " Chylismia scapoideascapoidea",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Woodlands  Rocky  Openings",
      "Flowering": " May-Jul",
      "Leaf": " Basal  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1casc18.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 39,
      "Name": " Chylismia walkeriwalkeri",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Woodlands  Rocky",
      "Flowering": " Apr-Jun",
      "Leaf": " Basal  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1cawa3.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 40,
      "Name": " Cirsium parryi",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Jul-Oct",
      "Leaf": " Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1cipa.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM  "
    },
    {
      "ID": 41,
      "Name": " Cleomella lutea",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Shrublands  Openings  Disturbed",
      "Flowering": " May-Jul",
      "Leaf": " Alternate  Compound  Uneven  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1cllu2.jpg",
      "Family": "Cleome Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 42,
      "Name": " Cleomella palmeriana",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Shrublands  Openings  Disturbed",
      "Flowering": " Apr-Jun",
      "Leaf": " Alternate  Compound  Uneven  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1clpa3.jpg",
      "Family": "Cleome Family",
      "state": "AZ CO NM UT  "
    },
    {
      "ID": 43,
      "Name": " Corallorhiza maculata yellow variety",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Woodlands",
      "Flowering": " May-Aug",
      "Leaf": " Absent or Reduced To Small Bracts",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1coma-yellow.jpg",
      "Family": "Orchid Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 44,
      "Name": " Cordylanthus wrightiiwrightii",
      "Type": " Herb",
      "Color": " Yellow  Red",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings  Woodlands",
      "Flowering": " Jul-Oct",
      "Leaf": " Alternate  Simple or  Compound  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1cowr2.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 45,
      "Name": " Corydalis aureaaurea",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Apr-Aug",
      "Leaf": " Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1coau2.jpg",
      "Family": "Poppy Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 46,
      "Name": " Corydalis aureaoccidentalis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Mar-Jul",
      "Leaf": " Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1cocu2.jpg",
      "Family": "Poppy Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 47,
      "Name": " Crepis acuminata",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings  Woodlands",
      "Flowering": " May-Aug",
      "Leaf": " Basal or  Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1psin4.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 48,
      "Name": " Crepis intermedia",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings  Woodlands",
      "Flowering": " May-Aug",
      "Leaf": " Basal or  Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Yellow Enlarged Photos/6psin4.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 49,
      "Name": " Crepis occidentalis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings  Woodlands",
      "Flowering": " May-Jul",
      "Leaf": " Basal  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1psoc.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 50,
      "Name": " Crepis runcinata",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine  Alpine",
      "Habitat": " Wetlands  Openings",
      "Flowering": " May-Aug",
      "Leaf": " Basal  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1psru2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 51,
      "Name": " Cylindropuntia whippleiwhipplei",
      "Type": " Cactus  Herb",
      "Color": " Yellow  Green",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings  Shrublands  Woodlands",
      "Flowering": " May-Jul",
      "Leaf": " Modified To Spines",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1cywh.jpg",
      "Family": "Cactus Family",
      "state": "AZ CA CO ID NM NV OR TX UT WA  "
    },
    {
      "ID": 52,
      "Name": " Cymopterus glomeratusfendleri",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Shrublands  Woodlands  Openings",
      "Flowering": " Apr-Jun",
      "Leaf": " Basal or  Whorled  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1cyfe.jpg",
      "Family": "Parsley Family",
      "state": "AZ CA CO ID NM NV OR TX UT WA  "
    },
    {
      "ID": 53,
      "Name": " Cymopterus lemmonii",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Woodlands  Openings",
      "Flowering": " May-Oct",
      "Leaf": " Basal  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1psmo.jpg",
      "Family": "Parsley Family",
      "state": "AZ CA CO ID NM NV OR TX UT WA  "
    },
    {
      "ID": 54,
      "Name": " Cymopterus newberryi",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Openings",
      "Flowering": " Apr-Jun",
      "Leaf": " Basal  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1cyne.jpg",
      "Family": "Parsley Family",
      "state": "AZ NM UT  "
    },
    {
      "ID": 55,
      "Name": " Cymopterus purpureus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Shrublands  Woodlands  Openings",
      "Flowering": " Apr-Jun",
      "Leaf": " Basal or  Opposite  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1cypu2.jpg",
      "Family": "Parsley Family",
      "state": "AZ CO NM NV UT  "
    },
    {
      "ID": 56,
      "Name": " Cymopterus terebinthinusalbiflorus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Openings",
      "Flowering": " Apr-Jun",
      "Leaf": " Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Cymopterus-terebinthinus.jpg",
      "Family": "Parsley Family",
      "state": "AZ CO NM NV UT  "
    },
    {
      "ID": 57,
      "Name": " Cypripedium parviflorumpubescens",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Wetlands  Openings",
      "Flowering": " May-Jul",
      "Leaf": "Alternate Simple Entire Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1cycap.jpg",
      "Family": "Orchid Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 58,
      "Name": " Descurainia incana",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Disturbed  Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1dein5.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 59,
      "Name": " Descurainia incisa",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane  Subalpine  Alpine",
      "Habitat": " Disturbed  Openings  Woodlands  Shrublands",
      "Flowering": " May-Aug",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1dein13.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 60,
      "Name": " Descurainia obtusa",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Openings",
      "Flowering": " Apr-Aug",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1deob.jpg",
      "Family": "Mustard Family",
      "state": "AZ CA NM NV  "
    },
    {
      "ID": 61,
      "Name": " Descurainia sophia",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Woodlands  Shrublands  Openings",
      "Flowering": " Mar-Sep",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1deso2.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 62,
      "Name": " Draba aurea",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Openings  Woodlands",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1drau.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 63,
      "Name": " Draba crassa",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Alpine",
      "Habitat": " Openings  Rocky",
      "Flowering": " Jun-Aug",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1drcr.jpg",
      "Family": "Mustard Family",
      "state": "CO MT UT WY  "
    },
    {
      "ID": 64,
      "Name": " Draba crassifolia",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Woodlands  Openings  Rocky",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Yellow Enlarged Photos/2drcr2.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 65,
      "Name": " Draba graminea",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Alpine",
      "Habitat": " Rocky  Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Basal  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1dr.jpg",
      "Family": "Mustard Family",
      "state": "CO  "
    },
    {
      "ID": 66,
      "Name": " Draba spectabilis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine Alpine",
      "Habitat": " Openings  Woodlands",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1drsp.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT WY  "
    },
    {
      "ID": 67,
      "Name": " Draba streptobrachia",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Alpine",
      "Habitat": " Openings  Rocky",
      "Flowering": " Jul-Aug",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Draba-streptobrachia.jpg",
      "Family": "Mustard Family",
      "state": "CO NM  "
    },
    {
      "ID": 68,
      "Name": " Encelia resinifera",
      "Type": " Shrub  Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Openings  Woodlands  Shrublands",
      "Flowering": " May-Jul",
      "Leaf": " Alternate  Simple  Entire  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1enfr.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 69,
      "Name": " Enceliopsis nudicaulis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Openings  Woodlands  Shrublands",
      "Flowering": " Apr-Aug",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1ennu.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CA CO ID NV UT  "
    },
    {
      "ID": 70,
      "Name": " Erigeron aphanactisaphanactis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings  Woodlands  Shrublands",
      "Flowering": " May-Sep",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1erap.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT  "
    },
    {
      "ID": 71,
      "Name": " Eriogonum alatum",
      "Type": " Herb",
      "Color": " Yellow  Green",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Openings  Shrublands  Woodlands",
      "Flowering": " May-Aug",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Eriogonum-alatum.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CO ID KS NE NM OK TX UT WY  "
    },
    {
      "ID": 72,
      "Name": " Eriogonum arcuatumarcuatum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Shrublands  Openings  Woodlands",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1erar25.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CO ID KS NE NM OK TX UT WY  "
    },
    {
      "ID": 73,
      "Name": " Eriogonum hookeri",
      "Type": " Herb",
      "Color": " Yellow  Red",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Shrublands  Woodlands  Rocky  Openings",
      "Flowering": " Jun-Oct",
      "Leaf": " Basal  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1erho.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CA CO ID NM NV OR UT WY  "
    },
    {
      "ID": 74,
      "Name": " Eriogonum inflatum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Openings  Shrublands",
      "Flowering": " Apr-Oct",
      "Leaf": " Basal  Simple  Entire  Round or  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Eriogonum-inflatum.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CA CO NM NV UT WY  "
    },
    {
      "ID": 75,
      "Name": " Eriogonum jamesii",
      "Type": " Herb",
      "Color": " Yellow  White  Red",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Shrublands  Openings  Woodlands",
      "Flowering": " Jun-Oct",
      "Leaf": " Basal  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1erja.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CO KS NM NN OK TX UT WY  "
    },
    {
      "ID": 76,
      "Name": " Eriogonum umbellatum",
      "Type": " Herb",
      "Color": " Yellow  Red",
      "Zone": " Semi-Desert  Foothills  Montane  Subalpine",
      "Habitat": " Openings",
      "Flowering": " May-Oct",
      "Leaf": " Basal  Simple  Entire  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1erum.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 77,
      "Name": " Erysimum capitatum",
      "Type": " Herb",
      "Color": " Yellow  Blue  Red  Orange",
      "Zone": " Semi-Desert  Foothills  Montane  Alpine",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Apr-Sep",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1erca14.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 78,
      "Name": " Erythranthe guttata",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Streamsides",
      "Flowering": " May-Sep",
      "Leaf": " Opposite  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1migu.jpg",
      "Family": "Lopseed Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 79,
      "Name": " Erythranthe rubella",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Openings  Shrublands  Woodlands",
      "Flowering": " Apr-Aug",
      "Leaf": " Opposite  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1miru.jpg",
      "Family": "Lopseed Family",
      "state": "AZ CA CO NM NV TX UT WY  "
    },
    {
      "ID": 80,
      "Name": " Erythranthe suksdorfii",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Openings  Shrublands  Woodlands",
      "Flowering": " Apr-Aug",
      "Leaf": " Opposite  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1misu2.jpg",
      "Family": "Lopseed Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 81,
      "Name": " Erythranthe tilingii",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Streamsides",
      "Flowering": " Jun-Sep",
      "Leaf": " Opposite  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1miti.jpg",
      "Family": "Lopseed Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 82,
      "Name": " Erythronium grandiflorum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Openings",
      "Flowering": " Apr-Jul",
      "Leaf": " Basal  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1ergr.jpg",
      "Family": "Lily Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 83,
      "Name": " Escobaria missouriensis",
      "Type": " Cactus  Herb",
      "Color": " Yellow  Red",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings",
      "Flowering": " Apr-Jun",
      "Leaf": " Modified To Spines",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1comi.jpg",
      "Family": "Cactus Family",
      "state": "AR AZ CO IA ID KS LA MN MT ND NE NM NN OK SD TX UT WY  "
    },
    {
      "ID": 84,
      "Name": " Euphorbia brachycera",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Openings  Woodlands",
      "Flowering": " May-Aug",
      "Leaf": " Alternate or  Whorled  Simple  Entire  Round or  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1eubr.jpg",
      "Family": "Spurge Family",
      "state": "AZ CO ID MN MT ND NE NM NV SD TX UT WY  "
    },
    {
      "ID": 85,
      "Name": " Euphrosyne acerosa",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Rocky  Openings",
      "Flowering": " Aug-Sep",
      "Leaf": "Alternate Simple Entire or Uneven Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1oxac4.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 86,
      "Name": " Frangula obovata",
      "Type": " Shrub  Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Rocky  Openings",
      "Flowering": " May-Jun",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1frbe2.jpg",
      "Family": "Buckthorn Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 87,
      "Name": " Gaillardia aristata",
      "Type": " Herb",
      "Color": " Yellow  Blue",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Openings",
      "Flowering": " May-Nov",
      "Leaf": " Alternate or  Basal  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1gaar.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 88,
      "Name": " Gaillardia pinnatifida",
      "Type": " Herb",
      "Color": " Yellow  Red",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings",
      "Flowering": " Apr-Jul",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1gapi.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM NV OK TX UT  "
    },
    {
      "ID": 89,
      "Name": " Galium coloradoense",
      "Type": " Herb",
      "Color": " Yellow  White  Green",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Shrublands  Woodlands",
      "Flowering": " May-Jul",
      "Leaf": " Whorled  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1gaco2.jpg",
      "Family": "Madder Family",
      "state": "AZ CO NM UT WY  "
    },
    {
      "ID": 90,
      "Name": " Geum aleppicum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1geal3.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 91,
      "Name": " Geum macrophyllum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Openings",
      "Flowering": " May-Aug",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1gema.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 92,
      "Name": " Geum rossiiturbinatum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Openings  Rocky",
      "Flowering": " Jun-Oct",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1acrot.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 93,
      "Name": " Grindelia arizonica",
      "Type": " Herb  Shrub",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings  Disturbed  Shrublands  Woodlands",
      "Flowering": " Jun-Oct",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1grar2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM TX  "
    },
    {
      "ID": 94,
      "Name": " Grindelia hirsutula",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Openings  Disturbed  Shrublands  Woodlands",
      "Flowering": " Jun-Oct",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Grindelia-hirsutula.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 95,
      "Name": " Grindelia nuda",
      "Type": " Herb  Shrub",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings  Disturbed  Shrublands  Woodlands",
      "Flowering": " Jul-Sep",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1grnu.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 96,
      "Name": " Grindelia squarrosa",
      "Type": " Herb  Shrub",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings  Disturbed  Shrublands  Woodlands",
      "Flowering": " Jun-Nov",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1grsq.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 97,
      "Name": " Gutierrezia elegans",
      "Type": " Shrub  Herb",
      "Color": " Yellow",
      "Zone": " Foothills",
      "Habitat": " Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1guel.jpg",
      "Family": "Sunflower Family",
      "state": "CO  "
    },
    {
      "ID": 98,
      "Name": " Gutierrezia microcephala",
      "Type": " Shrub  Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings  Disturbed",
      "Flowering": " Jun-Oct",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1gumi.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CA CO NM NV TX UT  "
    },
    {
      "ID": 99,
      "Name": " Gutierrezia sarothrae",
      "Type": " Shrub  Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings  Disturbed",
      "Flowering": " Jun-Oct",
      "Leaf": "Alternate Simple Entire Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1gusa2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 100,
      "Name": " Helianthella microcephala",
      "Type": " Herb",
      "Color": " Yellow  Blue",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Alternate or  Opposite  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1hemi2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT  "
    },
    {
      "ID": 101,
      "Name": " Helianthella parryi",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Alternate or  Opposite  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1hepa.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT  "
    },
    {
      "ID": 102,
      "Name": " Helianthella quinquenervis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Woodlands  Streamsides",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Alternate or  Opposite  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1hequ2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO ID MT NM NV OR SD UT WY  "
    },
    {
      "ID": 103,
      "Name": " Helianthus annuus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Disturbed  Openings",
      "Flowering": " May-Oct",
      "Leaf": " Opposite or  Alternate  Simple  Entire or  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1hean3.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 104,
      "Name": " Helianthus pauciflorussubrhomboideus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothill  Montane",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Opposite  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1hepa19.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 105,
      "Name": " Heliomeris multifloramultiflora",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Woodlands  Disturbed  Openings",
      "Flowering": " May-Oct",
      "Leaf": " Alternate or  Opposite  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Heliomeris-multiflora.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 106,
      "Name": " Heterotheca schneideri",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Openings  Rocky",
      "Flowering": " Jun-Oct",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1hepu14.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 107,
      "Name": " Heterotheca villosa",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Openings  Disturbed",
      "Flowering": " May-Nov",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1hevi4.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 108,
      "Name": " Heterotheca zionensis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Shrublands  Woodlands",
      "Flowering": " Jun-Oct",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1hezi.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO ID NM UT  "
    },
    {
      "ID": 109,
      "Name": " Heuchera parvifolia",
      "Type": " Herb",
      "Color": " Yellow  White",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Rocky  Woodlands  Shrublands  Openings",
      "Flowering": " May-Aug",
      "Leaf": " Basal  Simple  Uneven  Round",
      "Image": "https://www.swcoloradowildflowers.com/../White Enlarged Photos/3hepa11.jpg",
      "Family": "Saxifrage Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 110,
      "Name": " Hieracium fendleri",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Woodlands",
      "Flowering": " May-Aug",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1chfe5.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM TX UT WY  "
    },
    {
      "ID": 111,
      "Name": " Hieracium triste",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Woodlands  Openings  Shrublands",
      "Flowering": " Jul-Sep",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1chtrg.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 112,
      "Name": " Hymenopappus filifolius",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Woodlands  Openings",
      "Flowering": " May-Aug",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1hyfi.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 113,
      "Name": " Hymenoxys grandiflora",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Alpine",
      "Habitat": " Rocky  Openings",
      "Flowering": " Jun-Oct",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1rygr2.jpg",
      "Family": "Sunflower Family",
      "state": "CO NM  "
    },
    {
      "ID": 114,
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
      "ID": 115,
      "Name": " Hymenoxys richardsonii",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings  Shrublands  Woodlands",
      "Flowering": " May-Sep",
      "Leaf": " Basal or  Alternate  Simple or  Compound  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1hyrif.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 116,
      "Name": " Hypericum scouleri",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Wetlands",
      "Flowering": " Jun-Sep",
      "Leaf": "Opposite Simple Entire Long",
      "Image": "https://www.swcoloradowildflowers.com/../Yellow Enlarged Photos/4hyfo.jpg",
      "Family": "St. Johnswort Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 117,
      "Name": " Isocoma pluriflora",
      "Type": " Shrub  Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands",
      "Flowering": " Jul-Oct",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1ispl.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM TX  "
    },
    {
      "ID": 118,
      "Name": " Isocoma rusbyi",
      "Type": " Shrub  Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Woodlands  Disturbed",
      "Flowering": " Jul-Sep",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1isru2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT  "
    },
    {
      "ID": 119,
      "Name": " Ivesia gordoniigordonii",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Openings  Rocky",
      "Flowering": " May-Aug",
      "Leaf": "Basal Compound Uneven Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1ivgo.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT  "
    },
    {
      "ID": 120,
      "Name": " Kallstroemia parviflora",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings",
      "Flowering": " Jul-Oct",
      "Leaf": "Opposite Compound Uneven Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1kapa.jpg",
      "Family": "Caltrop Family",
      "state": "AZ CA CO DC IL KS MD MO MS NM NV OK PA TX UT  "
    },
    {
      "ID": 121,
      "Name": " Lactuca serriola",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings  Disturbed  Shrublands  Woodlands",
      "Flowering": " Jul-Sep",
      "Leaf": " Basal or  Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1lase.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 122,
      "Name": " Laennecia schiedeana",
      "Type": " Herb",
      "Color": " Yellow  White",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings  Disturbed Woodlands",
      "Flowering": " Jul-Sep",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1laco13.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM  "
    },
    {
      "ID": 123,
      "Name": " Linaria dalmatica",
      "Type": " Herb",
      "Color": " Yellow  Orange",
      "Zone": " Foothills  Montane",
      "Habitat": " Disturbed Openings",
      "Flowering": " May-Sep",
      "Leaf": " Alternate or  Opposite or  Whorled  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1lige.jpg",
      "Family": "Plantain Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 124,
      "Name": " Linaria vulgaris",
      "Type": " Herb",
      "Color": " Yellow  Orange",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Disturbed Openings",
      "Flowering": " May-Sep",
      "Leaf": " Alternate or  Opposite or  Whorled  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1livu2.jpg",
      "Family": "Plantain Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 125,
      "Name": " Linum aristatum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Openings",
      "Flowering": " Apr-Oct",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1liar3.jpg",
      "Family": "Flax Family",
      "state": "AZ CO NM TX UT  "
    },
    {
      "ID": 126,
      "Name": " Linum puberulum",
      "Type": " Herb",
      "Color": " Yellow  Orange",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Woodlands  Shrublands  Openings",
      "Flowering": " Apr-Oct",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1mepu9.jpg",
      "Family": "Flax Family",
      "state": "AZ CA CO NE NM NV TX UT WY  "
    },
    {
      "ID": 127,
      "Name": " Linum subteres",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings",
      "Flowering": " May-Sep",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1lisu5.jpg",
      "Family": "Flax Family",
      "state": "AZ NV UT  "
    },
    {
      "ID": 128,
      "Name": " Lithospermum incisum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Shrublands  Woodlands",
      "Flowering": " Mar-Jul",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1liin2.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 129,
      "Name": " Lithospermum multiflorum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Lithospermum-multiflorum.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ CO NM OK TX UT WY  "
    },
    {
      "ID": 130,
      "Name": " Lithospermum ruderale",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Woodlands",
      "Flowering": " Apr-Jul",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1liru4.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 131,
      "Name": " Lomatium dissectum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Shrublands  Woodlands  Openings",
      "Flowering": " Apr-Jun",
      "Leaf": " Basal or  Opposite  Compound  Uneven  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1lodi.jpg",
      "Family": "Parsley Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 132,
      "Name": " Lomatium grayi",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Shrublands  Woodlands  Openings",
      "Flowering": " Mar-Jun",
      "Leaf": " Basal or  Opposite  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1logr.jpg",
      "Family": "Parsley Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 133,
      "Name": " Lomatium latilobum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands",
      "Flowering": " Mar-Jun",
      "Leaf": " Basal  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Lomatium-latilobum.jpg",
      "Family": "Parsley Family",
      "state": "CO UT  "
    },
    {
      "ID": 134,
      "Name": " Lomatium minimum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane",
      "Habitat": " Openings",
      "Flowering": " May-Jul",
      "Leaf": " Basal  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1lomi2.jpg",
      "Family": "Parsley Family",
      "state": "UT  "
    },
    {
      "ID": 135,
      "Name": " Lomatium parryi",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Shrublands",
      "Flowering": " Mar-Jun",
      "Leaf": " Basal  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1lopa.jpg",
      "Family": "Parsley Family",
      "state": "AZ CA NN NV UT  "
    },
    {
      "ID": 136,
      "Name": " Lomatium triternatum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills",
      "Habitat": " Openings  Woodlands",
      "Flowering": " Apr-Jul",
      "Leaf": " Basal  Compound  Uneven  Round",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Lomatium-triternatum.jpg",
      "Family": "Parsley Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 137,
      "Name": " Lonicera involucrata",
      "Type": " Shrub  Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Woodlands",
      "Flowering": " May-Aug",
      "Leaf": " Opposite  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1diin5.jpg",
      "Family": "Honeysuckle Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 138,
      "Name": " Madia glomerata",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings  Disturbed",
      "Flowering": " May-Sep",
      "Leaf": " Alternate or  Opposite  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1magl2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 139,
      "Name": " Mahonia repens",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Apr-Aug",
      "Leaf": " Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1mare11.jpg",
      "Family": "Barberry Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 140,
      "Name": " Malacothrix sonchoides",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings",
      "Flowering": " May-Jul",
      "Leaf": " Basal or  Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1maso.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CA CO ID NM NV NY OR UT WY  "
    },
    {
      "ID": 141,
      "Name": " Medicago lupulina",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Disturbed Woodlands",
      "Flowering": " May-Oct",
      "Leaf": " Alternate  Compound  Uneven  Round or  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1melu.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 142,
      "Name": " Melilotus officinalis",
      "Type": " Herb",
      "Color": " Yellow  White",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Disturbed  Openings",
      "Flowering": " May-Oct",
      "Leaf": " Alternate  Compound  Uneven  Round or  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1meof.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 143,
      "Name": " Mentzelia albicaulis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Openings",
      "Flowering": " Mar-Jul",
      "Leaf": " Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1acdi2.jpg",
      "Family": "Loasa Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 144,
      "Name": " Mentzelia multiflora",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Openings",
      "Flowering": " Apr-Nov",
      "Leaf": " Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1nupt.jpg",
      "Family": "Loasa Family",
      "state": "CO NE NM WY  "
    },
    {
      "ID": 145,
      "Name": " Mentzelia pterosperma",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Openings",
      "Flowering": " Apr-Nov",
      "Leaf": " Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1mept.jpg",
      "Family": "Loasa Family",
      "state": "AZ CA CO NV UT  "
    },
    {
      "ID": 146,
      "Name": " Mentzelia rusbyi",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1meru.jpg",
      "Family": "Loasa Family",
      "state": "AZ CO NM UT WY  "
    },
    {
      "ID": 147,
      "Name": " Navarretia breweri",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings  Woodlands",
      "Flowering": " Apr-Aug",
      "Leaf": " Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1nabr.jpg",
      "Family": "Phlox Family",
      "state": "AZ CA CO ID NV OR UT WA WY  "
    },
    {
      "ID": 148,
      "Name": " Nuphar polysepala",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Ponds",
      "Flowering": " Jun-Sep",
      "Leaf": "Basal  Simple  Entire  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1nupo2.jpg",
      "Family": "Water-Lily Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 149,
      "Name": " Oenothera elatahirsutissima",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Wetlands  Openings  Disturbed",
      "Flowering": " May-Sep",
      "Leaf": " Basal or  Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1oeel.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ CO KS NE NM SD UT WY  "
    },
    {
      "ID": 150,
      "Name": " Oenothera flava",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Openings",
      "Flowering": " May-Aug",
      "Leaf": " Basal  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1oefl.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 151,
      "Name": " Oenothera lavandulifolia",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Shrublands  Openings",
      "Flowering": " Apr-Oct",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1cala.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 152,
      "Name": " Oenothera longissima",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Rocky  Streamsides  Openings",
      "Flowering": " May-Sep",
      "Leaf": " Basal or  Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1oelo.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ CA CO NM NV UT  "
    },
    {
      "ID": 153,
      "Name": " Opuntia fragilis",
      "Type": " Cactus  Herb",
      "Color": " Yellow  Green",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings  Woodlands",
      "Flowering": " May-Aug",
      "Leaf": " Modified To Spines",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1opfr.jpg",
      "Family": "Cactus Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 154,
      "Name": " Opuntia phaeacantha",
      "Type": " Cactus  Herb",
      "Color": " Yellow  Red",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings",
      "Flowering": " May-Jul",
      "Leaf": " Modified To Spines",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1opph.jpg",
      "Family": "Cactus Family",
      "state": "AZ CA CO KS NM NN NV OK SD TX UT  "
    },
    {
      "ID": 155,
      "Name": " Opuntia polyacantha",
      "Type": " Cactus  Herb",
      "Color": " Yellow  Red",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Openings",
      "Flowering": " May-Jul",
      "Leaf": " Modified To Spines",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1oppo.jpg",
      "Family": "Cactus Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 156,
      "Name": " Oreocarya flava",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings",
      "Flowering": " Apr-Jun",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Oreocarya-flava.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 157,
      "Name": " Oreocarya fulvocanescens",
      "Type": " Herb",
      "Color": " Yellow  White",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings",
      "Flowering": " Apr-Jun",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1orfu3.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 158,
      "Name": " Oreochrysum parryi",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Woodlands",
      "Flowering": " Jun-Oct",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Yellow Enlarged Photos/5orpa3.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM NV UT WY  "
    },
    {
      "ID": 159,
      "Name": " Oreoxis alpinaalpina",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Rocky  Openings",
      "Flowering": " May-Aug",
      "Leaf": " Basal  Compound  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Oreoxis-alpina.jpg",
      "Family": "Parsley Family",
      "state": "AZ CO NM NV UT WY  "
    },
    {
      "ID": 160,
      "Name": " Oreoxis bakeri",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Alpine",
      "Habitat": " Rocky  Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1orba.jpg",
      "Family": "Parsley Family",
      "state": "CO NM UT  "
    },
    {
      "ID": 161,
      "Name": " Orthocarpus luteus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Woodlands  Shrublands  Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1orlu2.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 162,
      "Name": " Osmorhiza occidentalis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Alternate  Compound  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1osoc.jpg",
      "Family": "Parsley Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 163,
      "Name": " Oxalis dillenii",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings",
      "Flowering": " May-Oct",
      "Leaf": " Alternate or  Whorled  Compound  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1oxdi2.jpg",
      "Family": "Wood Sorrel Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 164,
      "Name": " Packera dimorphophylla",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Wetlands  Openings  Rocky",
      "Flowering": " Jun-Aug",
      "Leaf": " Alternate or  Basal  Simple  Entire or  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1padi11.jpg",
      "Family": "Sunflower Family",
      "state": "CO ID MT NM NV UT WY  "
    },
    {
      "ID": 165,
      "Name": " Packera mancosana",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane",
      "Habitat": " Openings",
      "Flowering": " Apr-Jun",
      "Leaf": " Basal  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Yellow Enlarged Photos/3pama.jpg",
      "Family": "Sunflower Family",
      "state": "CO ID MT NM NV UT WY  "
    },
    {
      "ID": 166,
      "Name": " Packera multilobata",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Woodlands  Openings",
      "Flowering": " May-Jul",
      "Leaf": " Alternate or  Basal  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1pamu11.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CA CO ID NM NV UT WY  "
    },
    {
      "ID": 167,
      "Name": " Packera neomexicanamutabilis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Woodlands  Openings",
      "Flowering": " May-Aug",
      "Leaf": " Alternate or  Basal  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1pane7.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CA CO ID NM NV UT WY  "
    },
    {
      "ID": 168,
      "Name": " Packera pseudaurea",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane",
      "Habitat": " Wetlands",
      "Flowering": " May-Aug",
      "Leaf": " Alternate or  Basal  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1paps5.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 169,
      "Name": " Packera streptanthifolia",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Woodlands  Openings",
      "Flowering": " May-Aug",
      "Leaf": " Alternate or  Basal  Simple  Uneven or  Entire  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1paoo.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 170,
      "Name": " Packera werneriifolia",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Openings  Rocky",
      "Flowering": " Jun-Aug",
      "Leaf": " Basal  Simple  Uneven or  Entire  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1pawe4.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CA CO ID MT NM NV UT WY  "
    },
    {
      "ID": 171,
      "Name": " Pectis angustifoliaangustifolia",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Openings  Shrublands",
      "Flowering": " Jun-Oct",
      "Leaf": " Whorled or  Opposite  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1pean.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 172,
      "Name": " Pedicularis bracteosapaysoniana",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Pedicularis-bracteosa.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 173,
      "Name": " Pedicularis parryiparryi",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1pepa3.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 174,
      "Name": " Pedicularis procera",
      "Type": " Herb",
      "Color": " Yellow  Red",
      "Zone": " Montane  Subalpine",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1pepr7.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM SD UT WY  "
    },
    {
      "ID": 175,
      "Name": " Pediocactus simpsonii",
      "Type": " Cactus  Herb",
      "Color": " Yellow  Red",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Openings  Shrublands  Woodlands",
      "Flowering": " Apr-Jul",
      "Leaf": " Modified To Spines",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1pesi.jpg",
      "Family": "Cactus Family",
      "state": "AZ CO ID MT NM NV SD UT WY  "
    },
    {
      "ID": 176,
      "Name": " Petradoria pumilagraminea",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills",
      "Habitat": " Disturbed  Woodlands  Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1pepug.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 177,
      "Name": " Petradoria pumilapumila",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills",
      "Habitat": " Disturbed  Woodlands  Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1pepu7.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 178,
      "Name": " Phoradendron juniperinum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Woodlands",
      "Flowering": " May-Sep",
      "Leaf": " Opposite or  Absent  Simple  Entire  Round",
      "Image": "https://www.swcoloradowildflowers.com/../Tree Enlarged Photos/6saos.jpg",
      "Family": "Sandalwood Family",
      "state": "AZ CA CO NM NV OR TX UT  "
    },
    {
      "ID": 179,
      "Name": " Physaria acutifolia",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Shrublands  Woodlands  Openings",
      "Flowering": " Feb-Jun",
      "Leaf": " Basal or  Alternate  Simple  Entire  Round or  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1phac1.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO ID MT NM NV UT WY  "
    },
    {
      "ID": 180,
      "Name": " Physaria fendleri",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands",
      "Flowering": " Apr-Jun",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1lefe.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO ID MT NM NV UT WY  "
    },
    {
      "ID": 181,
      "Name": " Physaria newberryinewberryi",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Openings",
      "Flowering": " Apr-May",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1phnen.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO ID MT NM NV UT WY  "
    },
    {
      "ID": 182,
      "Name": " Physaria pulvinata",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills",
      "Habitat": " Openings",
      "Flowering": " May-Jun",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1phpu.jpg",
      "Family": "Mustard Family",
      "state": "CO  "
    },
    {
      "ID": 183,
      "Name": " Physaria rectipes",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Woodlands",
      "Flowering": " Apr-Jul",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1lere3.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT  "
    },
    {
      "ID": 184,
      "Name": " Physaria scrotiformis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Alpine",
      "Habitat": " Rocky  Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1phsc.jpg",
      "Family": "Mustard Family",
      "state": "CO  "
    },
    {
      "ID": 185,
      "Name": " Picradeniopsis multiflora",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills",
      "Habitat": " Shrublands  Openings",
      "Flowering": " Aug-Oct",
      "Leaf": " Opposite or  Alternate  Simple or  Compound  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Schkuhria-multiflora.jpg",
      "Family": "Sunflower Family",
      "state": "CO  "
    },
    {
      "ID": 186,
      "Name": " Picrothamnus desertorum",
      "Type": " Shrub  Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Openings",
      "Flowering": " Apr-Jun",
      "Leaf": " Alternate  Compound  Uneven  Round or  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Picrothamnus-desertorum.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CA CO ID MT NM NV OR UT WY  "
    },
    {
      "ID": 187,
      "Name": " Platyschkuhria integrifoliaoblongifolia",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Openings",
      "Flowering": " May-Jul",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Platyschkuhria-integrifolia.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 188,
      "Name": " Podistera eastwoodiae",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Openings  Woodlands",
      "Flowering": " Jun-Aug",
      "Leaf": " Basal  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Yellow Enlarged Photos/5poea.jpg",
      "Family": "Parsley Family",
      "state": "CO NM UT  "
    },
    {
      "ID": 189,
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
      "ID": 190,
      "Name": " Potentilla concinna",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine  Alpine",
      "Habitat": " Openings  Woodlands",
      "Flowering": " May-Aug",
      "Leaf": " Basal  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1pocob.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 191,
      "Name": " Potentilla glaucophylla",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpin  Alpine",
      "Habitat": " Openings",
      "Flowering": " May-Sep",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1pogl18.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 192,
      "Name": " Potentilla gracilis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Openings",
      "Flowering": " May-Aug",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1pogr9.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 193,
      "Name": " Potentilla hippiana",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Openings  Woodlands",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1pohi.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 194,
      "Name": " Potentilla nivea",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Alpine",
      "Habitat": " Rocky  Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1poni2.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 195,
      "Name": " Potentilla pensylvanica",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Openings  Rocky",
      "Flowering": " May-Aug",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1pope8.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 196,
      "Name": " Potentilla plattensis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane",
      "Habitat": " Wetlands  Openings",
      "Flowering": " May-Aug",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1popl.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 197,
      "Name": " Potentilla pulcherrima",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1popu9.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 198,
      "Name": " Potentilla rubricaulis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Alpine",
      "Habitat": " Rocky  Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1poru3.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 199,
      "Name": " Proatriplex pleiantha",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Openings",
      "Flowering": " Mar-Jun",
      "Leaf": " Opposite or  Alternate  Simple  Entire  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1atar2.jpg",
      "Family": "Amaranth Family",
      "state": "CO NM NN UT  "
    },
    {
      "ID": 200,
      "Name": " Psilostrophe sparsiflora",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Woodlands  Shrublands",
      "Flowering": " Apr-Sep",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1pssp.jpg",
      "Family": "Sunflower Family",
      "state": "AZ UT  "
    },
    {
      "ID": 201,
      "Name": " Pyrrocoma croceacrocea",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings  Woodlands",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1pycr.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 202,
      "Name": " Pyrrocoma uniflorauniflora",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Openings  Woodlands",
      "Flowering": " Jul-Aug",
      "Leaf": "Basal or Alternate  Simple  Entire or Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1pyun2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 203,
      "Name": " Ranunculus alismifoliusmontanus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Openings  Wetlands  Streamsides",
      "Flowering": " May-Aug",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1raal.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 204,
      "Name": " Ranunculus cymbalaria",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Wetlands  Streamsides  Ponds  Openings",
      "Flowering": " May-Aug",
      "Leaf": " Basal  Simple  Entire or  Uneven  Round or  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1racy.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 205,
      "Name": " Ranunculus eschscholtzii",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Woodlands  Openings  Wetlands  Streamsides",
      "Flowering": " Jun-Aug",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Round or  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1raes.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 206,
      "Name": " Ranunculus glaberrimusellipticus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings  Wetlands  Streamsides",
      "Flowering": " Apr-Jun",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1ragl.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 207,
      "Name": " Ranunculus inamoenusinamoenus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Openings  Wetlands  Streamsides  Woodlands",
      "Flowering": " Apr-Sep",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1rain.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 208,
      "Name": " Ranunculus macauleyimacauleyi",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Openings  Wetlands  Streamsides",
      "Flowering": " Jun-Aug",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1rama.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 209,
      "Name": " Ranunculus uncinatus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane",
      "Habitat": " Woodlands  Openings  Wetlands  Streamsides",
      "Flowering": " Jun-Aug",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Round or  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1raun.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 210,
      "Name": " Rhamnus smithii",
      "Type": " Shrub  Herb",
      "Color": " Yellow",
      "Zone": " Foothills",
      "Habitat": " Woodlands  Openings",
      "Flowering": " May-Jul",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1rhsm.jpg",
      "Family": "Buckthorn Family",
      "state": "CO NM  "
    },
    {
      "ID": 211,
      "Name": " Rorippa alpina",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Wetlands  Streamsides",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1roal.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 212,
      "Name": " Rudbeckia laciniataampla",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Streamsides",
      "Flowering": " Jun-Sep",
      "Leaf": " Alternate  Simple or  Compound  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Yellow Enlarged Photos/3ruam9.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 213,
      "Name": " Saxifraga chrysantha",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Wetlands  Rocky  Openings",
      "Flowering": " Jul-Aug",
      "Leaf": " Basal or  Alternate  Simple  Uneven or  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1sach4.jpg",
      "Family": "Saxifrage Family",
      "state": "CO MT NM UT WY  "
    },
    {
      "ID": 214,
      "Name": " Saxifraga flagellariscrandallii",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Wetlands  Rocky  Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1safl6.jpg",
      "Family": "Saxifrage Family",
      "state": "CO MT NM UT WY  "
    },
    {
      "ID": 215,
      "Name": " Scabrethia scabra",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Shrublands  Openings",
      "Flowering": " May-Aug",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1scsc.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 216,
      "Name": " Sclerocactus whipplei",
      "Type": " Cactus  Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Woodlands  Openings  Shrublands",
      "Flowering": " Mar-Jun",
      "Leaf": " Modified To Spines",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1scwh.jpg",
      "Family": "Cactus Family",
      "state": "AZ NN UT  "
    },
    {
      "ID": 217,
      "Name": " Scorzonera laciniata",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills",
      "Habitat": " Disturbed",
      "Flowering": " Apr-Jul",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1scla6.jpg",
      "Family": "Sunflower Family",
      "state": "CO KS MT NE NM TX WY  "
    },
    {
      "ID": 218,
      "Name": " Sedum lanceolatum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine  Alpine",
      "Habitat": " Rocky  Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Alternate  Simple  Entire  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1amla.jpg",
      "Family": "Stonecrop Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 219,
      "Name": " Senecio amplectensamplectens",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Rocky  Openings",
      "Flowering": " Jul-Aug",
      "Leaf": " Basal or  Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1liam4.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 220,
      "Name": " Senecio amplectensholmii",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Openings  Rocky",
      "Flowering": " Jul-Aug",
      "Leaf": " Basal or  Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Yellow Enlarged Photos/2liho2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 221,
      "Name": " Senecio atratus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Wetlands  Disturbed  Openings",
      "Flowering": " Jul-Sep",
      "Leaf": " Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Yellow Enlarged Photos/2seat.jpg",
      "Family": "Sunflower Family",
      "state": "CO NM UT WY  "
    },
    {
      "ID": 222,
      "Name": " Senecio bigeloviihallii",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Openings",
      "Flowering": " Jul-Sep",
      "Leaf": " Alternate  Simple  Uneven or  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1libih.jpg",
      "Family": "Sunflower Family",
      "state": "CO NM UT WY  "
    },
    {
      "ID": 223,
      "Name": " Senecio blitoides",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Rocky  Openings",
      "Flowering": " Jul-Sep",
      "Leaf": " Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Yellow Enlarged Photos/5sefr3.jpg",
      "Family": "Sunflower Family",
      "state": "CO NM UT WY  "
    },
    {
      "ID": 224,
      "Name": " Senecio crassulus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Openings",
      "Flowering": " Jul-Sep",
      "Leaf": " Basal or  Alternate  Simple  Uneven or  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1secr.jpg",
      "Family": "Sunflower Family",
      "state": "CO ID MT NM NV OR SD UT WA WY  "
    },
    {
      "ID": 225,
      "Name": " Senecio eremophiluskingii",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Disturbed  Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1seer2.jpg",
      "Family": "Sunflower Family",
      "state": "CO ID MT NM NV OR SD UT WA WY  "
    },
    {
      "ID": 226,
      "Name": " Senecio flaccidusflaccidus",
      "Type": " Shrub  Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Openings",
      "Flowering": " May-Sep",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1sefl.jpg",
      "Family": "Sunflower Family",
      "state": "CO ID MT NM NV OR SD UT WA WY  "
    },
    {
      "ID": 227,
      "Name": " Senecio inexpectatus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Rocky  Openings",
      "Flowering": " Jul-Sep",
      "Leaf": " Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1sefri.jpg",
      "Family": "Sunflower Family",
      "state": "CO ID MT NM NV OR SD UT WA WY  "
    },
    {
      "ID": 228,
      "Name": " Senecio integerrimusexaltatus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings  Woodlands",
      "Flowering": " May-Jul",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Senecio-integerrimus.jpg",
      "Family": "Sunflower Family",
      "state": "CO ID MT NM NV OR SD UT WA WY  "
    },
    {
      "ID": 229,
      "Name": " Senecio serraadmirabilis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Woodlands  Openings  Streamsides",
      "Flowering": " Jun-Sep",
      "Leaf": " Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Yellow Enlarged Photos/4sese2.jpg",
      "Family": "Sunflower Family",
      "state": "CO ID MT NM NV OR SD UT WA WY  "
    },
    {
      "ID": 230,
      "Name": " Senecio soldanella",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Alpine",
      "Habitat": " Rocky  Openings",
      "Flowering": " Jul-Aug",
      "Leaf": " Basal  Simple  Uneven or  Entire  Round or  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Yellow Enlarged Photos/2liso.jpg",
      "Family": "Sunflower Family",
      "state": "CO NM  "
    },
    {
      "ID": 231,
      "Name": " Senecio spartioides",
      "Type": " Shrub  Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings  Shrublands",
      "Flowering": " Jun-Oct",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1sesp3.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CA CO NE NM NV SD TX UT WY  "
    },
    {
      "ID": 232,
      "Name": " Senecio triangularis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Woodlands  Openings  Streamsides",
      "Flowering": " Jun-Sep",
      "Leaf": " Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Senecio-triangularis.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 233,
      "Name": " Senecio wootonii",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane",
      "Habitat": " Woodlands",
      "Flowering": " May-Jul",
      "Leaf": " Basal or  Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Yellow Enlarged Photos/2sewo.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM TX  "
    },
    {
      "ID": 234,
      "Name": " Sibbaldia procumbens",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Openings  Rocky",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1sipr.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 235,
      "Name": " Sisymbrium altissimum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills",
      "Habitat": " Disturbed",
      "Flowering": " May-Sep",
      "Leaf": " Basal or  Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1sial2.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 236,
      "Name": " Sisymbrium linifolium",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills",
      "Habitat": " Woodlands",
      "Flowering": " Apr-Jul",
      "Leaf": " Alternate  Simple or  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1scli.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 237,
      "Name": " Solidago glutinosa",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Alternate  Simple  Uneven or  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1sosi3.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 238,
      "Name": " Solidago missouriensis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings  Woodlands ",
      "Flowering": " Jul-Sep",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1somi2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 239,
      "Name": " Solidago multiradiatascopulorum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine  Alpine",
      "Habitat": " Openings  Woodlands",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Solidago-multiradiata.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 240,
      "Name": " Solidago nana",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills",
      "Habitat": " Openings",
      "Flowering": " Jul-Sep",
      "Leaf": " Alternate  Simple  Uneven or  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1sona.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO ID MT NM NV UT WY  "
    },
    {
      "ID": 241,
      "Name": " Solidago velutina",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings  Woodlands",
      "Flowering": " Jun-Oct",
      "Leaf": " Alternate  Simple  Uneven or  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1sove6.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CA CO ID NM NV OK OR SD TX UT WY  "
    },
    {
      "ID": 242,
      "Name": " Sonchus arvensisuliginosus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Disturbed  Openings  Wetlands",
      "Flowering": " Jul-Oct",
      "Leaf": " Alternate or  Basal  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1soaru.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CA CO ID NM NV OK OR SD TX UT WY  "
    },
    {
      "ID": 243,
      "Name": " Sonchus asper",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Disturbed  Openings  Wetlands",
      "Flowering": " Apr-Oct",
      "Leaf": " Alternate or  Basal  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1soas.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 244,
      "Name": " Stanleya pinnata",
      "Type": " Shrub  Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Apr-Sep",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1stpi.jpg",
      "Family": "Mustard Family",
      "state": "AZ CA CO ID KS MT ND NE NM NV OR SD TX UT WY  "
    },
    {
      "ID": 245,
      "Name": " Stenogonum flexum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Openings",
      "Flowering": " Apr-Jun",
      "Leaf": " Basal  Simple  Entire  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1stfl2.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CO NM UT  "
    },
    {
      "ID": 246,
      "Name": " Stenogonum salsuginosum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Openings",
      "Flowering": " Apr-Jun",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long or  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1stsa3.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CO MT NM NV UT WY  "
    },
    {
      "ID": 247,
      "Name": " Stenotus armerioidesarmerioides",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Apr-Jun",
      "Leaf": " Basal  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1star10.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO MT NM NV UT WY  "
    },
    {
      "ID": 248,
      "Name": " Streptanthus cordatuscordatus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Openings",
      "Flowering": " Apr-May",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1stco.jpg",
      "Family": "Mustard Family",
      "state": "AZ CA CO KS NM NV OK TX UT WY  "
    },
    {
      "ID": 249,
      "Name": " Streptanthus longirostris",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Shrublands  Openings",
      "Flowering": " Mar-May",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1stlo4.jpg",
      "Family": "Mustard Family",
      "state": "AZ CA CO KS NM NV OK TX UT WY  "
    },
    {
      "ID": 250,
      "Name": " Taraxacum ceratophorum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Basal  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1tace.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 251,
      "Name": " Taraxacum officinale",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine  Alpine",
      "Habitat": " Openings  Woodlands  Rocky  Disturbed  Shrublands",
      "Flowering": " Mar-Nov",
      "Leaf": " Basal  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1taof.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 252,
      "Name": " Taraxacum scopulorum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1tasc3.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 253,
      "Name": " Tetradymia canescens",
      "Type": " Shrub  Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Openings  Shrublands",
      "Flowering": " Jun-Sep",
      "Leaf": " Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1teca2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 254,
      "Name": " Tetradymia spinosa",
      "Type": " Shrub  Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings  Shrublands",
      "Flowering": " Apr-Jun",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1tesp2.jpg",
      "Family": "Sunflower Family",
      "state": "CA CO ID MT NM NV OR UT WY  "
    },
    {
      "ID": 255,
      "Name": " Tetraneuris acaulisarizonica",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings",
      "Flowering": " Apr-Aug",
      "Leaf": " Basal  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1teac.jpg",
      "Family": "Sunflower Family",
      "state": "CA CO ID MT NM NV OR UT WY  "
    },
    {
      "ID": 256,
      "Name": " Tetraneuris ivesiana",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Apr-Jul",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1teiv.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT  "
    },
    {
      "ID": 257,
      "Name": " Thalictrum alpinum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Wetlands  Rocky  Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Basal  Compound  Uneven  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1thal.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 258,
      "Name": " Thalictrum fendlerifendleri",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Woodlands  Openings",
      "Flowering": " Jun-Sep",
      "Leaf": " Basal or  Alternate  Compound  Uneven  Round",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Thalictrum-fendleri.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 259,
      "Name": " Thelypodiopsis aurea",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Openings",
      "Flowering": " Apr-Jun",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1thau3.jpg",
      "Family": "Mustard Family",
      "state": "CO NM UT  "
    },
    {
      "ID": 260,
      "Name": " Thermopsis montanamontana",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane  Subalpine",
      "Habitat": " Woodlands  Openings",
      "Flowering": " May-Aug",
      "Leaf": " Alternate  Compound  Uneven  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1thmo6.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NN NV UT  "
    },
    {
      "ID": 261,
      "Name": " Thermopsis rhombifolia",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings",
      "Flowering": " Apr-Jul",
      "Leaf": " Alternate  Compound  Uneven  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1thrh.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 262,
      "Name": " Tonestus pygmaeus",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Subalpine  Alpine",
      "Habitat": " Rocky  Openings",
      "Flowering": " Jun-Aug",
      "Leaf": " Basal or  Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1topy.jpg",
      "Family": "Sunflower Family",
      "state": "CO MT NM WY  "
    },
    {
      "ID": 263,
      "Name": " Tragopogon dubius",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings  Disturbed",
      "Flowering": " May-Sep",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1trdu.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 264,
      "Name": " Tragopogon pratensis",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings  Disturbed",
      "Flowering": " Jun-Sep",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1trpr.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 265,
      "Name": " Tribulus terrestris",
      "Type": " Herb",
      "Color": " Yellow  Green",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings",
      "Flowering": " Apr-Sep",
      "Leaf": " Opposite  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1trte.jpg",
      "Family": "Caltrop Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 266,
      "Name": " Typha latifolia",
      "Type": " Herb",
      "Color": " Yellow  Green",
      "Zone": " Semi-Desert  Foothills  Montane",
      "Habitat": " Wetlands",
      "Flowering": " Jun-Aug",
      "Leaf": "Basal  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Brown Green Thumbnail Photos/1tyla.jpg",
      "Family": "Cattail Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 267,
      "Name": " Utricularia macrorhiza",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane",
      "Habitat": " Ponds",
      "Flowering": " Jun-Sep",
      "Leaf": " Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1utma.jpg",
      "Family": "Bladderwort Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 268,
      "Name": " Utricularia minor",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane  Subalpine",
      "Habitat": " Ponds",
      "Flowering": " Jun-Sep",
      "Leaf": "Alternate  Compound  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1utmi.jpg",
      "Family": "Bladderwort Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 269,
      "Name": " Verbascum thapsus",
      "Type": " Herb",
      "Color": " Yellow  Orange",
      "Zone": " Foothills  Montane",
      "Habitat": " Disturbed  Openings",
      "Flowering": " Jun-Oct",
      "Leaf": " Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1veth.jpg",
      "Family": "Snapdragon Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 270,
      "Name": " Verbesina encelioidesexauriculata",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Disturbed  Openings",
      "Flowering": " May-Oct",
      "Leaf": " Alternate or  Opposite  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1xien.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 271,
      "Name": " Veronica ritteriana",
      "Type": " Herb",
      "Color": " Yellow  White",
      "Zone": " Montane  Subalpine  Alpine",
      "Habitat": " Openings",
      "Flowering": " May-Aug",
      "Leaf": " Basal or  Alternate  Simple  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow%20Thumbnail%20Photos/1beri.jpg",
      "Family": "Plantain Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 272,
      "Name": " Viola vallicola",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings  Shrublands  Woodlands",
      "Flowering": " Apr-Jun",
      "Leaf": "Basal  Simple  Entire  Round",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1vinu2.jpg",
      "Family": "Violet Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 273,
      "Name": " Wyethia arizonica",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Foothills  Montane",
      "Habitat": " Openings",
      "Flowering": " May-Jul",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1wyar.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT  "
    },
    {
      "ID": 274,
      "Name": " Wyethia ×magna",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Montane",
      "Habitat": " Openings",
      "Flowering": " May-Jul",
      "Leaf": " Basal or  Alternate  Simple  Entire  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1wyma.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 275,
      "Name": " Xanthisma grindelioidesgrindelioides",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert  Foothills",
      "Habitat": " Openings  Rocky",
      "Flowering": " May-Jul",
      "Leaf": " Alternate  Simple  Entire or  Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1magr2.jpg",
      "Family": "Sunflower Family",
      "state": "CO WY  "
    },
    {
      "ID": 276,
      "Name": " Xanthisma spinulosumspinulosum",
      "Type": " Herb",
      "Color": " Yellow",
      "Zone": " Semi-Desert",
      "Habitat": " Openings",
      "Flowering": " Mar-Sep",
      "Leaf": "Alternate  Simple  Entire or Uneven  Long",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1mapi.jpg",
      "Family": "Sunflower Family",
      "state": "CO WY  "
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
      z: unpack(rows, 'Yellow'),
      text: unpack(rows, 'State'),
      zmin: 0,
      zmax: 300,
      colorscale: [
        [0, 'rgb(252, 233, 176)'], [0, 'rgb(252, 233, 176)'],
        [0.4, 'rgb(251, 222, 137)'], [0.6, 'rgb(249, 200, 58)'],
        [0.8, '#f7bd13'], [1, 'rgb(226, 170, 7)']
      ]
    }];
    var layout = {
      title: '<b>Distribution of <i>Yellow</i> flowers</b>',
      color: "red",
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
  displayFlowers.push(yellowdata[0].Image);
  displayName.push(yellowdata[0].Name);
  chosenFamily.push(yellowdata[0].Family);
  displayIdArr.push(yellowdata[0].ID);

  // Push other flower images from different families
  for (var i = 1; i < yellowdata.length; i++) {
    if (!chosenFamily.includes(yellowdata[i].Family)) {
      displayFlowers.push(yellowdata[i].Image);
      displayName.push(yellowdata[i].Name);
      chosenFamily.push(yellowdata[i].Family);
      displayIdArr.push(yellowdata[i].ID);
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
    var familyName = yellowdata[id - 1].Family;
    var zone = yellowdata[id - 1].Zone;
    var image = yellowdata[id - 1].Image.split(" ").join("%20");
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
      $(".map-header").html(`<h4>Distribution of <i>${yellowdata[id - 1].Name}</i></h4>`);
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
    stateArr = yellowdata[id - 1].state.split(" ");
    for (var i = 0; i < stateArr.length; i++) {
      if (stateArr[i].length == 2) {
        console.log(stateArr[i]);
        $("#" + stateArr[i]).css({
          "fill": "#FFD700"
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
        <h6>${yellowdata[id - 1].Name}</h6>
        <div class="fw-bold" id="name"><h4>Zone: </h4></div>
        <h6>${yellowdata[id - 1].Zone}</h6>
        <div class="fw-bold" id="name"><h4>Family: </h4></div>
        <h6>${yellowdata[id - 1].Family}</h6>
        <img src=${image} width ="150px" height "150px"/>
      </div>
    </li>
  </ol>`);

    var rankObj = [];

    for (var i = 0; i < yellowdata.length; i++) {
      // Same zone, leaf type and family
      if ((i !== id - 1 && yellowdata[i].Zone == zone && yellowdata[i].Leaf == yellowdata[id - 1].Leaf && yellowdata[i].Family == familyName) || yellowdata[i].Zone === previousZone) {
        if (!displayFlowers1.includes(yellowdata[i].Image)) {
          rankObj.push({
            "rank": 1,
            "id": yellowdata[i].ID,
            "image": yellowdata[i].Image,
            "name": yellowdata[i].Name
          })
        }
      } else if ((i !== id - 1 && yellowdata[i].Zone == zone && yellowdata[i].Leaf == yellowdata[id - 1].Leaf) || (i !== id - 1 && yellowdata[i].Zone == zone && yellowdata[i].Family == yellowdata[id - 1].Family)) {
        // same zone and leaf or same zone and family
        if (!displayFlowers1.includes(yellowdata[i].Image)) {
          rankObj.push({
            "rank": 2,
            "id": yellowdata[i].ID,
            "image": yellowdata[i].Image,
            "name": yellowdata[i].Name
          })
        }
      } else if ((i !== id - 1 && yellowdata[i].Zone == previousZoneArr[i]) || (i !== id - 1 && yellowdata[i].Zone == previousZoneArr[i])) {
        //  least recommended - same zone alone
        if (!displayFlowers1.includes(yellowdata[i].Image)) {
          rankObj.push({
            "rank": 3,
            "id": yellowdata[i].ID,
            "image": yellowdata[i].Image,
            "name": yellowdata[i].Name
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