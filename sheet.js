// function myFunction() {
//   var spreadsheetId = '1moHFCyeeZDUIyYYCXfMaLJwnpxYu4eMStottyhrFpV8';
//   var rangeName = 'Sheet1';
//   var majorDimension= 'Columns';
//     //Get data by rows
//   var data = Sheets.Spreadsheets.Values.get(spreadsheetId, rangeName).values;

const { get } = require("http");

//   //Get data by columns
//   // var values = Sheets.Spreadsheets.Values.get(spreadsheetId, rangeName, {majorDimension: majorDimension}).values;

//   // Logger.log(getJsonArrayFromData(data))

//   var str_data = JSON.stringify(data);
//   Logger.log(str_data);

//   // Logger.log(getJsonArrayFromData(str_data));

//   // for (var i in values){
//   //   for (var j in values[i]){
//   //     if(values[i][j]=="GCP"){
//   //       Logger.log(values[i])
//   //     }
//   //   }
//   // }
// }

function test_getJsonArrayFromData() {
  var first_row = [[
    "Document ID",
    "Project ID",
    "Document Name",
    "Document Link",
    "Record type",
    "Region ",
    "Description ",
    "Document copy Link",]
  ]

  var data = [
    [
      "D1",
      "P1",
      "Test Document 1",
      "https://docs.google.com/document/d/10EXi5arVN_ancr4mY91Zw8OS3P8nyY5SWLndrmTYyyg/edit?usp=sharing",
      "GCP",
      "APAC",
      "Sample description 1",
      "https://docs.google.com/presentation/d/1KoUF3qr1KERkMniOv62-RF6ywmi7Y-QMqVK-clBz9Mg/copy",
    ],
    [
      "D2",
      "P1",
      "Test Document 2",
      "https://docs.google.com/document/d/1D6o8tPhreyokbuBD_Dy56F8hFOSF_940UkagWcukVkE/edit?usp=sharing",
      "AWS",
      "INDIA",
      "Sample description 2",
      "https://docs.google.com/spreadsheets/d/1FbhXopxBLLgP1UlcDwRhLuwLHJzeb_DiiyjoM4xSyPk/copy",
    ],
    [
      "D3",
      "P3",
      "Test Document 3",
      "https://docs.google.com/spreadsheets/d/1wUpzKLF8xuc5aGN2SW8QuKE2j3eKQp5XxOnkLipMxLI/edit?usp=sharing",
      "Happier",
      "AMER",
      "Sample description 3",
      "https://docs.google.com/spreadsheets/d/1wUpzKLF8xuc5aGN2SW8QuKE2j3eKQp5XxOnkLipMxLI/copy",
    ],
    [
      "D4",
      "P2",
      "Test Document 4",
      "https://docs.google.com/spreadsheets/d/1FbhXopxBLLgP1UlcDwRhLuwLHJzeb_DiiyjoM4xSyPk/edit?usp=sharing",
      "GCP",
      "EMEA",
      "Sample description 4",
      "https://docs.google.com/document/d/1D6o8tPhreyokbuBD_Dy56F8hFOSF_940UkagWcukVkE/copy",
    ],
    [
      "D5",
      "P2",
      "Test Document 5",
      "https://docs.google.com/document/d/11aXpM4fgnuPiXYU2gy0JLwmD-ZgNFIYduQU1IrGQv0I/edit?usp=sharing",
      "Happier",
      "INDIA",
      "Sample description 5",
      "https://docs.google.com/document/d/11aXpM4fgnuPiXYU2gy0JLwmD-ZgNFIYduQU1IrGQv0I/copy",
    ],
    [
      "D6",
      "P1",
      "Test Document 8",
      "https://docs.google.com/document/d/1EfGZsjhCREiorKRoPsDbpB4pKoB3jsPhYvutQbTxakw/edit?usp=sharing",
      "MS",
      "EMEA",
      "Sample description 6",
      "https://docs.google.com/document/d/11aXpM4fgnuPiXYU2gy0JLwmD-ZgNFIYduQU1IrGQv0I/copy",
    ],
    [
      "D7",
      "P4",
      "Test Document 7",
      "https://docs.google.com/document/d/1TbwoFGduyEYGciI7f9QZ2P2a1Dzo3w0hSADV8wEtXd8/edit?usp=sharing",
      "GCP",
      "APAC",
      "Sample description 7",
      "https://docs.google.com/spreadsheets/d/1FbhXopxBLLgP1UlcDwRhLuwLHJzeb_DiiyjoM4xSyPk/copy",
    ],
    [
      "D8",
      "P4",
      "Test Document 9",
      "https://docs.google.com/document/d/1fi-bL5mSrNk-nCbzT6ObkdLiZ9I2mMklMx77vo8WbtA/edit?usp=sharing",
      "D&A",
      "INDIA",
      "Sample description 8",
      "https://docs.google.com/spreadsheets/d/1wUpzKLF8xuc5aGN2SW8QuKE2j3eKQp5XxOnkLipMxLI/copy",
    ],
    [
      "D9",
      "P4",
      "Test Document 6",
      "https://docs.google.com/document/d/1THb_lmFpam-qHEnaXwy2w-ARO2zp1BKUd1fKOhYAuXU/edit?usp=sharing",
      "AWS",
      "AMER",
      "Sample description 9",
      "https://docs.google.com/document/d/1D6o8tPhreyokbuBD_Dy56F8hFOSF_940UkagWcukVkE/copy",
    ],
    [
      "D10",
      "P5",
      "Test Doc 10",
      "https://docs.google.com/document/d/1ZZJJ7BDFxDP9YiF97_XzywPllCsQnWqP2le_fsWM0s8/edit?usp=sharing",
      "GCP",
      "INDIA",
      "Sample description 10",
      "https://docs.google.com/document/d/11aXpM4fgnuPiXYU2gy0JLwmD-ZgNFIYduQU1IrGQv0I/copy",
    ],
    [
      "D11",
      "P5",
      "Check Document 1",
      "https://docs.google.com/document/d/1-tt_DKRzR4SexweJHzbS2XW6v43lv4WopqTMcONk41s/edit?usp=sharing",
      "MS",
      "AMER",
      "Sample description 11",
      "https://docs.google.com/document/d/11aXpM4fgnuPiXYU2gy0JLwmD-ZgNFIYduQU1IrGQv0I/copy",
    ],
    [
      "D12",
      "P2",
      "Check Document 2",
      "https://docs.google.com/document/d/1hN2lsjA6uhKqkBk7Qt1IkC5pbjUTmGAQnvDiF5Zd6_8/edit?usp=sharing",
      "GWS",
      "APAC",
      "Sample description 12",
      "https://docs.google.com/spreadsheets/d/1FbhXopxBLLgP1UlcDwRhLuwLHJzeb_DiiyjoM4xSyPk/copy",
    ],
    [
      "D13",
      "P3",
      "Check Document 3",
      "https://docs.google.com/document/d/1HZ6JFnUEm1WrtK83dZwEGlb_UUMIVRR1-IMAt6Tz0x4/edit?usp=sharing",
      "GWS",
      "EMEA",
      "Sample description 13",
      "https://docs.google.com/spreadsheets/d/1wUpzKLF8xuc5aGN2SW8QuKE2j3eKQp5XxOnkLipMxLI/copy",
    ],
    [
      "D14",
      "P5",
      "Project 1",
      "https://docs.google.com/document/d/1-SkAa_28CvhuKV2rEQm6Xl218hgkdlWVfjXVErgEyQk/edit?usp=sharing",
      "Recognic",
      "INDIA",
      "Sample description 14",
      "https://docs.google.com/document/d/1D6o8tPhreyokbuBD_Dy56F8hFOSF_940UkagWcukVkE/copy",
    ],
    [
      "D15",
      "P6",
      "Project 2",
      "https://docs.google.com/document/d/1Zb14ZPaFJl_CkVLOqPpgenCYb3x6MF0xUS5NMDzXY_o/edit?usp=sharing",
      "GWS",
      "AMER",
      "Sample description 15",
      "https://docs.google.com/document/d/11aXpM4fgnuPiXYU2gy0JLwmD-ZgNFIYduQU1IrGQv0I/copy",
    ],
    [
      "D16",
      "P4",
      "Project 3",
      "https://docs.google.com/document/d/1MDSCjDJcOFXjV_wEvmBD5--XVWpHOS6xaiV8H3EoH-M/edit?usp=sharing",
      "D&A",
      "APAC",
      "Sample description 16",
      "https://docs.google.com/document/d/11aXpM4fgnuPiXYU2gy0JLwmD-ZgNFIYduQU1IrGQv0I/copy",
    ],
    [
      "D17",
      "P3",
      "Project 4",
      "https://docs.google.com/document/d/17Qy10PX7hyRNClI_dpuloECWBs-lwQfLn5yVyeJTSx8/edit?usp=sharing",
      "Location Intelligence",
      "EMEA",
      "Sample description 17",
      "https://docs.google.com/spreadsheets/d/1FbhXopxBLLgP1UlcDwRhLuwLHJzeb_DiiyjoM4xSyPk/copy",
    ],
    [
      "D18",
      "P4",
      "Project 5",
      "https://docs.google.com/document/d/1rY025FFxMsAdHiLbvqDiSgl6WtmY3sCG_xqIWDTilxo/edit?usp=sharing",
      "D&A",
      "APAC",
      "Sample description 18",
      "https://docs.google.com/spreadsheets/d/1wUpzKLF8xuc5aGN2SW8QuKE2j3eKQp5XxOnkLipMxLI/copy",
    ],
    [
      "D19",
      "P3",
      "Check Doc 4",
      "https://docs.google.com/document/d/137EhYvx7pczwX_OwlDOx4PV2LCnclKK6BTHRKZgw8lw/edit?usp=sharing",
      "Chrome",
      "INDIA",
      "Sample description 19",
      "https://docs.google.com/document/d/1D6o8tPhreyokbuBD_Dy56F8hFOSF_940UkagWcukVkE/copy",
    ],
    [
      "D20",
      "P7",
      "Check Doc 5",
      "https://docs.google.com/document/d/1iiIjeXmMNNKeKBq40qIe8kQHX0-b5jCfBp8UeVNmET0/edit?usp=sharing",
      "AM",
      "INDIA",
      "Sample description 20",
      "https://docs.google.com/spreadsheets/d/1Eo4ft4wSv1Qo_Qty6-HhRiySUDqdq-I4oeelCogNSbY/copy",
    ],
  ];

  // console.log(getJsonArrayFromData(JSON.stringify(data)));
  // console.log(getJsonArrayFromData((data)));
  // console.log(data)

  // =>  [{Mainland=Europe, Country=Britain, Planet=Earth, City=London}, {Mainland=Europe, Country=Britain, Planet=Earth, City=Manchester}, {Mainland=Europe, Country=Britain, Planet=Earth, City=Liverpool}, {Mainland=Europe, Country=France, Planet=Earth, City=Paris}, {Mainland=Europe, Country=France, Planet=Earth, City=Lion}]

  // console.log(first_row)
  // console.log(data)

  // var new_data = Object.assign({}, first_row, data);
  var new_data = first_row.concat(data)
  // first_row.push(data)

  
  // console.log(new_data)
  var fresh_obj = getJsonArrayFromData(new_data)
  // console.log(getJsonArrayFromData(new_data))
  console.log(fresh_obj[0])
}

function getJsonArrayFromData(data) {
  var obj = {};
  var result = [];
  var headers = data[0];
  var cols = headers.length;
  var row = [];

  for (var i = 1, l = data.length; i < l; i++) {
    // get a row to fill the object
    row = data[i];
    // clear object
    obj = {};
    for (var col = 0; col < cols; col++) {
      // fill object with new values
      obj[headers[col]] = row[col];
    }
    // add object in a final result
    result.push(obj);
  }

  return result;
}

test_getJsonArrayFromData();
