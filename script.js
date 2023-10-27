const spreadSheetContainer = document.querySelector("#spreadsheet-container")

const ROWS = 10
const COLS = 10
const spreadsheet = []

class Cell {
    constructor(isHeader, disabled, data, row, column, active=false){
        this.isHeader = isHeader
        this.disabled = disabled
        this.data = data
        this.row = row
        this.column = column
        this.active = active
    }
}

function initSpreadsheet(){
    for(let i=0;i<ROWS; i++){
        let spreadsheetRow = []
        for(let j=0; j<COLS; j++){
            const cellData = i+'-'+j
            const cell = new Cell(false, false, "", i, j, false)
            spreadsheetRow.push(cell)
        }
        spreadsheet.push(spreadsheetRow)
    }
    drawSheet()
    console.log("spreadsheet",spreadsheet)
}

function createCellElement(cell){
    const cellEl = document.createElement("input")
    cellEl.className = "cell"
    cellEl.id = "cell_" + cell.column + cell.row
    cellEl.value = cell.data
    cellEl.disabled = cell.disabled
    return cellEl
}

function drawSheet(){
    for(let i =0; i<spreadsheet.length; i++){
        const rowContainerEL = document.createElement("div")
        rowContainerEL.className = "cell-row"
        for(let j =0; j<spreadsheet[i].length; j++){
            const cell = spreadsheet[i][j]
            rowContainerEL.append(createCellElement(cell))
        }
        spreadSheetContainer.append(rowContainerEL)
    }
}

initSpreadsheet()

