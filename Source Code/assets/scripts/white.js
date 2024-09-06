$(document).ready(function () {
  $("#plantDetails").hide();
  $("#us-map1").hide();
  $(".mapspace").hide();

  var zoneArr = [];
  zoneArr.push("Foothills");
  localStorage.setItem("zone", JSON.stringify(zoneArr));
  // Tableau
  var divElement = document.getElementById('viz1686081549663');
  var vizElement = divElement.getElementsByTagName('object')[0];
  vizElement.style.height = '850px';

  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);

  const whitedata = [
    {
      "ID": 1,
      "Name": " Achillea millefolium",
      "Color": " White  Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1acla5.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT MN   MT  "
    },
    {
      "ID": 2,
      "Name": " Actaea rubraarguta",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1acru2.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 3,
      "Name": " Agastache pallidifloragreenei",
      "Color": " White  Red  Blue",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1agpa.jpg",
      "Family": "Mint Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 4,
      "Name": " Agastache urticifolia",
      "Color": " White  Red  Blue",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1agur.jpg",
      "Family": "Mint Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 5,
      "Name": " Ageratina herbacea",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1aghe5.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CA   CO   NM   NV   TX   UT  "
    },
    {
      "ID": 6,
      "Name": " Allium geyeritenerum",
      "Color": " White  Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1alget.jpg",
      "Family": "Amaryllis Family",
      "state": "AZ   CA   CO   NM   NN   NV   OK   TX   UT  "
    },
    {
      "ID": 7,
      "Name": " Allium macropetalum",
      "Color": " White  Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1alma4.jpg",
      "Family": "Amaryllis Family",
      "state": "AZ   CA   CO   NM   NN   NV   OK   TX   UT  "
    },
    {
      "ID": 8,
      "Name": " Allium nevadense",
      "Color": " White  Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1alne.jpg",
      "Family": "Amaryllis Family",
      "state": "AZ   CA   CO   NM   NN   NV   OK   TX   UT  "
    },
    {
      "ID": 9,
      "Name": " Allium textile",
      "Color": " White  Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1alte.jpg",
      "Family": "Amaryllis Family",
      "state": "AZ   CA   CO   NM   NN   NV   OK   TX   UT  "
    },
    {
      "ID": 10,
      "Name": " Anaphalis margaritacea",
      "Color": " White  Yellow",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1anma4.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 11,
      "Name": " Androsace septentrionalis",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1anse4.jpg",
      "Family": "Primrose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 12,
      "Name": " Androstephium breviflorum",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1anbr4.jpg",
      "Family": "Asparagus Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 13,
      "Name": " Angelica pinnata",
      "Color": " White  Yellow",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Yellow Thumbnail Photos/1anpi.jpg",
      "Family": "Parsley Family",
      "state": "AZ   CO   ID   MT   NM   NN   NV   UT   WY  "
    },
    {
      "ID": 14,
      "Name": " Antennaria anaphaloides",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1anan2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 15,
      "Name": " Antennaria corymbosa",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1anco.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 16,
      "Name": " Antennaria dimorpha",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1andi.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 17,
      "Name": " Antennaria marginata",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1anma5.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CA   CO   NM   TX  "
    },
    {
      "ID": 18,
      "Name": " Antennaria media",
      "Color": " White",
      "Zone": "Alpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1anme.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 19,
      "Name": " Antennaria parvifolia",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1anpa4.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 20,
      "Name": " Anticlea elegans",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1anel5.jpg",
      "Family": "False Hellebore Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 21,
      "Name": " Apocynum androsaemifolium",
      "Color": " White  Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1apan2.jpg",
      "Family": "Dogbane Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 22,
      "Name": " Apocynum cannabinum",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1apca.jpg",
      "Family": "Dogbane Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 23,
      "Name": " Aquilegia micrantha micrantha",
      "Color": " White  Yellow  Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1aqmi.jpg",
      "Family": "Buttercup Family",
      "state": "AZ   CO   NM   UT  "
    },
    {
      "ID": 24,
      "Name": " Arenaria lanuginosasaxosa",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1splas2.jpg",
      "Family": "Pink Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 25,
      "Name": " Argemone corymbosaarenicola",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1arcoa.jpg",
      "Family": "Poppy Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 26,
      "Name": " Argemone polyanthemos",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1arpo2.jpg",
      "Family": "Poppy Family",
      "state": "AZ   CA   CO   IA   ID   IL   IN   KS   MO   MT   ND   NE   NM   OK   SD   TX   UT   WA   WY  "
    },
    {
      "ID": 27,
      "Name": " Asclepias cutleri",
      "Color": " White  Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1ascu9.jpg",
      "Family": "Dogbane Family",
      "state": "AZ   NN   UT  "
    },
    {
      "ID": 28,
      "Name": " Asclepias involucrata",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1asin14.jpg",
      "Family": "Dogbane Family",
      "state": "AZ   CO   KS   NM   OK   TX   UT  "
    },
    {
      "ID": 29,
      "Name": " Asclepias subverticillata",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1assu2.jpg",
      "Family": "Dogbane Family",
      "state": "AZ   CO   ID   KS   MO   NM   NV   OK   TX   UT   WY  "
    },
    {
      "ID": 30,
      "Name": " Astragalus bisulcatushaydenianus",
      "Color": " White  Yellow",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1asbih.jpg",
      "Family": "Pea Family",
      "state": "AZ   CO   NM   NV   TX   UT  "
    },
    {
      "ID": 31,
      "Name": " Astragalus cicer",
      "Color": " White  Yellow",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1asbi2.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 32,
      "Name": " Astragalus flavus",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1asfl.jpg",
      "Family": "Pea Family",
      "state": "AZ   CO   NM   NV   UT   WY  "
    },
    {
      "ID": 33,
      "Name": " Astragalus pattersonii",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1aspa14.jpg",
      "Family": "Pea Family",
      "state": "AZ   CO   NM   UT  "
    },
    {
      "ID": 34,
      "Name": " Astragalus schmolliae",
      "Color": " White  Yellow",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1assc5.jpg",
      "Family": "Pea Family",
      "state": "CO  "
    },
    {
      "ID": 35,
      "Name": " Astragalus scopulorum",
      "Color": " White  Yellow",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1assc7.jpg",
      "Family": "Pea Family",
      "state": "AZ   CO   NM   UT  "
    },
    {
      "ID": 36,
      "Name": " Bistorta bistortoides",
      "Color": " White",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1bibi5.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 37,
      "Name": " Bistorta vivipara",
      "Color": " White",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1bivi2.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 38,
      "Name": " Boechera fendleri",
      "Color": " White  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1bofe.jpg",
      "Family": "Mustard Family",
      "state": "CO   NM  "
    },
    {
      "ID": 39,
      "Name": " Boechera formosa",
      "Color": " White  Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Boechera-formosa.jpg",
      "Family": "Mustard Family",
      "state": "AZ   CO   NM   UT   WY  "
    },
    {
      "ID": 40,
      "Name": " Boechera quadrangulensis",
      "Color": " White  Red  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1boqu.jpg",
      "Family": "Mustard Family",
      "state": "AZ   CO   NM   UT  "
    },
    {
      "ID": 41,
      "Name": " Boechera stricta",
      "Color": " White  Red  Blue",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Boechera-stricta.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 42,
      "Name": " Brickellia microphyllascabra",
      "Color": " White  Yellow",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1brmi.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 43,
      "Name": " Calochortus flexuosus",
      "Color": " White  Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1cafl.jpg",
      "Family": "Lily Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 44,
      "Name": " Calochortus gunnisoniigunnisonii",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1cagu.jpg",
      "Family": "Lily Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 45,
      "Name": " Calochortus nuttallii",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1canu3.jpg",
      "Family": "Lily Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 46,
      "Name": " Caltha chionophila",
      "Color": " White",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1psle.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 47,
      "Name": " Capsella bursa-pastoris",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1cabu2.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 48,
      "Name": " Cardamine cordifolia",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Cardamine-cordifolia.jpg",
      "Family": "Mustard Family",
      "state": "AZ   CO   ID   NM   NV   UT   WY  "
    },
    {
      "ID": 49,
      "Name": " Cerastium arvensestrictum",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1cest3.jpg",
      "Family": "Pink Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 50,
      "Name": " Cerastium beeringianum",
      "Color": " White",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1cebe2.jpg",
      "Family": "Pink Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 51,
      "Name": " Chaenactis douglasiialpina",
      "Color": " White  Red",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1chal2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 52,
      "Name": " Chaenactis stevioides",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1chst.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CA   CO   ID   NM   NV   NY   OR   UT   WY  "
    },
    {
      "ID": 53,
      "Name": " Chaetopappa ericoides",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1cher2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CA   CO   KS   NE   NM   NV   OK   TX   UT   WY  "
    },
    {
      "ID": 54,
      "Name": " Chamaechaenactis scaposa",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1chsc.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CO   ID   NM   UT   WY  "
    },
    {
      "ID": 55,
      "Name": " Chenopodium atrovirens",
      "Color": " White  Green",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Brown%20Green%20Thumbnail%20Photos/1chat.jpg",
      "Family": "Amaranth Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 56,
      "Name": " Cherleria obtusiloba",
      "Color": " White",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1liob4.jpg",
      "Family": "Pink Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 57,
      "Name": " Chionophila jamesii",
      "Color": " White",
      "Zone": "Alpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1chja.jpg",
      "Family": "Plantain Family",
      "state": "CO   NM   WY  "
    },
    {
      "ID": 58,
      "Name": " Cicuta maculata",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Cicuta-maculata.jpg",
      "Family": "Parsley Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 59,
      "Name": " Cirsium",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1ci.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 60,
      "Name": " Cirsium clavatum var. americanum",
      "Color": " White  Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1cicl.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 61,
      "Name": " Cirsium eatonii",
      "Color": " White  Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1ciea.jpg",
      "Family": "Sunflower Family",
      "state": "CO   ID   MT   NM   NV   OR   UT   WY  "
    },
    {
      "ID": 62,
      "Name": " Cirsium neomexicanum",
      "Color": " White  Yellow",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1cine.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CA   CO   ID   NM   NV   UT   WA  "
    },
    {
      "ID": 63,
      "Name": " Cirsium scariosumcoloradense",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1cisc2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CO   NM  "
    },
    {
      "ID": 64,
      "Name": " Cirsium tracyi",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1citr4.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CO   NM  "
    },
    {
      "ID": 65,
      "Name": " Claytonia lanceolata",
      "Color": " White  Red  Blue",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1clla2.jpg",
      "Family": "Miner's Lettuce Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 66,
      "Name": " Claytonia megarhiza",
      "Color": " White  Red",
      "Zone": "Alpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1clme.jpg",
      "Family": "Miner's Lettuce Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 67,
      "Name": " Clematis ligusticifolia",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1clli2.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 68,
      "Name": " Collomia grandiflora",
      "Color": " White  Yellow",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1cogr4.jpg",
      "Family": "Phlox Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 69,
      "Name": " Comandra umbellatapallida",
      "Color": " White  Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1coum.jpg",
      "Family": "Sandalwood Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 70,
      "Name": " Conioselinum scopulorum",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://pnwwildflowers2.appspot.com.storage.googleapis.com/img/Conioselinum_scopulorum.jpg",
      "Family": "Parsley Family",
      "state": "AZ   CO   NM   OR   UT   WY  "
    },
    {
      "ID": 71,
      "Name": " Convolvulus arvensis",
      "Color": " White  Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1coar.jpg",
      "Family": "Morning Glory Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 72,
      "Name": " Corallorhiza maculatamaculata",
      "Color": " White  Yellow  Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1coma.jpg",
      "Family": "Orchid Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 73,
      "Name": " Corallorhiza striata",
      "Color": " White  Yellow  Blue",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1cost19.jpg",
      "Family": "Orchid Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 74,
      "Name": " Corallorhiza wisteriana",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1cowi5.jpg",
      "Family": "Orchid Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 75,
      "Name": " Corydalis caseanabrandegeei",
      "Color": " White  Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Corydalis-caseana.jpg",
      "Family": "Poppy Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 76,
      "Name": " Cryptantha crassisepalaelachantha",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1crcr3.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 77,
      "Name": " Cryptantha minima",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1crmi5.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 78,
      "Name": " Cryptantha pterocarya",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1crpt.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ   CA   CO   ID   NM   NV   OR   TX   UT   WA  "
    },
    {
      "ID": 79,
      "Name": " Dalea candidaoligophylla",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Dalea-candida.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 80,
      "Name": " Datura wrightii",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1dawr.jpg",
      "Family": "Nightshade Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 81,
      "Name": " Dimorphocarpa wislizeni",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1diwi.jpg",
      "Family": "Mustard Family",
      "state": "AZ   CO   NM   NV   TX   UT  "
    },
    {
      "ID": 82,
      "Name": " Draba cana",
      "Color": " White  Yellow",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1drbrc.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 83,
      "Name": " Draba fladnizensispattersonii",
      "Color": " White  Yellow",
      "Zone": "Alpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1drfl.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 84,
      "Name": " Drymocallis arguta",
      "Color": " White  Yellow",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1drar8.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 85,
      "Name": " Eremocrinum albomarginatum",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1eral.jpg",
      "Family": "Asparagus Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 86,
      "Name": " Eremogone congestacongesta",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1erco24.jpg",
      "Family": "Pink Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 87,
      "Name": " Eremogone eastwoodiaeadenophora",
      "Color": " White  Yellow",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1erki.jpg",
      "Family": "Pink Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 88,
      "Name": " Eremogone fendleri",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1erfe3.jpg",
      "Family": "Pink Family",
      "state": "AZ   CO   NM   TX   UT   WY  "
    },
    {
      "ID": 89,
      "Name": " Erigeron bellidiastrum",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1erbe2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CO   KS   NE   NM   OK   SD   TX   UT   WY  "
    },
    {
      "ID": 90,
      "Name": " Erigeron canus",
      "Color": " White  Yellow",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1erca4.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CO   KS   NE   NM   OK   SD   UT   WY  "
    },
    {
      "ID": 91,
      "Name": " Erigeron concinnus",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1erco.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CA   CO   ID   NM   NV   UT   WY  "
    },
    {
      "ID": 92,
      "Name": " Erigeron coulteri",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1erco6.jpg",
      "Family": "Sunflower Family",
      "state": "CA   CO   ID   MT   NM   NV   OR   UT   WY  "
    },
    {
      "ID": 93,
      "Name": " Erigeron eatonii",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1erea.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CA   CO   ID   MT   NV   OR   UT   WA   WY  "
    },
    {
      "ID": 94,
      "Name": " Erigeron lonchophyllus",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1trlo3.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 95,
      "Name": " Erigeron melanocephalus",
      "Color": " White",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1erme.jpg",
      "Family": "Sunflower Family",
      "state": "CO   NM   UT   WY  "
    },
    {
      "ID": 96,
      "Name": " Erigeron pulcherrimus",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1erpu9.jpg",
      "Family": "Sunflower Family",
      "state": "CO   NM   UT   WY  "
    },
    {
      "ID": 97,
      "Name": " Erigeron sivinskii",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1ersi9.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   NM   NN  "
    },
    {
      "ID": 98,
      "Name": " Erigeron tracyi",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1erco28.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 99,
      "Name": " Eriogonum cernuum",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1erce2.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 100,
      "Name": " Eriogonum corymbosumorbiculatum",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1erco14.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 101,
      "Name": " Eriogonum corymbosumvelutinum",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1ercov.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 102,
      "Name": " Eriogonum leptophyllum",
      "Color": " White  Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1erle10.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ   CO   NM   UT  "
    },
    {
      "ID": 103,
      "Name": " Eriogonum lonchophyllum",
      "Color": " White  Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1erlo4.jpg",
      "Family": "Buckwheat Family",
      "state": "CO   NM   TX   UT  "
    },
    {
      "ID": 104,
      "Name": " Eriogonum microthecum",
      "Color": " White  Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1ermi4.jpg",
      "Family": "Buckwheat Family",
      "state": "CO   NM   TX   UT  "
    },
    {
      "ID": 105,
      "Name": " Eriogonum ovalifolium",
      "Color": " White  Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1erov.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 106,
      "Name": " Eriogonum palmerianum",
      "Color": " White  Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Pink%20Thumbnail%20Photos/1erpa11.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ   CA   CO   ID   NM   NV   UT  "
    },
    {
      "ID": 107,
      "Name": " Eriogonum racemosum",
      "Color": " White  Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../White Enlarged Photos/5erra3.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ   CA   CO   NM   NV   UT  "
    },
    {
      "ID": 108,
      "Name": " Eriogonum subalpinum",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1ersu11.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ   CA   CO   NM   NV   UT  "
    },
    {
      "ID": 109,
      "Name": " Euphorbia fendleri",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1chfe.jpg",
      "Family": "Spurge Family",
      "state": "AZ   CA   CO   KS   NE   NM   NV   OK   SD   TX   UT   WY  "
    },
    {
      "ID": 110,
      "Name": " Euphorbia glyptosperma",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1chgl13.jpg",
      "Family": "Spurge Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 111,
      "Name": " Euphorbia serpillifoliaserpillifolia",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1euse5.jpg",
      "Family": "Spurge Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 112,
      "Name": " Fragaria vescabracteata",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1frve.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 113,
      "Name": " Fragaria virginianaglauca",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1frvi.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 114,
      "Name": " Frankenia jamesii",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1frja.jpg",
      "Family": "Frankenia Family",
      "state": "CO   NM   TX  "
    },
    {
      "ID": 115,
      "Name": " Galium boreale",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1gase6.jpg",
      "Family": "Madder Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 116,
      "Name": " Galium triflorum",
      "Color": " White  Green",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1gatr3.jpg",
      "Family": "Madder Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 117,
      "Name": " Gayophytum diffusumparviflorum",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1gadip.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 118,
      "Name": " Gentiana algida",
      "Color": " White",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1geal6.jpg",
      "Family": "Gentian Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 119,
      "Name": " Geranium richardsonii",
      "Color": " White  Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../White Enlarged Photos/10geri.jpg",
      "Family": "Geranium Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 120,
      "Name": " Gilia ophthalmoides",
      "Color": " White  Blue  Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1giop.jpg",
      "Family": "Phlox Family",
      "state": "AZ   CA   CO   NV   WY  "
    },
    {
      "ID": 121,
      "Name": " Glycyrrhiza lepidota",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Brown Green Thumbnail Photos/1glle3.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 122,
      "Name": " Goodyera oblongifolia",
      "Color": " White  Yellow",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1goob2.jpg",
      "Family": "Orchid Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 123,
      "Name": " Goodyera repens",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1gore2.jpg",
      "Family": "Orchid Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 124,
      "Name": " Heracleum maximum",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1hesp5.jpg",
      "Family": "Parsley Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 125,
      "Name": " Hydrophyllum fendlerifendleri",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Hydrophyllum-fendleri.jpg",
      "Family": "Waterleaf Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 126,
      "Name": " Hymenopappus newberryi",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1hyne.jpg",
      "Family": "Sunflower Family",
      "state": "CO   NM  "
    },
    {
      "ID": 127,
      "Name": " Iliamna grandiflora",
      "Color": " White  Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1ilgr.jpg",
      "Family": "Mallow Family",
      "state": "AZ   CO   NM   UT  "
    },
    {
      "ID": 128,
      "Name": " Ipomopsis congestamatthewii",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1ipco5.jpg",
      "Family": "Phlox Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 129,
      "Name": " Ipomopsis gunnisonii",
      "Color": " White  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1ipgu.jpg",
      "Family": "Phlox Family",
      "state": "AZ   CO   NM   UT  "
    },
    {
      "ID": 130,
      "Name": " Ipomopsis longiflora",
      "Color": " White  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1iplo2.jpg",
      "Family": "Phlox Family",
      "state": "AZ   CO   KS   NE   NM   OK   SD   TX   UT   WY  "
    },
    {
      "ID": 131,
      "Name": " Ipomopsis polycladon",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1ippo2.jpg",
      "Family": "Phlox Family",
      "state": "AZ   CA   CO   ID   NM   NV   OR   TX   UT   WY  "
    },
    {
      "ID": 132,
      "Name": " Ipomopsis roseata",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1ipro.jpg",
      "Family": "Phlox Family",
      "state": "CO   UT  "
    },
    {
      "ID": 133,
      "Name": " Lathyrus lanszwertiileucanthus",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1lale2.jpg",
      "Family": "Pea Family",
      "state": "AZ   CO   NM  "
    },
    {
      "ID": 134,
      "Name": " Lepidium chalepense",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1cach42.jpg",
      "Family": "Mustard Family",
      "state": "AZ   CO   ID   OR   UT   WA  "
    },
    {
      "ID": 135,
      "Name": " Lepidium draba",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Lepidium-draba.jpg",
      "Family": "Mustard Family",
      "state": "AZ   CO   ID   OR   UT   WA  "
    },
    {
      "ID": 136,
      "Name": " Lepidium lasiocarpumlasiocarpum",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1lela.jpg",
      "Family": "Mustard Family",
      "state": "AZ   CO   ID   OR   UT   WA  "
    },
    {
      "ID": 137,
      "Name": " Lepidium latifolium",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1lela2.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 138,
      "Name": " Lepidium montanum",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1lemo2.jpg",
      "Family": "Mustard Family",
      "state": "AZ   CA   CO   ID   MI   MT   NM   NV   OR   TX   UT   WY  "
    },
    {
      "ID": 139,
      "Name": " Leptosiphon nuttalliinuttallii",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1linu4.jpg",
      "Family": "Phlox Family",
      "state": "AZ   CA   CO   ID   MI   MT   NM   NV   OR   TX   UT   WY  "
    },
    {
      "ID": 140,
      "Name": " Leucanthemum vulgare",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1levu.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 141,
      "Name": " Lewisia nevadensis",
      "Color": " White  Red",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1orne.jpg",
      "Family": "Miner's Lettuce Family",
      "state": "CA   CO   ID   NM   NV   OR   WA  "
    },
    {
      "ID": 142,
      "Name": " Ligusticum porteri",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1lipo.jpg",
      "Family": "Parsley Family",
      "state": "AZ   CO   NM   NV   UT   WY  "
    },
    {
      "ID": 143,
      "Name": " Linanthus pungenspungens",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1lepu.jpg",
      "Family": "Phlox Family",
      "state": "AZ   CO   NM   NV   UT   WY  "
    },
    {
      "ID": 144,
      "Name": " Lithophragma glabrum",
      "Color": " White  Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1ligl2.jpg",
      "Family": "Saxifrage Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 145,
      "Name": " Lithophragma parviflorumparviflorum",
      "Color": " White  Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../White Enlarged Photos/4lipa5.jpg",
      "Family": "Saxifrage Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 146,
      "Name": " Lithophragma tenellum",
      "Color": " White  Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../White Enlarged Photos/3lite4.jpg",
      "Family": "Saxifrage Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 147,
      "Name": " Lloydia serotina",
      "Color": " White",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1llse.jpg",
      "Family": "Lily Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 148,
      "Name": " Maianthemum amplexicaule",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Maianthemum-racemosum.jpg",
      "Family": "Asparagus Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 149,
      "Name": " Maianthemum stellatum",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1mast4.jpg",
      "Family": "Asparagus Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 150,
      "Name": " Marrubium vulgare",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1marru.jpg",
      "Family": "Mint Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 151,
      "Name": " Menyanthes trifoliata",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1metr3.jpg",
      "Family": "Buckbean Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 152,
      "Name": " Micranthes odontoloma",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Micranthes-odontoloma.jpg",
      "Family": "Saxifrage Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 153,
      "Name": " Micranthes oregana",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Micranthes-oregana.jpg",
      "Family": "Saxifrage Family",
      "state": "CA   CO   ID   MT   NV   OR   WA  "
    },
    {
      "ID": 154,
      "Name": " Micranthes rhomboidea",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Micranthes-rhomboidea.jpg",
      "Family": "Saxifrage Family",
      "state": "AZ   CO   ID   MT   NM   NV   UT   WY  "
    },
    {
      "ID": 155,
      "Name": " Microsteris gracilis",
      "Color": " White  Blue",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1migr.jpg",
      "Family": "Phlox Family",
      "state": "AZ   CO   ID   MT   NM   NV   UT   WY  "
    },
    {
      "ID": 156,
      "Name": " Mitella stauropetala",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1mist3.jpg",
      "Family": "Saxifrage Family",
      "state": "CO   ID   MT   OR   UT   WA   WY  "
    },
    {
      "ID": 157,
      "Name": " Moehringia macrophylla",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1moma3.jpg",
      "Family": "Pink Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 158,
      "Name": " Moneses uniflora",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1moun2.jpg",
      "Family": "Heath Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 159,
      "Name": " Nasturtium officinale",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1naof.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 160,
      "Name": " Navarretia sinistra",
      "Color": " White  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../White Enlarged Photos/6gisi2.jpg",
      "Family": "Phlox Family",
      "state": "AZ   CA   CO   ID   NV   OR   UT   WA   WY  "
    },
    {
      "ID": 161,
      "Name": " Nicotiana attenuata",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1niat.jpg",
      "Family": "Nightshade Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 162,
      "Name": " Noccaea fendleriglauca",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Noccaea-fendleri.jpg",
      "Family": "Mustard Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 163,
      "Name": " Oenothera albicaulis",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1oeal.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ   CO   IL   KS   MT   ND   NE   NM   NV   NY   OK   SD   TX   UT   WY  "
    },
    {
      "ID": 164,
      "Name": " Oenothera caespitosamarginata",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1oeca10.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ   CO   IL   KS   MT   ND   NE   NM   NV   NY   OK   SD   TX   UT   WY  "
    },
    {
      "ID": 165,
      "Name": " Oenothera caespitosanavajoensis",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1oecan.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ   CO   IL   KS   MT   ND   NE   NM   NV   NY   OK   SD   TX   UT   WY  "
    },
    {
      "ID": 166,
      "Name": " Oenothera coronopifolia",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1oeco2.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ   CO   KS   NE   NM   SD   UT   WY  "
    },
    {
      "ID": 167,
      "Name": " Oenothera pallida",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1oepa.jpg",
      "Family": "Evening Primrose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 168,
      "Name": " Oreocarya flavoculata",
      "Color": " White  Yellow",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1orfl3.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 169,
      "Name": " Oreocarya humilis",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1orhu2.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 170,
      "Name": " Oreocarya paradoxa",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1orpa4.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "CO   NM   NN   UT  "
    },
    {
      "ID": 171,
      "Name": " Oreocarya revealii",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1crgy.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "CO  "
    },
    {
      "ID": 172,
      "Name": " Oreocarya suffruticosa",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1orsup.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "CO  "
    },
    {
      "ID": 173,
      "Name": " Oreocarya tenuis",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1orte.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "CO  "
    },
    {
      "ID": 174,
      "Name": " Orogenia linearifolia",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1orli.jpg",
      "Family": "Parsley Family",
      "state": "CO   ID   MT   NV   OR   UT   WA   WY  "
    },
    {
      "ID": 175,
      "Name": " Orthilia secunda",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1orse.jpg",
      "Family": "Heath Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 176,
      "Name": " Orthocarpus purpureoalbus",
      "Color": " White  Blue  Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1orpu2.jpg",
      "Family": "Broomrape Family",
      "state": "AZ   CO   NM   NV   UT  "
    },
    {
      "ID": 177,
      "Name": " Osmorhiza berteroi",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Osmorhiza-berteroi.jpg",
      "Family": "Parsley Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 178,
      "Name": " Osmorhiza depauperata",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1osde.jpg",
      "Family": "Parsley Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 179,
      "Name": " Oxypolis fendleri",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1oxfe.jpg",
      "Family": "Parsley Family",
      "state": "AZ   CO   NM   UT   WY  "
    },
    {
      "ID": 180,
      "Name": " Parnassia fimbriata",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1pafi3.jpg",
      "Family": "Staff-tree Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 181,
      "Name": " Parnassia parviflora",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1papa9.jpg",
      "Family": "Staff-tree Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 182,
      "Name": " Pedicularis racemosa",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1pera.jpg",
      "Family": "Broomrape Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 183,
      "Name": " Pediomelum megalanthummegalanthum",
      "Color": " White  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1peme7.jpg",
      "Family": "Pea Family",
      "state": "AZ   CO   ID   MT   NM   NV   SD   UT   WY  "
    },
    {
      "ID": 184,
      "Name": " Penstemon lentus variety albiflorus",
      "Color": " White  Blue",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Blue Purple Thumbnail Photos/1peleal.jpg",
      "Family": "Plantain Family",
      "state": "CO  "
    },
    {
      "ID": 185,
      "Name": " Penstemon palmeripalmeri",
      "Color": " White  Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1pepap9.jpg",
      "Family": "Plantain Family",
      "state": "AZ   CO   NM   UT  "
    },
    {
      "ID": 186,
      "Name": " Persicaria lapathifolia",
      "Color": " White  Orange  Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1pela22.jpg",
      "Family": "Buckwheat Family",
      "state": "AZ   CO   ID   MT   NM   UT   WY  "
    },
    {
      "ID": 187,
      "Name": " Petrophytum caespitosum",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1peca.jpg",
      "Family": "Rose Family",
      "state": "AZ   CA   CO   ID   MT   NM   NN   NV   SD   TX   UT   WA   WY  "
    },
    {
      "ID": 188,
      "Name": " Phacelia heterophylla",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1phhe2.jpg",
      "Family": "Waterleaf Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 189,
      "Name": " Phacelia integrifolia",
      "Color": " White  Blue",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/Blue%20Purple%20Thumbnail%20Photos/1phin.jpg",
      "Family": "Waterleaf Family",
      "state": "AZ   CO   KS   NM   OK   TX   UT  "
    },
    {
      "ID": 190,
      "Name": " Phacelia ivesianaivesiana",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Phacelia-ivesiana.jpg",
      "Family": "Waterleaf Family",
      "state": "AZ   CO   KS   NM   OK   TX   UT  "
    },
    {
      "ID": 191,
      "Name": " Phemeranthus confertiflorus",
      "Color": " White  Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1phco47.jpg",
      "Family": "Miner's Lettuce Family",
      "state": "AZ   NM   UT  "
    },
    {
      "ID": 192,
      "Name": " Phlox austromontana",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1phau3.jpg",
      "Family": "Phlox Family",
      "state": "AZ   CA   CO   ID   MT   NM   NV   OR   UT  "
    },
    {
      "ID": 193,
      "Name": " Phlox canescens",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1phho.jpg",
      "Family": "Phlox Family",
      "state": "AZ   CA   CO   ID   MT   NM   NV   OR   UT  "
    },
    {
      "ID": 194,
      "Name": " Phlox condensatacondensata",
      "Color": " White",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1phco11.jpg",
      "Family": "Phlox Family",
      "state": "AZ   CA   CO   ID   MT   NM   NV   OR   UT  "
    },
    {
      "ID": 195,
      "Name": " Phlox longifolia",
      "Color": " White  Red",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1phlo.jpg",
      "Family": "Phlox Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 196,
      "Name": " Phlox multiflora",
      "Color": " White  Red",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/Pink Thumbnail Photos/1phmu3.jpg",
      "Family": "Phlox Family",
      "state": "CO   ID   MT   NM   NV   OR   UT   WA   WY  "
    },
    {
      "ID": 197,
      "Name": " Plagiobothrys hispidulus",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1plsc2.jpg",
      "Family": "Forget-Me-Not Family",
      "state": "AZ   CA   CO   ID   MT   NM   NV   OR   UT   WY  "
    },
    {
      "ID": 198,
      "Name": " Plantago eriopoda",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1pler.jpg",
      "Family": "Plantain Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 199,
      "Name": " Plantago patagonica",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1plpa2.jpg",
      "Family": "Plantain Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 200,
      "Name": " Platanthera obtusata",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1lyob2.jpg",
      "Family": "Orchid Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 201,
      "Name": " Prosartes trachycarpa",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1prtr.jpg",
      "Family": "Lily Family",
      "state": "CO   NM   NN   UT  "
    },
    {
      "ID": 202,
      "Name": " Pseudostellaria jamesiana",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1psja2.jpg",
      "Family": "Pink Family",
      "state": "AZ   CA   CO   ID   MT   NM   NV   OR   TX   UT   WA   WY  "
    },
    {
      "ID": 203,
      "Name": " Pyrola minor",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1pymi.jpg",
      "Family": "Heath Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 204,
      "Name": " Ranunculus longirostris",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1baci.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 205,
      "Name": " Rubus idaeusstrigosus",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/../White Enlarged Photos/2ruid.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 206,
      "Name": " Rubus nutkanus",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1rupa.jpg",
      "Family": "Rose Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 207,
      "Name": " Sabulina macrantha",
      "Color": " White",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1alma14.jpg",
      "Family": "Pink Family",
      "state": "AZ   CA   CO   MT   NM   NV   OK   TX   UT   WY  "
    },
    {
      "ID": 208,
      "Name": " Sabulina rubella",
      "Color": " White",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1trru3.jpg",
      "Family": "Pink Family",
      "state": "AZ   CA   CO   MT   NM   NV   OK   TX   UT   WY  "
    },
    {
      "ID": 209,
      "Name": " Salsola collina",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1sapa8.jpg",
      "Family": "Amaranth Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 210,
      "Name": " Salsola tragus",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Salsola-tragus.jpg",
      "Family": "Amaranth Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 211,
      "Name": " Sambucus racemosa",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1sami15.jpg",
      "Family": "Arrow-Wood Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 212,
      "Name": " Saxifraga adscendens",
      "Color": " White",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1saad.jpg",
      "Family": "Saxifrage Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 213,
      "Name": " Saxifraga austromontana",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1ciau3.jpg",
      "Family": "Saxifrage Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 214,
      "Name": " Saxifraga cernua",
      "Color": " White",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/../White Enlarged Photos/2sace2.jpg",
      "Family": "Saxifrage Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 215,
      "Name": " Saxifraga hyperborea",
      "Color": " White",
      "Zone": "Subalpine",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1sari8.jpg",
      "Family": "Saxifrage Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 216,
      "Name": " Sidalcea candida",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1sica3.jpg",
      "Family": "Mallow Family",
      "state": "CO   NM   NN   NV   UT   WY  "
    },
    {
      "ID": 217,
      "Name": " Silene drummondii",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Silene-drummondii.jpg",
      "Family": "Pink Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 218,
      "Name": " Silene menziesii",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../White Enlarged Photos/4anme5.jpg",
      "Family": "Pink Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 219,
      "Name": " Sparganium angustifolium",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1span2.jpg",
      "Family": "Cattail Family",
      "state": "AZ   NM   NN   UT  "
    },
    {
      "ID": 220,
      "Name": " Spiranthes romanzoffiana",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1spro.jpg",
      "Family": "Orchid Family",
      "state": "AZ   CA   CO   NM   NV   UT  "
    },
    {
      "ID": 221,
      "Name": " Stellaria longifolia",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1stlo.jpg",
      "Family": "Pink Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 222,
      "Name": " Stellaria longipeslongipes",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../White Enlarged Photos/3stlo2.jpg",
      "Family": "Pink Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 223,
      "Name": " Stellaria sanjuanensis",
      "Color": " White",
      "Zone": "Alpine",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1stir.jpg",
      "Family": "Pink Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 224,
      "Name": " Streptopus amplexifolius",
      "Color": " White  Yellow",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1stfa3.jpg",
      "Family": "Lily Family",
      "state": "AZ   CA   CO   KS   NM   NV   OK   TX   UT   WY  "
    },
    {
      "ID": 225,
      "Name": " Symphyotrichum ericoidesericoides",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1syer.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 226,
      "Name": " Symphyotrichum falcatumfalcatum",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1vifa2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 227,
      "Name": " Symphyotrichum lanceolatum subspecies hesperium",
      "Color": " White  Blue",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1syla6.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 228,
      "Name": " Tomostima cuneifolia",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1drcu.jpg",
      "Family": "Mustard Family",
      "state": "AZ   NM   NV   UT  "
    },
    {
      "ID": 229,
      "Name": " Tomostima reptans",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1drre.jpg",
      "Family": "Mustard Family",
      "state": "AZ   NM   NV   UT  "
    },
    {
      "ID": 230,
      "Name": " Townsendia annua",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1toan.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CO   NM   TX   UT  "
    },
    {
      "ID": 231,
      "Name": " Townsendia exscapa",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1toex2.jpg",
      "Family": "Sunflower Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 232,
      "Name": " Townsendia glabella",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1togl4.jpg",
      "Family": "Sunflower Family",
      "state": "CO  "
    },
    {
      "ID": 233,
      "Name": " Townsendia incana",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1toin.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CO   MT   NM   NV   UT   WY  "
    },
    {
      "ID": 234,
      "Name": " Townsendia leptotes",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1tole.jpg",
      "Family": "Sunflower Family",
      "state": "AZ   CA   CO   ID   MT   NM   NV   UT   WY  "
    },
    {
      "ID": 235,
      "Name": " Toxicodendron rydbergii",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../White Enlarged Photos/3tory.jpg",
      "Family": "Sumac Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 236,
      "Name": " Toxicoscordion paniculatum",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1topa5.jpg",
      "Family": "False Hellebore Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 237,
      "Name": " Toxicoscordion venenosumgramineum",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1tove.jpg",
      "Family": "False Hellebore Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 238,
      "Name": " Trautvetteria caroliniensisoccidentalis",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Trautvetteria-caroliniensis.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 239,
      "Name": " Trifolium gymnocarpongymnocarpon",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1trgy.jpg",
      "Family": "Pea Family",
      "state": "AZ   CO   MT   NM   UT   WY  "
    },
    {
      "ID": 240,
      "Name": " Trifolium repens",
      "Color": " White  Yellow",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1trre3.jpg",
      "Family": "Pea Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 241,
      "Name": " Trollius albiflorus",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1tral8.jpg",
      "Family": "Buttercup Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 242,
      "Name": " Urtica  dioicagracilis",
      "Color": " White  Green",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Urtica-gracilis.jpg",
      "Family": "Nettle Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 243,
      "Name": " Vaccinium myrtillus",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1vamy2.jpg",
      "Family": "Heath Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 244,
      "Name": " Valeriana acutiloba",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White%20Thumbnail%20Photos/1vaca3.jpg",
      "Family": "Honeysuckle Family",
      "state": "AZ   CA   CO   ID   MT   NM   NV   OR   SD   UT   WA   WY  "
    },
    {
      "ID": 245,
      "Name": " Valeriana edulisedulis",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1vaed.jpg",
      "Family": "Honeysuckle Family",
      "state": "AZ   CA   CO   ID   MT   NM   NV   OR   SD   UT   WA   WY  "
    },
    {
      "ID": 246,
      "Name": " Valeriana occidentalis",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1vaoc2.jpg",
      "Family": "Honeysuckle Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 247,
      "Name": " Veratrum californicumcalifornicum",
      "Color": " White  Green",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1vete4.jpg",
      "Family": "False Hellebore Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 248,
      "Name": " Veronica peregrinaxalapensis",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1vepex2.jpg",
      "Family": "Plantain Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 249,
      "Name": " Veronica plantaginea",
      "Color": " White",
      "Zone": "Montane",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1bepl.jpg",
      "Family": "Plantain Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 250,
      "Name": " Viola macloskeyi",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/White Thumbnail Photos/1vimap3.jpg",
      "Family": "Violet Family",
      "state": "AZ CO NM UT"
    },
    {
      "ID": 251,
      "Name": " Yucca angustissimaangustissima",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Yucca-angustissima.jpg",
      "Family": "Asparagus Family",
      "state": "CO   WY  "
    },
    {
      "ID": 252,
      "Name": " Yucca baccatabaccata",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Yucca-baccata.jpg",
      "Family": "Asparagus Family",
      "state": "CO   WY  "
    },
    {
      "ID": 253,
      "Name": " Yucca baileyibaileyi",
      "Color": " White",
      "Zone": "Foothills",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Yucca-baileyi.jpg",
      "Family": "Asparagus Family",
      "state": "CO   WY  "
    },
    {
      "ID": 254,
      "Name": " Yucca harrimaniaeharrimaniae",
      "Color": " White",
      "Zone": "Semi-Desert",
      "Image": "https://www.swcoloradowildflowers.com/../Database thumbnails/Yucca-harrimaniae.jpg",
      "Family": "Asparagus Family",
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
      console.log(rows);
      return rows.map(function (row) { return row[key]; });
    }

    var data = [{
      type: 'choropleth',
      locationmode: 'USA-states',
      locations: unpack(rows, 'State'),
      z: unpack(rows, 'White'),
      text: unpack(rows, 'State'),
      zmin: 0,
      zmax: 300,
      colorscale: [
        [0, 'rgb(255, 255, 255)'], [0, 'rgb(247, 247, 247)'],
        [0.4, 'rgb(240, 240, 240)'], [0.6, 'rgb(232, 232, 232)'],
        [0.8, 'grey'], [1, 'grey']
      ]
    }];
    var layout = {
      title: '<b>Distribution of <i>White</i> flowers</b>',
      color: "red",
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
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
  displayFlowers.push(whitedata[0].Image);
  displayName.push(whitedata[0].Name);
  chosenFamily.push(whitedata[0].Family);
  displayIdArr.push(whitedata[0].ID);

  // Push other flower images from different families
  for (var i = 1; i < whitedata.length; i++) {
    if (!chosenFamily.includes(whitedata[i].Family)) {
      displayFlowers.push(whitedata[i].Image);
      displayName.push(whitedata[i].Name);
      chosenFamily.push(whitedata[i].Family);
      displayIdArr.push(whitedata[i].ID);
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
    var familyName = whitedata[id - 1].Family;
    var zone = whitedata[id - 1].Zone;
    var image = whitedata[id - 1].Image.split(" ").join("%20");
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
      $(".map-header").html(`<h4>Distribution of <i>${whitedata[id - 1].Name}</i></h4>`);
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
    stateArr = whitedata[id - 1].state.split(" ");
    for (var i = 0; i < stateArr.length; i++) {
      if (stateArr[i].length == 2) {
        console.log(stateArr[i]);
        $("#" + stateArr[i]).css({
          "fill": "grey"
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
        <h6>${whitedata[id - 1].Name}</h6>
        <div class="fw-bold" id="name"><h4>Zone: </h4></div>
        <h6>${whitedata[id - 1].Zone}</h6>
        <div class="fw-bold" id="name"><h4>Family: </h4></div>
        <h6>${whitedata[id - 1].Family}</h6>
        <img src=${image} width ="150px" height "150px"/>
      </div>
    </li>
  </ol>`);

    var rankObj = [];

    for (var i = 0; i < whitedata.length; i++) {
      // Same zone, leaf type and family
      if ((i !== id - 1 && whitedata[i].Zone == zone && whitedata[i].Leaf == whitedata[id - 1].Leaf && whitedata[i].Family == familyName) || whitedata[i].Zone === previousZone) {
        if (!displayFlowers1.includes(whitedata[i].Image)) {
          rankObj.push({
            "rank": 1,
            "id": whitedata[i].ID,
            "image": whitedata[i].Image,
            "name": whitedata[i].Name
          })
        }
      } else if ((i !== id - 1 && whitedata[i].Zone == zone && whitedata[i].Leaf == whitedata[id - 1].Leaf) || (i !== id - 1 && whitedata[i].Zone == zone && whitedata[i].Family == whitedata[id - 1].Family)) {
        // same zone and leaf or same zone and family
        if (!displayFlowers1.includes(whitedata[i].Image)) {
          rankObj.push({
            "rank": 2,
            "id": whitedata[i].ID,
            "image": whitedata[i].Image,
            "name": whitedata[i].Name
          })
        }
      } else if ((i !== id - 1 && whitedata[i].Zone == previousZoneArr[i]) || (i !== id - 1 && whitedata[i].Zone == previousZoneArr[i])) {
        //  least recommended - same zone alone
        if (!displayFlowers1.includes(whitedata[i].Image)) {
          rankObj.push({
            "rank": 3,
            "id": whitedata[i].ID,
            "image": whitedata[i].Image,
            "name": whitedata[i].Name
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