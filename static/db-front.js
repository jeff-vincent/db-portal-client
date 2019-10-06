window.onload = function(){this.getData()}

columnDefs = [
  {headerName: "X", field: "x", sortable: true, filter: "agTextColumnFilter"},
  {headerName: "Y", field: "y", sortable: true, filter: true},
  {headerName: "Pams Pin", field: "pams_pin", sortable: true, filter: "agTextColumnFilter", rowSelection: 'multiple', autoSize:true},
  {headerName: "Municipal Code", field: "municipal_code", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Block", field: "block", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Lot", field: "lot", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Qualifier", field: "qualifier", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Prop Class", field: "prop_class", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "County", field: "county", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Municipal Name", field: "municipal_name", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Property Location", field: "property_location", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Owner Name", field: "owner_name", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Owner St. Address", field: "owner_st_address", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Owner City State", field: "owner_city_state", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Owner Zip Code", field: "owner_zip_code", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Land Value", field: "land_val", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Improvement Value", field: "imprvt_val", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Net Value", field: "net_value", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Last Year Tax", field: "last_yr_tx", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Bldg Description", field: "bldg_desc", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Land Description", field: "land_desc", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Calc Acre", field: "calc_acre", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Add Lots1", field: "add_lots1", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Add Lots2", field: "add_lots2", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Fac Name", field: "fac_name", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Prop Use", field: "prop_use", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Bldg Class", field: "bldg_class", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Deed Book", field: "deed_book", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Deed Page", field: "deed_page", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Deed Date", field: "deed_date", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Year Constructed", field: "yr_constr", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Sales Code", field: "sales_code", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Sales Price", field: "sale_price", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Dwell", field: "dwell", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Comm Dwell", field: "comm_dwell", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Latitude", field: "latitude", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Longitude", field: "longitude", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Accuracy Score", field: "accuracy_score", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Accuracy Type", field: "accuracy_type", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Number", field: "number", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Property Street", field: "property_street", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Street", field: "street", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "City", field: "city", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "State", field: "state", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Zipcode", field: "zipcode", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Source", field: "source", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Summary", field: "summary", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Delivery Line1", field: "delivery_line_1", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Delivery Line2", field: "delivery_line_2", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "City Name", field: "city_name", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "RDI", field: "rdi", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Precision", field: "precision", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "DPV Match Code", field: "dpv_match_code", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "DPV Footnotes", field: "dpv_footnotes", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Footnotes", field: "footnotes", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Zip Type", field: "zip_type", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Carrier Route", field: "carrier_route", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "DPV Vacant", field: "dpv_vacant", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Active", field: "active", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true},
  {headerName: "Urbanization", field: "urbanization", sortable: true, filter: "agTextColumnFilter", groupSelectsChildren: true, rowSelection: 'multiple', autoSize:true}
   
]

function getData() {
    const gridDiv = document.getElementById('ag-grid');
    gridDiv.innerHTML = '<h1> Processing... </h1>'
    axios.get('/query')
    .then(function (response) { 
        countDiv = document.getElementById('count')
        countDiv.innerHTML = '<h2>Total Records: '+response.data.count+'</h2>'
        console.log(response)

        gridOptions = {
            columnDefs: columnDefs,
            rowData: response.data.results
        }
        gridDiv.innerHTML = ''
        new agGrid.Grid(gridDiv, gridOptions)
        if (response.data.next) {
          buttonDiv = document.getElementById('buttonDiv');
          buttonDiv.innerHTML = '<button class="btn" onclick="nextQuery()">Next Page</button>'

        }
    })}

function nextQuery() {
  const gridDiv = document.getElementById('ag-grid');
  gridDiv.innerHTML = '';
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    axios.get('/next-query')
    .then(function (response) { 
        countDiv = document.getElementById('count')
        countDiv.innerHTML = 'Count: '+response.data.count
        console.log(response)
        gridOptions = {
            columnDefs: columnDefs,
            rowData: response.data.results
        }
        new agGrid.Grid(gridDiv, gridOptions)

        if (response.data.next) {
          insertNextButton()
        }
        if (response.data.previous) {
          insertPreviousButton()
        }
    }
  )
}

function insertNextButton() {
  buttonDiv = document.getElementById('buttonDiv');
  buttonDiv.innerHTML = '<button class="btn" onclick="nextQuery()">Next Page</button>'
}

function insertPreviousButton() {
  buttonDiv = document.getElementById('buttonDiv');
  buttonDiv.innerHTML = buttonDiv.innerHTML + '<button class="btn" onclick="nextQuery()">Previous Page</button>'
}

