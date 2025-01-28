import { RowID, RowElement } from "./interface";
declare module "./crud" {
    // La fonction 'insertRow' accepte un 'RowElement' et retourne un 'RowID'
    export function insertRow(row: RowElement): RowID;

    // La fonction 'deleteRow' accepte un 'RowID' et ne retourne rien (void)
    export function deleteRow(rowId: RowID): void;

    // La fonction 'updateRow' accepte un 'RowID' et un 'RowElement' et retourne un 'RowID'
    export function updateRow(rowId: RowID, row: RowElement): RowID;
